import React from 'react';
import '../Menu.css';

interface MenuItem {
  label: string;
  url: string;
}

interface MenuProps {
  items: MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ items }) => {
  return (
    <ul className="menu">
      {items.map((item) => (
        <li key={item.url}>
          <a href={item.url}>{item.label}</a>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
