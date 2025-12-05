// src/hooks/useUserSimulation.js

import React, { useState } from 'react';
import { INITIAL_USER_ID, INITIAL_DISPLAY_NAME } from '../utils/constants';

/**
* Simulates user authentication and Ranger persona selection state.
*/
export const useUserSimulation = () => {
const [isAuthenticated, setIsAuthenticated] = useState(false);
// rangerPersona is the key state that determines who the user is on the board
const [rangerPersona, setRangerPersona] = useState('');
const userId = INITIAL_USER_ID; // Mock user ID for simulation

// Display name is the selected persona if available, otherwise a placeholder
const userDisplayName = rangerPersona || INITIAL_DISPLAY_NAME;

// Simulation handlers
const login = () => setIsAuthenticated(true);
const logout = () => {
setIsAuthenticated(false);
setRangerPersona(''); // Reset persona on logout
};

// This is the function called from RangerSelectionView
const selectRanger = (personaName) => setRangerPersona(personaName);

return {
userId,
userDisplayName,
isAuthenticated,
login,
logout,
rangerPersona,
selectRanger
};
};