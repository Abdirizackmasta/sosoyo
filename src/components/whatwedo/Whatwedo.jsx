import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdGirl } from "react-icons/md";
import { TbTrees } from "react-icons/tb";
import { BsPeopleFill } from "react-icons/bs";
import { IoWoman } from "react-icons/io5";
import { FaHandshake } from "react-icons/fa";
import styles from "./Whatwedo.module.css";



const focusArea = [
  {
    head: " Civic Engagement",
    description:
      "Promote active participation of youth in governance and decision-making processes.Foster a sense of responsibility and leadership among young people",
    icon: <FaHandshake />,
  },
  {
    head: " Climate and Environmental Issues",
    description:
      "Educate and engage youth in climate action and environmental conservation efforts.Develop and implement projects aimed at reducing environmental degradation and promoting sustainability",
    icon: <TbTrees />,
  },
  {
    head: "Health",
    description:
      "Raise awareness about health issues affecting young people, including mental health, sexual health, and general well-being. Provide access to health education and services, fostering a healthier youth population.",
    icon: <IoWoman />,
  },
  {
    head: " Skills Development",
    description:
      "Offer training programs and workshops that equip youth with essential life and professional skills.Facilitate access to opportunities that enhance employability and entrepreneurial capabilities",
    icon: <BsPeopleFill />,
  },
];

function Whatwedo() {
  const [focusAreaIndex, setFocusAreaIndex] = useState(0);

  const goToPreviousHero = () => {
    setFocusAreaIndex((prevIndex) =>
      prevIndex === 0 ? focusArea.length - 1 : prevIndex - 1
    );
  };

  const goToNextHero = () => {
    setFocusAreaIndex((prevIndex) =>
      prevIndex === focusArea.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentFocusArea = focusArea[focusAreaIndex];

  return (
    <div className={styles.whatwedo} id="areaoffocus">
      <div className={styles.left}>
        <p className={styles.first_p}>What We Do</p>
        <h1>Our Focus Area</h1>
        <p className={styles.second_p}>Solution to the Society Youth Organization (SOSOYO) was conceived with the vision of empowering the youth to become proactive leaders in their communities. Founded in 2018 and becoming operational in 2019, SOSOYO was established in response to the growing need for a platform that addresses civic engagement, climate and environmental issues, health, and skills development among the youth.</p>
      </div>
      <div className={styles.right}>
        <h1>{currentFocusArea.head}</h1>
        <p>{currentFocusArea.description}</p>
        <i>{currentFocusArea.icon}</i>
        <IoIosArrowBack onClick={goToPreviousHero} className={styles.left_icon} />
        <IoIosArrowForward onClick={goToNextHero} className={styles.right_icon} />
      </div>
    </div>
  );
}

export default Whatwedo;
