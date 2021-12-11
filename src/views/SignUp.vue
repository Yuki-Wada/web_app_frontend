<template>
  <v-app>
    <v-card width="400px" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="display-1">アカウント作成</h1>
      </v-card-title>
      <v-card-text>
        {{ status }}
        <v-form>
          <v-text-field
            v-model="email"
            prepend-icon="mdi-account-circle"
            label="メールアドレス"
          />
          <v-text-field
            v-model="user_name"
            prepend-icon="mdi-account-circle"
            label="ユーザ名"
          />
          <v-text-field
            :type="showPassword ? 'text' : 'password'"
            v-model="password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            label="パスワード"
            @click:append="showPassword = !showPassword"
          />
          <v-card-actions>
            <v-btn class="info" v-on:click="create_account">アカウント作成</v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc} from "firebase/firestore";
import { db } from '../main.js'

export default {
  name: 'SignUp',
  data: () => ({
    email: "",
    user_name: "",
    password: "",
    showPassword : false,
    status: "",
  }),
  methods: {
    create_account: async function() {
      const auth = getAuth();
      createUserWithEmailAndPassword(
        auth, this.email, this.password,
      ).then(
        this.register_user_info
      ).catch((error) => {
        const errorMessage = error.message;
        this.status = errorMessage;
      });
    },
    register_user_info: async function (userCredential) {
      const user = userCredential.user;
      const data = {
        "user_name": this.user_name,
      }
      await setDoc(doc(db, "users", user.uid), data);
      this.$router.push("/");
    }
  },
};
</script>
