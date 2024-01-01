import CustomizableDappsTemplateSecti from "../components/CustomizableDappsTemplateSecti";
import BlogSection from "../components/BlogSection";
import BlockchainSection from "../components/BlockchainSection";
import TestimonialSection from "../components/TestimonialSection";
import Web3makrCard from "../components/Web3makrCard";
import Web3MakrSection from "../components/Web3MakrSection";
import FormContainer from "../components/FormContainer";
import Footer from "../components/Footer";
import styles from "./LandingPage1.module.css";

const LandingPage1 = () => {
  return (
    <div className={styles.landingPage1}>
      <img
        className={styles.landingPage1Child}
        alt=""
        src="/group-139@2x.png"
      />
      <div className={styles.landingPage1Item} />
      <div className={styles.landingPage1Inner} />
      <div className={styles.createScreensDirec}>
        Have a question? Check out our frequently asked questions to find your
        answer.
      </div>
      <div className={styles.frequentlyAskedQuestions}>
        Frequently asked questions
      </div>
      <CustomizableDappsTemplateSecti />
      <BlogSection />
      <BlockchainSection />
      <TestimonialSection />
      <div className={styles.rectangleDiv} />
      <img className={styles.maskGroupIcon} alt="" src="/mask-group@2x.png" />
      <Web3makrCard />
      <Web3MakrSection />
      <img className={styles.groupIcon} alt="" src="/group-88@2x.png" />
      <div className={styles.groupParent}>
        <FormContainer />
        <img className={styles.groupChild} alt="" src="/group-146@2x.png" />
      </div>
      <div className={styles.frequentlyAskedQuestions1}>Metaverse</div>
      <Footer />
      <img className={styles.frameIcon} alt="" src="/frame@2x.png" />
      <img
        className={styles.landingPage1Child1}
        alt=""
        src="/group-151@2x.png"
      />
      <img
        className={styles.landingPage1Child2}
        alt=""
        src="/group-156@2x.png"
      />
      <img
        className={styles.landingPage1Child3}
        alt=""
        src="/group-155@2x.png"
      />
      <img
        className={styles.landingPage1Child4}
        alt=""
        src="/group-153@2x.png"
      />
      <img
        className={styles.landingPage1Child5}
        alt=""
        src="/group-152@2x.png"
      />
      <div className={styles.rectangleParent}>
        <div className={styles.groupItem} />
        <img className={styles.aaveLogoIcon} alt="" src="/aavelogo@2x.png" />
      </div>
      <img
        className={styles.landingPage1Child6}
        alt=""
        src="/group-154@2x.png"
      />
    </div>
  );
};

export default LandingPage1;
