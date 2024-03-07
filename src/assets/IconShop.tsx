interface IProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const Shop: React.FC<IProps> = ({ width = 25, height = 24, color = "white" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 25 24" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.00012 7.01346C9.00004 7.00898 9 7.00449 9 7V6C9 3.92893 10.6789 2.25 12.75 2.25C14.8211 2.25 16.5 3.92893 16.5 6V7C16.5 7.0045 16.5 7.00898 16.4999 7.01346C17.7972 7.04975 18.5875 7.18393 19.1925 7.67997C20.022 8.35995 20.2529 9.5144 20.7146 11.8233L21.3146 14.8233C21.9787 18.1437 22.3108 19.8039 21.4106 20.902C20.5104 22 18.8173 22 15.4312 22H10.0688C6.68262 22 4.98954 22 4.08936 20.902C3.18919 19.8039 3.52123 18.1437 4.18532 14.8233L4.78532 11.8233C5.2471 9.5144 5.47799 8.35995 6.30742 7.67997C6.91251 7.18392 7.70273 7.04975 9.00012 7.01346ZM10.5 6C10.5 4.75736 11.5074 3.75 12.75 3.75C13.9926 3.75 15 4.75736 15 6V7C15 7 15 7 15 7C14.9444 6.99999 14.8881 7 14.8312 7H10.6688C10.6118 7 10.5556 7 10.5 7.00001C10.5 7.00001 10.5 7.00001 10.5 7.00001V6ZM12.7504 17.25C11.7719 17.25 10.9374 16.625 10.6282 15.7501C10.4902 15.3595 10.0617 15.1548 9.67115 15.2929C9.28061 15.4309 9.07592 15.8594 9.21395 16.2499C9.72839 17.7054 11.1164 18.75 12.7504 18.75C14.3843 18.75 15.7724 17.7054 16.2868 16.2499C16.4248 15.8594 16.2201 15.4309 15.8296 15.2929C15.4391 15.1548 15.0106 15.3595 14.8725 15.7501C14.5633 16.625 13.7289 17.25 12.7504 17.25Z"
        fill={color}
      />
    </svg>
  );
};

export default Shop;