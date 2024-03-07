interface IProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const Premium: React.FC<IProps> = ({ width = 24, height = 24, color = "#fff" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
      <path
        d="M20.0918 14.3257L20.2848 12.4316C20.3878 11.421 20.4558 10.7537 20.4024 10.3332L20.4211 10.3333C21.2931 10.3333 22 9.58714 22 8.66667C22 7.74619 21.2931 7 20.4211 7C19.549 7 18.8421 7.74619 18.8421 8.66667C18.8421 9.08296 18.9867 9.4636 19.2258 9.7557C18.8826 9.9793 18.4338 10.4511 17.7584 11.1613L17.7584 11.1613C17.2381 11.7084 16.9779 11.9819 16.6877 12.0243C16.5269 12.0478 16.363 12.0236 16.2145 11.9546C15.9465 11.83 15.7678 11.4919 15.4105 10.8155L13.5268 7.25044C13.3063 6.83319 13.1218 6.48397 12.9554 6.20294C13.6379 5.83541 14.1053 5.08643 14.1053 4.22222C14.1053 2.99492 13.1627 2 12 2C10.8373 2 9.89474 2.99492 9.89474 4.22222C9.89474 5.08643 10.3621 5.83541 11.0446 6.20294C10.8782 6.48399 10.6937 6.83316 10.4732 7.25045L8.58953 10.8155C8.23217 11.4919 8.05348 11.83 7.78548 11.9546C7.63699 12.0236 7.47313 12.0478 7.31231 12.0243C7.02208 11.9819 6.76191 11.7084 6.24157 11.1613C5.56617 10.4511 5.11743 9.97929 4.77424 9.75569C5.0133 9.4636 5.15789 9.08296 5.15789 8.66667C5.15789 7.74619 4.45098 7 3.57895 7C2.70692 7 2 7.74619 2 8.66667C2 9.58714 2.70692 10.3333 3.57895 10.3333L3.59759 10.3332C3.54423 10.7537 3.61223 11.421 3.71521 12.4316L3.90821 14.3257C4.01535 15.377 4.10443 16.3774 4.21355 17.2778H19.7864C19.8956 16.3774 19.9847 15.377 20.0918 14.3257Z"
        fill={color}
      />
      <path
        d="M10.8548 22H13.1452C16.1304 22 17.623 22 18.6189 21.0591C19.0535 20.6484 19.3288 19.908 19.5274 18.9444H4.47259C4.67121 19.908 4.94646 20.6484 5.38113 21.0591C6.37702 22 7.86961 22 10.8548 22Z"
        fill={color}
      />
    </svg>
  );
};

export default Premium;