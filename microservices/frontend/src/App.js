import React from "react";
import HealthCheck from "./components/HealthCheck";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>EKS Microservices Frontend</h1>
      <p>React app hosted on S3 and CloudFront</p>
      <HealthCheck />
    </div>
  );
}

export default App;
