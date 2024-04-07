import Modal from "@mui/material/Modal";
import Rating from "@mui/material/Rating";
import "./ProductModal.css";
export default function ProductModal({ data, showModal, setShowModal }) {
    const handleClose = () => setShowModal(false);
    return (
        <Modal
            open={showModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="modal"
        >
            <div className="item-container">
                <img src={data?.image} alt={data?.title} />

                <div className="item-description">
                    <h2>{data?.title}</h2>
                    <p>{data?.description}</p>
                    <span>
                        <Rating
                            name="read-only"
                            value={data?.rating?.rate}
                            precision={0.5}
                            readOnly
                            style={{ color: "#333" }}
                        />
                        <p style={{ marginLeft: "8px" }}>
                            ({data?.rating?.count})
                        </p>
                    </span>
                    <h4>${data?.price}</h4>
                    <button className="add-to-cart-btn">Add to Cart</button>
                </div>
            </div>
        </Modal>
    );
}
