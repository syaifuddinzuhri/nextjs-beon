interface IProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const ChevRight: React.FC<IProps> = ({ width = 30, height = 30, color = "#FF6633" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 30 30" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.2925 18.4625L16.1725 14.5825L12.2925 10.7025C12.1052 10.5157 12 10.262 12 9.9975C12 9.73298 12.1052 9.47933 12.2925 9.2925C12.6825 8.9025 13.3125 8.9025 13.7025 9.2925L18.2925 13.8825C18.6825 14.2725 18.6825 14.9025 18.2925 15.2925L13.7025 19.8825C13.3125 20.2725 12.6825 20.2725 12.2925 19.8825C11.9125 19.4925 11.9025 18.8525 12.2925 18.4625Z"
        fill={color}
      />
    </svg>
  );
};

export default ChevRight;
