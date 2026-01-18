<template>
  <v-footer class="footer">
    <div class="footer-top">
      <v-container>
        <div class="footer-content">
          <div class="footer-brand">
            <div class="logo">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6z" 
                  fill="url(#footerGradient)" stroke="none"/>
                <line x1="6" y1="17" x2="18" y2="17" stroke="white" stroke-width="2"/>
                <defs>
                  <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#FF6B35"/>
                    <stop offset="100%" style="stop-color:#F7931E"/>
                  </linearGradient>
                </defs>
              </svg>
              <span class="logo-text">Eat-Smart</span>
            </div>
            <p class="brand-desc">Discover, cook, and share delicious recipes from around the world.</p>
          </div>

          <div class="footer-links">
            <div class="link-group">
              <h4>Explore</h4>
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="#">Recipes</a>
            </div>
            <div class="link-group">
              <h4>Connect</h4>
              <a href="#">Instagram</a>
              <a href="#">Twitter</a>
              <a href="#">Facebook</a>
            </div>
          </div>
        </div>
      </v-container>
    </div>

    <div class="footer-bottom">
      <v-container>
        <div class="copyright">
          {{ new Date().getFullYear() }} © <strong>Eat-Smart</strong> - All rights reserved
        </div>
      </v-container>
    </div>
  </v-footer>
</template>

<style scoped>
.footer { background: linear-gradient(135deg, #2d3436 0%, #1a1d1f 100%); color: white; padding: 0; }
.footer-top { padding: 60px 0 40px; border-bottom: 1px solid rgba(255,255,255,0.1); }
.footer-content { display: grid; grid-template-columns: 2fr 1fr; gap: 60px; }
.footer-brand .logo { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
.logo-text { font-size: 1.5rem; font-weight: 900; background: linear-gradient(135deg,#FF6B35 0%,#F7931E 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.brand-desc { color: rgba(255,255,255,0.7); line-height: 1.6; max-width: 400px; }
.footer-links { display: flex; gap: 60px; }
.link-group h4 { color: white; font-weight: 700; margin-bottom: 16px; font-size: 1rem; }
.link-group a { display: block; color: rgba(255,255,255,0.7); text-decoration: none; margin-bottom: 12px; transition: all 0.3s; }
.link-group a:hover { color: #FF6B35; transform: translateX(4px); }
.footer-bottom { padding: 24px 0; background: rgba(0,0,0,0.2); }
.copyright { text-align: center; color: rgba(255,255,255,0.6); font-size: 0.9rem; }
.copyright strong { color: #FF6B35; }
@media (max-width: 768px) {
  .footer-content { grid-template-columns: 1fr; gap: 40px; }
  .footer-links { gap: 40px; }
}
</style>