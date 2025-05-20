import css from "./ImageCard.module.css";

interface ImageCardProps {
  image: {
    id: string;
    alt_description: string;
    urls: {
      small: string;
    };
  };
  onClick: () => void;
}

export default function ImageCard({ image, onClick }: ImageCardProps) {
  return (
    <div className={css.card} onClick={onClick}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={css.img}
      />
    </div>
  );
}
