<template>
  <footer class="footer">
    <v-container grid-list-xs>
      <v-row>
        <v-col cols="12" lg="4" sm="6" xs="12">
          <img class="mb-5" src="/logo-med.png" alt="" width="100" />
          <ul>
            <li>
              <a href="tel: +998336067788" target="_blank">
                <v-icon>mdi-phone</v-icon> +998 33 606 77 88
              </a>
            </li>
            <li>
              <a href="mailto:info@medcloud.uz" target="_blank">
                <v-icon>mdi-email</v-icon> info@medcloud.uz
              </a>
            </li>
            <li>
              <a href="javascript:void(0)"
                ><v-icon>mdi-map-marker</v-icon> Uzbekistan, Tashkent
              </a>
            </li>
          </ul>
        </v-col>
        <v-col cols="12" lg="4" sm="6" xs="12">
          <h4 class="mb-4">Useful Links</h4>
          <ul>
            <li><a href="#"> Products </a></li>
            <li><a href="#"> About us </a></li>
            <li><a href="#"> Students </a></li>
            <li><a href="#"> How to Start </a></li>
            <li><a href="#"> Price </a></li>
          </ul>
        </v-col>
        <v-col cols="12" lg="4" sm="6" xs="12">
          <h4 class="mb-4">Follow Us</h4>
          <p>
            На этой платформе вы сможете найти бесплатные ресурсы и все наши
            курсы
          </p>
          <v-layout row wrap>
            <v-flex xs12 lg6>
              <a href="https://www.facebook.com/med.cloud.37" target="_blank">
                <v-icon>mdi-facebook</v-icon> Facebook</a
              >
            </v-flex>
            <v-flex xs12 lg6>
              <a href="https://www.instagram.com/medcloud_uz/" target="_blank">
                <v-icon>mdi-instagram</v-icon> Instagram
              </a>
            </v-flex>
            <v-flex xs12 lg6>
              <a
                href="https://www.youtube.com/channel/UCqBeuwqOm_MbUPeYMkMmfBA"
                target="_blank"
              >
                <v-icon>mdi-youtube</v-icon> YouTube</a
              >
            </v-flex>
            <v-flex xs12 lg6>
              <a href="https://t.me/medcloud" target="_blank">
                <v-icon>mdi-send-circle</v-icon> Telegram
              </a>
            </v-flex>
          </v-layout>
        </v-col>
      </v-row>
      <v-divider dark class="my-5"></v-divider>
      <v-row>
        <p class="body-2 grey--text">
          The United States Medical Licensing Examination (USMLE ®) is a joint
          program of the Federation of State Medical Boards (FSMB ®) and
          National Board of Medical Examiners (NBME ®). ABIM ® is a registered
          trademark of the American Board of Internal Medicine. ABFM ® is a
          registered trademark of the American Board of Family Medicine.
          NCLEX-RN ® and NCLEX-PN ® are registered trademarks of the National
          Council of State Boards of Nursing, Inc (NCSBN ®). MCAT ® is a
          registered trademark of the Association of American Medical Colleges
          (AAMC). SAT ®, Advanced Placement ®, and AP ® are registered
          trademarks of the College Board, which are not affiliated with, and do
          not endorse, this product or site. PSAT/NMSQT® is a registered
          trademark of the College Board and the National Merit Scholarship
          Corporation, which are not affiliated with, and do not endorse, this
          product or site. ACT ® is a registered trademark of ACT, Inc. PANCE ®
          and PANRE ® are registered trademarks of the National Commission on
          Certification of Physician Assistants. NCCPA ® is a registered
          trademark of the National Commission on Certification of Physician
          Assistants. CFA Institute does not endorse, promote, or warrant the
          accuracy or quality of the products or services offered by UWorld LLC.
          CFA Institute, CFA® , and Chartered Financial Analyst ® are trademarks
          owned by CFA Institute. NCBE®, MBE®, MPRE®, MPT® and UBE® are
          trademarks of the National Conference of Bar Examiners. UWorld is
          neither endorsed by nor affiliated with NCBE. NAPLEX® and MPJE® are
          federally registered trademarks of the National Association of Boards
          of Pharmacy. UWorld LLC. and its services are neither affiliated with
          nor endorsed by the NABP. None of the trademark holders is affiliated
          with, and does not endorse, UWorld product/site. This site is
          protected by reCAPTCHA and the Google.
          <a class="p-link-style" href="/resources" target="_blank">Privacy Policy</a>
          and
          <a class="p-link-style" href="/resources" target="_blank">Terms of Service</a>
          apply.
        </p>
        <p class="body-2 grey--text">© MedCloud, LLC</p>
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
