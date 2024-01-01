import { useMemo } from "react";
import ElementsButtonsPrimary from "./ElementsButtonsPrimary";
import styles from "./ElementsWidgetsWidget03.module.css";

const ElementsWidgetsWidget03 = ({
  iconsFlashRounded,
  iconsBookmark,
  showBase,
  showButtonText,
  baseVisible,
  elementsWidgetsWidget03Width,
  elementsWidgetsWidget03Height,
  elementsWidgetsWidget03Position,
  elementsWidgetsWidget03Top,
  elementsWidgetsWidget03Right,
  elementsWidgetsWidget03Bottom,
  elementsWidgetsWidget03Left,
  baseBackgroundColor,
  baseBackground,
  elementsButtonsPrimaryTop,
  elementsButtonsPrimaryRight,
  elementsButtonsPrimaryBottom,
  elementsButtonsPrimaryLeft,
  buttonHeight,
  buttonWidth,
  buttonTop,
  buttonRight,
  buttonBottom,
  buttonLeft,
  baseHeight,
  baseWidth,
  baseTop,
  baseRight,
  baseBottom,
  baseLeft,
  buttonTextTop,
  buttonTextLeft,
  buttonTextFontSize,
  iconsFlashRoundedTop,
  iconsFlashRoundedRight,
  iconsFlashRoundedWidth,
  iconsFlashRoundedHeight,
  createScreensDirecHeight,
  createScreensDirecWidth,
  createScreensDirecLeft,
  createScreensDirecFontSize,
  createScreensDirecLineHeight,
  elementsPlaceholderRadiuHeight,
  elementsPlaceholderRadiuWidth,
  elementsPlaceholderRadiuRight,
  elementsPlaceholderRadiuLeft,
  iconsBookmarkHeight,
  iconsBookmarkWidth,
  iconsBookmarkTop,
  iconsBookmarkBottom,
  iconsBookmarkLeft,
  dailyNewsTop,
  dailyNewsLeft,
  dailyNewsFontSize,
  dailyNewsLineHeight,
}) => {
  const elementsWidgetsWidget03Style = useMemo(() => {
    return {
      width: elementsWidgetsWidget03Width,
      height: elementsWidgetsWidget03Height,
      position: elementsWidgetsWidget03Position,
      top: elementsWidgetsWidget03Top,
      right: elementsWidgetsWidget03Right,
      bottom: elementsWidgetsWidget03Bottom,
      left: elementsWidgetsWidget03Left,
    };
  }, [
    elementsWidgetsWidget03Width,
    elementsWidgetsWidget03Height,
    elementsWidgetsWidget03Position,
    elementsWidgetsWidget03Top,
    elementsWidgetsWidget03Right,
    elementsWidgetsWidget03Bottom,
    elementsWidgetsWidget03Left,
  ]);

  const base2Style = useMemo(() => {
    return {
      backgroundColor: baseBackgroundColor,
      background: baseBackground,
    };
  }, [baseBackgroundColor, baseBackground]);

  const elementsButtonsPrimaryStyle = useMemo(() => {
    return {
      top: elementsButtonsPrimaryTop,
      right: elementsButtonsPrimaryRight,
      bottom: elementsButtonsPrimaryBottom,
      left: elementsButtonsPrimaryLeft,
    };
  }, [
    elementsButtonsPrimaryTop,
    elementsButtonsPrimaryRight,
    elementsButtonsPrimaryBottom,
    elementsButtonsPrimaryLeft,
  ]);

  const buttonStyle = useMemo(() => {
    return {
      height: buttonHeight,
      width: buttonWidth,
      top: buttonTop,
      right: buttonRight,
      bottom: buttonBottom,
      left: buttonLeft,
    };
  }, [
    buttonHeight,
    buttonWidth,
    buttonTop,
    buttonRight,
    buttonBottom,
    buttonLeft,
  ]);

  const base1Style = useMemo(() => {
    return {
      height: baseHeight,
      width: baseWidth,
      top: baseTop,
      right: baseRight,
      bottom: baseBottom,
      left: baseLeft,
    };
  }, [baseHeight, baseWidth, baseTop, baseRight, baseBottom, baseLeft]);

  const buttonTextStyle = useMemo(() => {
    return {
      top: buttonTextTop,
      left: buttonTextLeft,
      fontSize: buttonTextFontSize,
    };
  }, [buttonTextTop, buttonTextLeft, buttonTextFontSize]);

  const iconsFlashRoundedStyle = useMemo(() => {
    return {
      top: iconsFlashRoundedTop,
      right: iconsFlashRoundedRight,
      width: iconsFlashRoundedWidth,
      height: iconsFlashRoundedHeight,
    };
  }, [
    iconsFlashRoundedTop,
    iconsFlashRoundedRight,
    iconsFlashRoundedWidth,
    iconsFlashRoundedHeight,
  ]);

  const createScreensDirecStyle = useMemo(() => {
    return {
      height: createScreensDirecHeight,
      width: createScreensDirecWidth,
      left: createScreensDirecLeft,
      fontSize: createScreensDirecFontSize,
      lineHeight: createScreensDirecLineHeight,
    };
  }, [
    createScreensDirecHeight,
    createScreensDirecWidth,
    createScreensDirecLeft,
    createScreensDirecFontSize,
    createScreensDirecLineHeight,
  ]);

  const elementsPlaceholderRadiu2Style = useMemo(() => {
    return {
      height: elementsPlaceholderRadiuHeight,
      width: elementsPlaceholderRadiuWidth,
      right: elementsPlaceholderRadiuRight,
      left: elementsPlaceholderRadiuLeft,
    };
  }, [
    elementsPlaceholderRadiuHeight,
    elementsPlaceholderRadiuWidth,
    elementsPlaceholderRadiuRight,
    elementsPlaceholderRadiuLeft,
  ]);

  const iconsBookmarkStyle = useMemo(() => {
    return {
      height: iconsBookmarkHeight,
      width: iconsBookmarkWidth,
      top: iconsBookmarkTop,
      bottom: iconsBookmarkBottom,
      left: iconsBookmarkLeft,
    };
  }, [
    iconsBookmarkHeight,
    iconsBookmarkWidth,
    iconsBookmarkTop,
    iconsBookmarkBottom,
    iconsBookmarkLeft,
  ]);

  const dailyNewsStyle = useMemo(() => {
    return {
      top: dailyNewsTop,
      left: dailyNewsLeft,
      fontSize: dailyNewsFontSize,
      lineHeight: dailyNewsLineHeight,
    };
  }, [dailyNewsTop, dailyNewsLeft, dailyNewsFontSize, dailyNewsLineHeight]);

  return (
    <div
      className={styles.elementsWidgetsWidget03}
      style={elementsWidgetsWidget03Style}
    >
      <div className={styles.widget}>
        <div className={styles.base} style={base2Style} />
        <ElementsButtonsPrimary
          buttonText="Read More"
          iconsFlashRounded="/icons--flash-rounded@2x.png"
          showBase
          showButtonText
          elementsButtonsPrimaryWidth="42.29%"
          elementsButtonsPrimaryHeight="10%"
          elementsButtonsPrimaryPosition="absolute"
          elementsButtonsPrimaryTop="82.5%"
          elementsButtonsPrimaryRight="49.14%"
          elementsButtonsPrimaryBottom="7.5%"
          elementsButtonsPrimaryLeft="8.57%"
          buttonHeight="100%"
          buttonWidth="100%"
          buttonTop="0%"
          buttonRight="0%"
          buttonBottom="0%"
          buttonLeft="0%"
          baseHeight="100%"
          baseWidth="100%"
          baseTop="0%"
          baseRight="0%"
          baseBottom="0%"
          baseLeft="0%"
          buttonTextLeft="16.22%"
          buttonTextTop="calc(50% - 10px)"
          buttonTextFontSize="16px"
          iconsFlashRoundedTop="9px"
          iconsFlashRoundedRight="12px"
          iconsFlashRoundedWidth="22px"
          iconsFlashRoundedHeight="22px"
        />
        <div
          className={styles.createScreensDirec}
          style={createScreensDirecStyle}
        >
          Create screens directly in Method or add your images from Sketch…
        </div>
        <div
          className={styles.elementsPlaceholderRadiu}
          style={elementsPlaceholderRadiu2Style}
        >
          {baseVisible && <div className={styles.base} />}
        </div>
        <img
          className={styles.iconsBookmark}
          alt=""
          src={iconsBookmark}
          style={iconsBookmarkStyle}
        />
        <div className={styles.dailyNews} style={dailyNewsStyle}>
          Daily News
        </div>
      </div>
    </div>
  );
};

export default ElementsWidgetsWidget03;
