interface IProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const CheckCircle: React.FC<IProps> = ({ width = 24, height = 24, color = "white" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 4C7.584 4 4 7.584 4 12C4 16.416 7.584 20 12 20C16.416 20 20 16.416 20 12C20 7.584 16.416 4 12 4ZM9.832 15.432L6.96 12.56C6.8102 12.4105 6.72601 12.2076 6.72601 11.996C6.72601 11.7844 6.8102 11.5815 6.96 11.432C7.272 11.12 7.776 11.12 8.088 11.432L10.4 13.736L15.904 8.232C16.216 7.92 16.72 7.92 17.032 8.232C17.344 8.544 17.344 9.048 17.032 9.36L10.96 15.432C10.656 15.744 10.144 15.744 9.832 15.432Z"
        fill={color}
      />
    </svg>
  );
};

export default CheckCircle;
