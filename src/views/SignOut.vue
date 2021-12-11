<template>
    <v-app>
        <v-card width="400px" class="mx-auto mt-5">
            <v-card-title>
                <h1 class="display-1">ログアウトしました</h1>
            </v-card-title>
        </v-card>
    </v-app>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";

export default {
    name: 'SignOut',
    data: () => ({
        elapsed_time: 1
    }),
    created : function() {
        const auth = getAuth();
        let self = this;
        let redirect = this.$route.query.redirect;
        signOut(auth).then(function() {
            self.$router.push(redirect);
        });
    },
    watch: {
        elapsed_time: function(time) {
            if (time <= 0) {
                this.$router.push("/");
            }
        }
    }
};
</script>
