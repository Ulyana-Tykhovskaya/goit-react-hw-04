import Modal from "react-modal";
import css from "./ImageModal.module.css";

type UnsplashImage = {
  id: string;
  alt_description: string;
  description: string | null;
  urls: {
    small: string;
    regular: string;
  };
  user: {
    name: string;
  };
  likes: number;
};

type Props = {
  image: UnsplashImage;
  onClose: () => void;
};

export default function ImageModal({ image, onClose }: Props) {
  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
      ariaHideApp={false}
    >
      <img src={image.urls.regular} alt={image.alt_description} />
      <p>{image.description}</p>
      <p>
        <strong>Author:</strong> {image.user.name}
      </p>
      <p>
        <strong>Likes:</strong> {image.likes}
      </p>
    </Modal>
  );
}
