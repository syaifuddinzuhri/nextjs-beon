interface IProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const Down: React.FC<IProps> = ({ width = 25, height = 24, color = "#E62E2E" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 25 24" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.5 17.0092C22.5 17.0058 22.5 17.0024 22.5 16.999V13C22.5 12.5955 22.2564 12.2309 21.8827 12.0761C21.509 11.9213 21.0789 12.0069 20.7929 12.2929L19.5 13.5858L14.2071 8.29289C13.8166 7.90237 13.1834 7.90237 12.7929 8.29289L9.5 11.5858L4.20711 6.29289C3.81658 5.90237 3.18342 5.90237 2.79289 6.29289C2.40237 6.68342 2.40237 7.31658 2.79289 7.70711L8.79289 13.7071C9.18342 14.0976 9.81658 14.0976 10.2071 13.7071L13.5 10.4142L18.0858 15L16.7929 16.2929C16.5069 16.5789 16.4213 17.009 16.5761 17.3827C16.7309 17.7564 17.0955 18 17.5 18H21.4993C21.4995 18 21.4998 18 21.5 18C21.516 18 21.532 17.9996 21.548 17.9989C21.7877 17.9874 22.024 17.8902 22.2071 17.7071C22.4 17.5142 22.4976 17.2621 22.5 17.0092Z"
        fill={color}
      />
    </svg>
  );
};

export default Down;
