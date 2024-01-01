import { useMemo } from "react";
import styles from "./ElementsWidgetsWidget02.module.css";

const ElementsWidgetsWidget02 = ({
  iconsStats,
  iconsStatsCopy2,
  iconsStatsCopy,
  iconsStatsCopy3,
  elementsButtonsIcon32px,
  showTaxes,
  showTransactions,
  elementsWidgetsWidget02Width,
  elementsWidgetsWidget02Height,
  elementsWidgetsWidget02Position,
  elementsWidgetsWidget02Top,
  elementsWidgetsWidget02Right,
  elementsWidgetsWidget02Bottom,
  elementsWidgetsWidget02Left,
  baseBackgroundColor,
  featuresHeight,
  featuresWidth,
  featuresTop,
  featuresRight,
  featuresBottom,
  feature1Height,
  feature1Width,
  feature1Right,
  feature1Bottom,
  iconsStatsWidth,
  iconsStatsRight,
  taxesTop,
  taxesLeft,
  taxesFontSize,
  taxesLineHeight,
  feature2Height,
  feature2Width,
  feature2Top,
  feature2Right,
  feature2Bottom,
  iconsStatsCopy2Height,
  iconsStatsCopy2Width,
  iconsStatsCopy2Top,
  iconsStatsCopy2Right,
  iconsStatsCopy2Bottom,
  totalSalesTop,
  totalSalesLeft,
  totalSalesFontSize,
  totalSalesLineHeight,
  feature3Height,
  feature3Width,
  feature3Right,
  feature3Bottom,
  feature3Left,
  iconsStatsCopyWidth,
  iconsStatsCopyRight,
  transactionsTop,
  transactionsLeft,
  transactionsFontSize,
  transactionsLineHeight,
  feature4Height,
  feature4Width,
  feature4Top,
  feature4Right,
  feature4Bottom,
  feature4Left,
  iconsStatsCopy3Height,
  iconsStatsCopy3Width,
  iconsStatsCopy3Top,
  iconsStatsCopy3Right,
  iconsStatsCopy3Bottom,
  profitTop,
  profitLeft,
  profitFontSize,
  profitLineHeight,
  elementsPlaceholderRadiuWidth,
  elementsPlaceholderRadiuRight,
  elementsPlaceholderRadiuBottom,
  elementsPlaceholderRadiuLeft,
  elementsButtonsIcon32Top,
  elementsButtonsIcon32Right,
  elementsButtonsIcon32Width,
  elementsButtonsIcon32Height,
  checkOutEachWidth,
  checkOutEachLeft,
  checkOutEachFontSize,
  checkOutEachLineHeight,
  activityTop,
  activityLeft,
  activityFontSize,
  activityLineHeight,
}) => {
  const elementsWidgetsWidget02Style = useMemo(() => {
    return {
      width: elementsWidgetsWidget02Width,
      height: elementsWidgetsWidget02Height,
      position: elementsWidgetsWidget02Position,
      top: elementsWidgetsWidget02Top,
      right: elementsWidgetsWidget02Right,
      bottom: elementsWidgetsWidget02Bottom,
      left: elementsWidgetsWidget02Left,
    };
  }, [
    elementsWidgetsWidget02Width,
    elementsWidgetsWidget02Height,
    elementsWidgetsWidget02Position,
    elementsWidgetsWidget02Top,
    elementsWidgetsWidget02Right,
    elementsWidgetsWidget02Bottom,
    elementsWidgetsWidget02Left,
  ]);

  const baseStyle = useMemo(() => {
    return {
      backgroundColor: baseBackgroundColor,
    };
  }, [baseBackgroundColor]);

  const featuresStyle = useMemo(() => {
    return {
      height: featuresHeight,
      width: featuresWidth,
      top: featuresTop,
      right: featuresRight,
      bottom: featuresBottom,
    };
  }, [
    featuresHeight,
    featuresWidth,
    featuresTop,
    featuresRight,
    featuresBottom,
  ]);

  const feature1Style = useMemo(() => {
    return {
      height: feature1Height,
      width: feature1Width,
      right: feature1Right,
      bottom: feature1Bottom,
    };
  }, [feature1Height, feature1Width, feature1Right, feature1Bottom]);

  const iconsStatsStyle = useMemo(() => {
    return {
      width: iconsStatsWidth,
      right: iconsStatsRight,
    };
  }, [iconsStatsWidth, iconsStatsRight]);

  const taxesStyle = useMemo(() => {
    return {
      top: taxesTop,
      left: taxesLeft,
      fontSize: taxesFontSize,
      lineHeight: taxesLineHeight,
    };
  }, [taxesTop, taxesLeft, taxesFontSize, taxesLineHeight]);

  const feature2Style = useMemo(() => {
    return {
      height: feature2Height,
      width: feature2Width,
      top: feature2Top,
      right: feature2Right,
      bottom: feature2Bottom,
    };
  }, [
    feature2Height,
    feature2Width,
    feature2Top,
    feature2Right,
    feature2Bottom,
  ]);

  const iconsStatsCopy2Style = useMemo(() => {
    return {
      height: iconsStatsCopy2Height,
      width: iconsStatsCopy2Width,
      top: iconsStatsCopy2Top,
      right: iconsStatsCopy2Right,
      bottom: iconsStatsCopy2Bottom,
    };
  }, [
    iconsStatsCopy2Height,
    iconsStatsCopy2Width,
    iconsStatsCopy2Top,
    iconsStatsCopy2Right,
    iconsStatsCopy2Bottom,
  ]);

  const totalSalesStyle = useMemo(() => {
    return {
      top: totalSalesTop,
      left: totalSalesLeft,
      fontSize: totalSalesFontSize,
      lineHeight: totalSalesLineHeight,
    };
  }, [totalSalesTop, totalSalesLeft, totalSalesFontSize, totalSalesLineHeight]);

  const feature3Style = useMemo(() => {
    return {
      height: feature3Height,
      width: feature3Width,
      right: feature3Right,
      bottom: feature3Bottom,
      left: feature3Left,
    };
  }, [
    feature3Height,
    feature3Width,
    feature3Right,
    feature3Bottom,
    feature3Left,
  ]);

  const iconsStatsCopyStyle = useMemo(() => {
    return {
      width: iconsStatsCopyWidth,
      right: iconsStatsCopyRight,
    };
  }, [iconsStatsCopyWidth, iconsStatsCopyRight]);

  const transactionsStyle = useMemo(() => {
    return {
      top: transactionsTop,
      left: transactionsLeft,
      fontSize: transactionsFontSize,
      lineHeight: transactionsLineHeight,
    };
  }, [
    transactionsTop,
    transactionsLeft,
    transactionsFontSize,
    transactionsLineHeight,
  ]);

  const feature4Style = useMemo(() => {
    return {
      height: feature4Height,
      width: feature4Width,
      top: feature4Top,
      right: feature4Right,
      bottom: feature4Bottom,
      left: feature4Left,
    };
  }, [
    feature4Height,
    feature4Width,
    feature4Top,
    feature4Right,
    feature4Bottom,
    feature4Left,
  ]);

  const iconsStatsCopy3Style = useMemo(() => {
    return {
      height: iconsStatsCopy3Height,
      width: iconsStatsCopy3Width,
      top: iconsStatsCopy3Top,
      right: iconsStatsCopy3Right,
      bottom: iconsStatsCopy3Bottom,
    };
  }, [
    iconsStatsCopy3Height,
    iconsStatsCopy3Width,
    iconsStatsCopy3Top,
    iconsStatsCopy3Right,
    iconsStatsCopy3Bottom,
  ]);

  const profitStyle = useMemo(() => {
    return {
      top: profitTop,
      left: profitLeft,
      fontSize: profitFontSize,
      lineHeight: profitLineHeight,
    };
  }, [profitTop, profitLeft, profitFontSize, profitLineHeight]);

  const elementsPlaceholderRadiuStyle = useMemo(() => {
    return {
      width: elementsPlaceholderRadiuWidth,
      right: elementsPlaceholderRadiuRight,
      bottom: elementsPlaceholderRadiuBottom,
      left: elementsPlaceholderRadiuLeft,
    };
  }, [
    elementsPlaceholderRadiuWidth,
    elementsPlaceholderRadiuRight,
    elementsPlaceholderRadiuBottom,
    elementsPlaceholderRadiuLeft,
  ]);

  const elementsButtonsIcon32Style = useMemo(() => {
    return {
      top: elementsButtonsIcon32Top,
      right: elementsButtonsIcon32Right,
      width: elementsButtonsIcon32Width,
      height: elementsButtonsIcon32Height,
    };
  }, [
    elementsButtonsIcon32Top,
    elementsButtonsIcon32Right,
    elementsButtonsIcon32Width,
    elementsButtonsIcon32Height,
  ]);

  const checkOutEachStyle = useMemo(() => {
    return {
      width: checkOutEachWidth,
      left: checkOutEachLeft,
      fontSize: checkOutEachFontSize,
      lineHeight: checkOutEachLineHeight,
    };
  }, [
    checkOutEachWidth,
    checkOutEachLeft,
    checkOutEachFontSize,
    checkOutEachLineHeight,
  ]);

  const activityStyle = useMemo(() => {
    return {
      top: activityTop,
      left: activityLeft,
      fontSize: activityFontSize,
      lineHeight: activityLineHeight,
    };
  }, [activityTop, activityLeft, activityFontSize, activityLineHeight]);

  return (
    <div
      className={styles.elementsWidgetsWidget02}
      style={elementsWidgetsWidget02Style}
    >
      <div className={styles.widget}>
        <div className={styles.base} style={baseStyle} />
        <div className={styles.features} style={featuresStyle}>
          <div className={styles.feature1} style={feature1Style}>
            <img
              className={styles.iconsStats}
              alt=""
              src={iconsStats}
              style={iconsStatsStyle}
            />
            {showTaxes && (
              <div className={styles.taxes} style={taxesStyle}>
                Taxes
              </div>
            )}
          </div>
          <div className={styles.feature2} style={feature2Style}>
            <img
              className={styles.iconsStatsCopy2}
              alt=""
              src={iconsStatsCopy2}
              style={iconsStatsCopy2Style}
            />
            <div className={styles.totalSales} style={totalSalesStyle}>
              Total Sales
            </div>
          </div>
          <div className={styles.feature3} style={feature3Style}>
            <img
              className={styles.iconsStatsCopy}
              alt=""
              src={iconsStatsCopy}
              style={iconsStatsCopyStyle}
            />
            {showTransactions && (
              <div className={styles.transactions} style={transactionsStyle}>
                Transactions
              </div>
            )}
          </div>
          <div className={styles.feature4} style={feature4Style}>
            <img
              className={styles.iconsStatsCopy3}
              alt=""
              src={iconsStatsCopy3}
              style={iconsStatsCopy3Style}
            />
            <div className={styles.profit} style={profitStyle}>
              Profit
            </div>
          </div>
        </div>
        <div
          className={styles.elementsPlaceholderRadiu}
          style={elementsPlaceholderRadiuStyle}
        >
          <div className={styles.base} />
        </div>
        <img
          className={styles.elementsButtonsIcon32}
          alt=""
          src={elementsButtonsIcon32px}
          style={elementsButtonsIcon32Style}
        />
        <div className={styles.checkOutEach} style={checkOutEachStyle}>
          Check out each collumn for more details
        </div>
        <div className={styles.activity} style={activityStyle}>
          Activity
        </div>
      </div>
    </div>
  );
};

export default ElementsWidgetsWidget02;
