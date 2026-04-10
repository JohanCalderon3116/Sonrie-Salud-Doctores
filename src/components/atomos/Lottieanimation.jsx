import Lottie from "react-lottie";
const LottieComponent = Lottie.default || Lottie;
export const Lottieanimation = ({ alto, ancho, animacion }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animacion,
  };
  return (
    <>
      <LottieComponent
        options={defaultOptions}
        height={`${alto}px`}
        width={`${ancho}px`}
        isClickToPauseDisabled
      ></LottieComponent>
    </>
  );
};
