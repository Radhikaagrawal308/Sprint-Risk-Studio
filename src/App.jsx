import { useState } from "react";

function App() {
  const [activeView, setActiveView] = useState("board");

  return (
    <div className="app">
      <header className="topbar">
        <div>
          <h1>Sprint Risk & Capacity Planning Studio</h1>
          <p>Agile sprint planning with explainable risk analysis</p>
        </div>

        <div className="sprint-info">
          <span>Sprint 12</span>
          <span>Team: 5 members</span>
        </div>
      </header>

      <nav className="navigation">
        <button
          className={activeView === "board" ? "active" : ""}
          onClick={() => setActiveView("board")}
        >
          Sprint Board
        </button>

        <button
          className={activeView === "capacity" ? "active" : ""}
          onClick={() => setActiveView("capacity")}
        >
          Capacity
        </button>

        <button
          className={activeView === "velocity" ? "active" : ""}
          onClick={() => setActiveView("velocity")}
        >
          Velocity
        </button>

        <button
          className={activeView === "analytics" ? "active" : ""}
          onClick={() => setActiveView("analytics")}
        >
          Analytics
        </button>
      </nav>

      <main className="content">
        <section className="welcome-card">
          <div>
            <span className="eyebrow">SPRINT PLANNING STUDIO</span>

            <h2>
              Plan your sprint with
              <br />
              <span>risk-aware insights.</span>
            </h2>

            <p>
              Organize backlog stories, evaluate risk factors and compare
              committed work against simulated team capacity.
            </p>
          </div>

          <div className="capacity-summary">
            <p>Current Capacity</p>
            <strong>32 / 40 pts</strong>
            <div className="progress">
              <div className="progress-fill"></div>
            </div>
            <span>80% committed</span>
          </div>
        </section>

        {activeView === "board" && (
          <section className="board-section">
            <div className="section-heading">
              <div>
                <h2>Sprint Board</h2>
                <p>Manage and evaluate your sprint stories.</p>
              </div>

              <button className="primary-button">
                + Add Story
              </button>
            </div>

            <div className="board">
              <div className="column">
                <div className="column-header">
                  <h3>Backlog</h3>
                  <span>3</span>
                </div>

                <div className="story-card">
                  <div className="story-top">
                    <span className="story-id">ST-101</span>
                    <span className="risk low">LOW RISK</span>
                  </div>

                  <h4>User authentication</h4>
                  <p>Implement login and registration flow.</p>

                  <div className="story-meta">
                    <span>5 pts</span>
                    <span>1 dependency</span>
                  </div>
                </div>

                <div className="story-card">
                  <div className="story-top">
                    <span className="story-id">ST-104</span>
                    <span className="risk medium">MEDIUM RISK</span>
                  </div>

                  <h4>Notification system</h4>
                  <p>Send notifications for important events.</p>

                  <div className="story-meta">
                    <span>8 pts</span>
                    <span>2 dependencies</span>
                  </div>
                </div>
              </div>

              <div className="column sprint-column">
                <div className="column-header">
                  <h3>Current Sprint</h3>
                  <span>4</span>
                </div>

                <div className="story-card">
                  <div className="story-top">
                    <span className="story-id">ST-102</span>
                    <span className="risk low">LOW RISK</span>
                  </div>

                  <h4>Dashboard UI</h4>
                  <p>Create the main project dashboard.</p>

                  <div className="story-meta">
                    <span>5 pts</span>
                    <span>0 dependencies</span>
                  </div>
                </div>

                <div className="story-card">
                  <div className="story-top">
                    <span className="story-id">ST-103</span>
                    <span className="risk high">HIGH RISK</span>
                  </div>

                  <h4>Payment integration</h4>
                  <p>Integrate the external payment service.</p>

                  <div className="story-meta">
                    <span>13 pts</span>
                    <span>3 dependencies</span>
                  </div>

                  <div className="risk-reason">
                    <strong>Why is this risky?</strong>
                    <span>Large story + multiple dependencies</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeView !== "board" && (
          <section className="placeholder-section">
            <h2>
              {activeView.charAt(0).toUpperCase() + activeView.slice(1)}
            </h2>

            <p>
              This module is being developed and will be integrated into the
              final planning dashboard.
            </p>
          </section>
        )}
      </main>

      <footer>
        <p>Batch 5 • GLA University • Sprint Risk & Capacity Planning Studio</p>
      </footer>
    </div>
  );
}

export default App;
