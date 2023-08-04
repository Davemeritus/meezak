import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="mzk__blog section__padding" id="blog">
    <div className="mzk__blog-heading">
      <h1 className="gradient__text">Our reputation speaks for itself, <br /> here are some of our Projects</h1>
    </div>
    <div className="mzk__blog-container">
      <div className="mzk__blog-container_groupA">
        <Article imgUrl={blog01} title="Project 1" text="Constructed 100 piles for a five bedroom detached duplex in Lekki" />
      </div>
      <div className="mzk__blog-container_groupB">
        <Article imgUrl={blog02} title="Project 2" text="CPT and SPT test for a seven story building at Osborne, Lekki" />
        <Article imgUrl={blog03} title="Project 3" text="Performed soil test on three plots of land at Osapa London" />
        <Article imgUrl={blog04} title="Project 4" text="Complete foundation: From soil test through piling, pile cap, beam, raft and german floor in Ikate" />
        <Article imgUrl={blog05} title="Project 5" text="250 bored static pile in Yaba" />
      </div>
    </div>
  </div>
);

export default Blog;