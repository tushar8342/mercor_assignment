import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="#">Google Drive</a>
        </li>
        <li>
          <a href="#">Google Calendar</a>
        </li>
        <li>
          <a href="#">Google Sheets</a>
        </li>
        {/* Add more app links */}
      </ul>
    </div>
  );
};

export default Sidebar;