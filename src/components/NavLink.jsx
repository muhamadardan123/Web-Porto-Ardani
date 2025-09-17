// components/NavLink.js

import React from 'react';
import './NavLink.css'; // Import file CSS untuk styling

const NavLink = ({ href, text }) => {
  return (
    <li>
      <a href={href}>
        {text}
        <span className="status-tag">Available for new opportunities.</span>
      </a>
    </li>
  );
};

export default NavLink;