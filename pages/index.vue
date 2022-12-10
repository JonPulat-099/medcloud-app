<template lang="">
  <div style="background: #fff !important">
    <!-- <Header /> -->
    <v-container grid-list-xs>
      <v-row xs12 class="my-5 py-5">
        <h3 class="mx-auto text-uppercase display-1 font-weight-bold my-5">
          Наша миссия
        </h3>
        <p class="mb-5 font-weight-light">
          Знаю как сильно каждый хочет стать хорошим специалистом, помогать
          другим и не испытывать финансовые трудности в жизни. Так же как и вам,
          мне довелось поступать в мед с большими надеждами. Но, реальность,
          может быть не такой, какой мы себе её представляем. 
        </p>
        <p class="mb-5 font-weight-light">
          Устаревшая программа и стандарты лечения, отсутствие связей между
          дисциплинами, вечная нехватка времени и постоянное забывание материала
          - это то, с чем сталкиваются большинство студентов ВУЗов в СНГ. И как
          говорил Ганди, мне захотелось стать переменой в системе, которую
          хотелось видеть. Так я основал medcloud.
        </p>
        <p class="mb-5 font-weight-light">
          Создавая эту маленькую школу, мне хотелось стать мостом между старым и
          новым, помочь докторам и студентам вновь обрести свою любовь к
          медицине. Благодарю каждого, кто вступил с нами на этот путь и
          работает над собой сегодня, чтобы иметь возможность оказать
          квалифицированную помощь другим завтра. 
        </p>
        <div class="d-flex align-center">
          <img src="@/assets/images/ft.jpeg" width="150" />
          <div class="ml-5">
            <div>Фархад</div>
            <div>CEO medcloud</div>
          </div>
        </div>
      </v-row>
    </v-container>
    <div class="what__is">
      <v-container grid-list-xs>
        <div class="what__is--wrapper">
          <div class="what__is--block">
            <v-carousel cycle hide-delimiter-background show-arrows-on-hover>
              <v-carousel-item v-for="(slide, i) in slides" :key="i">
                <img src="/images/timur.png" />
              </v-carousel-item>
            </v-carousel>
          </div>
          <div class="what__is--block">
            <h3 class="display-1 font-weight-bold">Что такое Medcloud?</h3>
            <p class="my-4 subtitle-1">
              Мы образовательный центр который на протяжении 5 лет успешно
              готовит врачей и студентов к USMLE экзаменам. Если Вы ищите пути
              по которым сможете уехать и работать врачом за рубежом (в
              частности США) мы вам в этом поможем! 
            </p>
            <p>
              <v-btn
                class="d-inline-block rounded-lg"
                depressed
                color="primary"
              >
                Узнать больше
              </v-btn>
            </p>
          </div>
        </div>
      </v-container>
    </div>
    <div class="team">
      <v-container grid-list-xs>
        <v-row>
          <v-col
            cols="12"
            lg="6"
            md="6"
            class="d-flex justify-center align-center order-sm-2 order-last"
          >
            <div class="team__content">
              <div class="team__title display-1 font-weight-bold">
                Виртуальный 3D Тур!
              </div>
              <div class="team__subtitle subtitle-1 mb-8 mt-5">
                Вам не нужно тратить время на дорогу чтобы посетить наш центр!
                Все что вам нужно это перейти по ссылке ниже и посмотреть наш
                центр в 360! 
              </div>
              <v-btn
                class="text-capitalize subtitle-1"
                dark
                color="primary"
                rounded-lg
                >Провести Виртуальный тур</v-btn
              >
            </div>
          </v-col>
          <v-col cols="12" lg="6" md="6" class="order-sm-1 order-xs-1">
            <img
              class="team__image mt-n16"
              src="@/assets/images/virtual-tour.jpg"
              alt="team image"
            />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="offers">
      <v-container grid-list-xs class="text-center">
        <div class="white--text display-2 font-weight-bold mb-5">
          Что мы предлагаем?
        </div>
        <v-row class="white--text">
          <v-col lg="4" md="4" tb="4" sm="4" xs="12">
            <span class="font-weight-medium text-h3 text-md-h2"> 16 </span>
            <p class="headline amber--text font-weight-bold">Курсов</p>
          </v-col>
          <v-col lg="4" md="4" tb="4" sm="4" xs="12">
            <span class="font-weight-medium text-h3 text-md-h2"> 300+ </span>
            <p class="headline amber--text font-weight-bold">Часов видео</p>
          </v-col>
          <v-col lg="4" md="4" tb="4" sm="4" xs="12">
            <span class="font-weight-medium text-h3 text-md-h2"> 20+ </span>
            <p class="headline amber--text font-weight-bold">Сдавших Steps</p>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="news">
      <v-container grid-list-xs>
        <h3 class="display-1 font-weight-bold">СТАТЬИ И НОВОСТИ</h3>
        <p class="subtitle-1 mt-3 mb-5">
          Оставайтесь с нами и подписывайтесь на наш телеграм-канал чтобы быть в
          курсе последних новостей!
        </p>
        <v-layout row wrap mt-5>
          <v-flex
            v-for="(n, i) in news"
            :key="'news__' + i"
            xs12
            class="news__block d-flex flex-wrap flex-sm-wrap flex-md-nowrap flex-lg-nowrap align-center pa-4"
          >
            <img :src="`${n.img}`" class="mr-5" />
            <div class="news__content">
              <h4 class="headline font-weight-bold">
                {{ n.title }}
              </h4>
              <p class="body-1">
                {{ n.text }}
              </p>
              <div class="news__content--actions">
                <v-btn
                  v-if="!!n.download"
                  color="primary"
                  class="rounded-lg my-1"
                  depressed
                >
                  <v-icon>mdi-download</v-icon>
                  Скачать</v-btn
                >
                <v-btn
                  v-if="!!n.read"
                  color="primary"
                  class="rounded-lg my-1"
                  depressed
                >
                  <v-icon>mdi-text-box-outline</v-icon>
                  Читать статью</v-btn
                >
                <v-btn
                  v-if="!!n.watch"
                  color="primary"
                  class="rounded-lg my-1"
                  depressed
                >
                  <v-icon>mdi-youtube</v-icon>
                  Смотреть видео</v-btn
                >
                <v-btn
                  v-if="!!n.watch_report"
                  color="primary"
                  class="rounded-lg my-1"
                  depressed
                >
                  <v-icon>mdi-file-video-outline</v-icon>
                  Смотреть видеоотчёт
                </v-btn>
                <v-btn
                  v-if="!!n.read_report"
                  color="primary"
                  class="rounded-lg my-1"
                  depressed
                >
                  <v-icon>mdi-file-document-outline</v-icon>
                  Читать отчёт
                </v-btn>
              </div>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <div class="reviews">
      <v-container grid-list-xs>
        <h3 class="display-1 font-weight-bold mb-5">ОТЗЫВЫ</h3>
        <v-carousel
          cycle
          hide-delimiter-background
          show-arrows-on-hover
          reviews
          height="auto"
        >
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-row class="reviews__content" align="center" justify="center">
              <p>
                Во время карантина я частично почувствовала ту атмосферу, когда
                человек один готовится к USMLE,  поняла как сложно учиться
                одному, как сложно отыскивать нужную информацию и понимать
                сложные механизмы. Я и представить себе не могла с каким ценным
                опытом делятся с нами в центре! Но даже во время карантина, я
                смогла перебороть все трудности и каждый день с новой мотивацией
                двигаться к своей цели благодаря онлайн урокам  Medcloud. Мне
                очень повезло, учиться в вашем центре, самое главное, я
                научилась как нужно правильно учиться и стала более
                дисциплинированной!
              </p>
              <img />
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomePage',
  layout: "landing",
  // components: {
  //   Header: () => import('@/components/Header.vue'),
  // },
  data() {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: ['First', 'Two'],
      news: [
        {
          img: '/images/mc.jpg',
          title: 'Подробный отчёт о medcloud',
          text: 'По ссылке ниже вы можете скачать презентацию узнать о нашем центре и о наших достижениях',
          download: 'link',
          read_report: 'link',
        },
        {
          img: '/images/mc.jpg',
          title: 'Подробный отчёт о medcloud',
          text: 'По ссылке ниже вы можете скачать презентацию узнать о нашем центре и о наших достижениях',
          download: 'link',
          watch_report: 'link',
          watch: 'link',
        },
        {
          img: '/images/mc.jpg',
          title: 'Подробный отчёт о medcloud',
          text: 'По ссылке ниже вы можете скачать презентацию узнать о нашем центре и о наших достижениях',
          read: 'link',
        },
      ],
    }
  },
}
</script>
<style lang="scss"></style>
