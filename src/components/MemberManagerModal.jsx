// src/components/MemberManagerModal.jsx
import React from 'react';
import { Users } from 'lucide-react';

/**
 * Modal for managing board members (Simulated).
 */
export const MemberManagerModal = ({ activeBoard, closeModal, userId }) => {
    const isOwner = activeBoard.ownerId === userId;
    // Fallback for members just in case
    const boardMembers = activeBoard.members || [{ uid: userId, displayName: 'Red Ranger' }]; 

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4" onClick={closeModal}>
            <div className="bg-gray-800 p-6 rounded-xl w-full max-w-xl shadow-[0_0_70px_rgba(255,0,0,0.7)] border-2 border-red-600 transition duration-500 transform hover:scale-[1.01]" onClick={(e) => e.stopPropagation()}>
                <h3 className="text-3xl font-bold mb-6 text-red-500 flex items-center"><Users className="mr-2" /> Manage Mission Rangers (FRONTEND SIMULATION)</h3>
                
                <p className="text-yellow-400 mb-4 font-semibold">
                    {isOwner ? 'You are the owner. Adding/removing members is simulated in this frontend-only version.' : 'You are a member. Only the owner can manage members.'}
                </p>

                <h4 className="text-xl font-bold text-gray-100 mb-3">Current Rangers on Grid ({boardMembers.length})</h4>
                <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
                    {boardMembers.map(member => (
                        <div key={member.uid} className="p-3 bg-gray-700 rounded-lg flex justify-between items-center">
                            <span className="font-semibold text-gray-100">{member.displayName}</span>
                            <div className="flex items-center space-x-2">
                                {member.uid === activeBoard.ownerId && <span className="text-xs text-yellow-400 font-bold">OWNER</span>}
                                {member.uid !== activeBoard.ownerId && isOwner && (
                                    <span className="text-gray-500">Remove (Simulated)</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-end mt-6">
                    <button
                        type="button"
                        onClick={closeModal}
                        className="px-6 py-2 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition duration-300"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};
