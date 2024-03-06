interface IProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const Sort: React.FC<IProps> = ({ width = 24, height = 24, color = "#FF6633" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
      <path
        d="M4 6H20M10 12H20M16 18H20"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Sort;
