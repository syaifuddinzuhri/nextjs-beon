interface IProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const DashboardUser: React.FC<IProps> = ({ width = 29, height = 28, color = "#FFF" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 29 28" fill="none">
      <ellipse cx="14.75" cy="6.99992" rx="4.66667" ry="4.66667" fill={color} />
      <path
        opacity="0.5"
        d="M24.0833 20.4167C24.0833 23.3162 24.0833 25.6667 14.75 25.6667C5.41663 25.6667 5.41663 23.3162 5.41663 20.4167C5.41663 17.5173 9.5953 15.1667 14.75 15.1667C19.9046 15.1667 24.0833 17.5173 24.0833 20.4167Z"
        fill={color}
      />
    </svg>
  );
};

export default DashboardUser;
