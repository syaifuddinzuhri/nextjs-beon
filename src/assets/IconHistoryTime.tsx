interface IProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const HistoryTime: React.FC<IProps> = ({ width = 32, height = 33, color = "#FF6633" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 32 33" fill="none">
      <circle opacity="0.16" cx="16" cy="16.1484" r="12" fill={color} />
      <path
        d="M7.51555 24.6337C12.2018 29.32 19.7998 29.32 24.4861 24.6337C29.1724 19.9474 29.1724 12.3494 24.4861 7.66316C19.7998 2.97686 12.2018 2.97686 7.51555 7.66316C5.1709 10.0078 3.99933 13.0813 4.00084 16.1544L4.00098 18.8151"
        stroke={color}
        strokeWidth="2.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.33301 16.1484L3.99967 18.8151L6.66634 16.1484"
        stroke={color}
        strokeWidth="2.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.667 10.8145L14.667 17.4811L21.3337 17.4811"
        stroke={color}
        strokeWidth="2.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HistoryTime;
