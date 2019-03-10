import React from "react";

const Loading = () => {
  return (
    <div
      class="d-flex align-items-center justify-content-center text-success m-5"
      role="status"
    >
      <div class="spinner-grow" role="status" />
      <strong>Loading...</strong>
    </div>
  );
};

export default Loading;
