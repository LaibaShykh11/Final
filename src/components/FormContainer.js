import ElementsButtonsOutline from "./ElementsButtonsOutline";
import styles from "./FormContainer.module.css";

const FormContainer = () => {
  return (
    <div className={styles.createScreensDirecParent}>
      <div className={styles.createScreensDirec}>No credit card required.</div>
      <div className={styles.frequentlyAskedQuestions}>
        Start a free trial today
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
        <div className={styles.buttonText}>Start for free</div>
      </div>
    </div>
  );
};

export default FormContainer;
