import React, { useState } from 'react';
import '../css/accordion.css';
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

const sections = [
    {
        title: " Empowerment",
        content: '- We believe in the power of youth to drive change. We aim to empower young individuals with the skills, resources, and confidence to lead initiatives that address societal challenges.'
    },
    {
        title: "Inclusivity",
        content: '-Our organization values diversity and inclusion. We are committed to creating an environment where every youth, regardless of their background, feels welcome and valued'
    },
    {
        title: "Integrity",
        content: '-We uphold the highest standards of integrity in all our actions. Honesty, transparency, and accountability are at the core of our operations and interactions.'
    },
    {
        title: "Innovation",
        content: '-We encourage creativity and innovation. Our approach to solving societal problems is rooted in forward-thinking, seeking novel solutions that can make a significant impact',
    },
    {
        title: " Collaboration",
        content: '-We believe that collective effort leads to greater outcomes. We foster partnerships and collaborations with other organizations, communities, and stakeholders to amplify our impact'    
    },
    {
        title: "Sustainability",
        content: '-Our initiatives are designed with sustainability in mind. We strive to create longlasting solutions that ensure the well-being of future generations.' 
    },
     {
        title: "Respect",
        content: '-We treat everyone with respect and dignity. We recognize the value of diverse perspectives and encourage respectful dialogue and interactions.' 
    },
     {
        title: " Commitment to Excellence",
        content: '-We are dedicated to achieving excellence in all our endeavors. Continuous improvement and striving for the highest standards guide our work' 
    }
]
export default function Accordion(){
    const [activeIndex, setActiveIndex] = useState(null);

    function handleToggle(index){
        setActiveIndex((prevIndex) => (prevIndex === index ? 'null' : index));
    }

    return (
        <div className='accordion'>
            <h1>OUR CORE VALUES</h1>
            { sections.map((section, index) => (
                <div key={index} className='accordion-section'>
                    <div
                    className={`accordion-header ${activeIndex === index ? 'null' : '' }`}
                    onClick={() => handleToggle(index)}
                    >
                        <div className='accordion-title'>
                            {section.title}
                        </div>
                        {/* <div className='accordion-icon'>
                            { 
                                activeIndex === index ? <IoIosArrowDown /> 
                                : <IoIosArrowForward />
                             }
                        </div> */}
                    </div>

                    {/* { */}
                        {/* activeIndex === index && ( */}
                            <div className='accordion-content'>
                                {section.content}
                                <hr />
                            </div>
                        {/* ) */}
                    {/* } */}
                </div>
            )) }
        </div>
    );
}