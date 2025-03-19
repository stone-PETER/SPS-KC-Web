import React from 'react';
//import './execom.css'; // Ensure Tailwind is properly configured in your project

const teams = [
    {
        teamName: 'Executive Team',
        members: [
            { name: 'John Doe', photo: '/images/john.jpg' },
            { name: 'Jane Smith', photo: '/images/jane.jpg' },
        ],
    },
    {
        teamName: 'Development Team',
        members: [
            { name: 'Alice Johnson', photo: '/images/alice.jpg' },
            { name: 'Bob Brown', photo: '/images/bob.jpg' },
        ],
    },
];

const Execom = () => {
    return (
        <div className="container mx-auto p-4">
            {teams.map((team, index) => (
                <div key={index} className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">{team.teamName}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {team.members.map((member, idx) => (
                            <div
                                key={idx}
                                className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
                            >
                                <img
                                    src={member.photo}
                                    alt={member.name}
                                    className="w-24 h-24 rounded-full object-cover mb-4"
                                />
                                <p className="text-lg font-medium text-gray-700">{member.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Execom;