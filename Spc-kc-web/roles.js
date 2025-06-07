const roles = [
  "8-Student Activities Coordinator",
  "5-Educational Activities Coordinator",
  "14-Design and Video Team",
  "13-Design and Content Team",
  "3-TC",
  "2-WIE",
  "3-Vice Chairperson",
  "9-Hub SR",
  "12-Newsletter Editor",
  "12-Publicity and Outreach Co-Coordinator",
  "9-Student Activities Co-Coordinator",
  "11-Content Team",
  "8-Membership Development Coordinator",
  "5-Webmaster",
  "10-Outreach Coordinator",
  "4-ECC",
  "2-Chairperson",
  "10-Publicity and Outreach Coordinator",
  "4-Secretary",
  "14-Industrial Relations Coordinator",
  "13-WISP Co-Coordinator",
  "8-Joint Secretary",
  "7-WISP Coordinator",
  "1-Student Representative",
  "11-Humanitarian Activities Chair",
  "1-Chapter Advisor",
  "6-Treasurer",
  "4-Professional Activities Chair",
];

// Create a dictionary from the roles array, separating the number and the role name
const roleDict = {};
roles.forEach((item) => {
  const match = item.match(/^(\d+)-(.*)$/);
  if (match) {
    const num = parseInt(match[1], 10);
    const role = match[2].trim();
    roleDict[role] = num;
  } else {
    // If no number, assign 0 or handle as needed
    roleDict[item.trim()] = 0;
  }
});

// Sort the dictionary by the number
const sortedEntries = Object.entries(roleDict).sort((a, b) => a[1] - b[1]);
const sortedRoleDict = Object.fromEntries(sortedEntries);

console.log(sortedRoleDict);
