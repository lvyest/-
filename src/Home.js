import React from 'react';
import Header from './components/Header';
import Banner from './components/CarouseBanner';
import { jobPostsData, myResumeData } from './home-data';
import './Home.css';

function Home() {
  return (
    <div className="container">
      <Header />
      <main className="content">
        <div className="Banner"><Banner /></div>
        <section className="job-posts">
          <h2>관심 채용 공고</h2>

          <button className="add-post"><img src={require('./components/icons/tabler_plus.png')} alt="+" className="plus_icon"/>
            추가하기</button>

          <div className="post-list">
            {jobPostsData.map((post, index) => (
              <div key={index} className="post-item">
                {post.title}
                <br />
                <span>{post.date}</span>
              </div>
            ))}
          </div>

          <div className="more">더보기</div>
        </section>

        <section className="my-resume">
          <h2>내 이력서</h2>
          <button className="add-resume"><img src={require('./components/icons/tabler_plus.png')} alt="+" className="plus_icon"/> 새 이력서 작성하기</button>
          <div className="resume-item">
            {myResumeData.name}
            <img src={require('./components/icons/orange-arrow.png')} alt=">" className="orange-arrow"/>
            <br /><span>최종 수정일 {myResumeData.lastUpdated}</span>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;