interface IProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const Alarm: React.FC<IProps> = ({ width = 20, height = 20, color = "#FF6633" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 18.3332C14.0301 18.3332 17.2972 15.0967 17.2972 11.1043C17.2972 7.11189 14.0301 3.87541 10 3.87541C5.96986 3.87541 2.70278 7.11189 2.70278 11.1043C2.70278 15.0967 5.96986 18.3332 10 18.3332ZM10 7.28905C10.3358 7.28905 10.6081 7.55875 10.6081 7.89145V10.8548L12.457 12.6863C12.6945 12.9216 12.6945 13.303 12.457 13.5383C12.2195 13.7735 11.8345 13.7735 11.597 13.5383L9.57001 11.5303C9.45597 11.4173 9.3919 11.2641 9.3919 11.1043V7.89145C9.3919 7.55875 9.66416 7.28905 10 7.28905Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.86708 1.94972C7.04508 2.23185 6.9585 2.6035 6.6737 2.77983L3.43047 4.78785C3.14568 4.96418 2.77051 4.87842 2.59251 4.59629C2.41452 4.31416 2.50109 3.9425 2.78589 3.76617L6.02912 1.75815C6.31392 1.58182 6.68908 1.66759 6.86708 1.94972Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.1329 1.94972C13.3109 1.66759 13.6861 1.58182 13.9709 1.75815L17.2141 3.76617C17.4989 3.9425 17.5855 4.31416 17.4075 4.59629C17.2295 4.87842 16.8543 4.96418 16.5695 4.78785L13.3263 2.77983C13.0415 2.6035 12.9549 2.23185 13.1329 1.94972Z"
        fill={color}
      />
    </svg>
  );
};

export default Alarm;
