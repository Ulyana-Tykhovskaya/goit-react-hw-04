import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

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
  images: UnsplashImage[];
  onImageClick: (image: UnsplashImage) => void;
};

export default function ImageGallery({ images, onImageClick }: Props) {
  return (
    <ul className={css.gallery}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} onClick={() => onImageClick(image)} />
        </li>
      ))}
    </ul>
  );
}
