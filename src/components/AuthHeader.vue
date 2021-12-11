<template>
  <v-container>
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
  </v-container>
</template>

<script>
import { getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../main.js'

export default {
  name: "AuthHeader",
  data: () => ({
    user_name : "",
  }),
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
  },
  mounted: async function() {
    const auth = getAuth();
    const user = auth.currentUser;

    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (user) {
      this.user_name = docSnap.data().user_name;
    }
    else {
      this.user_name = "Guest";
    }
  }
}
</script>
