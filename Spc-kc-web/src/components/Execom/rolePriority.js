// Role priority mapping for office bearers
const ROLE_PRIORITY = {
  "Student Representative": 1,
  "Chapter Advisor": 1,
  WIE: 2,
  Chairperson: 2,
  TC: 3,
  "Vice Chairperson": 3,
  "Associate Technical Coordinator": 4,
  ECC: 4,
  Secretary: 4,
  "Professional Activities Chair": 4,
  "Educational Activities Coordinator": 5,
  Webmaster: 5,
  "Associate Webmaster": 6,
  Treasurer: 6,
  "WISP Coordinator": 7,
  "Student Activities Coordinator": 8,
  "Membership Development Coordinator": 8,
  "Joint Secretary": 8,
  "Hub SR": 9,
  "Hub SR/HMDC Kochi": 9,
  "Hub SR/HMDC Malabar": 9,
  "Hub SR/HMDC Travancore": 9,
  "Student Activities Co-Coordinator": 9,
  "Associate student activities coordinator": 9,
  "Outreach Coordinator": 10,
  "Publicity and Outreach Coordinator": 10,
  "Associate Membership Development Coordinator": 10,
  "Content Lead": 11,
  "Associate Outreach Coordinator": 11,
  "Content Team": 12,
  "Design Lead": 13,
  "Humanitarian Activities Chair": 11,
  "Newsletter Editor": 15,
  "Publicity and Outreach Co-Coordinator": 12,
  "Design and Content Team": 14,
  "WISP Co-Coordinator": 13,
  "Associate WISP Coordinator": 13,
  "Design and Video Team": 14,
  "Industrial Relations Coordinator": 14,
  "Project Coordinator": 16,
  "Associate Project Coordinator": 17,
  "Media Coordinator": 18,
  "Associate Media Coordinator": 19,
};
function sortByRolePriority(arr) {
  return arr.slice().sort((a, b) => {
    const aPriority = ROLE_PRIORITY[a.role] ?? 99;
    const bPriority = ROLE_PRIORITY[b.role] ?? 99;
    return aPriority - bPriority;
  });
}

export { sortByRolePriority, ROLE_PRIORITY };
