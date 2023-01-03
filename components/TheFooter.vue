<template>
  <footer class="footer">
    <v-container grid-list-xs>
      <v-row>
        <v-col cols="12" md="3" sm="6" xs="12">
          <h4>Company</h4>
          <ul>
            <li><a href="">About us</a></li>
            <li><a href="">Work with Us</a></li>
            <li><a href="">Newsroom</a></li>
          </ul>
        </v-col>
        <v-col cols="12" md="3" sm="6" xs="12">
          <h4>Products</h4>
          <ul>
            <li><a href="">USMLE Step 1 Qbank</a></li>
            <li><a href="">Basic Science Lectures</a></li>
            <li><a href="">Clinical Science Lectures</a></li>
            <li><a href="">Podcasts</a></li>
          </ul>
        </v-col>
        <v-col cols="12" md="3" sm="6" xs="12">
          <h4>Connect</h4>
          <ul>
            <li><a href="">Contact Us</a></li>
          </ul>
        </v-col>
        <v-col cols="12" md="3" sm="6" xs="12">
          <h4>Follow Us</h4>
          <ul class="follow">
            <li>
              <a href="">
                <img src="/icons/facebook.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="/icons/twitter.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="/icons/instagram.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="/icons/youtube.svg" alt="" />
              </a>
            </li>
          </ul>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="caption text-center">
          © medcloud
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>
<script>
export default {}
</script>
<style lang="scss">
.footer {
  background: #2d2b26;
  color: #fff;
  padding: 30px 0;

  h4 {
    margin: 0 0 25px 0;
  }

  ul {
    list-style-type: none;
    padding: 0;

    &.follow {
      display: inline-flex !important;
      gap: 8px;

      a:hover {
        img {
          transform: translateY(-5px);
        }
      }
    }
  }
  a {
    text-decoration: none;
    font-weight: 300;
    margin: 0 0 10px !important;
    font-size: 14px;
    line-height: 16px;
    display: inline-block;
    color: #fff;
    transition: all 0.45s linear;

    &:hover {
      text-decoration: underline;
    }

    img {
      width: 22px;
      height: 22px;
      transition: .25s all;
    }
  }
}
</style>
