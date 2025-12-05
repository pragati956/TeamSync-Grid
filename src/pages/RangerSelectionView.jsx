// src/views/RangerSelectionView.jsx
import React, { useState } from 'react';
import { RANGER_OPTIONS } from '../utils/constants.js'; 
import { Zap, Rocket } from 'lucide-react';

/**
 * Full page view for selecting the user's Ranger persona.
 * @param {{ setView: function, selectRanger: function }} props
 */
export const RangerSelectionView = ({ setView, selectRanger }) => {
    const [selectedRanger, setSelectedRanger] = useState(null);

    const handleSelection = (rangerName) => {
        setSelectedRanger(rangerName);
    };

    const handleContinue = () => {
        if (selectedRanger) {
            selectRanger(selectedRanger);
            // After selecting the persona, navigate to the Grid Setup page
            setView('grid_setup'); 
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-gray-900 font-sans">
            <div className="w-full max-w-4xl p-8 space-y-8 bg-gray-800 rounded-2xl shadow-[0_0_50px_rgba(0,255,0,0.5)] border-2 border-green-600 transform transition duration-500 hover:scale-[1.01]">
                <h1 className="text-4xl font-extrabold text-green-500 text-center uppercase tracking-widest flex items-center justify-center">
                    <Zap className="w-8 h-8 mr-2 animate-bounce" /> Choose Your Ranger Persona
                </h1>
                <p className="text-center text-gray-400 text-xl">Select the Ranger identity you will use for task assignments across all mission grids. This identity will be displayed next to your assigned tasks.</p>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
                    {RANGER_OPTIONS.map((ranger) => (
                        <div
                            key={ranger.name}
                            onClick={() => handleSelection(ranger.name)}
                            className={`p-4 rounded-xl shadow-lg cursor-pointer transition duration-300 border-4 ${ranger.color} ${ranger.text} ${selectedRanger === ranger.name ? 'border-yellow-400 ring-4 ring-offset-2 ring-yellow-400 scale-105 shadow-2xl' : 'border-gray-700 hover:scale-[1.03] hover:border-white'}`}
                        >
                            <div className="text-center text-2xl font-bold">{ranger.name}</div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center pt-4">
                    <button
                        onClick={handleContinue}
                        disabled={!selectedRanger}
                        className={`px-10 py-4 font-extrabold text-xl rounded-xl shadow-lg transition duration-300 transform ${selectedRanger ? 'bg-red-500 text-white hover:bg-red-600 hover:scale-[1.05]' : 'bg-gray-500 text-gray-300 cursor-not-allowed'} flex items-center justify-center`}
                    >
                        <Rocket className="w-6 h-6 mr-3" /> Go to Mission Grids
                    </button>
                </div>
            </div>
        </div>
    );
};