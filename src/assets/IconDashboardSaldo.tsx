interface IProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const DashboardSaldo: React.FC<IProps> = ({ width = 29, height = 28, color = "#FFF" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 29 28" fill="none">
      <path
        opacity="0.8"
        d="M15.55 2.93994L15.515 3.02161L12.1317 10.8733H8.80665C8.01332 10.8733 7.26665 11.0249 6.56665 11.3283L8.60832 6.45161L8.65498 6.34661L8.72498 6.15994C8.75998 6.07827 8.78332 6.00827 8.81832 5.94994C10.3467 2.41494 12.0733 1.60994 15.55 2.93994Z"
        fill={color}
      />
      <path
        d="M21.8384 11.1066C21.3134 10.9549 20.765 10.8733 20.1934 10.8733H12.1317L15.515 3.02161L15.55 2.93994C15.7134 2.99827 15.8884 3.07994 16.0634 3.13827L18.6417 4.22327C20.0767 4.81827 21.08 5.43661 21.6984 6.18328C21.8034 6.32328 21.8967 6.45161 21.99 6.60327C22.095 6.76661 22.1767 6.92994 22.2234 7.10494C22.27 7.20994 22.305 7.30327 22.3284 7.40827C22.6317 8.39994 22.445 9.60161 21.8384 11.1066Z"
        fill={color}
      />
      <path
        opacity="0.4"
        d="M25.8866 16.5666V18.8416C25.8866 19.075 25.8749 19.3083 25.8633 19.53C25.6416 23.6133 23.3666 25.6666 19.0499 25.6666H9.94995C9.65828 25.6666 9.38995 25.6433 9.12161 25.6083C5.41161 25.3633 3.42828 23.38 3.17161 19.67C3.13661 19.39 3.11328 19.1216 3.11328 18.8416V16.5666C3.11328 14.2216 4.53661 12.2033 6.56661 11.3283C7.26661 11.025 8.01328 10.8733 8.80662 10.8733H20.1933C20.7649 10.8733 21.3133 10.955 21.8383 11.1066C24.1716 11.8183 25.8866 13.9883 25.8866 16.5666Z"
        fill={color}
      />
      <path
        opacity="0.6"
        d="M8.60828 6.45166L6.56661 11.3283C4.53661 12.2033 3.11328 14.2217 3.11328 16.5667V13.1483C3.11328 9.83499 5.46995 7.06999 8.60828 6.45166Z"
        fill={color}
      />
      <path
        opacity="0.6"
        d="M25.8867 13.1483V16.5666C25.8867 13.9883 24.1717 11.8183 21.8384 11.1066C22.445 9.60165 22.6317 8.39998 22.3284 7.40831C22.305 7.30331 22.27 7.20998 22.2234 7.10498C24.405 8.23665 25.8867 10.535 25.8867 13.1483Z"
        fill={color}
      />
      <path
        d="M17.4167 19.5417H11.5834C11.105 19.5417 10.7084 19.1451 10.7084 18.6667C10.7084 18.1884 11.105 17.7917 11.5834 17.7917H17.4167C17.895 17.7917 18.2917 18.1884 18.2917 18.6667C18.2917 19.1451 17.895 19.5417 17.4167 19.5417Z"
        fill={color}
      />
    </svg>
  );
};

export default DashboardSaldo;
