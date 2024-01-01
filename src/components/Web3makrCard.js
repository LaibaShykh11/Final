import styles from "./Web3makrCard.module.css";

const Web3makrCard = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.div}>
        <img
          className={styles.iconsRemove}
          alt=""
          src="/-icons--remove@2x.png"
        />
        <div className={styles.createScreensDirecContainer}>
          <p className={styles.web3makrProvidesA}>
            Web3makr provides a solution for web3 developers and beginners by
            integrating the drag and drop feature for properties like NFT Search
            Marketplace, Wallet Integration, downloadable source code, and Smart
            Contract. Aside from this, the software also provides its users with
            ready-made and customizable templates that users can use when
            creating their web3 applications.
          </p>
          <p className={styles.web3makrProvidesA}></p>
          <p className={styles.web3makrProvidesA}></p>
          <p className={styles.web3makrProvidesA}></p>
          <p className={styles.web3makrProvidesA}></p>
          <p className={styles.web3makrProvidesA}></p>
          <p className={styles.web3makrProvidesA}></p>
          <p className={styles.web3makrProvidesA}></p>
          <p className={styles.web3makrProvidesA}></p>
          <p className={styles.web3makrProvidesA}></p>
          <p className={styles.web3makrProvidesA}></p>
          <p className={styles.web3makrProvidesA}></p>
        </div>
        <div className={styles.whyShouldI}>Why should I use Web3Mkr?</div>
        <div className={styles.divider} />
      </div>
      <div className={styles.div1}>
        <img className={styles.iconsPlus} alt="" src="/-icons--plus@2x.png" />
        <div className={styles.divider1} />
        <div className={styles.whatIsWeb3makr}>
          What is Web3Makr and what does it do?
        </div>
        <div className={styles.divider} />
      </div>
      <div className={styles.div2}>
        <img className={styles.iconsPlus1} alt="" src="/-icons--plus@2x.png" />
        <div className={styles.divider3} />
        <div className={styles.whatIsWeb3makr1}>
          What is Web3Makr and what does it do?
        </div>
        <div className={styles.divider} />
      </div>
    </div>
  );
};

export default Web3makrCard;
