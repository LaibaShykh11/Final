import { useMemo } from "react";
import ElementsWidgetsWidget02 from "./ElementsWidgetsWidget02";
import styles from "./ActivityFormContainer.module.css";

const ActivityFormContainer = ({
  dimensionCode,
  propTop,
  propBottom,
  propTop1,
  propBottom1,
  propBackgroundColor,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      top: propTop,
      bottom: propBottom,
    };
  }, [propTop, propBottom]);

  const base5Style = useMemo(() => {
    return {
      top: propTop1,
      bottom: propBottom1,
      backgroundColor: propBackgroundColor,
    };
  }, [propTop1, propBottom1, propBackgroundColor]);

  return (
    <div className={styles.elementsWidgetsWidget04Parent} style={groupDivStyle}>
      <ElementsWidgetsWidget02
        iconsStats="/icons--stats@2x.png"
        iconsStatsCopy2="/icons--stats-copy-2@2x.png"
        iconsStatsCopy="/icons--stats-copy@2x.png"
        iconsStatsCopy3="/icons--stats-copy-3@2x.png"
        elementsButtonsIcon32px="/elements--buttons--icon--32px@2x.png"
        showTaxes={false}
        showTransactions={false}
        elementsWidgetsWidget02Width="100%"
        elementsWidgetsWidget02Height="100%"
        elementsWidgetsWidget02Position="absolute"
        elementsWidgetsWidget02Top="0%"
        elementsWidgetsWidget02Right="0%"
        elementsWidgetsWidget02Bottom="0%"
        elementsWidgetsWidget02Left="0%"
        baseBackgroundColor="#f8f8f8"
        featuresHeight="15.01%"
        featuresWidth="61.58%"
        featuresTop="77.51%"
        featuresRight="30.71%"
        featuresBottom="7.48%"
        feature1Height="40.03%"
        feature1Width="11.15%"
        feature1Right="88.85%"
        feature1Bottom="59.97%"
        iconsStatsWidth="100%"
        iconsStatsRight="0%"
        taxesTop="calc(50% - 34.85px)"
        taxesLeft="133.19%"
        taxesFontSize="11.7px"
        taxesLineHeight="16.03px"
        feature2Height="94.93%"
        feature2Width="43.59%"
        feature2Top="4.9%"
        feature2Right="56.41%"
        feature2Bottom="0.17%"
        iconsStatsCopy2Height="42.17%"
        iconsStatsCopy2Width="25.59%"
        iconsStatsCopy2Top="58.01%"
        iconsStatsCopy2Right="74.41%"
        iconsStatsCopy2Bottom="-0.18%"
        totalSalesTop="calc(50% - 27.15px)"
        totalSalesLeft="34.08%"
        totalSalesFontSize="11.7px"
        totalSalesLineHeight="16.03px"
        feature3Height="40.03%"
        feature3Width="11.15%"
        feature3Right="18.31%"
        feature3Bottom="59.97%"
        feature3Left="70.53%"
        iconsStatsCopyWidth="100%"
        iconsStatsCopyRight="0%"
        transactionsTop="calc(50% - 34.85px)"
        transactionsLeft="133.19%"
        transactionsFontSize="11.7px"
        transactionsLineHeight="16.03px"
        feature4Height="94.93%"
        feature4Width="29.47%"
        feature4Top="4.9%"
        feature4Right="0%"
        feature4Bottom="0.17%"
        feature4Left="70.53%"
        iconsStatsCopy3Height="42.17%"
        iconsStatsCopy3Width="37.85%"
        iconsStatsCopy3Top="58.01%"
        iconsStatsCopy3Right="62.15%"
        iconsStatsCopy3Bottom="-0.18%"
        profitTop="calc(50% - 27.15px)"
        profitLeft="50.41%"
        profitFontSize="11.7px"
        profitLineHeight="16.03px"
        elementsPlaceholderRadiuWidth="82.84%"
        elementsPlaceholderRadiuRight="8.58%"
        elementsPlaceholderRadiuBottom="27.24%"
        elementsPlaceholderRadiuLeft="8.58%"
        elementsButtonsIcon32Top="21.9px"
        elementsButtonsIcon32Right="22.3px"
        elementsButtonsIcon32Width="23.3px"
        elementsButtonsIcon32Height="23.3px"
        checkOutEachWidth="56.87%"
        checkOutEachLeft="8.58%"
        checkOutEachFontSize="13.1px"
        checkOutEachLineHeight="18.94px"
        activityTop="20.4px"
        activityLeft="8.58%"
        activityFontSize="16px"
        activityLineHeight="21.86px"
      />
      <div className={styles.base} style={base5Style} />
    </div>
  );
};

export default ActivityFormContainer;
