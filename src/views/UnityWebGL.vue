<template>
  <div id="app">
    <header>
      <span>Vue.js PWA</span>
    </header>
    <main>
      <unity src="unitybuild/Build/unitybuild.json"
        v-bind="{ width: gameWidth, height: gameHeight }"
       unityLoader="unitybuild/Build/UnityLoader.js"></unity>
    </main>
  </div>
</template>

<script>
import unity from 'vue-unity-webgl'

export default {
  name: 'app',
  data: function () {
    return {
      gameWidth: window.innerWidth,
      gameHeight: window.innerHeight * 0.96 - 134 // 134はヘッダー等の値
    }
  },
  methods: {
    handleResize: function () {
      this.gameWidth = window.innerWidth
      this.gameHeight = window.innerHeight
    }
  },
  ready: function () {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleResize)
  },
  components: { unity }
}
</script>

/// <style>は初期状態のまま編集してないので略 ///