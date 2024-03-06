interface IProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const User: React.FC<IProps> = ({ width = 24, height = 24, color = "#26334D" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="6" r="4" fill={color} />
      <ellipse cx="12" cy="17" rx="7" ry="4" fill={color} />
    </svg>
  );
};

export default User;
