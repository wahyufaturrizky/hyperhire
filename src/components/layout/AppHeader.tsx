import React from 'react';
import logo from '../../../public/logo.svg';
import Image from 'next/image';
import Dropdown from '../Form/DropDown';
import Button from '../Form/Button';
import HemMenu from '../Mobile/HemMenu';

interface NavLink {
  label: string; // Display text for the link
  href: string; // Destination URL
}

interface HeaderProps {
  title?: string; // Title to display in the header
  links?: NavLink[]; // Optional array of navigation links
  className?: string; // Custom CSS class for styling
}

const AppHeader: React.FC<HeaderProps> = ({ title, className = '' }) => {
  return (
    <header className={`flex items-center justify-between bg-transparent text-white py-4 ${className}`}>
      <h1 className="text-2xl font-bold flex gap-1">
        <Image src={logo} alt="Logo" />
        hyperhire
        {title}
      </h1>
      <div className="md:flex gap-24  hidden">
        <Dropdown
          options={[
            { label: '채용', value: '채용' },
            { label: '해외 개발자 원격 채용', value: '해외 개발자 원격 채용' },
            { label: '외국인 원격 채용 (비개발 직군)', value: '외국인 원격 채용 (비개발 직군)' },
            { label: '한국어 가능 외국인 채용', value: '한국어 가능 외국인 채용' },
          ]}
        />
        <span>해외 개발자 활용 서비스</span>
      </div>
      <Button label="문의하기" className="md:block hidden" />
      <HemMenu />
    </header>
  );
};

export default AppHeader;
