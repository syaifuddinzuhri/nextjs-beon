interface IProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const Filter: React.FC<IProps> = ({ width = 24, height = 24, color = "#FF6633" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
      <path
        d="M13.5 16.5V17.5H10.5V16.5H13.5ZM20.5 7.5H3.5V6.5H20.5V7.5ZM17.5 12.5H6.5V11.5H17.5V12.5Z"
        fill="black"
        stroke={color}
      />
    </svg>
  );
};

export default Filter;
