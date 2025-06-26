import React, { useEffect, useState } from "react";
import "./sbc.css";
const TableRow = ({ name, region, grade, memberCount, formedDate, sectionName, p_chap, p_geo_chap }) => (
      <tr className="border-b">
        <td className="p-2">{name}</td>
        <td className="p-2">{region}</td>
        <td className="p-2">{sectionName}</td>
        <td className="p-2">{memberCount}</td>
        <td className="p-2">{formedDate}</td>
      </tr>
    );

    const sbclist = () => {
     const data = [
  { name: "Chenganur College of Engineering,SP01", region: "Asia & Pacific - Region 10", sectionName: "Student Member", formedDate: "4/21/2024", memberCount: "80.00" },
  { name: "College of Engg - Karunagappally,PHO/MIT/SSC/SP", region: "Asia & Pacific - Region 10", sectionName: "Graduate Student Member", formedDate: "6/22/2020", memberCount: "65.00" },
  { name: "College of Engineering-Attingal,SP01", region: "Asia & Pacific - Region 10", sectionName: "Student Member", formedDate: "2/24/2023", memberCount: "65.00" },
  { name: "Jyothi Engineering College - Thrissur,SP01", region: "Asia & Pacific - Region 10", sectionName: "Student Member", formedDate: "8/9/2024", memberCount: "60.00" },
  { name: "Mar Baselios Inst of Tech & Sci,SP01", region: "Asia & Pacific - Region 10", sectionName: "Student Member", formedDate: "3/21/2023", memberCount: "56.00" },
  { name: "Mar Athanasius College of Eng,SP01", region: "Asia & Pacific - Region 10", sectionName: "Graduate Student Member", formedDate: "1/27/2023", memberCount: "1.00" },
  { name: "Sree Buddha College of Engineering,SP01", region: "Asia & Pacific - Region 10", sectionName: "Student Member", formedDate: "12/30/2024", memberCount: "42.00" },
  { name: "Muslim Assoc Coll of Eng Venjaramood,SP01", region: "Asia & Pacific - Region 10", sectionName: "Student Member", formedDate: "3/8/2023", memberCount: "42.00" },
  { name: "Federal Inst of Science & Tech,SP01", region: "Asia & Pacific - Region 10", sectionName: "Graduate Student Member", formedDate: "6/21/2022", memberCount: "1.00" },
  { name: "Sahyadri College of Engg & Tech - Thrissur,SP01", region: "Asia & Pacific - Region 10", sectionName: "Student Member", formedDate: "6/3/2022", memberCount: "27.00" },
  { name: "M Dasan Institute of Technology,SP01", region: "Asia & Pacific - Region 10", sectionName: "Student Member", formedDate: "10/26/2022", memberCount: "25.00" },
  { name: "College of Eng-Thalassery,SP01", region: "Asia & Pacific - Region 10", sectionName: "Student Member", formedDate: "5/17/2023", memberCount: "21.00" },
  { name: "TKM College of Engineering,SP01", region: "Asia & Pacific - Region 10", sectionName: "Student Member", formedDate: "10/21/2019", memberCount: "21.00" },
  { name: "Trivandrum College of Engineering,SP01", region: "Asia & Pacific - Region 10", sectionName: "Graduate Student Member", formedDate: "1/12/2018", memberCount: "12.00" },
  { name: "National Institute of Technology Calicut,SP01", region: "Asia & Pacific - Region 10", sectionName: "Student Member", formedDate: "6/3/2023", memberCount: "6.00" },
  { name: "Toc H Institute of Science and Technology,SP01", region: "Asia & Pacific - Region 10", sectionName: "Student Member", formedDate: "6/3/2023", memberCount: "18.00" },
  { name: "KMEA Engineering College-Aluva,SP01", region: "Asia & Pacific - Region 10", sectionName: "Student Member", formedDate: "7/28/2022", memberCount: "16.00" },
  { name: "Vimal Jyothi Engineering College-Kannur,SP01", region: "Asia & Pacific - Region 10", sectionName: "Student Member", formedDate: "4/14/2024", memberCount: "15.00" },
  { name: "Rajagiri School of Engineering & Tech,SP01", region: "Asia & Pacific - Region 10", sectionName: "Graduate Student Member", formedDate: "3/13/2023", memberCount: "1.00" },
  { name: "Rajiv Gandhi Institute of Technology Kottayam,SP01", region: "Asia & Pacific - Region 10", sectionName: "Student Member", formedDate: "2/2/2022", memberCount: "13.00" },
  { name: "Model Engineering College,SP01", region: "Asia & Pacific - Region 10", sectionName: "Student Member", formedDate: "12/30/2019", memberCount: "13.00" },
  { name: "Government Engineering College-Thrissur,SP01", region: "Asia & Pacific - Region 10", sectionName: "Graduate Student Member", formedDate: "7/4/2021", memberCount: "1.00" },
  { name: "Viswajyothi College Of Eng & Tech,SP01", region: "Asia & Pacific - Region 10", sectionName: "Graduate Student Member", formedDate: "7/2/2023", memberCount: "1.00" },
  { name: "MEA Engineering College - Perinthalmanna,SP01", region: "Asia & Pacific - Region 10", sectionName: "Student Member", formedDate: "7/6/2023", memberCount: "9.00" },
  { name: "College Of Engineering-Poonjar,SP01", region: "Asia & Pacific - Region 10", sectionName: "Student Member", formedDate: "9/29/2024", memberCount: "6.00" },
  { name: "Adi Shankara Inst of Engineering & Tech,SP01", region: "Asia & Pacific - Region 10", sectionName: "Graduate Student Member", formedDate: "4/30/2015", memberCount: "1.00" },
  { name: "Adi Shankara Inst of Engineering & Tech,SP01", region: "Asia & Pacific - Region 10", sectionName: "Student Member", formedDate: "4/30/2015", memberCount: "4.00" },
  { name: "Mar Baselios College of Eng & Tech,SP01", region: "Asia & Pacific - Region 10", sectionName: "Student Member", formedDate: "7/31/2020", memberCount: "4.00" },
  { name: "Sree Narayana Gurukulam College of Eng,SP01", region: "Asia & Pacific - Region 10", sectionName: "Student Member", formedDate: "3/21/2023", memberCount: "3.00" },
  { name: "Amrita Vishwa Vidyapeetham,SP01", region: "Asia & Pacific - Region 10", sectionName: "Student Member", formedDate: "4/17/2013", memberCount: "2.00" },
  { name: "Lourdes Matha Coll of Science & Tech,SP01", region: "Asia & Pacific - Region 10", sectionName: "Student Member", formedDate: "7/2/2023", memberCount: "1.00" },
  { name: "Mangalam College of Engineering,SP01", region: "Asia & Pacific - Region 10", sectionName: "Student Member", formedDate: "3/18/2022", memberCount: "1.00" },
  { name: "College of Engineering Muttathara,SP01", region: "Asia & Pacific - Region 10", sectionName: "Unknown", formedDate: "10/30/2023", memberCount: "0.00" },
  { name: "MES College of Engineering - Kuttippuram,SP01", region: "Asia & Pacific - Region 10", sectionName: "Unknown", formedDate: "5/13/2016", memberCount: "0.00" },
  { name: "MES College of Engineering and Technology,SP01", region: "Asia & Pacific - Region 10", sectionName: "Unknown", formedDate: "4/7/2024", memberCount: "0.00" }
];



      return (
        <div className="container mx-auto p-4 sbc-list">
          <h1 className="text-2xl font-bold mb-4">Region Grade Member Count</h1>
          <table className="min-w-full bg-white border">
            <thead>
              <tr className="column">
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Region</th>
                <th className="p-2 border">Grade</th>
                <th className="p-2 border">Member Count</th>
                <th className="p-2 border">Formed Date</th>
              </tr>
            </thead>
            <tbody className="rows">
              {data.map((row, index) => (
                <TableRow key={index} {...row} />
              ))}
            </tbody>
          </table>
        </div>
      );
    };
    export default sbclist;
