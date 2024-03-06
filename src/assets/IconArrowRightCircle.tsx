interface IProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const ArrowRightCircle: React.FC<IProps> = ({ width = 24, height = 25, color = "#FF6633" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 25" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 22.0957C17.5228 22.0957 22 17.6186 22 12.0957C22 6.57286 17.5228 2.0957 12 2.0957C6.47715 2.0957 2 6.57286 2 12.0957C2 17.6186 6.47715 22.0957 12 22.0957ZM12.4697 8.56537C12.7626 8.27248 13.2374 8.27248 13.5303 8.56537L16.5303 11.5654C16.8232 11.8583 16.8232 12.3331 16.5303 12.626L13.5303 15.626C13.2374 15.9189 12.7626 15.9189 12.4697 15.626C12.1768 15.3331 12.1768 14.8583 12.4697 14.5654L14.1893 12.8457H8C7.58579 12.8457 7.25 12.5099 7.25 12.0957C7.25 11.6815 7.58579 11.3457 8 11.3457H14.1893L12.4697 9.62603C12.1768 9.33314 12.1768 8.85827 12.4697 8.56537Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowRightCircle;
