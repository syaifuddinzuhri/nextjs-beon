interface IProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const Checkmark: React.FC<IProps> = ({ width = 24, height = 25, color = "#29CC39" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 25" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.73798 15.713L6.96198 12.937C6.81251 12.7872 6.60959 12.703 6.39798 12.703C6.18636 12.703 5.98344 12.7872 5.83398 12.937C5.52198 13.249 5.52198 13.753 5.83398 14.065L9.17798 17.409C9.48998 17.721 9.99398 17.721 10.306 17.409L18.77 8.945C19.082 8.633 19.082 8.129 18.77 7.817C18.6205 7.66719 18.4176 7.58301 18.206 7.58301C17.9944 7.58301 17.7914 7.66719 17.642 7.817L9.73798 15.713Z"
        fill={color}
      />
    </svg>
  );
};

export default Checkmark;
