import React from 'react';
import './pages/home-content/Home.css';
import { motion } from "framer-motion";


const HeroSection = () => {
    return (
        <div className='hero-container'>
            {/* <video src='/pexels-ivan-samkov-7252716 (1080p).mp4' autoPlay loop muted /> */}
            <motion.div
                className="content"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }} // Delay the animation of the <h1> by 0.5 seconds
                >
                    INSPIRE STEM GIRLS
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }} // Delay the animation of the <p> by 0.5 seconds
                >
                    We fight for a world where every girl can choose her own future.
                </motion.p>
            </motion.div>
            );
        </div>
    )
}

export default HeroSection