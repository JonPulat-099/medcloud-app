<template>
  <svg
    version="1.1"
    baseProfile="full"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns:ev="http://www.w3.org/2001/xml-events"
    viewBox="0 0 700 350"
    preserveAspectRatio="xMinYMin meet"
    class="svg-content"
  >
    <g>
      <line
        x1="350"
        y1="40"
        x2="350"
        y2="280"
        stroke="#008DD2"
        fill="transparent"
        stroke-width="2"
      />
    </g>
    <g>
      <line
        x1="450"
        y1="40"
        x2="450"
        y2="280"
        stroke="#009846"
        fill="transparent"
        stroke-width="2"
      />
    </g>
    <g>
      <path
        d="M 50 280 S 200 280, 260 130 C 300 30, 400 30, 450 130 S 550 280, 650 280"
        stroke="#434242"
        fill="transparent"
        stroke-width="2"
        id="line"
      />
    </g>
    <g fill="none">
      <path
        d="M 0 290 L 700 290"
        stroke="#434242"
        stroke-dasharray="3,3"
        fill="transparent"
        stroke-width="2"
      />
    </g>
    <g>
      <text x="50" y="310">Percentile rank</text>
      <text x="340" y="310">50</text>
    </g>
    <g>
      <circle cy="25" cx="450" r="15" fill="#009846"></circle>
      <text x="450" y="30" text-anchor="middle" stroke="#fff" fill="#fff">
        83
      </text>
      <text
        x="450"
        y="0"
        text-anchor="middle"
        stroke="#000"
        fill="#000"
        font-family="Noto Sans, sans-serif"
      >
        Your Score
      </text>
    </g>
  </svg>
</template>
<script>
export default {}
</script>
<style lang=""></style>
