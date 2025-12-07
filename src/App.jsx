// src/App.jsx
import React, { useMemo } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

// HOOK IMPORTS (keep your existing hooks as-is)
import { useUserSimulation } from "./hooks/useUserSimulation.js";
import { useBoardsSimulation } from "./hooks/useBoardsSimulation.js";
import { useTasksSimulation } from "./hooks/useTasksSimulation.js";

// PAGE IMPORTS (keep your page components as-is)
import { HomePageContent } from "./pages/HomePage.jsx";
import { AuthPage } from "./pages/AuthPage.jsx";
import { RangerSelectionView } from "./pages/RangerSelectionView.jsx";
import { GridSetupView } from "./pages/GridSetupView.jsx";
import { BoardView } from "./pages/BoardView.jsx";

export default function App() {
  // --- your existing app-level hooks/state (unchanged) ---
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

  // --- navigation helper so old setView(...) calls still work ---
  const navigate = useNavigate();

  // map your previous view names to routes
  const viewToPath = useMemo(() => ({
    home: "/",
    auth: "/auth",
    ranger_selection: "/ranger",
    grid_setup: "/grid",
    board: "/board",
  }), []);

  // setView compatible function; pages can keep calling setView("board") etc.
  const setView = (viewName) => {
    const p = viewToPath[viewName] || "/";
    navigate(p);
  };

  // --- ROUTES ---
  // We keep the same auth/ranger/board guards you had, but using router logic.
  return (
    <Routes>
      {/* HOME */}
      <Route
        path="/"
        element={
          <HomePageContent
            setView={setView}
            logout={logout}
            isAuthenticated={isAuthenticated}
          />
        }
      />

      {/* AUTH */}
      <Route
        path="/auth"
        element={<AuthPage setView={setView} login={login} />}
      />

      {/* RANGER SELECTION (protected) */}
      <Route
        path="/ranger"
        element={
          !isAuthenticated ? (
            <Navigate to="/auth" replace />
          ) : (
            <RangerSelectionView setView={setView} selectRanger={selectRanger} />
          )
        }
      />

      {/* GRID SETUP (protected + needs rangerPersona) */}
      <Route
        path="/grid"
        element={
          !isAuthenticated ? (
            <Navigate to="/auth" replace />
          ) : !rangerPersona ? (
            <Navigate to="/ranger" replace />
          ) : (
            <GridSetupView
              boards={boards}
              activeBoardId={activeBoardId}
              setActiveBoardId={setActiveBoardId}
              createBoard={createBoard}
              setView={setView}
              userId={userId}
              userPersona={rangerPersona}
            />
          )
        }
      />

      {/* BOARD VIEW (protected + needs rangerPersona + active board) */}
      <Route
        path="/board"
        element={
          !isAuthenticated ? (
            <Navigate to="/auth" replace />
          ) : !rangerPersona ? (
            <Navigate to="/ranger" replace />
          ) : !activeBoardId ? (
            <Navigate to="/grid" replace />
          ) : (
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
          )
        }
      />

      {/* fallback: redirect unknown routes to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
