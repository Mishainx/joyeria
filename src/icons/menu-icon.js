const MenuIcon = ({ width = '800px', height = '800px', className = '', stroke = '#000000' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    strokeWidth="3"
    stroke="currentColor"
    fill="currentColor"
    className={className}
  >
    <line x1="7.68" y1="32" x2="56.32" y2="32" />
    <line x1="7.68" y1="15.97" x2="56.32" y2="15.97" />
    <line x1="7.68" y1="48.03" x2="56.32" y2="48.03" />
  </svg>
);

export default MenuIcon;
