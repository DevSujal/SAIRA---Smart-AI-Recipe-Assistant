// components/NavItem.js
const NavItem = ({ label }) => {
    return (
      <div className="relative group">
        <span className="relative z-10">{label}</span>
        <span className="absolute left-0 -bottom-1 right-0 h-1 bg-green-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
      </div>
    );
  };
  
  export default NavItem;
  