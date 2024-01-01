import ElementsPlaceholderRadiu from "./ElementsPlaceholderRadiu";
import styles from "./BlogSection.module.css";

const BlogSection = () => {
  return (
    <div className={styles.backgroundParent}>
      <div className={styles.background} />
      <div className={styles.background1} />
      <img className={styles.maskGroupIcon} alt="" src="/mask-group@2x.png" />
      <div className={styles.ourBlog}>Our blog</div>
      <div className={styles.groupParent}>
        <div className={styles.groupContainer}>
          <div className={styles.baseParent}>
            <div className={styles.base} />
            <div className={styles.article}>
              <div className={styles.text}>
                <div className={styles.theDesignSide}>
                  The Design Side Of Conversion Rate Optimization
                </div>
              </div>
              <div className={styles.tagText}>
                <div className={styles.marketing}>Marketing</div>
                <div className={styles.tagTextChild} />
                <div className={styles.minRead}>9 min read</div>
              </div>
              <ElementsPlaceholderRadiu
                showBase={false}
                elementsPlaceholderRadiuWidth="100%"
                elementsPlaceholderRadiuHeight="65.79%"
                elementsPlaceholderRadiuPosition="absolute"
                elementsPlaceholderRadiuTop="0%"
                elementsPlaceholderRadiuRight="0%"
                elementsPlaceholderRadiuBottom="34.21%"
                elementsPlaceholderRadiuLeft="0%"
              />
            </div>
            <img className={styles.baseIcon} alt="" src="/base@2x.png" />
          </div>
          <div className={styles.baseGroup}>
            <div className={styles.base1} />
            <div className={styles.article1}>
              <div className={styles.text}>
                <div className={styles.analyticsFeaturesToContainer}>
                  <p
                    className={styles.analyticsFeatures}
                  >{`Analytics Features `}</p>
                  <p
                    className={styles.analyticsFeatures}
                  >{`to Improve User Experience      `}</p>
                </div>
              </div>
              <div className={styles.tagText}>
                <div className={styles.design}>Design</div>
                <div className={styles.tagTextChild} />
                <div className={styles.minRead}>6 min read</div>
              </div>
              <ElementsPlaceholderRadiu
                showBase={false}
                elementsPlaceholderRadiuWidth="100%"
                elementsPlaceholderRadiuHeight="65.79%"
                elementsPlaceholderRadiuPosition="absolute"
                elementsPlaceholderRadiuTop="0%"
                elementsPlaceholderRadiuRight="0%"
                elementsPlaceholderRadiuBottom="34.21%"
                elementsPlaceholderRadiuLeft="0%"
              />
            </div>
            <img className={styles.baseIcon1} alt="" src="/base@2x.png" />
          </div>
          <div className={styles.baseContainer}>
            <div className={styles.base1} />
            <div className={styles.article2}>
              <div className={styles.text2}>
                <div className={styles.creativeWaysTo}>
                  6 Creative Ways to Use Repeat Grids in Adobe XD
                </div>
                <div className={styles.createScreensDirectlyContainer}>
                  <p className={styles.analyticsFeatures}>
                    Create screens directly in Method or
                  </p>
                  <p
                    className={styles.analyticsFeatures}
                  >{`add your imagesfrom Sketch or Figma. `}</p>
                </div>
              </div>
              <div className={styles.tagText}>
                <div className={styles.product}>Product</div>
                <div className={styles.tagTextChild} />
                <div className={styles.minRead2}>10 min read</div>
              </div>
              <ElementsPlaceholderRadiu
                showBase={false}
                elementsPlaceholderRadiuWidth="100%"
                elementsPlaceholderRadiuHeight="59.73%"
                elementsPlaceholderRadiuPosition="absolute"
                elementsPlaceholderRadiuTop="0%"
                elementsPlaceholderRadiuRight="0%"
                elementsPlaceholderRadiuBottom="40.27%"
                elementsPlaceholderRadiuLeft="0%"
              />
            </div>
            <img className={styles.baseIcon1} alt="" src="/base@2x.png" />
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.base} />
            <div className={styles.article}>
              <div className={styles.text}>
                <div className={styles.creativeWaysTo}>
                  The Design Side Of Conversion Rate Optimization
                </div>
                <div className={styles.createScreensDirectlyContainer1}>
                  <p className={styles.analyticsFeatures}>
                    Create screens directly in Method or
                  </p>
                  <p
                    className={styles.analyticsFeatures}
                  >{`add your imagesfrom Sketch or Figma. `}</p>
                </div>
              </div>
              <div className={styles.tagText}>
                <div className={styles.marketing}>Marketing</div>
                <div className={styles.tagTextChild} />
                <div className={styles.minRead}>9 min read</div>
              </div>
              <ElementsPlaceholderRadiu
                showBase={false}
                elementsPlaceholderRadiuWidth="100%"
                elementsPlaceholderRadiuHeight="65.79%"
                elementsPlaceholderRadiuPosition="absolute"
                elementsPlaceholderRadiuTop="0%"
                elementsPlaceholderRadiuRight="0%"
                elementsPlaceholderRadiuBottom="34.21%"
                elementsPlaceholderRadiuLeft="0%"
              />
            </div>
            <img className={styles.baseIcon3} alt="" src="/base@2x.png" />
          </div>
        </div>
        <div className={styles.createScreensDirectlyContainer2}>
          <p className={styles.analyticsFeatures}>
            Create screens directly in Method or
          </p>
          <p
            className={styles.analyticsFeatures}
          >{`add your imagesfrom Sketch or Figma. `}</p>
        </div>
        <div className={styles.createScreensDirectlyContainer3}>
          <p className={styles.analyticsFeatures}>
            Create screens directly in Method or
          </p>
          <p
            className={styles.analyticsFeatures}
          >{`add your imagesfrom Sketch or Figma. `}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
