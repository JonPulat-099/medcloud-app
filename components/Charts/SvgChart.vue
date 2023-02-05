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
        y1="45"
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
        y1="45"
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
      <text x="50" y="305" class="rank">Percentile rank</text>
      <text x="340" y="305" class="avarage">50</text>
    </g>
    <g>
      <circle cy="35" cx="450" r="15" fill="#009846"></circle>
      <text x="450" y="40" text-anchor="middle" fill="#fff" class="value">
        83
      </text>
      <text
        x="450"
        y="13"
        text-anchor="middle"
        class="youre--score"
      >
        Your Score
      </text>
    </g>
  </svg>
</template>
<script>
export default {}
</script>
<style lang="scss">
.svg-content {
  height: 90% !important;
  font-family: "Noto Sans", sans-serif !important;
}
.rank {
  fill: var(--text-color) !important;
  font-size: 10px;
}

.youre--score {
  fill: var(--text-color) !important;
  font-size: 11px;
  line-height: 1;
  font-weight: 500;
}

.avarage {
  fill: var(--text-color) !important;
  font-size: 11px;
}

.value {
  font-size: 14px;
  font-weight: 500;
}
</style>
