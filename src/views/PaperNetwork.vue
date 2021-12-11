<template>
  <v-app>
    <div class="home">
      <AuthHeader />

      <div id="selection">
        <v-card width="400px" class="mx-auto mt-5">
          <v-card-title>
            <h1 class="display-1">論文引用ネットワーク</h1>
          </v-card-title>
          <v-card-text>
            <div class="body-1 mb-1 text-left">準備中</div>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </v-app>
</template>


<script>
import AuthHeader from "@/components/AuthHeader"

export default {
  name: "PaperNetwork",
  components: {
    AuthHeader,
  },
}
</script>
