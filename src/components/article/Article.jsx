import React from 'react';
import './article.css';

const Article = ({ imgUrl, title, text }) => (
  <div className="mzk__blog-container_article">
    <div className="mzk__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="mzk__blog-container_article-content">
      <div>
        <p>{title}</p>
        <h3>{text}</h3>
      </div>
      <p>See More</p>
    </div>
  </div>
);

export default Article;