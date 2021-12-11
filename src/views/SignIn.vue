<template>
    <v-app>
        <v-card width="400px" class="mx-auto mt-5">
            <v-card-title>
                <h1 class="display-1">ログイン</h1>
            </v-card-title>
            <v-card-text>
                {{ status }}
                <v-form>
                    <v-text-field
                        v-model="input_user_name"
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
                        <v-btn class="info" v-on:click="auth">ログイン</v-btn>
                    </v-card-actions>
                </v-form>
                    <p>You don't have an account?
                        <router-link to="/signup">create account now!!</router-link>
                    </p>
            </v-card-text>
        </v-card>
    </v-app>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
    name: 'SignIn',
    data: () => ({
        showPassword : false,
        input_user_name: "",
        password: "",
        status: "",
    }),
    methods: {
        auth: function() {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, this.input_user_name, this.password)
            .then(() => {
                this.$router.push(this.$route.query.redirect);
            })
            .catch(() => {
                this.status = "認証情報が間違っています！";
            });
        }
    }
};
</script>
