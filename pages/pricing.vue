<template>
  <v-layout row wrap white>
    <v-container grid-list-md class="price container__content">
      <v-stepper v-model="step" elevation="0">
        <v-stepper-header class="elevation-0">
          <v-stepper-step :complete="step > 1" step="1" color="primary">
            Pricing
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="step > 2" step="2" color="primary">
            Cart
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="3" color="primary">
            Profile
          </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card v-if="!show_price" class="mb-12 step__tab--1" elevation="0">
              <v-layout row wrap>
                <v-flex
                  v-for="p in products"
                  :key="`product__${p.id}`"
                  xs12
                  md4
                  pa-2
                >
                  <h4 class="text-h5 mb-6">{{ p.title }}</h4>
                  <ul>
                    <li
                      v-for="t in p.types"
                      :key="t.name"
                      class="grey--text pa-1 d-flex justify-space-between align-center rounded-lg"
                      @click="openPriceTab(t)"
                    >
                      <span> {{ t.name }} </span>
                      <v-btn color="primary" icon>
                        <v-icon>mdi-chevron-right</v-icon>
                      </v-btn>
                    </li>
                  </ul>
                </v-flex>
              </v-layout>
            </v-card>

            <v-card v-else class="step__tab--2 mb-12" elevation="0">
              <v-btn
                class="mb-4"
                color="primary"
                text
                @click="show_price = false"
              >
                <v-icon>mdi-arrow-left-circle</v-icon>
                Back
              </v-btn>
              <v-layout row wrap>
                <v-flex
                  v-for="t in current__product.list"
                  :key="`curr__product__${t.id}`"
                  xs12
                  md4
                  pa-2
                >
                  <h4 class="text-h6 mb-6">{{ t.name }}</h4>
                  <ul>
                    <li
                      v-for="p in t.plans"
                      :key="p.name"
                      class="grey--text pa-1 d-flex justify-space-between align-center rounded-lg"
                      @click="selectProduct(t, p)"
                    >
                      <span> {{ p.name }} </span>
                      <v-spacer></v-spacer>
                      <span v-if="p.sale" class="text-decoration-line-through">
                        {{ p.price }}
                      </span>
                      <span v-else class="blue--text"> {{ p.price }} </span>
                      <span v-if="p.sale" class="red--text ml-1">
                        {{ p.sale }}
                      </span>
                      <v-btn color="primary" icon>
                        <v-icon>mdi-chevron-right</v-icon>
                      </v-btn>
                    </li>
                  </ul>
                </v-flex>
              </v-layout>
            </v-card>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-card class="mb-12" elevation="0">
              <v-layout row wrap justify-space-between>
                <v-flex xs12 md4 mb-6>
                  <ul>
                    <li
                      v-for="p in selected"
                      :key="p.id"
                      class="grey--text d-flex flex-column mb-3"
                    >
                      <h4 class="black--text">{{ p.name }}</h4>
                      <div class="d-flex align-center">
                        <span> {{ p.product.name }} </span>
                        <v-spacer></v-spacer>
                        <span
                          v-if="p.product.sale"
                          class="text-decoration-line-through"
                        >
                          {{ p.product.price }}
                        </span>
                        <span v-else class="blue--text">
                          {{ p.product.price }}
                        </span>
                        <span v-if="p.product.sale" class="red--text ml-1">
                          {{ p.product.sale }}
                        </span>
                        <v-btn color="primary" icon @click="deleteProduct(p)">
                          <v-icon>mdi-close-circle</v-icon>
                        </v-btn>
                      </div>
                      <v-divider light></v-divider>
                    </li>
                  </ul>
                </v-flex>
                <v-flex xs12 md4 class="text-center">
                  <div
                    class="checkout__card d-flex flex-column grey lighten-3 mb-6"
                  >
                    <h4 class="pt-5">Total (USD)</h4>
                    <div class="my-3">
                      <h1><sup>$</sup>{{ total }}</h1>
                    </div>
                    <v-btn
                      color="primary rounded-0"
                      elevation="0"
                      @click="nextStep"
                      >Checkout</v-btn
                    >
                  </div>

                  <v-btn
                    color="primary"
                    text
                    @click=";(step = 1), (show_price = false)"
                    >Continue Shopping</v-btn
                  >
                </v-flex>
              </v-layout>
            </v-card>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-container>
    <v-dialog
      v-model="waring"
      scrollable
      persistent
      :overlay="false"
      max-width="600px"
      transition="dialog-top-transition"
      z-index="10000"
    >
      <v-card>
        <v-toolbar elevation="0">
          <v-icon>mdi-alert-octagon</v-icon>
          <v-toolbar-title>Error</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <p>The selected package was previously added to your cart.</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="waring = false">Ok</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
export default {
  name: 'Pricing',
  layout: 'landing',
  auth: false,
  data() {
    return {
      step: 1,
      show_price: false,
      waring: false,
    }
  },
  computed: {
    total() {
      return this.selected
        .filter((x) => x.product.type == 'nofree')
        .map((x) => {
          let price = ''
          if (x.product.sale) price = x.product.sale
          else price = x.product.price
          return Number(price.slice(1))
        })
        .reduce((x, y) => x + y, 0)
    },
    products() {
      return this.$store.state.shopping.products
    },
    current__product() {
      return this.$store.state.shopping.current_product
    },
    selected() {
      return this.$store.state.shopping.selected
    },
  },
  mounted() {
    const query = this.$route.query
    console.log(query)
    if (query.step) this.step = query.step
  },
  methods: {

    openPriceTab(product) {
      this.$store.commit('shopping/setCurrentProduct', product)
      this.show_price = true
    },

    selectProduct(type, selected) {
      const check = this.$store.getters['shopping/hasProduct'](type.id)
      if (!check) {
        this.$store.commit('shopping/setSelectedProduct', {
          type,
          product: selected,
        })
        this.step = 2
      } else {
        this.waring = true
      }
    },

    deleteProduct(type) {
      this.$store.commit('shopping/removeSelectedProduct', type.id)
    },

    nextStep() {
      this.$router.push('/login')
    },
  },
}
</script>
<style lang="scss">
.price {
  padding-top: 80px;
  .checkout__card {
    border-radius: 6px;
    box-shadow: 0 2px 5px 0 rgba(39, 39, 39, 0.25);
    overflow: hidden;
  }
}
.step__tab--1,
.step__tab--2 {
  ul {
    list-style: none;
    padding: 0;

    li {
      transition: all 0.25s linear;
      cursor: pointer;
      &:hover {
        color: #000 !important;
        background: #f4f4f4;

        i {
          color: #000 !important;
          transform: rotate(180deg);
        }
      }
    }
  }
}
</style>
