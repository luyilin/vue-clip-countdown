<template>
  <div class="countdown-wrapper" ref="countdownWrap" :style="wrapStyle">
    <div class="wrapper left" :style="halfStyle">
      <div class="countdown left-circle" :style="circleStyle"/>
    </div>
    <div class="wrapper right" :style="halfStyle">
      <div class="countdown right-circle" :style="circleStyle"/>
      <div class="countdown last-quarter" v-if="useLastTip" :style="circleStyle"/>
    </div>
    <div class="count">{{ this.showCount }}</div>
  </div>
</template>

<script>
export default {
  name: 'CilpCountdown',

  props: {
    count: {
      type: String,
      default: '5s'
    },
    borderColor: {
      type: String,
      default: '#aaa'
    },
    loadColor: {
      type: String,
      default: '#5aa5e3'
    },
    useLastTip: {
      type: Boolean,
      default: true
    },
    lastColor: {
      type: String,
      default: 'red'
    },
    size: {
      type: String,
      default: '150px'
    },
    borderWidth: {
      type: String,
      default: '10px'
    }
  },

  data() {
    return {
      showCount: this.count
    }
  },

  computed: {
    countToNumber() {
      return +this.count.split('s')[0]
    },
    sizeToNumber() {
      return +this.size.split('px')[0]
    },
    borderToNumber() {
      return +this.borderWidth.split('px')[0]
    },
    wrapStyle() {
      return {
        width: this.size,
        height: this.size
      }
    },
    halfStyle() {
      const halfSize = this.sizeToNumber/2 + 'px'
      return {
        width: halfSize,
        height: this.size
      }
    },
    circleStyle() {
      const circleSize = this.sizeToNumber - 2 * this.borderToNumber + 'px'
      return {
        width: circleSize,
        height: circleSize,
      }
    }
  },

  mounted() {
    const countdownWrap = this.$refs.countdownWrap
    countdownWrap.style.setProperty('--borderColor', this.borderColor)
    countdownWrap.style.setProperty('--loadColor', this.loadColor)
    countdownWrap.style.setProperty('--lastColor', this.lastColor)
    countdownWrap.style.setProperty('--borderWidth', this.borderWidth)
    countdownWrap.style.setProperty('--count', this.count)
  }
}
</script>

<style lang="scss" scoped>
  .countdown-wrapper {
    margin: 50px auto;
    position: relative;
    .right {
      right: 0;
    }
    .left {
      left: 0;
    }
  }
  .wrapper {
    position: absolute;
    top: 0;
    overflow: hidden;
  }
  .count {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
  .countdown {
    position: absolute;
    top:0;
    border: var(--borderWidth) solid var(--borderColor);
    border-radius: 50%;
    transform: rotate(45deg);
  }
  .left-circle {
    left: 0;
    border-bottom: var(--borderWidth) solid var(--loadColor);
    border-left: var(--borderWidth) solid var(--loadColor);
    animation: countdown-left var(--count) linear;
    animation-fill-mode: both;
  }
  .right-circle {
    right: 0;
    border-top: var(--borderWidth) solid var(--loadColor);
    border-right: var(--borderWidth) solid var(--loadColor);
    animation: countdown-right var(--count) linear;
    animation-fill-mode: both;
  }
  .last-quarter {
    right: 0;
    border-color: transparent;
    border-right: var(--borderWidth) solid var(--lastColor);
    animation: countdown-quarter var(--count) linear;
    animation-fill-mode: both;
    visibility: hidden;
  }
  @keyframes countdown-left {
    0% {
      transform: rotate(45deg);
    }
    50%, 100% {
      transform: rotate(-135deg);
    }
  }
  @keyframes countdown-right {
    0%, 50% {
      transform: rotate(45deg);
    }
    100% {
      transform: rotate(-135deg);
    }
  }
  @keyframes countdown-quarter {
    0%, 50% {
      transform: rotate(45deg);
    }
    75% {
      visibility: hidden;
    }
    100% {
      visibility: visible;
      transform: rotate(-135deg);
    }
  }
</style>
