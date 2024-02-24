import React from 'react';

function Gallery() {
    return (
        <div className="gallery" id='gallery'>
            <div className="gallery_head">
                <h1>Gallery</h1>
            </div>
            <div className='gallery_cont'>
                <div className="gallery_list">
                    <div className="gal_idle">
                        <img src="https://ik.imagekit.io/on9x61d60/headImg/head4.jpg?updatedAt=1708721016947" alt="" />
                    </div>
                    <div className="gal_grid">
                        <div className="gal_col">
                            <img src="https://ik.imagekit.io/on9x61d60/gallery/cardBrd.jpg?updatedAt=1708722521287" alt="" />
                        </div>
                        <div className="gal_col">
                            <img src="https://ik.imagekit.io/on9x61d60/gallery/chill.PNG?updatedAt=1708722523921" alt="" />
                        </div>
                        <div className="gal_col">
                            <img src="https://ik.imagekit.io/on9x61d60/gallery/elder.JPG?updatedAt=1708722528583" alt="" />
                        </div>
                        <div className="gal_col">
                            <img src="https://ik.imagekit.io/on9x61d60/gallery/sing.jpeg?updatedAt=1708722527445" alt="" />
                        </div>
                    </div>
                </div>
                <div className="gallery_list">
                    <div className="gal_grid">
                        <div className="gal_col">
                            <img src="https://ik.imagekit.io/on9x61d60/gallery/table.jpg?updatedAt=1708722523374" alt="" />
                        </div>
                        <div className="gal_col">
                            <img src="https://ik.imagekit.io/on9x61d60/gallery/threePip.jpg?updatedAt=1708722523130" alt="" />
                        </div>
                        <div className="gal_col">
                            <img src="https://ik.imagekit.io/on9x61d60/gallery/twoPip.jpg?updatedAt=1708722522465" alt="" />
                        </div>
                        <div className="gal_col">
                            <img src="https://ik.imagekit.io/on9x61d60/gallery/vision.jpg?updatedAt=1708722521730" alt="" />
                        </div>
                    </div>
                    <div className="gal_idle">
                        <img src="https://ik.imagekit.io/on9x61d60/headImg/head2.jpg?updatedAt=1708721017965" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery