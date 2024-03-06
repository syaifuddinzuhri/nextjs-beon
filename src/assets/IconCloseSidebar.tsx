interface IProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const CloseSidebar: React.FC<IProps> = ({ width = 24, height = 25, color = "#26334D" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 25" fill="none">
      <path
        d="M12.9999 19.1912L6.99988 12.1912L12.9999 5.19116"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.5"
        d="M16.9998 19.1912L10.9998 12.1912L16.9998 5.19116"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CloseSidebar;
