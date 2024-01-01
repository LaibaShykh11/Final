import ButtonsAutoLayoutOnFil from "./ButtonsAutoLayoutOnFil";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.copyright2021Parent}>
      <div className={styles.copyright2021}>Copyright 2022 © Web3makr</div>
      <div className={styles.social}>
        <ButtonsAutoLayoutOnFil
          iconsArrowsarrowRight="/iconssocialstwitter@2x.png"
          buttonsAutoLayoutOnFilBackgroundColor="unset"
          buttonsAutoLayoutOnFilPosition="absolute"
          buttonsAutoLayoutOnFilTop="0px"
          buttonsAutoLayoutOnFilLeft="46.4px"
        />
        <ButtonsAutoLayoutOnFil
          iconsArrowsarrowRight="/iconssocialsinstagram@2x.png"
          buttonsAutoLayoutOnFilBackgroundColor="unset"
          buttonsAutoLayoutOnFilPosition="absolute"
          buttonsAutoLayoutOnFilTop="0px"
          buttonsAutoLayoutOnFilLeft="0px"
        />
        <ButtonsAutoLayoutOnFil
          iconsArrowsarrowRight="/iconssocialsfacebook@2x.png"
          buttonsAutoLayoutOnFilBackgroundColor="unset"
          buttonsAutoLayoutOnFilPosition="absolute"
          buttonsAutoLayoutOnFilTop="0px"
          buttonsAutoLayoutOnFilLeft="92.9px"
        />
      </div>
      <div className={styles.groupParent}>
        <img className={styles.groupChild} alt="" src="/group-114@2x.png" />
        <div className={styles.menu}>
          <div className={styles.about}>Web3Makr</div>
          <div className={styles.workProcess}>Services</div>
          <div className={styles.workProcess1}>White paper</div>
          <div className={styles.services}>Tool</div>
          <div className={styles.contacts}>Contact us</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
