<template>
  <v-container>
    <table id="table">
      <template v-for="(row, i) in states">
        <tr :key="i">
          <template v-for="(state, j) in row">
            <td v-bind:style="style('00FF00')" v-if="state === 1" v-on:click="place_stone(i, j)" :key="j">●</td>
            <td v-bind:style="style('00FF00')" v-else-if="state === 2" v-on:click="place_stone(i, j)" :key="j">○</td>
            <td v-bind:style="style('00FF00')" v-else v-on:click="place_stone(i, j)" :key="j"></td>
          </template>
        </tr>
      </template>
    </table>
  </v-container>
</template>

<script>

export default {
  name: "ReversiBoard",
  props: [
    "states",
    "websocket",
  ],
  data () {
    return {

    }
  },
  methods: {
    style(rgb) {
      return "background: #" + rgb;
    },
    place_stone(i, j) {
      this.websocket.send(JSON.stringify({
        "status": "player_turn",
        "place_stone": [i, j],
      }));
    },
  },
}
</script>

<style scoped>

    #selection {
      width: 500px;
      padding: 20px;
    }

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
