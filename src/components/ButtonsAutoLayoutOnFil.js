import { useMemo } from "react";
import styles from "./ButtonsAutoLayoutOnFil.module.css";

const ButtonsAutoLayoutOnFil = ({
  iconsArrowsarrowRight,
  buttonsAutoLayoutOnFilBackgroundColor,
  buttonsAutoLayoutOnFilPosition,
  buttonsAutoLayoutOnFilTop,
  buttonsAutoLayoutOnFilLeft,
}) => {
  const buttonsAutoLayoutOnFilStyle = useMemo(() => {
    return {
      backgroundColor: buttonsAutoLayoutOnFilBackgroundColor,
      position: buttonsAutoLayoutOnFilPosition,
      top: buttonsAutoLayoutOnFilTop,
      left: buttonsAutoLayoutOnFilLeft,
    };
  }, [
    buttonsAutoLayoutOnFilBackgroundColor,
    buttonsAutoLayoutOnFilPosition,
    buttonsAutoLayoutOnFilTop,
    buttonsAutoLayoutOnFilLeft,
  ]);

  return (
    <div
      className={styles.buttonsAutoLayoutOnFil}
      style={buttonsAutoLayoutOnFilStyle}
    >
      <img
        className={styles.iconsarrowsarrowRight}
        alt=""
        src={iconsArrowsarrowRight}
      />
    </div>
  );
};

export default ButtonsAutoLayoutOnFil;
