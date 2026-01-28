import React from "react";
import config from "../config";

function HealthCheck() {
  const callService = async (service) => {
    const response = await fetch(
      `${config.API_BASE_URL}/${service}/health`
    );
    const data = await response.json();
    alert(JSON.stringify(data));
  };

  return (
    <div>
      <button onClick={() => callService("auth")}>
        Call Auth Service
      </button>
      <button onClick={() => callService("order")}>
        Call Order Service
      </button>
    </div>
  );
}

export default HealthCheck;
