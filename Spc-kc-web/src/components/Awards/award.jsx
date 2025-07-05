import React from 'react';
import { Award, Calendar, UserRound, Sparkles } from 'lucide-react';
// Importing icons from lucide-react for better visuals
function Awards() {
  // Sample data for awards - you can replace this with real data
  const awards = [
    {
      id: 1,
      name: "Outstanding Chapter Advisor",
      recipient: "Mr Basil K Jeemon",
      year: 2024,
      description: "Recognizing exceptional performance in student activities, community engagement, and technical development.",
      icon: <Award className="text-blue-600" size={28} />,
      imageUrl: "/img/awards/chapteradvisor.jpg", // Placeholder image
    },
    {
      id: 2,
      name: "Outstanding Student Volunteer",
      recipient: "Gregory Kurien",
      year: 2024,
      description: "Awarded for the development of an innovative AI-powered smart home system.",
      icon: <Sparkles className="text-yellow-500" size={28} />,
      imageUrl: "/img/awards/studentvolunteer.jpg", // Placeholder image
    },
    {
      id: 3,
      name: "Outstanding Woman in SPS",
      recipient: "Safna PH",
      year: 2024,
      description: "Honoring dedication and significant contributions to organizing workshops and events.",
      icon: <UserRound className="text-green-600" size={28} />,
      imageUrl: "/img/awards/womeninsps.jpg", // Placeholder image
    },
    {
      id: 4,
      name: "Outstanding Young Professional",
      recipient: "Gowind S Warrier",
      year: 2024,
      description: "For groundbreaking research in renewable energy solutions and sustainable technologies.",
      icon: <Award className="text-purple-600" size={28} />,
      imageUrl: "/img/awards/yp.jpg", // Placeholder image
    },
    {
      id: 5,
      name: "Outstanding Student Volunteer",
      recipient: "Anoushka K",
      year: 2024,
      description: "Acknowledging efforts in promoting STEM education in local schools and communities.",
      icon: <Sparkles className="text-red-500" size={28} />,
      imageUrl: "/img/awards/studentvol(sp).jpg", // Placeholder image
    },
    {
      id: 6,
      name: "Best Technical Activity",
      recipient: "Sigma",
      year: 2024,
      description: "Awarded for exemplary leadership in guiding the student branch through various successful initiatives.",
      icon: <UserRound className="text-teal-600" size={28} />,
      imageUrl: "/img/awards/TA.jpg", // Placeholder image
    },
    {
      id: 7,
      name: "Outstanding Student Branch",
      recipient: "IEEE SPS SBC RIT",
      year: 2024,
      description: "Awarded for exemplary leadership in guiding the student branch through various successful initiatives.",
      icon: <UserRound className="text-teal-600" size={28} />,
      imageUrl: "/img/awards/outstandingSB.jpg", // Placeholder image
    },
  ];

 return (
    <section className="container mx-auto px-4 py-8 sm:py-12">
      {/* Section Header */}
      <div className="text-center mb-10" style={{marginTop: "150px"}}>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-800 mb-4 tracking-tight">
          Our Awards
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Highlighting the distinguished accomplishments and contributions of our IEEE student chapter and its members.
        </p>
      </div>

      {/* Awards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {awards.map((award) => (
          <AwardCard key={award.id} award={award} />
        ))}
      </div>
    </section>
  );
}

// AwardCard Component to display individual award details
function AwardCard({ award }) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-start border border-blue-100">
      {award.imageUrl && (
        <img
          src={award.imageUrl}
          alt={award.name}
          className="w-full h-64 object-cover rounded-lg mb-4" // Changed h-40 to h-64
          onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x200/CCCCCC/000000?text=Image+Error"; }}
        />
      )}
      <div className="flex items-center mb-4">
        {award.icon} {/* Dynamic icon based on award data */}
        <h3 className="text-xl font-semibold text-gray-900 ml-3">{award.name}</h3>
      </div>
      <p className="text-gray-700 mb-2 flex items-center">
        <UserRound className="w-4 h-4 mr-2 text-gray-500" />
        <span className="font-medium">{award.recipient}</span>
      </p>
      <p className="text-gray-600 mb-4 flex items-center">
        <Calendar className="w-4 h-4 mr-2 text-gray-500" />
        <span className="text-sm">{award.year}</span>
      </p>
      {/* <p className="text-gray-600 text-sm leading-relaxed flex-grow">{award.description}</p> */}
      {/* Optional: Add a "Learn More" button or link */}
      {/* <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 self-end">
        Details
      </button> */}
    </div>
  );
}
export default Awards;