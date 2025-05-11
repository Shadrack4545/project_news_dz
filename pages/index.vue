<template>
  <div class="layout">
    <div class="content">
      <main>
        <Slider />
        <div class="about">
          <div class="about__text">
            <h3>Each project is a unique journey</h3>
            <p>We believe architecture is more than just buildings — it’s a reflection of culture, history, and lifestyle. That’s why we explore and bring to life architectural styles from around the world, from modern minimalism to traditional Mediterranean villas</p>
           
          </div>
          <div class="about__card">
            <img class="img" src="/img/icons/home.svg" alt="" />
            <h4>Over 1000 Architectural designs</h4>
            <p>We’ve proudly completed over 57 architectural projects across various countries. Each one is a unique expression of design inspired by local and global styles”</p>
          </div>
          <div class="about__card">
            <img class="img" src="/img/icons/calendar.svg" alt="" />
            <h4> Years</h4>
            <p>With more than 50 years of experience, we continue to innovate and deliver timeless architectural designs that combine creativity with functionality</p>
          </div>
        </div>
      </main>
      <section class="projects">
        <h3>Realized Projects</h3>
        <div class="projects__cards">
          <div class="projects__card">
            <div class="card__text">
              <h4> Taj Mahal – India</h4>
        
              <p> Iconic white marble mausoleum known for symmetry and beauty..</p>
            </div>
            <img src="/img/main/p2.jpeg" alt="" />
          </div>
          <div class="projects__card">
            <div class="card__text">
              <h4>The Shard – London, UK</h4>
              <p>
                Tall, glass-covered skyscraper shaped like a shard of glass.
              </p>
            </div>
            <img src="/img/main/p1.png" alt="" />
          </div>
        </div>
      </section>
      <section class="news">
        <div class="news__header">
          <h3>News</h3>
          <MyButton @click="handleOpenNews" :is-hollow="true">
            All News
          </MyButton>
        </div>
        <div class="news__cards">
          <div class="news__card">
            <img class="card__img" src="/img/news/news_1.png" alt="" />
            <div class="card__text">
              <h4>Grand Egyptian Museum: A New Cultural Landmark</h4>
              <p>
                Scheduled to officially open on July 6, 2025, the Grand Egyptian Museum near Cairo will be the world's largest archaeological museum. The museum will house a vast collection of ancient Egyptian artifacts, including the complete Tutankhamun collection
              </p>
            </div>
          </div>
          <div class="news__card">
            <img class="card__img" src="/img/news/news_2.png" alt="" />
            <div class="card__text">
              <h4>Rolex Pavilion: A Testament to Sustainable Architecture</h4>
              <p>
At the Venice Architecture Biennale, Rolex unveiled a new pavilion designed by architect Mariam Issoufou. Constructed with eco-friendly materials like recycled timber and terrazzo flooring with reused glass aggregate, the pavilion reflects a commitment to sustainability and design excellence              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Slider from '~/components/Slider.vue';
import MyButton from '~/components/UI/Buttons/MyButton.vue';

import { useRouter } from 'vue-router';

const router = useRouter();

function handleOpenNews() {
  router.push('/news');
}
</script>

<style scoped lang="scss">
.about {
  display: flex;
  align-items: end;
  padding: 5%;
  @media screen and (max-width: $breakpoint-lg) {
    flex-direction: column;
    align-items: center;
  }
  .about__text {
    width: 60%;
    @media screen and (max-width: $breakpoint-lg) {
      width: 100%;
    }
    h3 {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 700;
      font-size: 38px;
      line-height: 120%;
    }
  }
  .about__card {
    margin: 20px 20px;
    width: 40%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 180px;
    background: #f5f7f3;
    border-radius: 20px;
    @media screen and (max-width: $breakpoint-lg) {
      width: 100%;
    }
    img {
      width: 24px;
      height: 24px;
    }
    h4 {
      margin: 10px 0;
    }
    p {
      margin: 0;
    }
  }
}

.projects {
  background: #f5f7f3;
  padding: 20px;

  h3 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 38px;
    line-height: 120%;
    color: #000000;
  }
  .projects__cards {
    display: flex;

    @media screen and (max-width: $breakpoint-xl) {
      overflow-x: scroll;
      width: 90vw;
    }
    .projects__card {
      display: flex;
      align-items: center;
      border-radius: 20px;
      background: #fff;
     
      .card__text {
        margin: 0 20px;
      }
      img {
        max-width: 300px;
        max-height: 300px;
      }
    }
    .projects__card:nth-child(1n) {
      margin-right: 20px;
    }
  }
}
.news {
  padding: 20px;
  .news__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h3 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 38px;
    line-height: 120%;
  }

  .news__cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    @media screen and (max-width: $breakpoint-lg) {
      overflow-x: scroll;
      width: 90vw;
      flex-wrap: nowrap;
      justify-content: left;
    }
    .news__card {
      display: flex;
      flex-direction: column;
      margin: 0 20px;
      max-width: 300px;
      p {
        color: #666666;
      }
    }
  }
}

.layout {
  display: flex;
  height: 100%;
  gap: 20px;
}

.content {
  flex: 1;
}

.img {
  width: 25%;
  min-width: 200px;
  aspect-ratio: 1/1;
}

.content {
  font-family: var(--font-primary);
}

.left-column,
.right-column {
  font-family: var(--font-secondary);
}
</style>
