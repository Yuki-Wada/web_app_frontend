<template>
  <v-container>
    <v-flex xs12 class="pa-1 ma-4">
      <v-layout justify-center>
        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          src="https://cdn.technologyreview.jp/wp-content/uploads/sites/2/2020/01/28125948/shutterstock_1509149489.jpg"
          max-height="200"
        ></v-img>
      </v-layout>
    </v-flex>

    <v-layout
      wrap
    >
      <v-flex
        mb-5
        xs6
      >
        <v-card
          class="light-blue lighten-5 pa-1 ma-4"
        >
          <v-card-title class="headline">Games</v-card-title>
          <v-divider class="mx-3"></v-divider>
          <v-card-text>
            <div class="body-2 mb-1 text-left">MazeViewer では、強化学習を用いて迷路を探索するエージェントの様子を可視化しています。</div>
            <div class="body-2 mb-1 text-left">ReversiViewer は一人用のリバーシ対戦アプリです。モンテカルロ木探索法を用いた AI と対戦することができます。</div>
            <div class="body-2 mb-1 text-left">RTS Simulator は Unity で作成したリアルタイム戦略ゲーム (RTS) のシミュレーターです。</div>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
        </h1>
      </v-flex>

      <v-flex
        mb-5
        xs6
      >
        <v-card
          class="light-blue lighten-5 pa-1 ma-4"
        >
          <v-card-title class="headline">Update</v-card-title>
          <v-divider class="mx-3"></v-divider>
          <v-card-text>
            <div class="body-1 mb-1 text-left">(2021-11-28) ホームページのレイアウトを一新しました。</div>
          </v-card-text>
        </v-card>
      </v-flex>


    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Home',

  data: () => ({}),
};
</script>
