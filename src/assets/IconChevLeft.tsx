interface IProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const ChevLeft: React.FC<IProps> = ({ width = 30, height = 30, color = "#FF6633" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 30 30" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.2925 18.4625L14.4125 14.5825L18.2925 10.7025C18.6825 10.3125 18.6825 9.68249 18.2925 9.29249C18.1057 9.10523 17.852 9 17.5875 9C17.323 9 17.0693 9.10523 16.8825 9.29249L12.2925 13.8825C11.9025 14.2725 11.9025 14.9025 12.2925 15.2925L16.8825 19.8825C17.2725 20.2725 17.9025 20.2725 18.2925 19.8825C18.6725 19.4925 18.6825 18.8525 18.2925 18.4625Z"
        fill="#FF6633"
      />
    </svg>
  );
};

export default ChevLeft;
