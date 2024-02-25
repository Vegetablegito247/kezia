import React from 'react';
import { motion } from 'framer-motion';

function AboutMe() {
    return (
        <div className="about_me" id='about'>
            <motion.div
                className="about_head"
                initial={{ x: -100, opacity: 0 }}
                transition={{ delay: .2, duration: 1, ease: "easeInOut" }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
            >
                <h1>Kezia-Grace Macbruce a leading event host and public speaker</h1>
            </motion.div>
            <motion.div
                className="about_content"
                initial={{ x: 100, opacity: 0 }}
                transition={{ delay: .6, duration: 1, ease: "easeInOut" }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
            >
                <p>
                    With a Master's degree in Public Administration, I have cultivated a deep understanding of effective communication and leadership. Public speaking isn't just a skill for me—it's a passion. I thrives on the energy of engaging conversations and the opportunity to inspire and empower others through my words.
                </p>
                <p>
                    Beyond the podium, I am a social butterfly at heart. I genuinely enjoy connecting with people from all walks of life, making new friends, and building meaningful relationships. Whether it's networking at events or engaging in lively discussions, Me Kezia-Grace believes in the power of human connection to drive positive change.
                </p>
                <p>
                    When you book me for your event, you can expect not only a seasoned speaker with expertise but also someone who brings warmth, enthusiasm, and authenticity to every interaction.
                </p>
            </motion.div>
        </div>
    )
}

export default AboutMe