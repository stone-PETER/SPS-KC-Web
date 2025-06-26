import React, { useEffect, useState } from "react";
import { client } from "../../sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { ROLE_PRIORITY, sortByRolePriority } from "./rolePriority";

const { projectId, dataset } = client.config();
const urlFor = (source) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const OFFICE_BEARERS_QUERY = `*[_type == "officeBearer" && year == 2023 && defined(image.asset)]{
  _id,
  image,
  professional,
  role
}`;

export default function Team23() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await client.fetch(OFFICE_BEARERS_QUERY);
        setMembers(data);
      } catch (err) {
        console.error("Sanity fetch error:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <div className="text-center p-8">Loading...</div>;

  // Debug: log the values of professional for all members
  console.log(
    "All members:",
    members.map((m) => ({
      id: m._id,
      professional: m.professional,
      type: typeof m.professional,
    }))
  );

  // Split into professionals and non-professionals (robust for boolean or string values)
  const professionals = sortByRolePriority(
    members.filter((m) => m.professional === true || m.professional === "true")
  );
  const nonProfessionals = sortByRolePriority(
    members.filter(
      (m) => m.professional === false || m.professional === "false"
    )
  );

  return (
    <main className="container mx-auto p-8">
      <h2 className="text-4xl text-center text-black font-bold mb-4">
        Professionals
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "2rem",
        }}
      >
        {professionals.map((member) => {
          const imageUrl =
            member.image && member.image.asset
              ? urlFor(member.image).url()
              : null;
          return (
            <div
              key={member._id}
              style={{
                borderRadius: "12px",
                textAlign: "center",
              }}
            >
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt=""
                  style={{
                    borderRadius: "12px",
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
      <h2 className="text-4xl text-center text-black font-bold mb-4 mt-12">
        Student Team
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "2rem",
        }}
      >
        {nonProfessionals.map((member) => {
          const imageUrl =
            member.image && member.image.asset
              ? urlFor(member.image).url()
              : null;
          return (
            <div
              key={member._id}
              style={{
                borderRadius: "12px",
                textAlign: "center",
              }}
            >
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt=""
                  style={{
                    borderRadius: "12px",
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
}
