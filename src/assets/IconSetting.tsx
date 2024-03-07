interface IProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const Setting: React.FC<IProps> = ({ width = 24, height = 25, color = "#26334D" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 25" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.2788 2.34349C13.9085 2.19125 13.439 2.19125 12.5 2.19125C11.561 2.19125 11.0915 2.19125 10.7212 2.34349C10.2274 2.54648 9.83509 2.93583 9.63056 3.42589C9.53719 3.64959 9.50065 3.90975 9.48635 4.28924C9.46534 4.84693 9.17716 5.36315 8.69017 5.64218C8.20318 5.92122 7.60864 5.91079 7.11149 5.65001C6.77318 5.47255 6.52789 5.37388 6.28599 5.34227C5.75609 5.27303 5.22018 5.41555 4.79616 5.73845C4.47814 5.98063 4.24339 6.38415 3.7739 7.19119C3.30441 7.99822 3.06967 8.40174 3.01735 8.79616C2.94758 9.32205 3.09118 9.85391 3.41655 10.2747C3.56506 10.4668 3.77377 10.6283 4.0977 10.8303C4.57391 11.1272 4.88032 11.6331 4.88029 12.1913C4.88026 12.7494 4.57386 13.2552 4.0977 13.5521C3.77372 13.7541 3.56497 13.9156 3.41645 14.1077C3.09108 14.5285 2.94749 15.0604 3.01725 15.5863C3.06957 15.9807 3.30432 16.3842 3.7738 17.1913C4.24329 17.9983 4.47804 18.4018 4.79606 18.644C5.22008 18.9669 5.75599 19.1094 6.28589 19.0402C6.52778 19.0086 6.77305 18.9099 7.11133 18.7325C7.60852 18.4717 8.2031 18.4612 8.69012 18.7403C9.17714 19.0193 9.46533 19.5356 9.48635 20.0933C9.50065 20.4728 9.53719 20.7329 9.63056 20.9566C9.83509 21.4467 10.2274 21.836 10.7212 22.039C11.0915 22.1913 11.561 22.1913 12.5 22.1913C13.439 22.1913 13.9085 22.1913 14.2788 22.039C14.7726 21.836 15.1649 21.4467 15.3694 20.9566C15.4628 20.7329 15.4994 20.4727 15.5137 20.0932C15.5347 19.5356 15.8228 19.0194 16.3098 18.7403C16.7968 18.4612 17.3914 18.4716 17.8886 18.7324C18.2269 18.9098 18.4721 19.0085 18.714 19.0401C19.2439 19.1093 19.7798 18.9668 20.2038 18.6439C20.5219 18.4017 20.7566 17.9982 21.2261 17.1912C21.6956 16.3842 21.9303 15.9806 21.9827 15.5862C22.0524 15.0603 21.9088 14.5285 21.5835 14.1076C21.4349 13.9155 21.2262 13.7541 20.9022 13.5521C20.4261 13.2551 20.1197 12.7493 20.1197 12.1912C20.1197 11.6331 20.4261 11.1273 20.9022 10.8304C21.2263 10.6284 21.435 10.4669 21.5836 10.2748C21.9089 9.85398 22.0525 9.32212 21.9828 8.79623C21.9304 8.40181 21.6957 7.99829 21.2262 7.19125C20.7567 6.38422 20.522 5.9807 20.2039 5.73852C19.7799 5.41561 19.244 5.2731 18.7141 5.34234C18.4722 5.37394 18.2269 5.47261 17.8887 5.65005C17.3915 5.91085 16.7969 5.92127 16.3099 5.64222C15.8229 5.36316 15.5347 4.84691 15.5136 4.28919C15.4993 3.90973 15.4628 3.64958 15.3694 3.42589C15.1649 2.93583 14.7726 2.54648 14.2788 2.34349ZM12.5 15.1913C14.1695 15.1913 15.5228 13.8481 15.5228 12.1913C15.5228 10.5344 14.1695 9.19125 12.5 9.19125C10.8305 9.19125 9.47716 10.5344 9.47716 12.1913C9.47716 13.8481 10.8305 15.1913 12.5 15.1913Z"
        fill={color}
      />
    </svg>
  );
};

export default Setting;