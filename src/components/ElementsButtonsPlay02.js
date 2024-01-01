import { useMemo } from "react";
import styles from "./ElementsButtonsPlay02.module.css";

const ElementsButtonsPlay02 = ({
  elementsButtonsPlay02Elem,
  elementsButtonsPlay02Width,
  elementsButtonsPlay02Height,
  elementsButtonsPlay02Position,
  elementsButtonsPlay02Top,
  elementsButtonsPlay02Right,
  elementsButtonsPlay02Bottom,
  elementsButtonsPlay02Left,
  elementsButtonsPlay02MaxWidth,
  elementsButtonsPlay02Overflow,
  elementsButtonsPlay02MaxHeight,
}) => {
  const elementsButtonsPlay02Style = useMemo(() => {
    return {
      width: elementsButtonsPlay02Width,
      height: elementsButtonsPlay02Height,
      position: elementsButtonsPlay02Position,
      top: elementsButtonsPlay02Top,
      right: elementsButtonsPlay02Right,
      bottom: elementsButtonsPlay02Bottom,
      left: elementsButtonsPlay02Left,
      maxWidth: elementsButtonsPlay02MaxWidth,
      overflow: elementsButtonsPlay02Overflow,
      maxHeight: elementsButtonsPlay02MaxHeight,
    };
  }, [
    elementsButtonsPlay02Width,
    elementsButtonsPlay02Height,
    elementsButtonsPlay02Position,
    elementsButtonsPlay02Top,
    elementsButtonsPlay02Right,
    elementsButtonsPlay02Bottom,
    elementsButtonsPlay02Left,
    elementsButtonsPlay02MaxWidth,
    elementsButtonsPlay02Overflow,
    elementsButtonsPlay02MaxHeight,
  ]);

  return (
    <img
      className={styles.elementsButtonsPlay02}
      alt=""
      src={elementsButtonsPlay02Elem}
      style={elementsButtonsPlay02Style}
    />
  );
};

export default ElementsButtonsPlay02;
