<template>
  <v-app>
    <div class="home">
      <v-row>
        <v-col sm="9" class="d-flex justify-start">
          ようこそ {{ user_name }} さん<v-spacer></v-spacer>
        </v-col>
        <v-col sm="3" class="d-flex justify-end">
          <v-btn
              to="/signin"
              text
              v-if="!is_authoreized"
          >
            <span class="mr-2">Sign in</span>
            <v-icon>mdi-open-in-new</v-icon>
          </v-btn>
          <v-btn absolute right
            to="/signout?redirect=/paper_network"
            text
            v-if="is_authoreized"
          >
            <span class="mr-2">Sign out</span>
            <v-icon>mdi-open-in-new</v-icon>
          </v-btn>
        </v-col>
      </v-row>

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
import { getAuth } from "firebase/auth";

export default {
  name: "PaperNetwork",
  computed: {
    is_authoreized() {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        return true;
      }
      else {
        return false;
      }
    },
    user_name () {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        return user.email;
      } else {
        return "Guest";
      }
    }
  }
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
