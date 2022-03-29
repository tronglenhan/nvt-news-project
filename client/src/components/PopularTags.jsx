import React from 'react'

const PopularTags = () => {
  return (
    <section className="popular-tags section">

        <div className="container">

            <h2 className="title section-title" data-name="Popular tags">Popular tags</h2>

            <div className="popular-tags-container d-grid">

                <a href="/#" className="article">
                    <span className="tag-name">#Travel</span>
                    <img src="https://res.cloudinary.com/van-nam/image/upload/v1648531554/images/tags/travel-tag_y338lu.jpg" alt="" className="article-image"/>
                </a>

                <a href="/#" className="article">
                    <span className="tag-name">#Food</span>
                    <img src="https://res.cloudinary.com/van-nam/image/upload/v1648531565/images/tags/food-tag_dfidyk.jpg" alt="" className="article-image"/>
                </a>

                <a href="/#" className="article">
                    <span className="tag-name">#Technology</span>
                    <img src="https://res.cloudinary.com/van-nam/image/upload/v1648531557/images/tags/technology-tag_wsi5mv.jpg" alt="" className="article-image"/>
                </a>

                <a href="/#" className="article">
                    <span className="tag-name">#Health</span>
                    <img src="https://res.cloudinary.com/van-nam/image/upload/v1648531552/images/tags/health-tag_fwjljg.jpg" alt="" className="article-image"/>
                </a>

                <a href="/#" className="article">
                    <span className="tag-name">#Nature</span>
                    <img src="https://res.cloudinary.com/van-nam/image/upload/v1648531548/images/tags/nature-tag_lughne.jpg" alt="" className="article-image"/>
                </a>

                <a href="/#" className="article">
                    <span className="tag-name">#Fitness</span>
                    <img src="https://res.cloudinary.com/van-nam/image/upload/v1648531538/images/tags/fitness-tag_rq3nbq.jpg" alt="" className="article-image"/>
                </a>

            </div>

        </div>
    </section>
  )
}

export default PopularTags