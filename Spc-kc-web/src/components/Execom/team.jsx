import "./team.css";
import React, { useState, useEffect } from "react";
import { client } from "../../sanity/client"; // Adjust path as needed
import imageUrlBuilder from "@sanity/image-url";
import { sortByRolePriority } from "./rolePriority";

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source).url();
}

export default function Team({ year }) {
  const [items, setItems] = useState(0); // 0: Student Team, 1: Professional Body
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await client.fetch(
          `*[_type == "officeBearer" && year == $year && defined(image.asset) && slug.current match "*-photo"] {
            _id,
            image,
            professional,
            title,
            role
          }`,
          { year }
        );
        setMembers(data);
      } catch (err) {
        setMembers([]);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [year]);

  if (loading) {
    return <div className="text-center p-8">Loading...</div>;
  }

  // Split members into student and professional
  const studentTeam = sortByRolePriority(
    members.filter(
      (m) => m.professional === false || m.professional === "false"
    )
  );
  const professionalBody = sortByRolePriority(
    members.filter(
      (m) => m.professional === true || m.professional === "true"
    )
  );

  let content;
  if (items === 0) {
    content = studentTeam.map((item, index) => (
      <div className="mem" key={item._id || index}>
        <img
          src={
            item.image && item.image.asset
              ? urlFor(item.image)
              : "img/team/image.png"
          }
          alt="team member"
        />
        <h3>{item.title}</h3>
        <p>{item.role}</p>
      </div>
    ));
  } else if (items === 1) {
    content = professionalBody.map((item, index) => (
      <div className="mem" key={item._id || index}>
        <img
          src={
            item.image && item.image.asset
              ? urlFor(item.image)
              : "img/team/random1.png"
          }
          alt="team member"
        />
        <h3>{item.title}</h3>
        <p>{item.role}</p>
      </div>
    ));
  }

  return (
    <div className="team">
      <div className="slt">
        <h1>
          <span>Meet the</span> Team
        </h1>
        <div className="types">
          <button onClick={() => setItems(0)}>
            <h3
              style={{
                backgroundColor: items === 0 ? "#001E40" : "#ffff",
                color: items === 0 ? "#ffff" : "black",
              }}
            >
              Student Team
            </h3>
          </button>
          <button onClick={() => setItems(1)}>
            <h3
              style={{
                backgroundColor: items === 1 ? "#001E40" : "#ffff",
                color: items === 1 ? "#ffff" : "black",
              }}
            >
              Professional Body
            </h3>
          </button>
        </div>
        <div className="members">{content}</div>
      </div>
    </div>
  );
}
