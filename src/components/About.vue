<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >

      <v-flex
        mb-5
        xs6
      >
        <v-card
          class="light-blue lighten-5 pa-1 ma-4"
        white>
          <v-card-title class="headline">Profile</v-card-title>
          <v-divider class="mx-1"></v-divider>
          <v-card-text class="body-2 mb-1 text-left">
            <div class="body-2 mb-1">名前: 和田 悠暉</div>
            <div class="body-2 mb-1">誕生日: 1991-07-21</div>
            <div class="body-2 mb-1">出身地: 大阪府岸和田市</div>
            <div class="body-2 mb-1">現住所: 東京都</div>
          </v-card-text>
          <v-divider class="mx-1"></v-divider>
          <v-card-text class="body-2 mb-1 text-left">
            2021-11-28 現在
          </v-card-text>
        </v-card>

        <v-card
          class="light-blue lighten-5 pa-1 ma-4"
        >
          <v-card-title class="headline">Interests</v-card-title>
          <v-divider class="mx-1"></v-divider>
          <v-card-subtitle class="text-left body-1">Mathematics</v-card-subtitle>
          <v-card-text class="body-2 mb-1 text-left">
            <ul>
              <li>Related with Number Theory
                <ul>
                  <li>Algebraic and Analytic Number Theory</li>
                  <li>Algebraic Geometry</li>
                  <li>Anabelian Geometry</li>
                </ul>
              </li>
              <li>Related with Probability Theory
                <ul>
                  <li>Partial Differential Equations</li>
                  <li>Stochastic Differential Equations</li>
                  <li>Empirical Processes</li>
                  <li>Optimal Transportation</li>
                  <li>Gradient Descent Method</li>
                </ul>
              </li>
            </ul>
          </v-card-text>

          <v-card-subtitle class="text-left body-1">Machine Learning</v-card-subtitle>
          <v-card-text class="body-2 mb-1 text-left">
            <ul>
              <li>自然言語処理</li>
              <li>深層学習の理論解析</li>
                <ul>
                  <li>Over-parameterization
                    <ul>
                      <li>Implicit Regularization</li>
                      <li>Double Descent</li>
                      <li>Neural Tangent Kernel</li>
                      <li>Mean Field Limit </li>
                    </ul>
                  </li>
                </ul>
              <li>ゲーム AI</li>
            </ul>
          </v-card-text>
          <v-card-subtitle class="text-left  body-1">Computer Science</v-card-subtitle>
          <v-card-text class="body-2 mb-1 text-left">
            <ul>
              <li>組合せ最適化アルゴリズム</li>
              <li>Capture The Flag</li>
              <li>OS / CPU といった低レイヤの仕組み</li>
              <li>Web アプリケーションの実装</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex
        mb-5
        xs6
      >
        <v-card
          class="light-blue lighten-5 pa-1 ma-4"
        >
          <v-card-title class="headline">Skills</v-card-title>
          <v-divider class="mx-1"></v-divider>

          <v-card-subtitle class="text-left  body-1">Main Programming Languages</v-card-subtitle>
          <v-card-text class="body-2 mb-1 text-left">
            <ul>
              <li>Python</li>
              <li>C++</li>
              <li>Javascript</li>
            </ul>
          </v-card-text>

          <v-card-subtitle class="text-left body-1">Databases</v-card-subtitle>
          <v-card-text class="body-2 mb-1 text-left">
            <ul>
              <li>Oracle</li>
              <li>PostgreSQL 13</li>
            </ul>
          </v-card-text>

          <v-card-subtitle class="text-left body-1">Web Application Developments</v-card-subtitle>
          <v-card-text class="body-2 mb-1 text-left">
            <ul>
              <li>Chart.js / vis.js</li>
              <li>Bootstrap4</li>
              <li>Vue.js</li>
              <li>Flask</li>
            </ul>
          </v-card-text>

          <v-card-subtitle class="text-left  body-1">Machine Learning Frameworks</v-card-subtitle>
          <v-card-text class="body-2 mb-1 text-left">
            <ul>
              <li>PyTorch</li>
              <li>Tensorflow</li>
              <li>Keras</li>
              <li>Scikit-learn</li>
            </ul>
          </v-card-text>

          <v-card-subtitle class="text-left body-1">Clouds</v-card-subtitle>
          <v-card-text class="body-2 mb-1 text-left">
            <ul>
              <li>Google Cloud Platform</li>
              <li>Heroku</li>
            </ul>
          </v-card-text>

        </v-card>

        <v-spacer></v-spacer>

        <v-card
          class="light-blue lighten-5 pa-1 ma-4"
        >
          <v-card-title class="headline">SNS etc.</v-card-title>
          <v-divider class="mx-1"></v-divider>
          <v-card-text class="body-2 mb-1 text-left">
            <div class="body-1 mb-1">GitHub: <a href="https://github.com/Yuki-Wada">https://github.com/Yuki-Wada</a></div>
            <div class="body-1 mb-1">Codeforces: <a href="https://codeforces.com/profile/yuki.w.228285">https://codeforces.com/profile/yuki.w.228285</a></div>
            <div class="body-1 mb-1">AtCoder: <a href="https://atcoder.jp/users/yuki228285">https://atcoder.jp/users/yuki228285</a></div>
            <div class="body-1 mb-1">LinkedIn: <a href="https://www.linkedin.com/in/yuki-wada-48b6351b7/">https://www.linkedin.com/in/yuki-wada-48b6351b7/</a></div>
          </v-card-text>
        </v-card>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'About',
  data: () => ({}),
};
</script>
