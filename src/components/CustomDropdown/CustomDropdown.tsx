import React, { useState } from 'react';
import styles from './CustomDropdown.module.css';

interface Option {
  value: string;
  label: string;
}

interface CustomDropdownProps {
  options: Option[];
  value: string;
  onChange: (option: Option) => void;
}

export const CustomDropdown: React.FC<CustomDropdownProps> = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: Option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownControl} onClick={() => setIsOpen(!isOpen)}>
        <span>{options.find(option => option.value === value)?.label || 'Select a category'}</span>
        <span className={styles.dropdownArrow}><img alt='arrow' src='/down-arrow.png'/></span>
      </div>
      {isOpen && (
        <div className={styles.dropdownMenu}>
          {options.map(option => (
            <div
              key={option.value}
              className={styles.dropdownOption}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};