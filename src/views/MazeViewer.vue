<template>
  <v-container>
    <div class="home">
      <div id="selection">
        <v-select
          label="Algorithms"
          v-model="selected_algorithm"
          :items="options"
          item-text="text"
          item-value="value"
          outlined
          dense
        ></v-select>
      </div>
      <table>
        <tr>
          <td><v-text-field label="warm_up_iteration" v-model.number="warm_up_iteration"/></td>
          <td><v-text-field label="max_iteration" v-model.number="max_iteration"/></td>
          <td><v-text-field label="max_step" v-model.number="max_step"/></td>
          <td><v-text-field label="gamma" v-model.number="gamma"/></td>
        </tr>
      </table>
      <div v-if="selected_algorithm === 'sarsalambda'">
        <table>
          <tr>
            <td><v-text-field label="alpha" v-model.number="alpha"/></td>
            <td><v-text-field label="epsilon" v-model.number="epsilon"/></td>
            <td><v-text-field label="lambda" v-model.number="lambda"/></td>
          </tr>
        </table>
      </div>
      <div id="app">
        <input @change="selectedFile" type="file" name="file">
      </div>

      <v-btn large v-on:click="start_maze">開始ボタン</v-btn>
      <v-btn large v-on:click="stop_maze">終了ボタン</v-btn>
      <table>
        <tr v-if="iteration">iteration: {{ iteration }}</tr>
        <tr v-if="step">step: {{ step }}</tr>
        <tr>{{ status }}</tr>
      </table>

      <MazeBoard
        v-bind:states="states"
        v-bind:start_y="start_y"
        v-bind:start_x="start_x"
        v-bind:goal_y="goal_y"
        v-bind:goal_x="goal_x"
        v-bind:current_y="current_y"
        v-bind:current_x="current_x"
      />
    </div>
  </v-container>
</template>

<script>
import { w3cwebsocket } from 'websocket'
import constant from '@/constant.js'
import MazeBoard from '@/components/MazeBoard'

export default {
  name: "MazeViewer",
  components: {
    MazeBoard,
  },
  data () {
    return {
      selected_algorithm: 'valueiter',
      options: [
        { text: 'Sarsa(λ)', value: 'sarsalambda' },
        { text: 'Value Iteration', value: 'valueiter' },
      ],

      host: constant['HOST'],
      websocket: null,

      warm_up_iteration: 100,
      max_iteration: 20,
      max_step: 1000,
      gamma: 0.95,

      alpha: 0.1,
      epsilon: 0.1,
      lambda: 0.7,

      iteration: null,
      step: null,
      status: "",

      states: [],

      start_y: 0,
      start_x: 1,
      goal_y: 14,
      goal_x: 13,
      current_y: 0,
      current_x: 0,
    }
  },
  methods: {
    start_maze() {
      this.websocket = new w3cwebsocket("wss://" + this.host + "/train_maze");
      this.iteration = null;
      this.step = null;

      let self = this;
      function sleep(waitMsec) {
        var startMsec = new Date();
        while (new Date() - startMsec < waitMsec);
      }

      this.websocket.onopen = function() {
        console.log("### websocket.onopen()");
        self.status = "サーバーに接続中です";
      };

      this.websocket.onmessage = function(event) {
        let recieved = JSON.parse(event.data);
        if (recieved['status'] === "start_connection") {
          let config = {}
          config["warm_up_iteration"] = self.warm_up_iteration;
          config["max_iteration"] = self.max_iteration;
          config["max_step"] = self.max_step;
          config["gamma"] = self.gamma;

          if (self.selected_algorithm === "valueiter") {
            config["algorithm"] = "valueiter";
          }
          else if (self.selected_algorithm === "sarsalambda") {
            config["algorithm"] = "sarsalambda";

            config["warm_up_iteration"] = self.warm_up_iteration;
            config["max_iteration"] = self.max_iteration;
            config["max_step"] = self.max_step;
            config["gamma"] = self.gamma;

            config["alpha"] = self.alpha;
            config["epsilon"] = self.epsilon;
            config["lambda"] = self.lambda;
          }

          if (self.uploadFile) {
            config["maze_exists"] = true;
          }
          else {
            config["maze_exists"] = false;
          }

          self.websocket.send(JSON.stringify({"status": "initialize_trainer", "config": config}));
          self.status = "";
        }
        else if (recieved["status"] === "upload_maze") {
          self.websocket.send(self.uploadFile);
          self.status = "";
        }
        else if (recieved["status"] === "trainer_construction") {
          self.websocket.send(JSON.stringify({"status": "trainer_warm_up"}));
          self.status = "エージェントがウォーミングアップ中です。";
        }
        else if (recieved["status"] === "finish_warming_up") {
          self.websocket.send(JSON.stringify({"status": "trainer_run"}));
          self.status = "";
        }
        else if (recieved["status"] === "step_maze") {
          let res = recieved["maze_color"];
          sleep(20);
          self.states = res['rgb'];
          self.current_y = res['current_position'][0];
          self.current_x = res['current_position'][1];
          self.iteration = res['iteration'];
          self.step = res['step'];

          self.websocket.send(JSON.stringify({"status": "trainer_run"}));
        }
      };

      // websocketでエラーが発生した時
      this.websocket.onerror = function(event) {
        console.log("### websocket.onerror()");
        console.log(event);
      };

      // websocketをクローズした時
      this.websocket.onclose = function(event) {
        console.log("### websocket.onclose()");
        console.log(event);
      };
    },
    stop_maze() {
      this.websocket.close();
    },
    selectedFile: function(e) {
        // 選択された File の情報を保存しておく
        e.preventDefault();
        let files = e.target.files;
        this.uploadFile = files[0];
    },
  },
}
</script>

<style scoped>
  #selection {
    width: 500px;
    padding: 20px;
  }
</style>
