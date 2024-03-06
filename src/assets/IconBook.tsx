interface IProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const Book: React.FC<IProps> = ({ width = 24, height = 25, color = "#26334D" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 25" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.72718 3.09526C5.03258 2.79605 5.46135 2.60098 6.27103 2.49432C7.10452 2.38453 8.2092 2.38281 9.7931 2.38281H14.2069C15.7908 2.38281 16.8955 2.38453 17.729 2.49432C18.5387 2.60098 18.9674 2.79605 19.2728 3.09526C19.5782 3.39446 19.7773 3.81454 19.8862 4.60781C19.9982 5.4244 20 6.50669 20 8.05849V15.8963L7.34563 15.8963C6.44305 15.896 5.82716 15.8958 5.29899 16.0345C4.82674 16.1584 4.38867 16.3609 4 16.6271V8.05849C4 6.50669 4.00176 5.4244 4.11382 4.60781C4.22268 3.81454 4.42179 3.39446 4.72718 3.09526ZM7.58621 6.1666C7.12914 6.1666 6.75862 6.52961 6.75862 6.97741C6.75862 7.42521 7.12914 7.78822 7.58621 7.78822H16.4138C16.8709 7.78822 17.2414 7.42521 17.2414 6.97741C17.2414 6.52961 16.8709 6.1666 16.4138 6.1666H7.58621ZM6.75862 10.7612C6.75862 10.3134 7.12914 9.95038 7.58621 9.95038H13.1034C13.5605 9.95038 13.931 10.3134 13.931 10.7612C13.931 11.209 13.5605 11.572 13.1034 11.572H7.58621C7.12914 11.572 6.75862 11.209 6.75862 10.7612Z"
        fill={color}
      />
      <path
        d="M7.47341 17.5179C6.39395 17.5179 6.01657 17.5249 5.72738 17.6008C4.93365 17.8092 4.30088 18.3872 4.02952 19.1386C4.0463 19.5211 4.07259 19.8574 4.11382 20.1578C4.22268 20.9511 4.42179 21.3712 4.72718 21.6704C5.03258 21.9696 5.46135 22.1647 6.27103 22.2713C7.10452 22.3811 8.2092 22.3828 9.7931 22.3828H14.2069C15.7908 22.3828 16.8955 22.3811 17.729 22.2713C18.5387 22.1647 18.9674 21.9696 19.2728 21.6704C19.4894 21.4581 19.6526 21.1851 19.768 20.7612H7.58621C7.12914 20.7612 6.75862 20.3982 6.75862 19.9504C6.75862 19.5026 7.12914 19.1396 7.58621 19.1396H19.9704C19.9909 18.6736 19.9972 18.1392 19.9991 17.5179H7.47341Z"
        fill={color}
      />
    </svg>
  );
};

export default Book;
