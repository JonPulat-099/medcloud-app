<template>
  <client-only>
    <div class="swiper home__slider" ref="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="home__slider--item">
            <h4 class="font-weight-light mb-4">Nazokat</h4>
            <p class="caption">
              Since 2003, nearly all medical students in the, United States have
              trusted UWorld to prepare for their licensing exams. Since 2003,
              nearly all medical students in the United States have trusted
              UWorld to prepare for their licensing exams.
            </p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="home__slider--item">
            <h4 class="font-weight-light mb-4">Timur</h4>
            <p class="caption">
              Since 2003, nearly all medical students in the, United States have
              trusted UWorld to prepare for their licensing exams. Since 2003,
              nearly all medical students in the United States have trusted
              UWorld to prepare for their licensing exams.
            </p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="home__slider--item">
            <h4 class="font-weight-light mb-4">Nazar</h4>
            <p class="caption">
              Since 2003, nearly all medical students in the, United States have
              trusted UWorld to prepare for their licensing exams. Since 2003,
              nearly all medical students in the United States have trusted
              UWorld to prepare for their licensing exams.
            </p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="home__slider--item">
            <h4 class="font-weight-light mb-4">Nazokat</h4>
            <p class="caption">
              Since 2003, nearly all medical students in the, United States have
              trusted UWorld to prepare for their licensing exams. Since 2003,
              nearly all medical students in the United States have trusted
              UWorld to prepare for their licensing exams.
            </p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="home__slider--item">
            <h4 class="font-weight-light mb-4">Timur</h4>
            <p class="caption">
              Since 2003, nearly all medical students in the, United States have
              trusted UWorld to prepare for their licensing exams. Since 2003,
              nearly all medical students in the United States have trusted
              UWorld to prepare for their licensing exams.
            </p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="home__slider--item">
            <h4 class="font-weight-light mb-4">Nazar</h4>
            <p class="caption">
              Since 2003, nearly all medical students in the, United States have
              trusted UWorld to prepare for their licensing exams. Since 2003,
              nearly all medical students in the United States have trusted
              UWorld to prepare for their licensing exams.
            </p>
          </div>
        </div>
      </div>
      <div class="swiper-button-next home__slider--next"></div>
      <div class="swiper-button-prev home__slider--prev"></div>
    </div>
  </client-only>
</template>

<script>
import Swiper from 'swiper/swiper-bundle.min'
import 'swiper/swiper-bundle.min.css'

export default {
  async mounted() {
    await this.$nextTick()
    new Swiper(this.$refs.swiper, {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        900: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    })
  },
}
</script>

<style lang="scss">
.swiper-slide {
  // padding: 0 20px;
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.home__slider {
  &--next,
  &--prev {
    &:after {
      display: none;
    }
    width: 0;
    height: 0;
    border-top: 30px solid transparent;
    border-bottom: 30px solid transparent;
  }
  &--next {
    border-left: 30px solid #8996ac;
    margin-right: -10px;
  }

  &--prev {
    border-right: 30px solid #8996ac;
    margin-left: -10px;
  }

  &--item {
    display: flex;
    flex-direction: column;
    padding: 0 25px;

    h4 {
      font-weight: 300;
    }
  }

  &.swiper {
    width: 100%;
    padding: 0 35px;
  }
}
</style>
