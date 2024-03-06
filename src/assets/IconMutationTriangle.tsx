interface IProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const MutationTriangle: React.FC<IProps> = ({ width = 32, height = 32, color = "#FF6633" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 32 32" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.66699 1.6665C2.11471 1.6665 1.66699 2.11422 1.66699 2.6665C1.66699 3.21879 2.11471 3.6665 2.66699 3.6665H5.33366V16.3697C5.33366 18.1565 5.33366 19.0499 5.69113 19.8376C6.04859 20.6254 6.72094 21.2137 8.06562 22.3903L10.7323 24.7236C13.2424 26.9199 14.4974 28.0181 16.0003 28.0181C17.5033 28.0181 18.7583 26.9199 21.2684 24.7236L23.935 22.3903C25.2797 21.2137 25.9521 20.6254 26.3095 19.8376C26.667 19.0499 26.667 18.1565 26.667 16.3697V3.6665H29.3337C29.8859 3.6665 30.3337 3.21879 30.3337 2.6665C30.3337 2.11422 29.8859 1.6665 29.3337 1.6665H2.66699ZM11.3337 16.3332C10.7814 16.3332 10.3337 16.7809 10.3337 17.3332C10.3337 17.8855 10.7814 18.3332 11.3337 18.3332H20.667C21.2193 18.3332 21.667 17.8855 21.667 17.3332C21.667 16.7809 21.2193 16.3332 20.667 16.3332H11.3337ZM10.3337 10.6665C10.3337 10.1142 10.7814 9.6665 11.3337 9.6665H20.667C21.2193 9.6665 21.667 10.1142 21.667 10.6665C21.667 11.2188 21.2193 11.6665 20.667 11.6665H11.3337C10.7814 11.6665 10.3337 11.2188 10.3337 10.6665Z"
        fill={color}
      />
    </svg>
  );
};

export default MutationTriangle;
