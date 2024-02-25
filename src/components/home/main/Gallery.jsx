import React from 'react';
import { motion } from 'framer-motion';

function Gallery() {
    return (
        <div className="gallery" id='gallery'>
            <motion.div
                className="gallery_head"
                initial={{ x: -100, opacity: 0 }}
                transition={{ delay: .2, duration: 1, ease: "easeInOut" }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
            >
                <h1>Gallery</h1>
            </motion.div>
            <div className='gallery_cont'>
                <div className="gallery_list">
                    <motion.div
                        className="gal_idle"
                        initial={{ x: 100, opacity: 0 }}
                        transition={{ delay: .6, duration: 1, ease: "easeInOut" }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <img src="https://ik.imagekit.io/on9x61d60/headImg/head4.jpg?updatedAt=1708721016947" alt="" />
                    </motion.div>
                    <div className="gal_grid">
                        <motion.div
                            className="gal_col"
                            initial={{ rotateY: 80, opacity: 0 }}
                            transition={{ delay: .6, duration: 1, ease: "easeInOut" }}
                            whileInView={{ rotateY: 0, opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <img src="https://ik.imagekit.io/on9x61d60/gallery/cardBrd.jpg?updatedAt=1708722521287" alt="" />
                        </motion.div>
                        <motion.div
                            className="gal_col"
                            initial={{ rotateY: 80, opacity: 0 }}
                            transition={{ delay: .6, duration: 1, ease: "easeInOut" }}
                            whileInView={{ rotateY: 0, opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <img src="https://ik.imagekit.io/on9x61d60/gallery/chill.PNG?updatedAt=1708722523921" alt="" />
                        </motion.div>
                        <motion.div
                            className="gal_col"
                            initial={{ rotateY: 80, opacity: 0 }}
                            transition={{ delay: .6, duration: 1, ease: "easeInOut" }}
                            whileInView={{ rotateY: 0, opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <img src="https://ik.imagekit.io/on9x61d60/gallery/elder.JPG?updatedAt=1708722528583" alt="" />
                        </motion.div>
                        <motion.div
                            className="gal_col"
                            initial={{ rotateY: 80, opacity: 0 }}
                            transition={{ delay: .6, duration: 1, ease: "easeInOut" }}
                            whileInView={{ rotateY: 0, opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <img src="https://ik.imagekit.io/on9x61d60/gallery/sing.jpeg?updatedAt=1708722527445" alt="" />
                        </motion.div>
                    </div>
                </div>
                <div className="gallery_list">
                    <div className="gal_grid">
                        <motion.div
                            className="gal_col"
                            initial={{ rotateY: 80, opacity: 0 }}
                            transition={{ delay: .6, duration: 1, ease: "easeInOut" }}
                            whileInView={{ rotateY: 0, opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <img src="https://ik.imagekit.io/on9x61d60/gallery/table.jpg?updatedAt=1708722523374" alt="" />
                        </motion.div>
                        <motion.div
                            className="gal_col"
                            initial={{ rotateY: 80, opacity: 0 }}
                            transition={{ delay: .6, duration: 1, ease: "easeInOut" }}
                            whileInView={{ rotateY: 0, opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <img src="https://ik.imagekit.io/on9x61d60/gallery/threePip.jpg?updatedAt=1708722523130" alt="" />
                        </motion.div>
                        <motion.div
                            className="gal_col"
                            initial={{ rotateY: 80, opacity: 0 }}
                            transition={{ delay: .6, duration: 1, ease: "easeInOut" }}
                            whileInView={{ rotateY: 0, opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <img src="https://ik.imagekit.io/on9x61d60/gallery/twoPip.jpg?updatedAt=1708722522465" alt="" />
                        </motion.div>
                        <motion.div
                            className="gal_col"
                            initial={{ rotateY: 80, opacity: 0 }}
                            transition={{ delay: .6, duration: 1, ease: "easeInOut" }}
                            whileInView={{ rotateY: 0, opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <img src="https://ik.imagekit.io/on9x61d60/gallery/vision.jpg?updatedAt=1708722521730" alt="" />
                        </motion.div>
                    </div>
                    <motion.div
                        className="gal_idle"
                        initial={{ x: -100, opacity: 0 }}
                        transition={{ delay: .2, duration: 1, ease: "easeInOut" }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <img src="https://ik.imagekit.io/on9x61d60/headImg/head2.jpg?updatedAt=1708721017965" alt="" />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Gallery