interface IProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const Voucher: React.FC<IProps> = ({ width = 463, height = 72, color = "#FF6633" }) => {
  return (
    // <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 410 72" fill="none">
    //   <mask id="path-1-inside-1_1194_22216" fill="white">
    //     <path
    //       fillRule="evenodd"
    //       clipRule="evenodd"
    //       d="M0 4C0 1.79086 1.79086 0 4 0H406C408.209 0 410 1.79086 410 4V28.0451C405.984 28.4718 402.855 31.8705 402.855 36C402.855 40.1295 405.984 43.5282 410 43.9549V68C410 70.2091 408.209 72 406 72H4C1.79086 72 0 70.2091 0 68V43.81C3.581 43.0151 6.25879 39.8203 6.25879 36C6.25879 32.1797 3.581 28.9849 0 28.19V4Z"
    //     />
    //   </mask>
    //   <path
    //     fillRule="evenodd"
    //     clipRule="evenodd"
    //     d="M0 4C0 1.79086 1.79086 0 4 0H406C408.209 0 410 1.79086 410 4V28.0451C405.984 28.4718 402.855 31.8705 402.855 36C402.855 40.1295 405.984 43.5282 410 43.9549V68C410 70.2091 408.209 72 406 72H4C1.79086 72 0 70.2091 0 68V43.81C3.581 43.0151 6.25879 39.8203 6.25879 36C6.25879 32.1797 3.581 28.9849 0 28.19V4Z"
    //     fill={color}
    //     fillOpacity="0.05"
    //   />
    //   <path
    //     d="M410 28.0451L410.106 29.0395L411 28.9445V28.0451H410ZM410 43.9549H411V43.0555L410.106 42.9605L410 43.9549ZM0 43.81L-0.216686 42.8337L-1 43.0076V43.81H0ZM0 28.19H-1V28.9924L-0.216687 29.1663L0 28.19ZM4 -1C1.23858 -1 -1 1.23858 -1 4H1C1 2.34315 2.34315 1 4 1V-1ZM406 -1H4V1H406V-1ZM411 4C411 1.23858 408.761 -1 406 -1V1C407.657 1 409 2.34315 409 4H411ZM411 28.0451V4H409V28.0451H411ZM403.855 36C403.855 32.3873 406.592 29.4128 410.106 29.0395L409.894 27.0507C405.375 27.5308 401.855 31.3537 401.855 36H403.855ZM410.106 42.9605C406.592 42.5872 403.855 39.6127 403.855 36H401.855C401.855 40.6463 405.375 44.4692 409.894 44.9493L410.106 42.9605ZM411 68V43.9549H409V68H411ZM406 73C408.761 73 411 70.7614 411 68H409C409 69.6569 407.657 71 406 71V73ZM4 73H406V71H4V73ZM-1 68C-1 70.7614 1.23857 73 4 73V71C2.34314 71 1 69.6569 1 68H-1ZM-1 43.81V68H1V43.81H-1ZM5.25879 36C5.25879 39.3415 2.91648 42.1383 -0.216686 42.8337L0.216686 44.7862C4.24552 43.892 7.25879 40.2991 7.25879 36H5.25879ZM-0.216687 29.1663C2.91648 29.8617 5.25879 32.6585 5.25879 36H7.25879C7.25879 31.7009 4.24552 28.108 0.216687 27.2138L-0.216687 29.1663ZM-1 4V28.19H1V4H-1Z"
    //     fill={color}
    //     fillOpacity="0.2"
    //     mask="url(#path-1-inside-1_1194_22216)"
    //   />
    // </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 463 72" fill="none">
      <mask id="path-1-inside-1_1896_7718" fill="white">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 4C0 1.79086 1.79086 0 4 0H459C461.209 0 463 1.79086 463 4V28.252C459.55 29.1401 457 32.2723 457 36C457 39.7277 459.55 42.8599 463 43.748V68C463 70.2091 461.209 72 459 72H4.00001C1.79087 72 0 70.2091 0 68V43.4185C2.93183 42.2317 5 39.3574 5 36C5 32.6426 2.93183 29.7683 0 28.5815V4Z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 4C0 1.79086 1.79086 0 4 0H459C461.209 0 463 1.79086 463 4V28.252C459.55 29.1401 457 32.2723 457 36C457 39.7277 459.55 42.8599 463 43.748V68C463 70.2091 461.209 72 459 72H4.00001C1.79087 72 0 70.2091 0 68V43.4185C2.93183 42.2317 5 39.3574 5 36C5 32.6426 2.93183 29.7683 0 28.5815V4Z"
        fill={color}
        fillOpacity="0.05"
      />
      <path
        d="M463 28.252L463.249 29.2205L464 29.0272V28.252H463ZM463 43.748H464V42.9728L463.249 42.7795L463 43.748ZM0 43.4185L-0.375215 42.4915L-1 42.7445V43.4185H0ZM0 28.5815H-1V29.2555L-0.375215 29.5085L0 28.5815ZM4 -1C1.23858 -1 -1 1.23858 -1 4H1C1 2.34315 2.34315 1 4 1V-1ZM459 -1H4V1H459V-1ZM464 4C464 1.23858 461.761 -1 459 -1V1C460.657 1 462 2.34315 462 4H464ZM464 28.252V4H462V28.252H464ZM458 36C458 32.7397 460.23 29.9976 463.249 29.2205L462.751 27.2836C458.869 28.2826 456 31.805 456 36H458ZM463.249 42.7795C460.23 42.0024 458 39.2603 458 36H456C456 40.195 458.869 43.7174 462.751 44.7164L463.249 42.7795ZM464 68V43.748H462V68H464ZM459 73C461.761 73 464 70.7614 464 68H462C462 69.6569 460.657 71 459 71V73ZM4.00001 73H459V71H4.00001V73ZM-1 68C-1 70.7614 1.23859 73 4.00001 73V71C2.34315 71 1 69.6568 1 68H-1ZM-1 43.4185V68H1V43.4185H-1ZM4 36C4 38.9361 2.19198 41.4524 -0.375215 42.4915L0.375215 44.3454C3.67168 43.011 6 39.7786 6 36H4ZM-0.375215 29.5085C2.19198 30.5476 4 33.0639 4 36H6C6 32.2214 3.67168 28.989 0.375215 27.6546L-0.375215 29.5085ZM-1 4V28.5815H1V4H-1Z"
        fill={color}
        fillOpacity="0.2"
        mask="url(#path-1-inside-1_1896_7718)"
      />
    </svg>
  );
};

export default Voucher;
