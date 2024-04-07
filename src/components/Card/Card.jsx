import React from "react";
import Rating from "@mui/material/Rating";
import "./Card.css";
export default function Card({ data, setSelectedItem, setShowModal }) {
    const openProductModal = (item) => {
        console.log("clicked");
        setSelectedItem(item);
        setShowModal(true);
    };
    return (
        <main className="Card" onClick={() => openProductModal(data)}>
            <img className="card-image" src={data?.image} alt={data?.title} />
            <h3>{data?.title}</h3>
            <p>{data?.description}</p>
            <h4 className="price">From ${data?.price}</h4>
            <Rating
                name="read-only"
                value={data?.rating?.rate}
                precision={0.5}
                readOnly
                style={{ color: "#333" }}
            />
        </main>
    );
}
