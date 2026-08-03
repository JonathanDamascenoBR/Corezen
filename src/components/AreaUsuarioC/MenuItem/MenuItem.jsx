// import { Link } from "react-router-dom";
import { useState } from "react";
import Login from "../../Login/Login";

// function MenuItem({ url, label, customClass }) {
function MenuItem({ label }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>{label}</button>

      {open && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-white"
            >
              ✕
            </button>

            <Login />
          </div>
        </div>
      )}
    </>
  );
}

export default MenuItem;
