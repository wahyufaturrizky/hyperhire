'use client';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import downArrow from '../../../public/icons/downArrow.svg';
interface DropdownProps {
  options?: { label: string; value: string }[]; // Array of options with label and value
  placeholder?: string; // Placeholder text for the dropdown
  onSelect?: (value: string) => void; // Callback function when an option is selected
  className?: string; // Optional additional classes for styling
}

const Dropdown: React.FC<DropdownProps> = ({ options, placeholder = 'Select an option', className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>('채용');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const handleSelect = (value: string) => {
    setSelectedOption(value);
    // onSelect(value); // Trigger the callback function
    setIsOpen(false); // Close dropdown after selection
    handleCloseDropDown();
  };
  const handleCloseDropDown = () => {
    setTimeout(() => {
      setIsVisible(false);
    }, 400);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        handleCloseDropDown();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`relative inline-block w-max  ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => {
          setIsOpen(!isOpen);
          setIsVisible(true);
        }}
        className=" flex gap-1 items-center">
        {selectedOption ? options?.find((option) => option.value === selectedOption)?.label : placeholder}
        <Image src={downArrow} alt="dropdown" />
      </button>

      <ul
        className={`absolute z-10 w-max mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto transition-opacity duration-200 ${isVisible ? 'visible' : 'invisible'} ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}>
        {options?.map((option) => (
          <li key={option.value}>
            <button
              type="button"
              onClick={() => handleSelect(option.value)}
              className={`${selectedOption === option.value ? 'font-bold' : ''} block w-full px-4 py-2 text-left text-gray-700 hover:bg-blue-100`}>
              {option.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
