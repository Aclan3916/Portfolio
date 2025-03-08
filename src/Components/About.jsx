import React from "react";
import profileImage from "../assets/profileImage.png";

const About = () => {
    const softSkills = [
        "Communication",
        "Problem-Solving",
        "Empathy & User-Centric Thinking",
        "Attention to Detail",
        "Adaptability & Learning"
    ];
    
    const technicalSkills = [
        "Blazor",
        "C#",
        ".NET",
        "Razor Pages",
        "PL/SQL",
        "React",
        "HTML5",
        "CSS3",
        "Node.js",
        "Figma"
    ];

    return (
        <section className="section" id="about">
            <div className="about-content">
                <div className="about-left">
                    <h2>The Person Behind the Work</h2>
                    <div className="about-text">
                        <p>
                            Since graduating from the University of North Georgia, I've pursued my passion 
                            for programming and now work as a Full Stack Software Engineer and UX/UI Lead, 
                            blending technical expertise with user-focused design. I've tackled diverse 
                            projects, adapting to different technologies and solving complex problems along 
                            the way. My experience spans CSS, HTML, Blazor, Razor Pages, PL/SQL, and C#, 
                            allowing me to build seamless, efficient applications.
                        </p>
                        <p>
                            As a UX/UI Lead, I focus on creating intuitive, user-friendly designs that 
                            not only look great but also enhance functionality. I have hands-on experience 
                            with Figma, Balsamiq, Adobe, and front-end frameworks, ensuring a balance 
                            between aesthetics and usability.
                        </p>
                    </div>
                    <div className="skills-container">
                        <div className="skills-category">
                            <h3>Soft Skills</h3>
                            <div className="skills-simple">
                                {softSkills.map((skill, index) => (
                                    <div key={index} className="skill-item-simple">
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="skills-category">
                            <h3>Technical Skills</h3>
                            <div className="skills-simple">
                                {technicalSkills.map((skill, index) => (
                                    <div key={index} className="skill-item-simple">
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <img src={profileImage} alt="Audrey Clanton" className="profile-image" />
            </div>
        </section>
    );
};

export default About;