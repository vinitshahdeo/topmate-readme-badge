import Select from 'react-select';
import '../CustomSelect/CustomSelect.css';

const customTheme = (theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: 'black',
    primary: '#a1a5a8'
  }
});

const customStyles = {
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none'
  }),
  control: (provided) => ({
    ...provided,
    border: 0,
    boxShadow: 'none',
    backgroundColor: '#FDF2E6'
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#E64130' : '#FDF2E6',
    color: state.isSelected ? '#FDF2E6' : '',
    '&:hover': {
      ...provided,
      backgroundColor: state.isSelected ? '#E64130' : '#f6f8fa',
      color: state.isSelected ? 'black' : '',
      cursor: 'pointer'
    }
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: '#FDF2E6',
    borderRadius: 0
  })
};

const CustomSelect = ({ options, label, placeholder, onChange }) => {
  return (
    <div className="SelectContainer">
      <label className="SelectContainer__Label">{label}</label>
      <Select
        defaultValue={options[0]}
        options={options}
        placeholder={placeholder}
        styles={customStyles}
        isSearchable={false}
        theme={customTheme}
        onChange={onChange}
      />
    </div>
  );
};

export default CustomSelect;
