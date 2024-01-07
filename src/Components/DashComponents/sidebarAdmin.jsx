import { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import "../css/Dashboard.css";

function SidebarAdmin() {
  const [selectedSection, setSelectedSection] = useState('Orders');
  const [hoveredSection, setHoveredSection] = useState(null);
  const navigate = useNavigate();

  const sectionData = [
    {
      name: 'Orders',
      imageSrc: '../Images/dashboardIcons/cart.png',
      imageSrcHover: '../Images/dashboardIcons/red-cart.png',
    },
    {
      name: 'Categories',
      imageSrc: '../Images/dashboardIcons/categories.png',
      imageSrcHover: '../Images/dashboardIcons/red-categories.png',
    },
    {
      name: 'Products',
      imageSrc: '../Images/dashboardIcons/products.png',
      imageSrcHover: '../Images/dashboardIcons/red-products.png',
    },
    {
      name: 'Banner',
      imageSrc: '../Images/dashboardIcons/banner.png',
      imageSrcHover: '../Images/dashboardIcons/red-banner.png',
    },
    {
      name: 'Customers',
      imageSrc: '../Images/dashboardIcons/users.png',
      imageSrcHover: '../Images/dashboardIcons/red-users.png',
    },
    {
      name: 'Team',
      imageSrc: '../Images/dashboardIcons/team.png',
      imageSrcHover: '../Images/dashboardIcons/red-team.png',
    },
    {
      name: 'Analytics',
      imageSrc: '../Images/dashboardIcons/analytics.png',
      imageSrcHover: '../Images/dashboardIcons/red-analytics.png',
    },
    {
      name: 'Logout',
      imageSrc: '../Images/dashboardIcons/logout.png',
      imageSrcHover: '../Images/dashboardIcons/red-logout.png',
    },
  ];

  const handleSectionClick = (section) => {
    setSelectedSection(section);
    navigate(`/AdminDashboard/${section.toLowerCase()}`);
  };
  useEffect(() => {
    handleSectionClick('Orders');
  }, []);

  return (
    <div className="sidebar bg-gray-100 h-screen fixed left-0 top-0 w-52 text-xl">
      <img src="../Images/Icons/brownlogo.png" alt="Collect logo" className='p-6 w-full' />

      <ul className="list-none p-0">
        {sectionData.map((section, index) => (
          <li
            key={index}
            onClick={() => handleSectionClick(section.name)}
            onMouseEnter={() => setHoveredSection(section.name)}
            onMouseLeave={() => setHoveredSection(null)}
            className={`flex items-center cursor-pointer p-4 transition-colors ${(hoveredSection === section.name || selectedSection === section.name) ? 'text-red-700 bg-gray-200' : ''
              }`}
            style={{ transitionDuration: '0s' }}
          >
            <img
              src={
                (hoveredSection === section.name || selectedSection === section.name)
                  ? section.imageSrcHover
                  : section.imageSrc
              }
              alt={`${section.name} icon`}
              className="w-6 h-6 mr-3 transition-all duration-300"
            />
            <span className="transition-all">
              {section.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SidebarAdmin;