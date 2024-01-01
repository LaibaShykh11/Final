import { useMemo } from "react";
import styles from "./ElementsPlaceholderRadiu.module.css";

const ElementsPlaceholderRadiu = ({
  showBase,
  elementsPlaceholderRadiuWidth,
  elementsPlaceholderRadiuHeight,
  elementsPlaceholderRadiuPosition,
  elementsPlaceholderRadiuTop,
  elementsPlaceholderRadiuRight,
  elementsPlaceholderRadiuBottom,
  elementsPlaceholderRadiuLeft,
}) => {
  const elementsPlaceholderRadiu1Style = useMemo(() => {
    return {
      width: elementsPlaceholderRadiuWidth,
      height: elementsPlaceholderRadiuHeight,
      position: elementsPlaceholderRadiuPosition,
      top: elementsPlaceholderRadiuTop,
      right: elementsPlaceholderRadiuRight,
      bottom: elementsPlaceholderRadiuBottom,
      left: elementsPlaceholderRadiuLeft,
    };
  }, [
    elementsPlaceholderRadiuWidth,
    elementsPlaceholderRadiuHeight,
    elementsPlaceholderRadiuPosition,
    elementsPlaceholderRadiuTop,
    elementsPlaceholderRadiuRight,
    elementsPlaceholderRadiuBottom,
    elementsPlaceholderRadiuLeft,
  ]);

  return (
    <div
      className={styles.elementsPlaceholderRadiu}
      style={elementsPlaceholderRadiu1Style}
    >
      {showBase && <div className={styles.base} />}
    </div>
  );
};

export default ElementsPlaceholderRadiu;
