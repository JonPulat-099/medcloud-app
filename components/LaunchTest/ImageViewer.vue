<template>
  <div class="image-viewer__modal">
    <img id="image-viewer" :src="image" alt="Picture" />
  </div>
</template>
u
<script>
import 'viewerjs/dist/viewer.css'
import Viewer from 'viewerjs'
export default {
  name: 'ImageViewer',
  props: {
    image: {
      // required: true,
      type: String,
      default: 'https://a.d-cd.net/4acf09u-1920.jpg',
    },
  },
  data() {
    return {
      dialog: true,
    }
  },
  mounted() {
    const viewer = new Viewer(document.getElementById('image-viewer'), {
      inline: true,
      navbar: false,
      viewed() {
        viewer.zoomTo(0.5)
      },
    })
  },
}
</script>

<style lang="scss">
.image-viewer__modal {
  height: 70vh;
  > img {
    display: none;
  }

  .viewer-toolbar {
    .viewer-prev,
    .viewer-next {
      display: none;
    }
  }

  .viewer-container {
    width: 100%;
  }
}
</style>