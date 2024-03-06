interface IProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const ProfilePoint: React.FC<IProps> = ({ width = 29, height = 28, color = "#FFF" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 29 28" fill="none">
      <path
        opacity="0.4"
        d="M12.1552 20.9773C17.3034 20.9773 21.4768 16.8039 21.4768 11.6557C21.4768 6.50744 17.3034 2.33398 12.1552 2.33398C7.00695 2.33398 2.8335 6.50744 2.8335 11.6557C2.8335 16.8039 7.00695 20.9773 12.1552 20.9773Z"
        fill={color}
      />
      <path
        d="M26.1318 18.6541C26.1318 22.5041 23.0051 25.6308 19.1551 25.6308C16.7751 25.6308 14.6868 24.4408 13.4268 22.6324C18.5134 22.0608 22.5618 18.0124 23.1334 12.9258C24.9418 14.1858 26.1318 16.2741 26.1318 18.6541Z"
        fill={color}
      />
    </svg>
  );
};

export default ProfilePoint;
