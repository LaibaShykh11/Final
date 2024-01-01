import ElementsButtonsPlay02 from "./ElementsButtonsPlay02";
import ElementsButtonsOutline from "./ElementsButtonsOutline";
import styles from "./BlockchainSection.module.css";

const BlockchainSection = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.groupChild} />
      <img className={styles.icon} alt="" src="/30-1@2x.png" />
      <img className={styles.icon1} alt="" src="/27-1@2x.png" />
      <div className={styles.groupParent}>
        <img className={styles.groupItem} alt="" src="/group-87@2x.png" />
        <div className={styles.elementsButtonsPlay02Parent}>
          <ElementsButtonsPlay02
            elementsButtonsPlay02Elem="/elements--buttons--play-02@2x.png"
            elementsButtonsPlay02Width="9.04%"
            elementsButtonsPlay02Height="19.6%"
            elementsButtonsPlay02Position="absolute"
            elementsButtonsPlay02Top="80.4%"
            elementsButtonsPlay02Right="45.49%"
            elementsButtonsPlay02Bottom="0%"
            elementsButtonsPlay02Left="45.47%"
            elementsButtonsPlay02MaxWidth="100%"
            elementsButtonsPlay02Overflow="hidden"
            elementsButtonsPlay02MaxHeight="100%"
          />
          <div className={styles.createScreensDirecParent}>
            <div className={styles.createScreensDirec}>
              Unlock the blockchain potential to create Web3 Applications
            </div>
            <div className={styles.welcomeToTheContainer}>
              <span>Web</span>
              <span className={styles.makr}>3Makr</span>
              <span> Redefining How You Create</span>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.mockupIcon} alt="" src="/mockup@2x.png" />
      <div className={styles.rectangleGroup}>
        <div className={styles.groupInner} />
        <div className={styles.groupContainer}>
          <div className={styles.groupDiv}>
            <div className={styles.elementsButtonsOutlineWrapper}>
              <ElementsButtonsOutline
                buttonText="Download Now"
                showButtonText={false}
                elementsButtonsOutlineWidth="100%"
                elementsButtonsOutlineHeight="100%"
                elementsButtonsOutlinePosition="absolute"
                elementsButtonsOutlineTop="0%"
                elementsButtonsOutlineRight="0%"
                elementsButtonsOutlineBottom="0%"
                elementsButtonsOutlineLeft="0%"
                baseBorder="1px solid var(--color-darkslateblue-100)"
                baseBoxSizing="border-box"
                baseBackgroundColor="unset"
                buttonTextTop="27.51%"
              />
            </div>
            <div className={styles.elementsButtonsOutlineWrapper}>
              <ElementsButtonsOutline
                buttonText="Download Now"
                showButtonText={false}
                elementsButtonsOutlineWidth="100%"
                elementsButtonsOutlineHeight="100%"
                elementsButtonsOutlinePosition="absolute"
                elementsButtonsOutlineTop="0%"
                elementsButtonsOutlineRight="0%"
                elementsButtonsOutlineBottom="0%"
                elementsButtonsOutlineLeft="0%"
                baseBorder="1px solid var(--color-deepskyblue)"
                baseBoxSizing="border-box"
                baseBackgroundColor="unset"
                buttonTextTop="27.51%"
              />
              <div className={styles.buttonText}>Start for free</div>
            </div>
          </div>
          <div className={styles.menuParent}>
            <div className={styles.menu}>
              <div className={styles.about}>Web3Makr</div>
              <div className={styles.workProcess}>Services</div>
              <div className={styles.workProcess1}>White paper</div>
              <div className={styles.services}>Tool</div>
              <div className={styles.contacts}>Contact us</div>
            </div>
            <img
              className={styles.maskGroupIcon}
              alt=""
              src="/mask-group@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockchainSection;
