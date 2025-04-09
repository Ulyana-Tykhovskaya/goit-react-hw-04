import { Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    const query = values.query.trim();
    if (query === "") {
      toast.error("Please enter a search term.");
      return;
    }
    onSubmit(query);
    actions.resetForm();
  };
  return (
    <header>
      <form>
        <input
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};
