# Sprint Risk & Capacity Planning Studio

## Project Overview

Sprint Risk & Capacity Planning Studio is a front-end web application designed to make Agile sprint planning more structured, transparent, and data-driven.

The application allows teams to manage backlog stories through an interactive sprint planning board and evaluate the risk associated with each story.

Risk assessment is performed using a transparent heuristic based on factors such as:

- Story size / estimate points
- Number of dependencies
- Simulated team velocity
- Sprint capacity

The system provides real-time feedback as stories are added, removed, or modified. Risk indicators and capacity information are updated dynamically so that teams can understand whether their planned sprint is reasonably achievable.

## Core Modules

1. Sprint Planning Board
2. Story Management
3. Risk Assessment
4. Velocity Simulation
5. Capacity Analysis
6. Risk Visualization
7. Local Data Persistence

## Technology

- HTML5
- CSS3
- JavaScript
- React.js
- Chart.js
- Browser localStorage / IndexedDB
- Git & GitHub

## Project Approach

The application is designed as a purely front-end system. Backlog and velocity data are maintained on the client side, without requiring a server-side backend.

The main objective is to provide an explainable planning tool where users can understand why a story is considered low, medium, or high risk instead of relying on a black-box prediction.

## Expected Outcome

The final application will provide an interactive sprint planning environment with:

- Drag-and-drop story management
- Real-time risk indicators
- Simulated velocity history
- Sprint capacity analysis
- Visual capacity warnings
- Explainable risk factors
