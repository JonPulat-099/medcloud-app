<template>
  <header class="header">
    <picture>
      <!-- <source media="(max-width:567px)" srcset="/students.png" />
      <source
        media="(min-width: 568px) and (max-width:767px)"
        srcset="/images/header-hero-s.jpg"
      />
      <source
        media="(min-width: 768px) and (max-width:1024px)"
        srcset="/images/header-hero-m.jpg"
      />
      <source
        media="(min-width: 1025px) and (max-width:2461px)"
        srcset="/students.png"
      />
      <source media="(min-width: 2462px)" srcset="/students.png" /> -->
      <img
        src="/students.png"
        alt="UWorld Home banner"
        class="img-fluid fix-top"
      />
    </picture>
    <div class="header__content">
      <h1 class="header__content--title">
        Medicine lives here
      </h1>
      <div class="header__content--subtitle mb-5">
        Learn old facts by the new way
      </div>
      <v-btn
        class="text-uppercase font-weight-medium try__for--free rounded-xl"
        elevation="0"
        large
        >Try For Free</v-btn
      >
    </div>
  </header>
</template>
<script>
export default {}
</script>
<style lang="scss">
@import '../assets/css/_global.scss';

.header {
  height: auto;
  height: auto;
  // min-height: 500px;
  width: 100%;
  overflow: hidden;
  position: relative;
  background: #fff !important;

  &::before {
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 5px;
    position: absolute;
    background: rgba(0, 0, 0, 0.5);
  }

  img {
    max-width: 100%;
    width: 100%;
    height: 95vh;
    box-sizing: border-box;
    object-fit: cover;
    object-position: center;
  }

  &__content {
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translateY(-50%);
    color: #fff;

    &--title {
      font-size: 60px;
      line-height: 1.2;
      color: #fff;
    }

    &--subtitle {
      font-weight: 200 !important;
      font-size: 40px !important;
      line-height: 1.1 !important;
    }

    .try__for--free {
      border-radius: 10px;
      background: #00A0E3 !important;
      color: #fff;
      font-weight: 400 !important;
    }

    @include responsive(xs) {
      h1 {
        font-size: 35px !important;
      }

      &--title {
        font-size: 30px;
      }

      &--subtitle {
        font-size: 22px !important;
      }
    }
  }
}

.v-alert {
  background: transparent !important;
}</style>
