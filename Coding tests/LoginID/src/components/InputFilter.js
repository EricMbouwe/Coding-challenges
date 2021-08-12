import PropTypes from 'prop-types';
import { useState, useContext } from 'react';
import styled from 'styled-components';
import { ProfileContext } from '../contexts/ProfileContext';

function InputFilter({ text, type }) {
  const [inputValue, setInputValue] = useState('');
  const { filterByName, filterByTag } = useContext(ProfileContext);

  const handleChange = (e) => {
    const val = e.target.value;
    setInputValue(val);
    if (type === 'NAME') {
      filterByName(val);
    } else if (type === 'TAG') {
      filterByTag(val);
    }
  };

  return (
    <div>
      <InputField
        type="text"
        value={inputValue}
        placeholder={text}
        onChange={handleChange}
      />
    </div>
  );
}

const InputField = styled.input`
  display: block;
  width: 98%;
  margin: 0 auto;
  padding: 14px 5px;
  border: none;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
  font-size: 18px;

  &:focus {
    outline: none;
    border-color: #777;
  }

  ::placeholder {
    color: #777;
  }
`;

InputFilter.defaultProps = {
  text: 'Search',
};

InputFilter.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string.isRequired,
};

export default InputFilter;
