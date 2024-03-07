interface IProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const Sale: React.FC<IProps> = ({ width = 25, height = 25, color = "#26334D" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 25 25" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.495 4.69043H14.505C18.2856 4.69043 20.1759 4.69043 21.3504 5.862C22.1591 6.66866 22.411 7.81382 22.4894 9.6799C22.505 10.05 22.5128 10.235 22.4437 10.3585C22.3745 10.4819 22.0987 10.636 21.5469 10.9441C20.9341 11.2863 20.5199 11.9401 20.5199 12.6904C20.5199 13.4408 20.9341 14.0946 21.5469 14.4368C22.0987 14.7449 22.3745 14.899 22.4437 15.0224C22.5128 15.1459 22.505 15.3309 22.4894 15.701C22.411 17.567 22.1591 18.7122 21.3504 19.5189C20.1759 20.6904 18.2856 20.6904 14.505 20.6904H10.495C6.71438 20.6904 4.82407 20.6904 3.64958 19.5189C2.84091 18.7122 2.58903 17.567 2.51058 15.701C2.49502 15.3309 2.48724 15.1459 2.55634 15.0224C2.62545 14.899 2.90133 14.7449 3.45308 14.4368C4.06586 14.0946 4.48007 13.4408 4.48007 12.6904C4.48007 11.9401 4.06586 11.2863 3.45308 10.9441C2.90133 10.636 2.62545 10.4819 2.55634 10.3585C2.48724 10.235 2.49502 10.05 2.51058 9.6799C2.58903 7.81382 2.84091 6.66866 3.64958 5.862C4.82407 4.69043 6.71439 4.69043 10.495 4.69043ZM16.0478 9.1601C16.3415 9.45299 16.3415 9.92787 16.0478 10.2208L10.0329 16.2208C9.73927 16.5137 9.26321 16.5137 8.96959 16.2208C8.67596 15.9279 8.67596 15.453 8.96959 15.1601L14.9845 9.1601C15.2782 8.86721 15.7542 8.86721 16.0478 9.1601ZM15.0149 16.1904C15.5686 16.1904 16.0174 15.7427 16.0174 15.1904C16.0174 14.6381 15.5686 14.1904 15.0149 14.1904C14.4613 14.1904 14.0124 14.6381 14.0124 15.1904C14.0124 15.7427 14.4613 16.1904 15.0149 16.1904ZM10.0025 11.1904C10.5561 11.1904 11.005 10.7427 11.005 10.1904C11.005 9.63814 10.5561 9.19043 10.0025 9.19043C9.44882 9.19043 8.99999 9.63814 8.99999 10.1904C8.99999 10.7427 9.44882 11.1904 10.0025 11.1904Z"
        fill={color}
      />
    </svg>
  );
};

export default Sale;