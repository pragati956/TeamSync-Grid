// App.jsx
import React, { useState } from "react";

// HOOK IMPORTS (correct paths)
import { useUserSimulation } from "./hooks/useUserSimulation.js";
import { useBoardsSimulation } from "./hooks/useBoardsSimulation.js";
import { useTasksSimulation } from "./hooks/useTasksSimulation.js";

// PAGE IMPORTS (correct paths)
import { HomePageContent } from "./pages/HomePage.jsx";
import { AuthPage } from "./pages/AuthPage.jsx";
import { RangerSelectionView } from "./pages/RangerSelectionView.jsx";
import { GridSetupView } from "./pages/GridSetupView.jsx";
import { BoardView } from "./pages/BoardView.jsx";

export default function App() {
    // Initialize primary app state
    const {
        userId,
        userDisplayName,
        isAuthenticated,
        login,
        logout,
        rangerPersona,
        selectRanger,
    } = useUserSimulation();

    const {
        boards,
        activeBoardId,
        activeBoard,
        setActiveBoardId,
        createBoard,
    } = useBoardsSimulation(userId, rangerPersona);

    const {
        tasks,
        saveTask,
        deleteTask,
        updateTaskStage,
        reorderTasks,
    } = useTasksSimulation(activeBoardId);

    // App-level routing state
    const [view, setView] = useState("home");

    // --------------------------
    // ROUTER LOGIC
    // --------------------------

    // 1. Authentication Gate
    if (view !== "home" && view !== "auth" && !isAuthenticated) {
        return <AuthPage setView={setView} login={login} />;
    }

    if (view === "auth") {
        return <AuthPage setView={setView} login={login} />;
    }

    // 2. Ranger Persona Selection Gate
    if (isAuthenticated && !rangerPersona && view !== "ranger_selection") {
        setView("ranger_selection");
        return null;
    }

    if (view === "ranger_selection" && isAuthenticated) {
        return (
            <RangerSelectionView
                setView={setView}
                selectRanger={selectRanger}
            />
        );
    }

    // 3. Grid Setup View (Boards list / create board)
    if (view === "grid_setup" && isAuthenticated && rangerPersona) {
        if (!activeBoardId && boards.length > 0) {
            setActiveBoardId(boards[0].id);
        }

        return (
            <GridSetupView
                boards={boards}
                activeBoardId={activeBoardId}
                setActiveBoardId={setActiveBoardId}
                createBoard={createBoard}
                setView={setView}
                userId={userId}
                userPersona={rangerPersona}
            />
        );
    }

    // 4. Board View (Main Kanban Interface)
    if (view === "board" && isAuthenticated && rangerPersona) {
        if (!activeBoardId) {
            setView("grid_setup");
            return null;
        }

        return (
            <BoardView
                userId={userId}
                userPersona={rangerPersona}
                activeBoardId={activeBoardId}
                activeBoard={activeBoard}
                setView={setView}
                tasks={tasks}
                saveTask={saveTask}
                deleteTask={deleteTask}
                updateTaskStage={updateTaskStage}
                reorderTasks={reorderTasks}
                logout={logout}
            />
        );
    }

    // 5. Default: Home Page
    return (
        <HomePageContent
            setView={setView}
            logout={logout}
            isAuthenticated={isAuthenticated}
        />
    );
}



