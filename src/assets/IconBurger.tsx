interface IProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const Burger: React.FC<IProps> = ({ width = 24, height = 25, color = "white" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 25" fill="none">
      <path
        d="M3 6.4021H21M3 12.4021H21M3 18.4021H21"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Burger;
