import React, { useState } from 'react';
import profilePic from '../../assets/profilepic.svg';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  // Sidebar menu data structure
  const sidebarMenu = [
    { name: 'Dashboard', icon: 'bi-house', link: '/', active: false },
    {
      name: 'Projects',
      icon: 'bi-folder',
      link: '#',
      submenu: [
        { name: 'Ongoing', link: '/ongoing' },
        { name: 'Completed', link: '#' }
      ]
    },
    {
      name: 'Reports',
      icon: 'bi-graph-up',
      link: '#',
      submenu: [
        { name: 'Annual', link: '#' },
        { name: 'Monthly', link: '#' },
        {
          name: 'Quarterly',
          submenu: [
            { name: 'Q1', link: '#' },
            { name: 'Q2', link: '#' }
          ]
        }
      ]
    },
    { name: 'Settings', icon: 'bi-gear', link: '#', submenu: [{ name: 'Profile', link: '#' }, { name: 'Account', link: '#' }] }
  ];

  // Handle main menu toggle
  const handleMenuClick = (index) => {
    setActiveMenu(index === activeMenu ? null : index);
  };

  // Handle submenu toggle
  const handleSubmenuClick = (parentIndex, index) => {
    setActiveSubmenu(
      activeSubmenu?.parentIndex === parentIndex && activeSubmenu.index === index
        ? null
        : { parentIndex, index }
    );
  };

  // Handle sidebar toggle (for collapsing)
  const handleSidebarToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`main-content`}>
      {/* Sidebar */}
      <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
        {/* Profile Section */}
        <div className="profile-section">
          <img src={profilePic} alt="Profile Picture" className="rounded-circle" />
          <h5>John Doe</h5>
        </div>

        {/* Line separator */}
        <hr />

        {/* Menu Items */}
        <div>
          {sidebarMenu.map((menu, index) => (
            <div key={index}>
              <a
                href={menu.link}
                className={`d-block text-white ${activeMenu === index ? 'active' : ''}`}
                onClick={(e) => {
                  if (menu.submenu) {
                    e.preventDefault();
                    handleMenuClick(index);
                  }
                }}
              >
                <i className={`bi ${menu.icon}`} /> {menu.name}
                {menu.submenu && (
                  <i className={`bi bi-chevron-right submenu-indicator ${activeMenu === index ? 'submenu-expanded' : ''}`} />
                )}
              </a>

              {menu.submenu && (
                <div className={`submenu ${activeMenu === index ? 'show' : ''}`}>
                  {menu.submenu.map((submenu, subIndex) => (
                    <div key={subIndex}>
                      <a
                        href={submenu.link}
                        className={`d-block text-white ${activeSubmenu?.parentIndex === index && activeSubmenu.index === subIndex ? 'active' : ''}`}
                        onClick={(e) => {
                          if (submenu.submenu) {
                            e.preventDefault();
                            handleSubmenuClick(index, subIndex);
                          }
                        }}
                      >
                        {submenu.name}
                        {submenu.submenu && (
                          <i className={`bi bi-chevron-right submenu-child-indicator ${activeSubmenu?.parentIndex === index && activeSubmenu.index === subIndex ? 'submenu-expanded' : ''}`} />
                        )}
                      </a>

                      {submenu.submenu && (
                        <div className={`submenu-child ${activeSubmenu?.parentIndex === index && activeSubmenu.index === subIndex ? 'show' : ''}`}>
                          {submenu.submenu.map((child, childIndex) => (
                            <a href={child.link} key={childIndex} className="d-block text-white">
                              {child.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar Toggle */}
      <button
        className="sidebar-toggle btn btn-light"
        onClick={handleSidebarToggle}
        style={{
          left: collapsed ? '0' : '250px' // Adjusts toggle position based on sidebar state
        }}
      >
        <i className="bi bi-list"></i>
      </button>
    </div>
  );
};

export default Sidebar;