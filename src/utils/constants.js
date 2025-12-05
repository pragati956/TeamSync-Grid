// Define the Kanban Board Stage Definitions
export const STAGE_MAP = {
  'todo': {
    name: "To-Do (Alpha's Plan)",
    color: 'bg-yellow-500',
    hover: 'hover:bg-yellow-600',
    text: 'text-yellow-900',
    secondary: 'bg-yellow-100'
  },

  'development': {
    name: 'In Development (Blue Ranger)',
    color: 'bg-blue-600',
    hover: 'hover:bg-blue-700',
    text: 'text-blue-100',
    secondary: 'bg-blue-800'
  },

  'progress': {
    name: 'In Progress (Red Ranger)',
    color: 'bg-red-600',
    hover: 'hover:bg-red-700',   // FIXED (removed duplicate hover:)
    text: 'text-red-100',
    secondary: 'bg-red-800'
  },

  'completed': {
    name: 'Completed (Green Ranger)',
    color: 'bg-green-600',
    hover: 'hover:bg-green-700',
    text: 'text-green-100',
    secondary: 'bg-green-800'
  },
};

// Define Ranger Persona Options
export const RANGER_OPTIONS = [
  { name: 'Red Ranger', color: 'bg-red-600', text: 'text-white' },
  { name: 'Blue Ranger', color: 'bg-blue-600', text: 'text-white' },
  { name: 'Yellow Ranger', color: 'bg-yellow-400', text: 'text-gray-900' },
  { name: 'Black Ranger', color: 'bg-gray-700', text: 'text-white' },
  { name: 'Pink Ranger', color: 'bg-pink-500', text: 'text-white' },
  { name: 'Green Ranger', color: 'bg-green-600', text: 'text-white' },
  { name: 'White Ranger', color: 'bg-gray-100', text: 'text-gray-900' },
];

// Simulation Data and IDs
export const INITIAL_USER_ID = 'mock-ranger-12345';
export const INITIAL_DISPLAY_NAME = 'Ranger Candidate';

export const FIRST_BOARD_ID = 'grid-zord-repair';

export const INITIAL_BOARDS = [
  {
    id: FIRST_BOARD_ID,
    name: 'Megazord Repair Mission',
    ownerId: INITIAL_USER_ID,
    members: [
      { uid: INITIAL_USER_ID, displayName: 'Red Ranger' }
    ]
  },
  {
    id: 'grid-monster-threat',
    name: 'Monster Threat Assessment',
    ownerId: 'mock-ranger-67890',
    members: [
      { uid: INITIAL_USER_ID, displayName: 'Red Ranger' }
    ]
  },
];

export const INITIAL_TASKS = [
  {
    id: 't1',
    boardId: FIRST_BOARD_ID,
    title: 'Recalibrate Power Swords',
    description: 'Power Swords are draining energy too fast. Check crystal matrix alignment.',
    stage: 'todo',
    assignedTo: 'Zordon',
    order: 1
  },
  {
    id: 't2',
    boardId: FIRST_BOARD_ID,
    title: 'Prepare new communicators',
    description: 'Design and prototype a new, stealthier wrist communicator.',
    stage: 'development',
    assignedTo: 'Alpha 5',
    order: 2
  },
  {
    id: 't3',
    boardId: FIRST_BOARD_ID,
    title: 'Patrol Sector Gamma 5',
    description: 'Investigate the last reported Putty sighting in the abandoned warehouse.',
    stage: 'progress',
    assignedTo: 'Red Ranger',
    order: 3
  },
  {
    id: 't4',
    boardId: FIRST_BOARD_ID,
    title: 'Clean Command Center',
    description: 'Alpha 5 insists the floor needs polishing after the last explosion.',
    stage: 'completed',
    assignedTo: 'Zordon',
    order: 4
  },
];