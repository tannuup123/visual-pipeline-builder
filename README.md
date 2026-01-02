# Visual Pipeline Builder

A visual, node-based pipeline editor inspired by no-code AI workflow platforms like VectorShift.
This project enables users to visually construct pipelines by connecting nodes, define dynamic
variables inside text nodes, and validate the pipeline structure using a backend DAG analysis.

---

## ✨ Features

- 🧩 **Reusable Node Abstraction**
  - Common layout, styling, and handle logic shared via a BaseNode component
  - Easy to extend with new node types without code duplication

- 🎨 **Clean & Unified UI**
  - Consistent design across all nodes
  - Subtle visual accents to differentiate node types

- ✍️ **Dynamic Text Node Variables**
  - Supports `{{variable}}` syntax inside text nodes
  - Each variable dynamically generates a corresponding input handle

- 📐 **Auto-Resizing Text Nodes**
  - Text areas automatically grow as users type
  - Improves visibility and user experience

- 🔗 **Interactive Graph Editor**
  - Drag-and-drop nodes
  - Visual edge-based connections between nodes

- ⚙️ **Backend Pipeline Analysis**
  - Counts total number of nodes and edges
  - Validates whether the pipeline forms a Directed Acyclic Graph (DAG)

---

## 🛠️ Tech Stack

### Frontend
- React
- React Flow
- Zustand (state management)
- Custom CSS for component styling

### Backend
- Python
- FastAPI
- Pydantic

---

## 📂 Project Structure

visual-pipeline-builder/
├── frontend/
│ ├── src/
│ │ ├── nodes/ # Node implementations
│ │ ├── components/ # BaseNode and shared UI
│ │ ├── utils/ # Helper utilities (variable extraction)
│ │ ├── store.js # Global state management
│ │ └── submit.js # Backend integration
├── backend/
│ └── main.py # FastAPI backend and DAG validation
└── README.md

---

## 🚀 Getting Started

### 1️⃣ Frontend Setup
```
cd frontend
npm install
npm start
The frontend will be available at:  http://localhost:3000

###2️⃣ Backend Setup

cd backend
python -m uvicorn main:app --reload
The backend will be available at: http://localhost:8000

```

🧠 How It Works
Users add nodes (Input, Text, LLM, Output) from the toolbar

Nodes are connected visually to form a pipeline

Text nodes parse {{variables}} from user input

Each variable dynamically creates an input handle

Clicking Submit sends the pipeline data to the backend

The backend:

 *Counts nodes and edges

 *Checks if the pipeline is a valid DAG

Results are displayed in a user-friendly alert

📌 Use Case
This project demonstrates how modern no-code AI workflow builders can be implemented using
scalable frontend architecture and graph-based backend validation.

It showcases:

Component abstraction

Dynamic UI generation

Real-world use of graph algorithms

