<template>
  <main class="about-page">
    <!-- Hero Section -->
    <section class="about-hero">
      <div class="hero-content">
        <h1 class="hero-title">
          About <span class="gradient-text">Eat-Smart</span>
        </h1>
        <p class="hero-subtitle">
          Your culinary companion for discovering, cooking, and sharing amazing recipes from around the world
        </p>
      </div>
      <div class="hero-decoration">
        <div class="deco-circle circle-1"></div>
        <div class="deco-circle circle-2"></div>
        <div class="deco-circle circle-3"></div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="mission-section">
      <v-container>
        <div class="mission-content">
          <div class="mission-text">
            <h2 class="section-title">Our Mission</h2>
            <p class="mission-description">
              At Eat-Smart, we believe that cooking should be accessible, enjoyable, and inspiring for everyone. 
              Our mission is to connect food lovers with the perfect recipes, making every meal an opportunity 
              to create something special.
            </p>
            <p class="mission-description">
              Whether you're a seasoned chef or just starting your culinary journey, we provide the tools, 
              inspiration, and community to help you discover your next favorite dish.
            </p>
          </div>
          <div class="mission-image">
            <div class="image-card">
              <svg width="200" height="200" viewBox="0 0 24 24" fill="none">
                <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6z" 
                  fill="url(#aboutGradient)" stroke="none"/>
                <line x1="6" y1="17" x2="18" y2="17" stroke="white" stroke-width="2"/>
                <defs>
                  <linearGradient id="aboutGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#FF6B35"/>
                    <stop offset="100%" style="stop-color:#F7931E"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </v-container>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <v-container>
        <h2 class="section-title center">Why Choose Eat-Smart?</h2>
        <p class="section-subtitle">Everything you need to elevate your cooking experience</p>
        
        <div class="features-grid">
          <div v-for="(feature, index) in features" :key="index" class="feature-card" :style="{ animationDelay: `${index * 0.1}s` }">
            <div class="feature-icon">
              <div v-html="feature.icon"></div>
            </div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-description">{{ feature.description }}</p>
          </div>
        </div>
      </v-container>
    </section>

    <!-- Stats Section -->
    <section class="stats-section">
      <v-container>
        <div class="stats-grid">
          <div v-for="(stat, index) in stats" :key="index" class="stat-card">
            <div class="stat-number">{{ stat.number }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </v-container>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <v-container>
        <div class="cta-content">
          <h2 class="cta-title">Ready to Start Cooking?</h2>
          <p class="cta-description">Join thousands of home cooks discovering amazing recipes every day</p>
          <button class="cta-button" @click="$router.push('/')">
            <span>Explore Recipes</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M5 12h14M12 5l7 7-7 7" stroke-width="2.5" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
      </v-container>
    </section>
  </main>
</template>

<script setup lang="ts">
const features = [
  {
    icon: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8" stroke-width="2"/><path d="m21 21-4.35-4.35" stroke-width="2"/></svg>',
    title: 'Smart Search',
    description: 'Find exactly what you\'re looking for with our intelligent recipe search powered by advanced filters and tags.'
  },
  {
    icon: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke-width="2"/></svg>',
    title: 'Curated Collection',
    description: 'Access thousands of hand-picked recipes from professional chefs and passionate home cooks worldwide.'
  },
  {
    icon: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke-width="2"/><polyline points="22 4 12 14.01 9 11.01" stroke-width="2"/></svg>',
    title: 'Step-by-Step',
    description: 'Easy-to-follow instructions with detailed preparation steps to ensure perfect results every time.'
  },
  {
    icon: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10" stroke-width="2"/><path d="M12 16v-4M12 8h.01" stroke-width="2"/></svg>',
    title: 'Nutrition Info',
    description: 'Complete nutritional information for every recipe to help you make informed, healthy choices.'
  },
  {
    icon: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke-width="2"/><circle cx="9" cy="7" r="4" stroke-width="2"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke-width="2"/></svg>',
    title: 'Community Driven',
    description: 'Join a vibrant community of food lovers sharing tips, variations, and cooking experiences.'
  },
  {
    icon: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" stroke-width="2"/></svg>',
    title: 'Save Favorites',
    description: 'Bookmark your favorite recipes and create personalized collections for easy access anytime.'
  }
]

const stats = [
  { number: '10,000+', label: 'Recipes' },
  { number: '50,000+', label: 'Active Users' },
  { number: '100+', label: 'Cuisines' },
  { number: '4.8★', label: 'Average Rating' }
]
</script>

<style scoped>
.about-page {
  background: #ffffff;
}

/* Hero Section */
.about-hero {
  position: relative;
  min-height: 500px;
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 120px 20px 80px;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  animation: fadeInUp 1s ease;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 900;
  color: white;
  margin-bottom: 24px;
  line-height: 1.1;
}

.gradient-text {
  background: linear-gradient(135deg, #FFF 0%, #FDC830 50%, #FFF 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shimmer 3s linear infinite;
}

@keyframes shimmer {
  to { background-position: 200% center; }
}

.hero-subtitle {
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.7;
  max-width: 600px;
  margin: 0 auto;
}

.hero-decoration {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
}

.deco-circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: float 20s ease-in-out infinite;
}

.circle-1 {
  width: 300px;
  height: 300px;
  top: -100px;
  right: -100px;
  animation-delay: 0s;
}

.circle-2 {
  width: 200px;
  height: 200px;
  bottom: -50px;
  left: 10%;
  animation-delay: 2s;
}

.circle-3 {
  width: 150px;
  height: 150px;
  top: 50%;
  left: -50px;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-30px) scale(1.1); }
}

/* Mission Section */
.mission-section {
  padding: 100px 0;
  background: #f8f9fa;
}

.mission-content {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 80px;
  align-items: center;
}

.section-title {
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 800;
  color: #2d3436;
  margin-bottom: 24px;
}

.section-title.center {
  text-align: center;
}

.section-subtitle {
  text-align: center;
  font-size: 1.2rem;
  color: #636e72;
  margin-bottom: 60px;
}

.mission-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #475569;
  margin-bottom: 20px;
}

.image-card {
  background: white;
  padding: 60px;
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(255, 107, 53, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: float 6s ease-in-out infinite;
}

/* Features Section */
.features-section {
  padding: 100px 0;
  background: white;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-top: 60px;
}

.feature-card {
  background: #f8f9fa;
  padding: 40px;
  border-radius: 24px;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  animation: fadeInScale 0.6s ease both;
}

@keyframes fadeInScale {
  from { opacity: 0; transform: scale(0.9) translateY(20px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}

.feature-card:hover {
  background: white;
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(255, 107, 53, 0.15);
}

.feature-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  color: white;
  box-shadow: 0 8px 24px rgba(255, 107, 53, 0.3);
}

.feature-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: #2d3436;
  margin-bottom: 12px;
}

.feature-description {
  font-size: 1rem;
  line-height: 1.7;
  color: #636e72;
}

/* Stats Section */
.stats-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
}

.stat-card {
  text-align: center;
  padding: 40px 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.stat-card:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-4px);
}

.stat-number {
  font-size: 3rem;
  font-weight: 900;
  color: white;
  margin-bottom: 8px;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.stat-label {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
}

/* CTA Section */
.cta-section {
  padding: 100px 0;
  background: #f8f9fa;
}

.cta-content {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.cta-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  color: #2d3436;
  margin-bottom: 20px;
}

.cta-description {
  font-size: 1.2rem;
  color: #636e72;
  margin-bottom: 40px;
  line-height: 1.7;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 18px 48px;
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 8px 24px rgba(255, 107, 53, 0.4);
}

.cta-button:hover {
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 12px 32px rgba(255, 107, 53, 0.5);
}

.cta-button svg {
  transition: transform 0.3s ease;
}

.cta-button:hover svg {
  transform: translateX(4px);
}

/* Responsive */
@media (max-width: 968px) {
  .mission-content {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  .image-card {
    padding: 40px;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .about-hero {
    min-height: 400px;
    padding: 100px 20px 60px;
  }

  .mission-section,
  .features-section,
  .cta-section {
    padding: 60px 0;
  }

  .stats-section {
    padding: 60px 0;
  }

  .stats-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .stat-number {
    font-size: 2.5rem;
  }
}
</style>