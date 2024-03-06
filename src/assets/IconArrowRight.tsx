interface IProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const ArrowRight: React.FC<IProps> = ({ width = 32, height = 32, color = "#26334D" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 32 32" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.088 14.4881H10.04L13.112 11.4161C13.528 11.0001 13.528 10.3281 13.112 9.91208C12.9127 9.71235 12.6422 9.6001 12.36 9.6001C12.0779 9.6001 11.8073 9.71235 11.608 9.91208L6.71202 14.8081C6.29602 15.2241 6.29602 15.8961 6.71202 16.3121L11.608 21.2081C12.024 21.6241 12.696 21.6241 13.112 21.2081C13.528 20.7921 13.528 20.1201 13.112 19.7041L10.04 16.6214H24.088C24.6747 16.6214 25.1547 16.1414 25.1547 15.5547C25.1547 14.9681 24.6747 14.4881 24.088 14.4881Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowRight;
