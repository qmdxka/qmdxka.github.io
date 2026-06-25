import React, { useState } from "react";

const quotes = [
  {
    text: "真正重要的东西，用眼睛是看不见的。",
    note: "所以这个网页先从一片星空开始。"
  },
  {
    text: "星星发亮，是为了让每一个人有一天都能找到属于自己的星星。",
    note: "你的小星球也会慢慢亮起来。"
  },
  {
    text: "如果你爱上了一朵花，那么只要仰望星空，就会觉得漫天繁星像一片盛开的花。",
    note: "这句话很适合放在一个慢慢长大的个人主页里。"
  },
  {
    text: "所有的大人都曾经是孩子，虽然只有少数人记得。",
    note: "所以这里可以先保留一点好奇心。"
  }
];

function App() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const currentQuote = quotes[quoteIndex];

  function changeQuote() {
    // 这里用简单的循环切换，避免随机时连续抽到同一句。
    setQuoteIndex((quoteIndex + 1) % quotes.length);
  }

  return (
    <main className="page">
      <div className="planet" aria-hidden="true" />

      <section className="hero">
        <div className="profile">
          <img
            className="avatar"
            src="/Components/pictures/qinyuchen.jpeg"
            alt="陈钦宇的头像"
          />
          <div>
            <p className="eyebrow">欢迎来到我的小星球</p>
            <h1>Qinyu's Little Planet</h1>
          </div>
        </div>

        <p className="intro">
          这里是陈钦宇的个人主页。现在它还是一颗刚刚被点亮的小星球，
          以后可以慢慢放进喜欢的歌、照片、日记、作品，还有所有闪闪发光的想法。
        </p>

        <p className="quote">
          “{currentQuote.text}”
          <br />
          {currentQuote.note}
        </p>

        <div className="actions">
          <a
            className="button"
            href="https://y.qq.com/n/ryqq/songDetail/000xLcK800XTjr"
            target="_blank"
            rel="noreferrer"
          >
            听《小王子》
          </a>
          <a
            className="button secondary"
            href="https://github.com/qmdxka"
            target="_blank"
            rel="noreferrer"
          >
            看看我的 GitHub
          </a>
          <button className="button secondary" type="button" onClick={changeQuote}>
            换一句话
          </button>
        </div>
      </section>

      <div className="rose" aria-hidden="true" />
    </main>
  );
}

export default App;
