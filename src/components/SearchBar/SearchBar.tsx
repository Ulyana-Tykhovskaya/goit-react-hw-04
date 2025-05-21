import css from "./SearchBar.module.css";
import { Formik, Form, Field, FormikHelpers } from "formik";

type SearchBarProps = {
  onSubmit: (query: string) => void;
};

type FormValues = {
  query: string;
};

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const handleSubmit = (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    onSubmit(values.query.trim());
    actions.resetForm();
  };

  return (
    <header className={css.header}>
      <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <Field
            className={css.input}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit" className={css.button}>
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
}
