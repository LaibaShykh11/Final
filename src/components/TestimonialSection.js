import styles from "./TestimonialSection.module.css";

const TestimonialSection = () => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.baseParent}>
        <div className={styles.base} />
        <div className={styles.groupWrapper}>
          <div className={styles.baseGroup}>
            <div className={styles.base1} />
            <div className={styles.progress} />
          </div>
        </div>
      </div>
      <div className={styles.groupContainer}>
        <div className={styles.whatPeopleAreSayiParent}>
          <div className={styles.whatPeopleAre}>What People Are Saying</div>
          <div className={styles.testimonials}>Testimonials</div>
          <div className={styles.youCanEven}>Multi chain interoperability</div>
        </div>
        <img className={styles.icon} alt="" src="/50-1@2x.png" />
        <div className={styles.imageParent}>
          <img className={styles.imageIcon} alt="" src="/image@2x.png" />
          <div className={styles.web3makrProvidesAContainer}>
            <p className={styles.web3makrProvidesA}>
              “Web3makr provides a solution for web3 developers and beginners by
              integrating the drag and drop feature for properties like NFT
              Search Marketplace, Wallet Integration, downloadable source code,
              and Smart Contract. Aside from this, the software also provides
              its users with ready-made and customizable templates that users
              can use when creating their web3 applications.”
            </p>
            <p className={styles.web3makrProvidesA}>&nbsp;</p>
            <p className={styles.web3makrProvidesA}>- Sophie Adderiy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
