<template>
  <div class="news">
    <h4 class="route"><span>Главная</span> / Новости</h4>
    <h3>Новости</h3>

    <div class="news__cards">
      <div class="news__card card">
        <img class="card__img" src="/img/news/news_1.png" alt="" />
        <p class="card__date">6 июля 2025</p>
        <div class="card__text">
          <h4>Grand Egyptian Museum: A New Cultural Landmark</h4>
          <p>
            Scheduled to officially open on July 6, 2025, the Grand Egyptian Museum near Cairo will be the world's largest archaeological museum. The museum will house a vast collection of ancient Egyptian artifacts, including the complete Tutankhamun collection.
          </p>
        </div>
      </div>

      <div class="news__card card">
        <img class="card__img" src="/img/news/news_2.png" alt="" />
        <p class="card__date">20 мая 2025</p>
        <div class="card__text">
          <h4>Rolex Pavilion: A Testament to Sustainable Architecture</h4>
          <p>
            At the Venice Architecture Biennale, Rolex unveiled a new pavilion designed by architect Mariam Issoufou. Constructed with eco-friendly materials like recycled timber and terrazzo flooring with reused glass aggregate, the pavilion reflects a commitment to sustainability and design excellence.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// no changes here
</script>

<style scoped lang="scss">
span {
  color: $color-primary;
}

.route {
  margin: 40px;
  font-family: 'Open Sans';
  font-size: 20px;
  color: grey;
}

.news {
  padding: 40px;

  h3 {
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 38px;
    margin-bottom: 20px;
  }

  .news__cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .news__card {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      margin: 20px;
      max-width: 300px;
      transition: 0.3s;
      background: #fff;
      border-radius: 20px;
      overflow: hidden;

      .card__img {
        width: 100%;
        height: auto;
        border-radius: 20px 20px 0 0;
        object-fit: cover;
      }

      .card__date {
        color: #999;
        margin-top: 5px;
        font-size: 14px;
        margin-left: 15px;
      }

      .card__text {
        margin-top: 10px;
        margin-left: 15px;
        margin-right: 15px;

        h4 {
          font-size: 18px;
          margin-bottom: 5px;
        }

        p {
          color: #666;
          font-size: 14px;
        }
      }

      &:hover {
        transform: translateY(-10px);
      }
    }
  }
}
</style>
