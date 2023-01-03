<template>
  <div class="video__container">
    <video ref="videoPlayer" class="video-js"></video>
  </div>
</template>

<script>
import videojs from 'video.js'
import 'videojs-youtube'
import 'video.js/dist/video-js.min.css'

export default {
  name: 'VideoPlayer',
  props: {
    options: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      player: null,
    }
  },
  mounted() {
    this.player = videojs(this.$refs.videoPlayer, this.options, () => {
      this.player.log('onPlayerReady', this)
    })
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose()
    }
  },
}
</script>
<style lang="scss">
.video__container {
    width: inherit;
    height: 90%;
    margin-top: 20px;
  .video-js {
    width: inherit !important;
    height: 100%;
    min-height: 300px;

    @media only screen and (max-width: 960px) {
      min-height: 400px;
    }
  }

  .vjs-big-play-button {
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 100% !important;
    border-radius: 0 !important;

    .vjs-icon-placeholder {
      display: flex;
      align-items: center;
      justify-content: center;

      &::before {
        position: relative !important;
        font-size: 80px;
      }
    }
  }
}
</style>
