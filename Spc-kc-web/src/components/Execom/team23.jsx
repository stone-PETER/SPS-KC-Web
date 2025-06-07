import React, { useEffect, useState } from "react";
import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "bvy9q97t", // Replace with your Sanity project ID
  dataset: "production", // Replace with your dataset name
  useCdn: true,
  apiVersion: "2023-01-01",
});

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

const Execom = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "officeBearer" && year == 2023]{
        _id,
        name,
        photo
      }`
      )
      .then((data) => {
        setMembers(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center p-8">Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Office Bearers 2024
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {members.map((member) => (
          <div
            key={member._id}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
          >
            {member.photo ? (
              <img
                src={urlFor(member.photo).width(200).height(200).url()}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-gray-200 mb-4" />
            )}
            <p className="text-lg font-medium text-gray-700">{member.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Execom;
