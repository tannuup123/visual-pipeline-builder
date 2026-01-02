// submit.js

import { useStore } from "./store";

export const SubmitButton = () => {
  const { nodes, edges } = useStore();

  const handleSubmit = async () => {
    const res = await fetch("http://127.0.0.1:8000/pipelines/parse", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nodes, edges }),
    });

    const data = await res.json();

    alert(
      `Pipeline Analysis:\n\n` +
      `Nodes: ${data.num_nodes}\n` +
      `Edges: ${data.num_edges}\n` +
      `Is DAG: ${data.is_dag ? "Yes" : "No"}`
    );
  };

  return <button onClick={handleSubmit}>Submit</button>;
};
