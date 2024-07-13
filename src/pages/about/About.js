import React from "react";
import styles from "./About.module.scss";
import dir from "../../../src/assets/johnDoe.jpg"

const About = () => {
  return (
    <div className={`container ${styles.about}`}>
      <div className={styles.top}>
        <div className={styles.image}>
          <img src={dir} alt={"dir"} />
        </div>
        <div className={styles.dirText}>
          <h2>Director</h2>
          <p>
            Amet ipsum elit non in laboris duis non esse deserunt. Aliqua enim
            ut ex incididunt. Minim non quis adipisicing excepteur aute. Duis
            irure culpa reprehenderit esse ullamco et qui anim qui veniam. Duis
            adipisicing ad elit consequat est ex dolore sunt ut exercitation.
            Adipisicing eu elit exercitation dolore culpa aliqua excepteur esse
            eiusmod eiusmod. Amet ipsum elit non in laboris duis non esse deserunt. Aliqua enim
            ut ex incididunt. Minim non quis adipisicing excepteur aute. Duis
            irure culpa reprehenderit esse ullamco et qui anim qui veniam. 
          </p>
          <div className={styles.contact}>
            <h4>John Doe</h4>
            <p>johnDoe@gmail.com</p>
          </div>

        </div>
      </div>
      <div className={styles.bottom}>
        <h2>Services</h2>
        <div>
            <h4>Laptop Sales</h4>
            <h4>Fashion</h4>
            <h4>Electronics</h4>
            <h4>Phone</h4>
        </div>
      </div>
    </div>
  );
};

export default About;
