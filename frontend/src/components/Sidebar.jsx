import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="fixed inset-y-0 left-0 w-52 bg-gray-800 text-white z-20">
      {/* <h1 className="text-2xl mb-5 p-5">Dashboard</h1> */}
      <ul className="space-y-2">
        <li>
          <Link className="flex items-center gap-3 py-2 px-5" to="/">
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link className="flex items-center gap-3 py-2 px-5" to="/users">
            <span>Users</span>
          </Link>
        </li>
        <li>
          <Link className="flex items-center gap-3 py-2 px-5" to="/settings">
            <span>Settings</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
