import React, { useCallback } from 'react';
import { Power, LayoutGrid, Users, Shield, Link, Rocket } from 'lucide-react';

/**
 * The initial landing page content.
 */
export const HomePageContent = ({ setView, logout, isAuthenticated }) => {

  // Prevent login if already authenticated
  const handleLoginClick = useCallback(() => {
    if (isAuthenticated) {
      alert("You are already logged in!");
      return;
    }
    setView("auth");
  }, [isAuthenticated, setView]);

  const features = [
    {
      icon: LayoutGrid,
      title: "Mission Grids",
      description: "Organize tasks using collaborative, shared KanBan boards for every Zord project."
    },
    {
      icon: Users,
      title: "Team Synchronization",
      description: "See what every Ranger is working on in real-time, across all active missions."
    },
    {
      icon: Shield,
      title: "Secure Deployment",
      description: "Reliable, persistent storage ensuring mission data is safe and ready for review (Simulated)."
    },
    {
      icon: Link,
      title: "Instant Status",
      description: "Drag and drop tasks between Alpha's Plan, In Progress, and Completed stages with ease."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">

      {/* NAVBAR */}
      <nav className="bg-gray-800 shadow-lg p-4 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">

          <div className="text-3xl font-extrabold text-red-500 uppercase tracking-wider flex items-center">
            <Power className="w-6 h-6 inline-block mr-2 text-yellow-400" /> TeamSync Grid
          </div>

          <div className="flex items-center space-x-4">

            {/* Go to Grid Button */}
            {isAuthenticated && (
              <button
                onClick={() => setView('grid_setup')}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300 text-sm"
              >
                Go to My Grid
              </button>
            )}

            {/* Sign In / Logout Button */}
            <button
              onClick={isAuthenticated ? logout : handleLoginClick}
              className={`px-4 py-2 rounded-lg font-semibold text-sm transition duration-300
                ${isAuthenticated
                  ? "bg-red-600 hover:bg-red-700 text-white"
                  : "bg-red-600 hover:bg-red-700 text-white"
                }`}
            >
              {isAuthenticated ? 'Log Out' : 'Ranger Sign In'}
            </button>
          </div>

        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="py-20 md:py-32 bg-gray-900 border-b-4 border-yellow-500 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight text-white drop-shadow-lg">
            <span className="text-red-500">Coordinate</span> the Megazord.
          </h1>

          <p className="text-xl md:text-3xl text-gray-300 font-light mb-10 max-w-4xl mx-auto">
            TeamSync Grid is the ultimate Kanban solution for Power Rangers. Empower your team to track monster threats, Zord repairs, and Command Center logistics.
          </p>

          {/* START MISSION Button */}
          <button
            onClick={handleLoginClick}
            disabled={isAuthenticated}
            className={`px-10 py-4 font-extrabold text-xl rounded-xl
              flex items-center justify-center mx-auto transition duration-300 transform
              ${isAuthenticated
                ? "bg-gray-600 cursor-not-allowed text-gray-300"
                : "bg-yellow-500 text-gray-900 hover:bg-yellow-400 hover:scale-[1.05] shadow-[0_5px_20px_rgba(255,255,0,0.5)]"
              }`}
          >
            <Rocket className="w-6 h-6 mr-3" />
            START YOUR MISSION
          </button>

        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="py-16 md:py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-4xl font-bold text-center text-red-400 mb-12">
            Ranger-Ready Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-700 rounded-xl shadow-xl border-t-4 border-blue-500 hover:shadow-[0_0_30px_rgba(0,191,255,0.3)] transition duration-300"
              >
                <feature.icon className="w-10 h-10 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <footer className="p-8 bg-gray-900 text-center text-gray-500 border-t border-gray-700">
        <p>&copy; {new Date().getFullYear()} TeamSync Grid. Frontend Simulation Only.</p>
      </footer>

    </div>
  );
};
