interface IProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const Play: React.FC<IProps> = ({ width = 57, height = 57, color = "#FFF" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 57 57" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.1667 19.1693V38.508C19.1667 39.9826 20.7907 40.8786 22.0413 40.076L37.236 30.4066C38.3933 29.6786 38.3933 27.9986 37.236 27.252L22.0413 17.6013C20.7907 16.7986 19.1667 17.6946 19.1667 19.1693Z"
        fill={color}
      />
    </svg>
  );
};

export default Play;
