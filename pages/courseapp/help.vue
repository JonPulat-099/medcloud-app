<template>
  <v-container grid-list-xs class="help container pa-0">
    <v-row>
      <v-col cols="12" md="6" class="help__content pa-3">
        <v-layout row wrap class="white pa-4">
          <h3 class="text-grey font-weight-regular mb-4">How to use</h3>
          <v-expansion-panels accordion>
            <v-expansion-panel
              v-for="(item, i) in use"
              :key="i"
              class="my-1 elevation-0 rounded-lg"
            >
              <v-expansion-panel-header color="blue--text"
                >{{ item.title }}
                <template v-slot:actions>
                  <v-icon color="primary"> $expand </v-icon>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content
                class="flex-column px-6"
                v-html="item.text"
              >
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-layout>
      </v-col>
      <v-col cols="12" md="6" class="help__content pa-3">
        <v-layout row wrap class="white pa-4">
          <h3 class="text-grey font-weight-regular mb-4">FAQs</h3>
          <v-expansion-panels accordion>
            <v-expansion-panel
              v-for="(item, i) in faq"
              :key="i"
              class="my-1 elevation-0 rounded-lg"
            >
              <v-expansion-panel-header color="blue--text"
                >{{ item.title }}
                <template v-slot:actions>
                  <v-icon color="primary"> $expand </v-icon>
                </template>
              </v-expansion-panel-header>
              <v-expansion-panel-content
                class="flex-column px-6"
                v-html="item.text"
              >
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-layout>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'Help',
  layout: 'app',
  data() {
    return {
      use: [
        {
          title: 'How do I begin using my subscription?',
          text: `<p>Once you have purchased a subscription from UWorld, it will be available for activation from your&nbsp;<strong>My Account</strong>&nbsp;page on our website. &nbsp;You will need to sign in to your account every time you wish to access your subscription.</p><p>To get started using the subscription, first click on&nbsp;<strong>Activate</strong>&nbsp;and acknowledge the displayed Terms of Use. &nbsp;You will then see the option to&nbsp;<strong>Launch</strong> your subscription (<em>you may need to refresh the page if you do not immediately see the Launch option</em>). &nbsp;When you click on Launch, you will be taken to the installation instructions for that subscription.</p><p>For STEP1 and STEP2 CK Qbank subscriptions, click on the installation instructions for&nbsp;<strong>Windows</strong> or <b>Mac</b>, whichever is applicable to your system. &nbsp;All other subscriptions are browser-based and accessible via the web, so you should click on&nbsp;<strong>Launch</strong>.</p><p>When you open a new Qbank subscription, you will be presented with several different options for test creation. &nbsp;Each question mode and test mode will provide a slightly different testing experience. &nbsp;For new users, we recommend that you first generate tests in&nbsp;<strong>Unused Question Mode</strong>. &nbsp;This will ensure that you see every question in the Qbank at least once. &nbsp;For more information on test creation options, please see the&nbsp;<strong>"How can I create a test?" </strong>section below.&nbsp;</p>`,
        },
        {
          title: 'How can I create a test?',
          text: `<p>Qbank subscriptions offer several different test creation options for maximum flexibility in your studies. &nbsp;You can choose any test mode and question mode available. &nbsp;You can generate as many tests as you like during your subscription's active duration. &nbsp;Subscribers have the option to select all available Subjects and Systems for test creation, or if you prefer, specific Subjects and Systems can be selected individually to focus on key areas.</p>
          <p><strong>Test Modes</strong></p>
          <ul>
            <li>
              <strong>Timed:</strong>&nbsp; This option will impose a time limit for your test. &nbsp;The time limit will vary depending on the subscription you have purchased. &nbsp;If the time elapses before the test is completed, the test will automatically end.<br>
              &nbsp;</li>
            <li>
              <strong>Untimed:</strong>&nbsp; This option allows you to take the test at your own pace. &nbsp;In this mode, the software displays the time elapsed, but does not impose any time limit during the test.<br>
              &nbsp;</li>
            <li>
              <strong>Tutor:</strong>&nbsp; This option displays the correct answer and explanation after you have answered the test question. &nbsp;Once an item is answered, its explanation is retained for the duration of the test. &nbsp;In this mode, the software displays the time elapsed, but does not impose any time limit on the test. &nbsp;The interface will NOT show any explanation of an omitted question (ie, if you do not choose an answer and instead skip the question).<br>
              &nbsp;</li>
            <li>
              <strong>Timed Tutor:</strong>&nbsp; This option is similar to Tutor mode (explanation will be displayed as soon as you answer the question) except that a time limit is imposed similar to Timed test mode. &nbsp;The time limit will vary depending on the number of questions selected.</li>
          </ul>
          <p><strong>Question Modes</strong></p>
          <ul>
            <li>
              <strong>Unused:</strong>&nbsp; This option will create a test containing questions that have not been used in any previous tests. &nbsp;We recommend that new users begin with Unused question mode to guarantee that they see every question in the Qbank at least once.<br>
              &nbsp;</li>
            <li>
              <strong>Incorrect:</strong>&nbsp; This option will create a test containing only questions that were answered incorrectly from previous tests. &nbsp;If you answer the question correctly in a subsequent test, it will be removed from the Incorrect question pool. &nbsp;However, if it is answered incorrectly again, it will be returned to the Incorrect question pool.<br>
              &nbsp;</li>
            <li>
              <strong>Marked:</strong>&nbsp; This option will create a test containing only the marked questions from previous tests. &nbsp;To mark a question, click the checkbox beside the red flag icon during either testing or review. &nbsp;Once you make a new test containing marked questions, those questions are automatically removed from the Marked question pool (<em>unless you mark the question again in the new test</em>).<br>
              &nbsp;</li>
            <li>
              <strong>All:</strong>&nbsp; This option will create a test that may contain&nbsp;all types of questions (<em>unused, marked and&nbsp;incorrect</em>).&nbsp; In this question mode, the same questions may repeat in multiple tests.&nbsp; For this reason, we advise that users to do all 'Unused' questions first, then 'Incorrect', 'Marked', and lastly if there's still time, 'All' questions mode.<br>
              &nbsp;</li>
            <li>
              <strong>Custom:</strong>&nbsp; This option is intended for use by study groups who intend to all create the same test or work on the same questions together using their own unique subscriptions. &nbsp;Custom tests can only be generated with questions you have not yet used. &nbsp;To generate a custom test for a study group, the group leader will first need to generate the test in their own subscription. &nbsp;Then, they can provide the Test ID or the list of Question IDs to the other group members. &nbsp;The Test ID or Question IDs can then be entered in the provided field and an identical test will be generated. &nbsp;If you receive an error, this typically means that the questions have already been used in your subscription or one of the questions has been deleted/deactivated from the Qbank.</li>
          </ul>
          <p><strong>To generate a test:</strong></p>
          <ul>
            <li>
              Select a <strong>Test Mode</strong>&nbsp;[Timed, Untimed, Tutor, Timed Tutor]</li>
            <li>
              Select a <strong>Question Mode</strong>&nbsp;[All, Unused, Incorrect, Marked, Custom]</li>
            <li>
              Select your preferred <strong>Subject(s)</strong>&nbsp;followed by the&nbsp;<strong>System(s)</strong>.&nbsp; The number of available questions will vary depending on which Subject and System is selected. &nbsp;If you do not have enough available questions, we recommend selecting additional Subjects/Systems or reviewing the available question count displayed in brackets [xxxx] beside the Subjects/Systems.</li>
            <li>
              Type in your preferred number of questions, keeping in mind the number [xxxx] displayed for your selected question criteria.</li>
            <li>
              For Custom question mode, provide the list of Question IDs separated by a ',' or enter the ID of a previously generated test to retrieve the question list of that test.</li>
            <li>
              Click <strong>Generate</strong>.</li>
          </ul>`,
        },
        {
          title: 'How can I view test results?',
          text: `<p>Once you complete a test, a summary of the completed test will automatically display when the test block is ended. &nbsp;This summary will show which questions were answered correctly, incorrectly or omitted. &nbsp;It will also display the <strong>Avg. Score</strong>, which is calculated by averaging together the % of correct response for each question contained in the test block, and&nbsp;<strong>Your Score</strong>, which is the percentage of questions you answered correctly. &nbsp;If you wish to review individual test questions, click on&nbsp;<strong>Explanation&nbsp;</strong>beside the question you wish to review.</p>
          <p>If you would like to go back and review an older test, go to the&nbsp;<strong>Previous Test</strong> section and select&nbsp;<strong>Review</strong>&nbsp;beside the test you wish to look at. &nbsp;You can also select&nbsp;<strong>Resume</strong>&nbsp;on any test you may have ended accidentally to correct your answers.</p>
          <p>For a detailed view of your performance, click on&nbsp;<strong>Analysis</strong>. &nbsp;The correct, incorrect, and omitted questions will be presented graphically. &nbsp;If the test contained questions from all disciplines, then your performance for each discipline will be displayed.</p>`,
        },
      ],
      faq: [
        {
          title:
            'I want to reset/delete my qbank test history (or) start all over again. Is this possible?',
          text: '<p><strong>CPA / MBE:</strong>&nbsp; No resets are available for the CPA or MBE products.</p><p><strong>All Other Qbanks:</strong>&nbsp; We offer a one-time reset option with subscriptions that have been active continuously for 180 days or more.&nbsp; Once a reset has been used, a subscription <em>cannot</em> be reset again, regardless of the duration remaining on the subscription or purchase of additional renewals.</p>',
        },
        {
          title: 'Can I access my subscriptions on a mobile device?',
          text: `<p>Access to Qbank subscriptions is offered through our companion application for Android, iOS, and Kindle devices.&nbsp; The companion app is provided as a courtesy for convenient access on the go and is not intended to replace primary access from a laptop or desktop system.&nbsp; Refunds or other compensation will not be provided due to inability to access the subscription from a mobile device.&nbsp; Only Qbank and Self-Assessment exam subscriptions are accessible via mobile devices.&nbsp; Please verify that your mobile device meets our <a href="http://www.uworld.com/system_requirements.aspx" target="_blank">System Requirements</a>.</p>  <div style="max-width:750px; margin:0 auto;">   <div style="width:33%; float:left; text-align:center;">    <h3>     iOS App</h3>    <p><a href="https://itunes.apple.com/us/app/uworld-usmle/id991621303" target="_blank">USMLE</a></p>    <p><a href="https://itunes.apple.com/us/app/boards-abim-abfm/id984706854" target="_blank">Boards</a></p>    <p><a href="https://itunes.apple.com/us/app/uworld-nclex/id979446488" target="_blank">NCLEX</a></p>    <p><a href="https://itunes.apple.com/us/app/uworld-mcat/id1248501386?mt=8" target="_blank">MCAT</a></p>    <p><a href="https://itunes.apple.com/us/app/uworld-sat/id1219538225?mt=8" target="_blank">SAT / ACT</a></p>    <p><a href="https://itunes.apple.com/us/app/uworld-cpa/id1466996180?mt=8" target="_blank">CPA Review</a></p>   </div>   <div style="width:33%; float:left; text-align:center;">    <h3>     Android App</h3>    <p><a href="https://play.google.com/store/apps/details?id=com.usmleworld" target="_blank">USMLE</a></p>    <p><a href="https://play.google.com/store/apps/details?id=com.uworld.boards" target="_blank">Boards</a></p>    <p><a href="https://play.google.com/store/apps/details?id=com.uworld.nclex" target="_blank">NCLEX</a></p>    <p><a href="https://play.google.com/store/apps/details?id=com.uworld.mcat" target="_blank">MCAT</a></p>    <p><a href="https://play.google.com/store/apps/details?id=com.uworld.collegeprep" target="_blank">SAT / ACT</a></p>    <p><a href="https://play.google.com/store/apps/details?id=com.uworld.cpa" target="_blank">CPA Review</a></p>   </div>   <div style="width:33%; float:left; text-align:center;">    <h3>     Kindle App</h3>    <p><a href="https://www.amazon.com/USMLEWorld-LLC-QBank/dp/B008CG1YEK/" target="_blank">USMLE</a></p>    <p><a href="https://www.amazon.com/gp/mas/dl/android?asin=B00W2D7KS8" target="_blank">Boards</a></p>    <p><a href="https://www.amazon.com/gp/mas/dl/android?asin=B00VGYHCFU" target="_blank">NCLEX</a></p>    <p><a href="https://www.amazon.com/UWorld-LLC-MCAT/dp/B07349542G/ref=sr_1_5?s=mobile-apps&amp;ie=UTF8&amp;qid=1533829464&amp;sr=1-5" target="_blank">MCAT</a></p>    <p><a href="https://www.amazon.com/gp/mas/dl/android?p=com.uworld.collegeprep" target="_blank">SAT / ACT</a></p>    <p><a href="https://www.amazon.com/dp/B07TKNQKM7" target="_blank">CPA Review</a></p>   </div>  </div>  <p style="clear:both;"><strong>Other mobile device(s):</strong>&nbsp; Our developers are aware of request for mobile access on other devices/platforms and are reviewing potential options and implementation scenarios.&nbsp; However, an exact time frame (or if/when a solution will be available) is unknown.&nbsp; Once an app is ready, it will be announced directly on our website.</p> `,
        },
        {
          title:
            'How do I reuse questions with no reset option available (to avoid repetition)?',
          text: "<p>If you want to redo certain questions and ensure that you do not have duplicate questions in subsequently generated test blocks, we recommend that you use the 'Marked' question mode.</p><p>Once a test is generated via the 'Marked' question mode, all questions within that test are no longer marked.&nbsp; Therefore, you could work through the Qbank or select individual subjects a second time according to your preference.</p><p>To mark a question, click the checkbox beside the red flag icon during testing or review (<em>on mobile devices, tap the red flag icon to mark the question</em>).&nbsp; Once you have your questions marked, you can then generate new tests using the 'Marked' question mode.</p><p>If you would like to generate the same questions in a new test a third/fourth/etc. time, you will need to 'mark' these questions again (as each time a test is generated via the 'marked' option, the questions are removed from the 'marked' pool).</p>",
        },
      ],
    }
  },

  mounted() {
    // this.$store.commit('dashboard/setBlockName', 'Help')
  },
}
</script>
<style lang="scss"></style>
