interface IProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const New: React.FC<IProps> = ({ width = 25, height = 24, color = "#FF66A6" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 25 24" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.9 5.6001H6.1C5.212 5.6001 4.508 6.3121 4.508 7.2001L4.5 16.8001C4.5 17.6881 5.212 18.4001 6.1 18.4001H18.9C19.788 18.4001 20.5 17.6881 20.5 16.8001V7.2001C20.5 6.3121 19.788 5.6001 18.9 5.6001ZM9.7 13.7681C9.7 14.1121 9.412 14.4001 9.068 14.4001C8.868 14.4001 8.676 14.3041 8.556 14.1361L6.7 11.6001V13.9041C6.7 14.1841 6.476 14.4001 6.204 14.4001C5.932 14.4001 5.7 14.1761 5.7 13.9041V10.2321C5.7 9.8881 5.988 9.6001 6.332 9.6001H6.372C6.58 9.6001 6.772 9.6961 6.892 9.8641L8.7 12.4001V10.0961C8.7 9.8241 8.924 9.6001 9.204 9.6001C9.484 9.6001 9.7 9.8241 9.7 10.0961V13.7681ZM13.7 10.1121C13.7 10.3921 13.476 10.6081 13.204 10.6081H11.7V11.5041H13.204C13.484 11.5041 13.7 11.7281 13.7 12.0001V12.0081C13.7 12.2881 13.476 12.5041 13.204 12.5041H11.7V13.3921H13.204C13.484 13.3921 13.7 13.6161 13.7 13.8881C13.7 14.1681 13.476 14.3841 13.204 14.3841H11.18C10.804 14.3841 10.5 14.0801 10.5 13.7041V10.2641C10.5 9.9041 10.804 9.6001 11.18 9.6001H13.204C13.484 9.6001 13.7 9.8241 13.7 10.0961V10.1121ZM19.3 13.6001C19.3 14.0401 18.94 14.4001 18.5 14.4001H15.3C14.86 14.4001 14.5 14.0401 14.5 13.6001V10.0961C14.5 9.8241 14.724 9.6001 14.996 9.6001C15.268 9.6001 15.492 9.8241 15.492 10.0961V13.2081H16.396V10.8881C16.396 10.6081 16.62 10.3921 16.892 10.3921C17.164 10.3921 17.388 10.6161 17.388 10.8881V13.2001H18.284V10.0961C18.284 9.8161 18.508 9.6001 18.78 9.6001C19.052 9.6001 19.276 9.8241 19.276 10.0961V13.6001H19.3Z"
        fill={color}
      />
    </svg>
  );
};

export default New;