<template>
  <section class="HomeView_Background_image">
    <div class="HomeView_Background_Image_content">
      <h1 class="HomeView_Background_image_title">
        <span style="color: #B3B3B3;">licht en interieur</span>
        <span>in perfecte harmonie</span>
      </h1>

      <button
        class="HomeView_background_image__button"
        type="button"
      >
        Bekijk projecten
      </button>
    </div>
  </section>
</template>

<style scoped>
.HomeView_Background_image {
  position: relative;
  width: 100%;
  min-height: 680px;

  overflow: hidden;

  background-image: url('/favicon_lounge.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
}

.HomeView_Background_Image_content {
  position: relative;
  z-index: 1;

  padding-left: clamp(32px, 6vw, 80px);
  color: white;
}

.HomeView_Background_image_title {
  display: flex;
  flex-direction: column;

  margin-bottom: 42px;

  color: #f2f2f2d6;

  font-size: clamp(30px, 3.2vw, 45px);
  font-weight: 300;
  line-height: 1.3;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  letter-spacing: 0.40rem;

  text-shadow: 0 2px 16px rgba(0, 0, 0, 0.18);
}

.HomeView_background_image__button {
  background: #C09563;
  color: white;
  border: none;
  padding: 0.8rem 2.4rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.HomeView_background_image__button:hover {
  background: #bd8d4e;
}
</style>
