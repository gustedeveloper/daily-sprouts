<template>
  <div class="about-card">
    <div class="avatar-section">
      <img class="avatar" :src="'avatar.png'" alt="Pixel avatar" />
    </div>
    <div class="content">
      <div class="bio-section">
        <div class="main">
          <p><strong>Hey there! 😊</strong> I'm <strong>Guste</strong>,</p>
          <p>the creator of <strong>Daily Sprouts 🌱🌼!</strong></p>
        </div>

        <p>So happy to have you here!</p>
        <p>I really hope you're enjoying this cute app as much as I loved making it 🩵</p>
        <p>You can check out more of my projects below:</p>
      </div>
      <div class="socials">
        <a href="https://github.com/gustedeveloper" target="_blank">
          <img :src="'icons/github.png'" alt="GitHub" />
          GitHub
        </a>
        <a href="https://linkedin.com/in/gustegaubaite" target="_blank">
          <img :src="'icons/linkedin.png'" alt="LinkedIn" />
          LinkedIn
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-card {
  max-width: 700px;
  margin: 0 auto;
  padding: 40px;
  background-color: var(--pixel-bg-container);
  border: 3px solid var(--pixel-border);
  box-shadow: var(--pixel-box-shadow);
  font-family: var(--pixel-font);
  color: #4b2e2e;
  display: flex;
  gap: 20px;
}

.main p:first-child {
  margin-bottom: 0px;
}

.main p:nth-child(2) {
  margin-top: 0px;
}

.content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.avatar-section {
  display: flex;
  align-items: center;
}

.avatar {
  width: 200px;
  object-fit: cover;
  border: 10px solid var(--pixel-border);
  box-shadow: var(--pixel-box-shadow);
  background: #fff;
}

.socials {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.socials a {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  color: #4b2e2e;
  text-decoration: none;
}

.socials img {
  width: 30px;
  image-rendering: pixelated;
}

@media (max-width: 768px) {
  .about-card {
    margin: 0px 80px;
    gap: 10px;
  }

  .content,
  .socials a {
    font-size: 12px;
  }

  .avatar {
    width: 150px;
  }
}

@media (max-width: 650px) {
  .about-card {
    margin: 0px 30px;
    padding: 20px;
    flex-direction: column;
    align-items: center;
  }

  .content {
    gap: 10px;
    padding-bottom: 0px;
  }

  .content > .bio-section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .content > .bio-section p {
    margin-top: 0px;
    text-align: center;
  }
}
</style>
