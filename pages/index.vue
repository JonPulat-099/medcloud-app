<template>
  <div>
    <the-header></the-header>
    <section class="our__products">
      <v-container grid-list-xs class="our__products--info text-center">
        <h2 class="font-weight-medium">Explore Our Products</h2>
        <h3 class="font-weight-light mb-4">
          High-Yield Medical Facts From Students to Students
        </h3>
        <p class="caption">
          Since 2003, nearly all medical students in the United States have
          trusted UWorld to prepare for their licensing exams.
        </p>
        <p class="caption">
          Being at the forefront of medical education gives us an obligation to
          provide students with only the best practice questions and
          explanations.
        </p>
        <p class="caption">
          Our goal is not only to prepare you for the USMLE, but to help you
          become a better clinician.
        </p>
        <v-layout row wrap class="our__products--stats">
          <v-flex xs12 sm6 md4>
            <img src="" alt="" />
            <p>16+ Basic And</p>
            <p>13+ Clinical Disciplines</p>
          </v-flex>
          <v-flex xs12 sm6 md4>
            <img src="" alt="" />
            <p>3000+ Questions</p>
            <p>500+ hrs of Videolectures</p>
          </v-flex>
          <v-flex xs12 sm6 md4>
            <img src="" alt="" />
            <p>Students Passed the USMLE</p>
            <p>With high Scores</p>
          </v-flex>
        </v-layout>
      </v-container>
      <article class="product">
        <v-container grid-list-xs>
          <v-layout row wrap>
            <v-flex xs12>
              <h2>USMLE Step 1 Question Bank</h2>
            </v-flex>
            <v-flex xs12 sm6>
              <video-player :options="video_options"></video-player>
            </v-flex>
            <v-flex xs12 sm6>
              <b>3000+ challenging USMLE Step 1 questions</b>
              <p>
                Real-life clinical scenarios test high-yield basic science
                concepts
              </p>
              <p>Continuous updates to maintain high standards of excellence</p>
              <b>In-depth explanations</b>
              <p>
                Conceptual focus on important preclinical and clinical topics
              </p>
              <p>Detailed explanations for incorrect options</p>
              <b>Exam-like software interface</b>
              <p>Highlighting of relative strengths and weaknesses</p>
              <p>Performance gauging with peer-to-peer comparison</p>
              <v-btn color="success">READ MORE</v-btn>
              <v-btn color="success">TRY FOR FREE</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </article>
      <article class="product">
        <v-container grid-list-xs>
          <v-layout row wrap>
            <v-flex xs12>
              <h2>USMLE Step 1 Question Bank</h2>
            </v-flex>

            <v-flex xs12 sm6>
              <b>3000+ challenging USMLE Step 1 questions</b>
              <p>
                Real-life clinical scenarios test high-yield basic science
                concepts
              </p>
              <p>Continuous updates to maintain high standards of excellence</p>
              <b>In-depth explanations</b>
              <p>
                Conceptual focus on important preclinical and clinical topics
              </p>
              <p>Detailed explanations for incorrect options</p>
              <b>Exam-like software interface</b>
              <p>Highlighting of relative strengths and weaknesses</p>
              <p>Performance gauging with peer-to-peer comparison</p>
              <v-btn color="success">READ MORE</v-btn>
              <v-btn color="success">TRY FOR FREE</v-btn>
            </v-flex>
            <v-flex xs12 sm6>
              <video-player :options="video_options"></video-player>
            </v-flex>
          </v-layout>
        </v-container>
      </article>
      <article class="product">
        <v-container grid-list-xs>
          <v-layout row wrap>
            <v-flex xs12>
              <h2>USMLE Step 1 Question Bank</h2>
            </v-flex>
            <v-flex xs12 sm6>
              <video-player :options="video_options"></video-player>
            </v-flex>
            <v-flex xs12 sm6>
              <b>3000+ challenging USMLE Step 1 questions</b>
              <p>
                Real-life clinical scenarios test high-yield basic science
                concepts
              </p>
              <p>Continuous updates to maintain high standards of excellence</p>
              <b>In-depth explanations</b>
              <p>
                Conceptual focus on important preclinical and clinical topics
              </p>
              <p>Detailed explanations for incorrect options</p>
              <b>Exam-like software interface</b>
              <p>Highlighting of relative strengths and weaknesses</p>
              <p>Performance gauging with peer-to-peer comparison</p>
              <v-btn color="success">READ MORE</v-btn>
              <v-btn color="success">TRY FOR FREE</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </article>
    </section>
  </div>
</template>
<script>
export default {
  name: 'HomePage',
  layout: 'landing',
  components: {
    TheHeader: () => import('@/components/TheHeader.vue'),
    VideoPlayer: () =>
      import(/* webpackPrefetch: true */ '@/components/VideoPlayer.vue'),
  },
  data() {
    return {
      video_options: {
        autoplay: false,
        controls: true,
        techOrder: ['youtube'],
        sources: [
          {
            type: 'video/youtube',
            src: 'https://www.youtube.com/watch?v=L91xVF6gEZI',
          },
        ],
      },
    }
  },
}
</script>
<style lang="scss"></style>
