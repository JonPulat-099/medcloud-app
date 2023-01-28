<template>
  <div class="lab__values">
    <div class="lab__values--haeder d-flex align-center justify-space-between flex-wrap">
      <aside>
        <h4 class="font-weight-medium">Lab Values</h4>
        <v-text-field label="Search" append-outer-icon="mdi-magnify">
        </v-text-field>
      </aside>
      <aside>
        <inset-switch v-model="is_si"></inset-switch>
      </aside>
    </div>
    <div class="lab__values--body">
      <v-tabs
        v-model="tab"
        background-color="transparent"
        color="black"
        grow
        hide-slider
      >
        <v-tab v-for="item in types" :key="item.name">
          {{ item.name }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in types" :key="item.name">
          <v-card color="basil" flat>
            <v-card-text>
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left font-italic font-weight-black">{{ item.name }}</th>
                      <th class="text-left font-italic font-weight-black">Reference range</th>
                      <th v-if="is_si" class="text-left font-italic font-weight-black">Reference range</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(v, i) in item.values" :key="`range_${i}`">
                      <td class="font-weight-medium">{{ v.name }}</td>
                      <td class="font-weight-medium">{{ v.range }}</td>
                      <td class="font-weight-medium" v-if="is_si">{{ v.interval }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LabValues',
  components: {
    InsetSwitch: () => import('@/components/InsetSwitch.vue'),
  },
  data() {
    return {
      switch2: false,
      is_si: false,
      tab: null,
      types: [
        {
          id: 1,
          name: 'Serum',
          values: [
            {
              name: 'Alanine aminotransferase (ALT) ',
              range: '10-40 U/L',
              interval: '10-40 U/L',
            },
            {
              name: 'Alanine aminotransferase (ALT) ',
              range: '10-40 U/L',
              interval: '10-40 U/L',
            },
            {
              name: 'Alanine aminotransferase (ALT) ',
              range: '10-40 U/L',
              interval: '10-40 U/L',
            },
            {
              name: 'Alanine aminotransferase (ALT) ',
              range: '10-40 U/L',
              interval: '10-40 U/L',
            },
          ],
        },
        {
          id: 2,
          name: 'CSF',
          values: [
            {
              name: 'Alanine aminotransferase (ALT) ',
              range: '10-40 U/L',
              interval: '10-40 U/L',
            },
            {
              name: 'Alanine aminotransferase (ALT) ',
              range: '10-40 U/L',
              interval: '10-40 U/L',
            },
            {
              name: 'Alanine aminotransferase (ALT) ',
              range: '10-40 U/L',
              interval: '10-40 U/L',
            },
            {
              name: 'Alanine aminotransferase (ALT) ',
              range: '10-40 U/L',
              interval: '10-40 U/L',
            },
          ],
        },
        {
          id: 3,
          name: 'Blood',
          values: [
            {
              name: 'Alanine aminotransferase (ALT) ',
              range: '10-40 U/L',
              interval: '10-40 U/L',
            },
            {
              name: 'Alanine aminotransferase (ALT) ',
              range: '10-40 U/L',
              interval: '10-40 U/L',
            },
            {
              name: 'Alanine aminotransferase (ALT) ',
              range: '10-40 U/L',
              interval: '10-40 U/L',
            },
            {
              name: 'Alanine aminotransferase (ALT) ',
              range: '10-40 U/L',
              interval: '10-40 U/L',
            },
          ],
        },
        {
          id: 3,
          name: 'Urine & BMI',
          values: [
            {
              name: 'Alanine aminotransferase (ALT) ',
              range: '10-40 U/L',
              interval: '10-40 U/L',
            },
            {
              name: 'Alanine aminotransferase (ALT) ',
              range: '10-40 U/L',
              interval: '10-40 U/L',
            },
            {
              name: 'Alanine aminotransferase (ALT) ',
              range: '10-40 U/L',
              interval: '10-40 U/L',
            },
            {
              name: 'Alanine aminotransferase (ALT) ',
              range: '10-40 U/L',
              interval: '10-40 U/L',
            },
          ],
        },
      ],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }
  },
}
</script>

<style lang="scss">
.lab__values {
  background: var(--labv-bg);
  padding: 15px;
  height: 100%;
  &--body {
    background: var(--labv-table-bg);
    border-radius: 10px;
    overflow: hidden;

    .v-tabs {
      .v-item-group {
        height: 35px !important;
      }

      .v-slide-group__prev {
        // display: none !important;
      }
    }

    .v-tab {
      height: 35px;
      &:first-child {
        border-radius: 10px 0 0 0;
      }
      &:last-child {
        border-radius: 0 10px 0 0;
      }
    }

    .v-tab:not(.v-tab--active) {
      background: var(--nav-row-even) !important;
      border: 1px solid #d9dada;
    }
    
    .v-tab,
    .v-tab--active {
      text-transform: none !important;
      color:  var(--labv-text) !important;
    }

    .v-card {
      background: var(--labv-table-bg);
    }

    table {
      background: var(--labv-table-bg);
      color:  var(--labv-text);
      tr:not(thead tr):hover {
        background: var(--nav-row-odd) !important;
      }

      th {
        font-size: 16px !important;
        color: #6a6a6a !important;
      }
      th, td {
        border-bottom-style: dashed !important;
      }
      tr:last-child td{
        border: none !important;
      }
    }
  }
}
</style>