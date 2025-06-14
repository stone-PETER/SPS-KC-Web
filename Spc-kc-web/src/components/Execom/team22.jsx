import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/navbar";
import { client } from "../../sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { ROLE_PRIORITY, sortByRolePriority } from "./rolePriority";
import "./team.css";

const { projectId, dataset } = client.config();
const urlFor = (source) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const OFFICE_BEARERS_QUERY = `*[_type == 'officeBearer' && year == 2022]{
  _id,
  title,
  image,
  professional,
  role
}`;

export default function Team22() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState(0);

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

  if (loading) {
    return <div className="team"><div className="slt"><h1>Loading...</h1></div></div>;
  }

  // Split and sort
  const professionals = sortByRolePriority(
    members.filter((m) => m.professional === true || m.professional === "true")
  );
  const students = sortByRolePriority(
    members.filter((m) => m.professional === false || m.professional === "false")
  );

  let content;
  if (items === 0) {
    content = students.map((item, index) => (
      <div className="mem" key={item._id || index}>
        <img
          src={item.image && item.image.asset ? urlFor(item.image).url() : "/img/team/image.png"}
          alt="team member"
        />
        <h3>{item.title}</h3>
        <p>{item.role}</p>
      </div>
    ));
  } else if (items === 1) {
    content = professionals.map((item, index) => (
      <div className="mem" key={item._id || index}>
        <img
          src={item.image && item.image.asset ? urlFor(item.image).url() : "/img/team/random1.png"}
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
        <h1><span>Meet the</span> Team</h1>
        <div className="types">
          <button onClick={() => setItems(0)}>
            <h3 style={{ backgroundColor: items === 0 ? "#001E40" : "#ffff", color: items === 0 ? "#ffff" : "black" }}>
              Student Team
            </h3>
          </button>
          <button onClick={() => setItems(1)}>
            <h3 style={{ backgroundColor: items === 1 ? "#001E40" : "#ffff", color: items === 1 ? "#ffff" : "black" }}>
              Profesional body
            </h3>
          </button>
        </div>
        <div className="members">
          {content}
        </div>
      </div>
    </div>
  );
}