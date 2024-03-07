interface IProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const DiscountSquare: React.FC<IProps> = ({ width = 32, height = 32, color = "#FF6633" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 32 32" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.3267 5.33325H18.6733C23.7142 5.33325 26.2346 5.33325 27.8006 6.89535C28.8788 7.97089 29.2146 9.49778 29.3193 11.9859C29.34 12.4793 29.3504 12.726 29.2582 12.8906C29.1661 13.0552 28.7983 13.2606 28.0626 13.6715C27.2455 14.1277 26.6933 14.9995 26.6933 15.9999C26.6933 17.0003 27.2455 17.8721 28.0626 18.3284C28.7983 18.7392 29.1661 18.9446 29.2582 19.1092C29.3504 19.2738 29.34 19.5205 29.3193 20.014C29.2146 22.5021 28.8788 24.0289 27.8006 25.1045C26.2346 26.6666 23.7142 26.6666 18.6733 26.6666H13.3267C8.28587 26.6666 5.76545 26.6666 4.19946 25.1045C3.12123 24.0289 2.7854 22.5021 2.68079 20.014C2.66005 19.5205 2.64967 19.2738 2.74181 19.1092C2.83395 18.9446 3.2018 18.7392 3.93746 18.3284C4.75449 17.8721 5.30678 17.0003 5.30678 15.9999C5.30678 14.9995 4.75449 14.1277 3.93746 13.6715C3.20179 13.2606 2.83395 13.0552 2.74181 12.8906C2.64967 12.726 2.66005 12.4793 2.68079 11.9859C2.7854 9.49778 3.12123 7.97089 4.19946 6.89535C5.76545 5.33325 8.28587 5.33325 13.3267 5.33325ZM20.7305 11.2928C21.122 11.6833 21.122 12.3165 20.7305 12.707L12.7105 20.707C12.319 21.0975 11.6843 21.0975 11.2928 20.707C10.9013 20.3165 10.9013 19.6833 11.2928 19.2928L19.3127 11.2928C19.7042 10.9023 20.339 10.9023 20.7305 11.2928ZM19.3533 20.6666C20.0915 20.6666 20.6899 20.0696 20.6899 19.3333C20.6899 18.5969 20.0915 17.9999 19.3533 17.9999C18.6151 17.9999 18.0166 18.5969 18.0166 19.3333C18.0166 20.0696 18.6151 20.6666 19.3533 20.6666ZM12.67 13.9999C13.4082 13.9999 14.0067 13.403 14.0067 12.6666C14.0067 11.9302 13.4082 11.3333 12.67 11.3333C11.9318 11.3333 11.3333 11.9302 11.3333 12.6666C11.3333 13.403 11.9318 13.9999 12.67 13.9999Z"
        fill={color}
      />
    </svg>
  );
};

export default DiscountSquare;