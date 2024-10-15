import React from 'react';
import '../App.css'; 

const OurStory = () => {
  return (
    <div className="our-story-container">
      {/* Section 1: How It All Began */}
      <section className="story-section" id="beginning">
        <h1>How It All Began</h1>
        <p>
          Our story began on a warm summer evening in 2017. It was at a friend's party where we crossed paths for the first time, completely unaware of the beautiful journey that awaited us...
        </p>
      </section>

      {/* Section 2: The First Date */}
      <section className="story-section" id="first-date">
        <h1>The First Date</h1>
        <p>
          It was simple but perfect. We went to a cozy little restaurant by the beach. The conversation flowed effortlessly, and by the end of the night, we knew something special was happening.
        </p>
      </section>

      {/* Section 3: The Adventures */}
      <section className="story-section" id="adventures">
        <h1>The Adventures</h1>
        <p>
          Over the next few years, we shared countless adventures together—traveling to new places, hiking mountains, and discovering what it truly means to love and support each other.
        </p>
      </section>

      {/* Section 4: The Proposal */}
      <section className="story-section" id="proposal">
        <h1>The Proposal</h1>
        <p>
          On a sunset-filled evening by the ocean, surrounded by friends and family, the most important question was asked, and the answer was a resounding "Yes!"
        </p>
      </section>

      {/* Section 5: The Journey Continues */}
      <section className="story-section" id="journey">
        <h1>The Journey Continues</h1>
        <p>
          As we embark on this new chapter, we can't wait to share our future together, full of love, joy, and endless possibilities. This is just the beginning of forever.
        </p>
      </section>
    </div>
  );
};

export default OurStory;
