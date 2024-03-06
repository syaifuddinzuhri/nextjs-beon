interface IProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const Min: React.FC<IProps> = ({ width = 13, height = 13, color = "#FFF" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 13 13" fill="none">
      <path
        d="M8.595 1.5H4.405C2.585 1.5 1.5 2.585 1.5 4.405V8.59C1.5 10.415 2.585 11.5 4.405 11.5H8.59C10.41 11.5 11.495 10.415 11.495 8.595V4.405C11.5 2.585 10.415 1.5 8.595 1.5ZM8.5 6.875H4.5C4.295 6.875 4.125 6.705 4.125 6.5C4.125 6.295 4.295 6.125 4.5 6.125H8.5C8.705 6.125 8.875 6.295 8.875 6.5C8.875 6.705 8.705 6.875 8.5 6.875Z"
        fill={color}
      />
    </svg>
  );
};

export default Min;
