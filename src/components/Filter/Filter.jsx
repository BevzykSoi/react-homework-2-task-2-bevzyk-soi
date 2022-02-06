import propTypes from "prop-types";

import styles from "./Filter.module.css";

const Filter = ({ filter, handleFilter }) => {
  return (
    <label>
      <h3 className={styles.formTitle}>Find contacts by name:</h3>
      <input
        className={styles.filter}
        type="text"
        value={filter}
        onChange={handleFilter}
      ></input>
    </label>
  );
};

Filter.defaultProps = {
  filter: "",
};

Filter.propTypes = {
  filter: propTypes.string,
  handleFilter: propTypes.func.isRequired,
};

export default Filter;
