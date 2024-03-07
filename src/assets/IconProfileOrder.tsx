interface IProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const ProfileOrder: React.FC<IProps> = ({ width = 29, height = 28, color = "#FFF" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 29 28" fill="none">
      <path
        d="M21.0337 6.19581L14.442 2.64914C13.742 2.27581 12.9137 2.27581 12.2137 2.64914L5.63372 6.19581C5.15538 6.46414 4.85205 6.97747 4.85205 7.53747C4.85205 8.10914 5.14372 8.62247 5.63372 8.87914L12.2254 12.4258C12.5754 12.6125 12.9604 12.7058 13.3337 12.7058C13.7071 12.7058 14.1037 12.6125 14.442 12.4258L21.0337 8.87914C21.5121 8.62247 21.8154 8.10914 21.8154 7.53747C21.8154 6.97747 21.5121 6.46414 21.0337 6.19581Z"
        fill={color}
      />
      <path
        d="M11.1402 13.663L5.01516 10.6063C4.53683 10.3613 4.00016 10.3963 3.54516 10.6647C3.10183 10.9447 2.8335 11.423 2.8335 11.948V17.7347C2.8335 18.738 3.3935 19.6363 4.29183 20.0913L10.4168 23.148C10.6268 23.253 10.8602 23.3113 11.0935 23.3113C11.3618 23.3113 11.6418 23.2297 11.8868 23.0897C12.3302 22.8097 12.5985 22.3313 12.5985 21.8063V16.0197C12.5868 15.0163 12.0268 14.118 11.1402 13.663Z"
        fill={color}
      />
      <path
        d="M23.8334 11.948V14.818C23.2734 14.6547 22.6784 14.5847 22.0834 14.5847C20.4967 14.5847 18.9451 15.133 17.7201 16.113C16.0401 17.4313 15.0834 19.4263 15.0834 21.5847C15.0834 22.1563 15.1534 22.728 15.3051 23.2763C15.1301 23.253 14.9551 23.183 14.7917 23.078C14.3484 22.8097 14.0801 22.3313 14.0801 21.8063V16.0197C14.0801 15.0163 14.6401 14.118 15.5267 13.663L21.6517 10.6063C22.1301 10.3613 22.6667 10.3963 23.1217 10.6647C23.5651 10.9447 23.8334 11.423 23.8334 11.948Z"
        fill={color}
      />
      <path
        d="M26.1435 18.2824C25.1868 17.1041 23.7285 16.3574 22.0835 16.3574C20.8468 16.3574 19.7035 16.7891 18.8052 17.5124C17.5918 18.4691 16.8335 19.9508 16.8335 21.6074C16.8335 22.5874 17.1135 23.5208 17.5918 24.3141C17.9068 24.8391 18.3035 25.2941 18.7702 25.6674H18.7818C19.6802 26.4141 20.8352 26.8574 22.0835 26.8574C23.4135 26.8574 24.6152 26.3674 25.5368 25.5508C25.9452 25.2008 26.2952 24.7808 26.5752 24.3141C27.0535 23.5208 27.3335 22.5874 27.3335 21.6074C27.3335 20.3474 26.8902 19.1808 26.1435 18.2824ZM24.7202 20.9541L21.9202 23.5441C21.7568 23.6958 21.5352 23.7774 21.3252 23.7774C21.1035 23.7774 20.8818 23.6958 20.7068 23.5208L19.4118 22.2258C19.0735 21.8874 19.0735 21.3274 19.4118 20.9891C19.7502 20.6508 20.3102 20.6508 20.6485 20.9891L21.3485 21.6891L23.5302 19.6708C23.8802 19.3441 24.4402 19.3674 24.7668 19.7174C25.1052 20.0791 25.0818 20.6274 24.7202 20.9541Z"
        fill={color}
      />
    </svg>
  );
};

export default ProfileOrder;