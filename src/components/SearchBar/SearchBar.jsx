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
      <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
        <Form>
          <Field
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
