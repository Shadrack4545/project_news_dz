<template>
  <div class="projects">
    <h4 class="route"><span>Главная</span> / Реализованные проекты</h4>
    <h3>Realized Projects</h3>

    <div class="projects__cards">
      <div class="projects__card">
        <div class="card__text">
          <h4>Taj Mahal – India</h4>
          <p>
            Iconic white marble mausoleum known for symmetry and beauty.
          </p>
        </div>
        <img src="/img/main/p2.jpeg" alt="Taj Mahal" />
      </div>

      <div class="projects__card">
        <div class="card__text">
          <h4>The Shard – London, UK</h4>
          <p>
            Tall, glass-covered skyscraper shaped like a shard of glass.
          </p>
        </div>
        <img src="/img/main/p1.png" alt="The Shard" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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

.projects {
  background: #f5f7f3;
  padding: 40px;

  h3 {
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 38px;
    margin-bottom: 20px;
  }

  .projects__cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .projects__card {
      display: flex;
      align-items: center;
      border-radius: 20px;
      background: #fff;
      padding: 20px;
      margin: 20px;
      max-width: 600px;
      gap: 20px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

      .card__text {
        max-width: 50%;
        h4 {
          font-size: 18px;
          margin-bottom: 5px;
        }
        p {
          font-size: 14px;
          color: #666;
        }
      }

      img {
        max-width: 250px;
        border-radius: 10px;
      }

      &:hover {
        transform: translateY(-10px);
        transition: 0.3s ease;
      }
    }
  }
}
</style>
