<template>
    <v-app>
        <v-card width="400px" class="mx-auto mt-5">
            <v-card-title>
                <h1 class="display-1">アカウント作成</h1>
            </v-card-title>
            <v-card-text>
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
            </v-card-text>
        </v-card>
    </v-app>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
    name: 'LoginAuthentication',
    data: () => ({
        showPassword : false,
        input_user_name: "",
        password: ""
    }),
    methods: {
        auth: function() {
            let login_info = {
                token: true,
                user_name: this.input_user_name,
                expire: 10
            };

            const auth = getAuth();
            createUserWithEmailAndPassword(auth, this.input_user_name, this.password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                this.$store.dispatch("setLoginInfo", login_info)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
                // ..
            });
        }
    },
};
</script>
