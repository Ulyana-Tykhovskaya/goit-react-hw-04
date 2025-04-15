import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import { fetchImages } from "./services/unsplash-api";

const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    if (!query) return;
    const getImages = async () => {
      try {
        setLoading(true);
        const { results, total_pages } = await fetchImages(query, page);
        setImages((prev) => [...prev, ...results]);
        setHasMore(page < total_pages);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getImages();
  }, [query, page]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
    setError(null);
  };

  const openModal = (data) => {
    setModalData(data);
    setShowModal(true);
  };

  const closeModal = () => {
    setModalData(null);
    setShowModal(false);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={openModal} />
      )}
      {loading && <Loader />}
      {images.length > 0 && hasMore && !loading && (
        <LoadMoreBtn onClick={() => setPage((prev) => prev + 1)} />
      )}
      {showModal && <ImageModal data={modalData} onClose={closeModal} />}
    </>
  );
};

export default App;
