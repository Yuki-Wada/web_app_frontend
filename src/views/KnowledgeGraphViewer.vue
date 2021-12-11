<template>
  <v-app>
    <div class="home">
      <AuthHeader />

      <div id="selection">
        <v-card width="400px" class="mx-auto mt-5">
          <v-card-title>
            <h1 class="display-1">ナレッジグラフビューアー</h1>
          </v-card-title>
        </v-card>
        <knowledge-graph
          v-bind:network_info="network_info"
        />
      </div>
    </div>
  </v-app>
</template>


<script>
import axios from "axios";
import AuthHeader from "@/components/AuthHeader"
import KnowledgeGraph from "@/components/KnowledgeGraph.vue";
import constant from "@/constant.js";

export default {
  name: "KnowledgeGraphViewer",
  components: {
    AuthHeader,
    KnowledgeGraph,
  },
  data () {
    return {
      network_info: {
        nodes: [
          { id: 1, label: "Node 1", bbbbbbbbbbbbbbbb: 0, hidden: false, expanded: true, color: 'red' },
          { id: 2, label: "Node 2", size: 20, bbbbbbbbbbbbbbbb: 0, hidden: false,  expanded: true, color: 'red' },
          { id: 3, label: "Node 3", bbbbbbbbbbbbbbbb: 0, hidden: false,  expanded: true, color: 'red' },
          { id: 4, label: "Node 4", bbbbbbbbbbbbbbbb: 0, hidden: false,  expanded: true, color: 'red' },
          { id: 5, label: "Node 5", bbbbbbbbbbbbbbbb: 0, hidden: false,  expanded: true, color: 'red' },
        ],
        edges: [
          { from: 1, to: 3, length: 10  },
          { from: 1, to: 2, length: 10  },
          { from: 2, to: 4, length: 10  },
          { from: 2, to: 5, length: 200}
        ],
        child_node_id_dict: {
          2: [1, 3, 4, 5],
          1: [3],
        },
      }
    }
  },
  mounted: async function () {
    // let url = new URL(constant["HOST"])
    // url.protocol = "https";
    // url.pathname = "network_json";

    let url = "https://" + constant["HOST"] + "/network_json";
    const response = await axios.post(
      url
    );
    this.network_info = {
      nodes: response.data.nodes,
      edges: response.data.edges,
      parent2childs: response.data.parent2childs,
    };
  },
}
</script>
