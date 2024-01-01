import ElementsButtonsOutline from "./ElementsButtonsOutline";
import styles from "./Web3MakrSection.module.css";

const Web3MakrSection = () => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.groupContainer}>
        <img className={styles.groupChild} alt="" src="/group-111@2x.png" />
        <img className={styles.groupItem} alt="" src="/group-88@2x.png" />
        <div className={styles.groupWrapper}>
          <div className={styles.groupFrame}>
            <div className={styles.groupFrame}>
              <div className={styles.youCanEven}>
                Most entrepreneurs want to create their own web3 sites,
                unfortunately, they dont know much about creating one. Web3Makr
                makes it easier for newbies to create a blockchain-based
                collectibles solution without the hassle of leaving their
                favorite creation tools and by simple drag and drop
                functionality.
              </div>
              <div className={styles.buildingBetterWorkContainer}>
                <p className={styles.create}>Create</p>
                <p className={styles.create}>{`your own Web3 Masterpiece `}</p>
              </div>
              <div className={styles.elementsButtonsOutlineParent}>
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
                  baseBorder="unset"
                  baseBoxSizing="unset"
                  baseBackgroundColor="#6f348e"
                  buttonTextTop="27.51%"
                />
                <div className={styles.buttonText}>Start building</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.groupInner} alt="" src="/rectangle-51@2x.png" />
      <div className={styles.rectangleDiv} />
      <img className={styles.rectangleIcon} alt="" src="/rectangle-63@2x.png" />
      <img className={styles.groupChild1} alt="" src="/rectangle-66@2x.png" />
      <img className={styles.groupChild2} alt="" src="/rectangle-67@2x.png" />
      <img className={styles.groupChild3} alt="" src="/rectangle-68@2x.png" />
      <img className={styles.groupChild4} alt="" src="/rectangle-69@2x.png" />
      <div className={styles.groupChild5} />
      <div className={styles.groupChild6} />
    </div>
  );
};

export default Web3MakrSection;
