<template>
  <div id="network"></div>
</template>

<script>
import { DataSet, Network } from "visjs-network"

export default {
  name: "KnowledgeGraph",
  props: [
    "network_info",
  ],
  data () {
    return {
      options: {
        nodes: {
          shape: "dot",
          borderWidth: 3,
          size: 10,
          color: {
            border: "#000000",
            background: "#ff0000"
          },
          font: {
            color: "#000"
          }
        }
      },
    }
  },
  methods: {
    draw_graph(nodes, edges, parent2childs) {
      let data = {
        nodes: nodes,
        edges: edges
      }

      let container = document.getElementById("network");
      let network = new Network(container, data, this.options);

      network.on("click", function(params) {
        if (params.nodes.length == 1) {
          let parent_node_id = params.nodes[0];
          let parent_node = nodes.get(parent_node_id);

          let update_info = [];
          update_info.push({
            id: parent_node.id,
            expanded: !parent_node.expanded,
            color: (!parent_node.expanded? "red": "blue"),
          });

          let increment = parent_node.expanded ? 1: -1
          let child_node_id_set = new Set();
          if (parent_node_id in parent2childs) {
            for (let id of parent2childs[parent_node_id]) {
              child_node_id_set.add(id);
            }
          }
          nodes.forEach(function (child_node) {
            let updated_hidden_count = child_node.hidden_count;
            if (child_node_id_set.has(child_node.id)) {
              updated_hidden_count += increment;
            }
            update_info.push({
              id: child_node.id,
              hidden_count: updated_hidden_count,
              hidden: (updated_hidden_count > 0),
            });
          });
          nodes.update(update_info);

          network.fit();
        }
      });
    }
  },
  watch: {
    network_info: function () {
      let nodes = new DataSet(this.network_info.nodes);
      let edges = this.network_info.edges;
      let parent2childs = this.network_info.parent2childs;

      this.draw_graph(nodes, edges, parent2childs);
    }
  }
}
</script>

<style scoped>
  #network {
    width:  800px;
    height: 800px;
  }
</style>
