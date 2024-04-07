import React from "react";
import "./Spinner.css";
export default function Spinner() {
    return (
        <div
            style={{
                width: "100%",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div className="spinner_container" aria-label="Loading...">
                <i className="spinner_item"></i>
                <i className="spinner_item"></i>
            </div>
        </div>
    );
}
