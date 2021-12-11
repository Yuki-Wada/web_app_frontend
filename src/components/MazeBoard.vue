<template>
  <v-container>
    <table id="table">
      <template v-for="(row, i) in states">
        <tr :key="i">
          <template v-for="(state, j) in row">
            <td v-bind:style="style(state)" v-if="(current_x === j) && (current_y === i)" :key="j">●</td>
            <td v-bind:style="style(state)" v-else-if="(start_x === j) && (start_y === i)" :key="j">S</td>
            <td v-bind:style="style(state)" v-else-if="goal_x === j && goal_y === i" :key="j">G</td>
            <td v-bind:style="style(state)" v-else :key="j"></td>
          </template>
        </tr>
      </template>
    </table>
  </v-container>
</template>

<script>
export default {
  name: "MazeBoard",
  props: [
    "states",
    "start_y",
    "start_x",
    "goal_y",
    "goal_x",
    "current_y",
    "current_x",
  ],
  data () {
    return {

    }
  },
  methods: {
    style(rgb) {
      return "background: #" + rgb;
    },
  },
}
</script>

<style scoped>
  #table {
    margin:0 auto;
    border-collapse: collapse;
    border: 3px solid #ccc;
  }
  #table td {
    border:1px solid #ccc;
    height: 40px;
    width: 40px;
    text-align: center;
    vertical-align: middle;
    font-size: 25px;
    cursor: pointer;
  }
</style>
