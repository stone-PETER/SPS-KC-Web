import React, { useEffect, useRef, useState } from "react";
import "./announcements.css";

import { client } from "../../sanity/client";

const ANNOUNCEMENTS_QUERY = `*[_type == "announcement" && active == true && start <= now() && end >= now()]|order(start desc){
  _id,
  title,
  message
}`;

export default function Announcements() {
  const [announcements, setAnnouncements] = useState([]);
  const [index, setIndex] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    async function fetchAnnouncements() {
      try {
        const data = await client.fetch(ANNOUNCEMENTS_QUERY);
        setAnnouncements(data);
      } catch (err) {
        setAnnouncements([]);
      }
    }
    fetchAnnouncements();
  }, []);

  useEffect(() => {
    if (announcements.length > 1) {
      intervalRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % announcements.length);
      }, 2500); // Change every 2.5s
      return () => clearInterval(intervalRef.current);
    }
  }, [announcements]);

  return (
    <section className="announcements-section">
      <h2 className="section-title">Announcements</h2>
      <div className="announcements-vertical">
        {announcements.length === 0 ? (
          <div className="no-announcements">No new announcements.</div>
        ) : (
          <div
            className="vertical-list"
            style={{
              transform: `translateY(-${index * 2.5}rem)`,
              transition: "transform 0.5s",
            }}
          >
            {announcements.map((a, i) => (
              <div key={a._id} className="announcement-item">
                <strong>{a.title}</strong>: {a.message}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
