interface IProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const Eye: React.FC<IProps> = ({ width = 25, height = 24, color = "white" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 25 24" fill="none">
      <path
        d="M10 12C10 10.7574 11.0074 9.75 12.25 9.75C13.4926 9.75 14.5 10.7574 14.5 12C14.5 13.2426 13.4926 14.25 12.25 14.25C11.0074 14.25 10 13.2426 10 12Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.25 12C2.25 13.6394 2.67496 14.1915 3.52489 15.2957C5.22196 17.5004 8.06811 20 12.25 20C16.4319 20 19.278 17.5004 20.9751 15.2957C21.825 14.1915 22.25 13.6394 22.25 12C22.25 10.3606 21.825 9.80853 20.9751 8.70433C19.278 6.49956 16.4319 4 12.25 4C8.06811 4 5.22196 6.49956 3.52489 8.70433C2.67496 9.80853 2.25 10.3606 2.25 12ZM12.25 8.25C10.1789 8.25 8.5 9.92893 8.5 12C8.5 14.0711 10.1789 15.75 12.25 15.75C14.3211 15.75 16 14.0711 16 12C16 9.92893 14.3211 8.25 12.25 8.25Z"
        fill={color}
      />
    </svg>
  );
};

export default Eye;
