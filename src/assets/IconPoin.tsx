interface IProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const Poin: React.FC<IProps> = ({ width = 20, height = 20, color = "#FF6633" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 20" fill="none">
      <path
        opacity="0.4"
        d="M8.32496 14.9832C12.0023 14.9832 14.9833 12.0021 14.9833 8.32484C14.9833 4.64754 12.0023 1.6665 8.32496 1.6665C4.64766 1.6665 1.66663 4.64754 1.66663 8.32484C1.66663 12.0021 4.64766 14.9832 8.32496 14.9832Z"
        fill={color}
      />
      <path
        d="M18.3083 13.3251C18.3083 16.0751 16.0749 18.3084 13.3249 18.3084C11.6249 18.3084 10.1333 17.4584 9.23328 16.1667C12.8666 15.7584 15.7583 12.8667 16.1666 9.2334C17.4583 10.1334 18.3083 11.6251 18.3083 13.3251Z"
        fill={color}
      />
    </svg>
  );
};

export default Poin;
