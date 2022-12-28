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
          <ul>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
          </ul>
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
  background: #424242;
  color: #fff;

  ul {
    list-style-type: none;
    padding: 0;
  }
  i {
    color: #fff !important;
    margin: 0 10px 0 0;
  }
  a {
    text-decoration: none;
    font-weight: 300;
    margin: 0 0 10px !important;
    display: inline-block;
    color: #fff;
    transition: all 0.45s linear;

    &:hover {
      text-decoration: underline;

      i {
        color: #1976d2 !important;
      }
    }
  }
}
</style>
