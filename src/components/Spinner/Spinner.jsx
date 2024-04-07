import React from "react";
import "./Spinner.css";
export default function Spinner() {
    return (
        <div className="spin">
            <div className="spinner_container" aria-label="Loading...">
                <i className="spinner_item"></i>
                <i className="spinner_item"></i>
            </div>
        </div>
    );
}
