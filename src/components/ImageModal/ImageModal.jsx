/* === src/components/ImageModal/ImageModal.jsx === */
import Modal from "react-modal";
import css from "./ImageModal.module.css";

export default function ImageModal({ image, onClose }) {
  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <img src={image.urls.regular} alt={image.alt_description} />
      <p>{image.description || image.alt_description}</p>
      <p>Author: {image.user.name}</p>
      <p>Likes: {image.likes}</p>
    </Modal>
  );
}
