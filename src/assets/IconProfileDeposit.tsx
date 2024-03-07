interface IProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const ProfileDeposit: React.FC<IProps> = ({ width = 29, height = 28, color = "#FFF" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 29 28" fill="none">
      <path
        opacity="0.5"
        d="M11.9168 23.3327H16.5835C17.3529 23.3327 18.055 23.3327 18.6972 23.3254L18.2273 22.8555C17.2022 21.8304 17.2022 20.1683 18.2273 19.1432C18.6656 18.7049 19.2203 18.454 19.7918 18.3905V16.3327C19.7918 14.8829 20.9671 13.7077 22.4168 13.7077C23.8666 13.7077 25.0418 14.8829 25.0418 16.3327V18.3905C25.303 18.4195 25.5606 18.4877 25.8052 18.595C25.9168 17.4027 25.9168 15.908 25.9168 13.9993C25.9168 13.4838 25.9168 12.1234 25.9146 11.666H2.5857C2.5835 12.1234 2.5835 13.4838 2.5835 13.9993C2.5835 18.3991 2.5835 20.599 3.95033 21.9658C5.31717 23.3327 7.51705 23.3327 11.9168 23.3327Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.7981 23.9527C22.1398 24.2944 22.6938 24.2944 23.0355 23.9527L25.3689 21.6194C25.7106 21.2777 25.7106 20.7236 25.3689 20.3819C25.0272 20.0402 24.4732 20.0402 24.1314 20.3819L23.2918 21.2215V16.334C23.2918 15.8507 22.9001 15.459 22.4168 15.459C21.9336 15.459 21.5418 15.8507 21.5418 16.334V21.2215L20.7022 20.3819C20.3605 20.0402 19.8065 20.0402 19.4648 20.3819C19.1231 20.7236 19.1231 21.2777 19.4648 21.6194L21.7981 23.9527Z"
        fill={color}
      />
      <path
        d="M14.8333 17.791C14.3501 17.791 13.9583 18.1828 13.9583 18.666C13.9583 19.1493 14.3501 19.541 14.8333 19.541H16.5833C17.0666 19.541 17.4583 19.1493 17.4583 18.666C17.4583 18.1828 17.0666 17.791 16.5833 17.791H14.8333Z"
        fill={color}
      />
      <path
        d="M7.25 17.791C6.76675 17.791 6.375 18.1828 6.375 18.666C6.375 19.1493 6.76675 19.541 7.25 19.541H11.9167C12.3999 19.541 12.7917 19.1493 12.7917 18.666C12.7917 18.1828 12.3999 17.791 11.9167 17.791H7.25Z"
        fill={color}
      />
      <path
        d="M11.9108 4.66602H16.5895C21.0006 4.66602 23.2062 4.66602 24.5765 5.96776C25.5632 6.90503 25.8395 8.2536 25.9168 10.4993V11.666H2.5835V10.4993C2.66085 8.2536 2.93711 6.90503 3.92378 5.96776C5.29413 4.66602 7.49969 4.66602 11.9108 4.66602Z"
        fill={color}
      />
    </svg>
  );
};

export default ProfileDeposit;