import React, { useState, useRef } from 'react';
import awarenessArticles from '../data/awarenessArticles';
import AwarenessHero from '../components/awareness/AwarenessHero';
import CategoryFilter from '../components/awareness/CategoryFilter';
import FeaturedArticle from '../components/awareness/FeaturedArticle';
import ArticleGrid from '../components/awareness/ArticleGrid';
import NewsTickerBar from '../components/awareness/NewsTickerBar';
import SafetyResources from '../components/awareness/SafetyResources';

export default function AwarenessPage() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const gridRef = useRef(null);

  const featuredArticle = awarenessArticles.find(a => a.isFeatured);

  const filteredArticles =
    activeCategory === 'ALL'
      ? awarenessArticles.filter(a => !a.isFeatured)
      : awarenessArticles.filter(a => a.category === activeCategory);

  const handleReadLatest = () => {
    document.getElementById('article-grid')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleReset = () => {
    setActiveCategory('ALL');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#FFFDF5',
        fontFamily: 'Space Grotesk, sans-serif',
      }}
    >
      {/* Section 1 — Hero */}
      <AwarenessHero onReadLatest={handleReadLatest} />

      {/* Top Ticker */}
      <NewsTickerBar variant="yellow" />

      {/* Section 2 — Category Filter */}
      <CategoryFilter
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* Section 3 — Featured Article */}
      {activeCategory === 'ALL' && featuredArticle && (
        <FeaturedArticle article={featuredArticle} />
      )}

      {/* Section 4 — Article Grid */}
      <ArticleGrid
        articles={filteredArticles}
        activeCategory={activeCategory}
        onReset={handleReset}
      />

      {/* Section 5 — Safety Resources & CTA */}
      <SafetyResources />

      {/* Bottom Ticker */}
      <NewsTickerBar variant="black" />
    </div>
  );
}
