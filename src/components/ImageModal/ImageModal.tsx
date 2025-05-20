import Modal from "react-modal";
import css from "./ImageModal.module.css";

interface Image {
  id: string;
  alt_description: string;
  description?: string;
  urls: {
    regular: string;
  };
  user: {
    name: string;
  };
  likes: number;
}

interface ImageModalProps {
  image: Image | null;
  onClose: () => void;
}

export default function ImageModal({ image, onClose }: ImageModalProps) {
  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
      ariaHideApp={false} // добавлено для избежания предупреждения в dev
    >
      {image && (
        <>
          <img src={image.urls.regular} alt={image.alt_description} />
          <p>{image.description || image.alt_description}</p>
          <p>Author: {image.user.name}</p>
          <p>Likes: {image.likes}</p>
        </>
      )}
    </Modal>
  );
}
