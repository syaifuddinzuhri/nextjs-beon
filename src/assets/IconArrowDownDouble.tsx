interface IProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const ArrowDownDouble: React.FC<IProps> = ({ width = 25, height = 24, color = "#FF6633" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 25 24" fill="none">
      <path
        d="M12.5001 19.1643L18.7072 12.9572L17.293 11.543L12.5001 16.3359L7.70718 11.543L6.29297 12.9572L12.5001 19.1643ZM12.5001 13.5144L18.7072 7.30728L17.293 5.89307L12.5001 10.686L7.70718 5.89307L6.29297 7.30728L12.5001 13.5144Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowDownDouble;
