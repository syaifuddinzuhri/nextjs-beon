interface IProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const Warning: React.FC<IProps> = ({ width = 16, height = 17, color = "#FFCB33" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 16 17" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.73439 12.3199H11.7664C12.5877 12.3199 13.0997 11.4293 12.6891 10.7199L8.67306 3.78127C8.26239 3.07193 7.23839 3.07193 6.82772 3.78127L2.81172 10.7199C2.40106 11.4293 2.91306 12.3199 3.73439 12.3199ZM7.75039 8.5866C7.45706 8.5866 7.21706 8.3466 7.21706 8.05327V6.9866C7.21706 6.69327 7.45706 6.45327 7.75039 6.45327C8.04372 6.45327 8.28372 6.69327 8.28372 6.9866V8.05327C8.28372 8.3466 8.04372 8.5866 7.75039 8.5866ZM8.28372 10.7199H7.21706V9.65327H8.28372V10.7199Z"
        fill={color}
      />
    </svg>
  );
};

export default Warning;
