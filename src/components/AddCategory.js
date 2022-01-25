import { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
  const [categoryName, setCategoryName] = useState('');

  const handleChange = event => {
    setCategoryName(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (categoryName.trim().length > 0) {
      setCategories(categories => [categoryName, ...categories]);
    }
    setCategoryName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={categoryName} onChange={handleChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
};

export default AddCategory;
