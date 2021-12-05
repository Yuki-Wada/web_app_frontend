import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const auth = {
    state: {
        login: {
            token: false,
            name: "ゲスト",
            expire: 0
        }
    },
    mutations: {
        SET_LOGIN_INFO: (state, login) => {
            state.login.token    = login.token
            state.login.name     = login.name
            state.login.expire = Math.floor(1000 * login.expire) // APIからUNIXタイム(秒)で有効期限が返ってくるものとし、ミリ秒に変換しておく
        }
    },
    actions: {
        setLoginInfo({ commit }, login) {
            commit("SET_LOGIN_INFO", login)
        }
    }
}

const store = new Vuex.Store({
    modules: {
        auth
    },
    state: {
        token: null,
        user_name: "Guest",
        expire: null,
    },
    mutations: {
        SET_LOGIN_INFO: (state, login_info) => {
            state.token    = login_info.token
            state.user_name     = login_info.user_name
            state.expire = Math.floor(1000 * login_info.expire) // APIからUNIXタイム(秒)で有効期限が返ってくるものとし、ミリ秒に変換しておく
        }
    },
    actions: {
        setLoginInfo(context, login) {
            context.commit("SET_LOGIN_INFO", login)
        }
    },
    // plugins: [createPersistedState({
    //     key: "xxxproject",         // プロジェクト単位の一意の識別子
    //     paths: ["auth.login"], // auth.js の loginキーは再度アクセスしても保持するようにする
    //     storage: localStorage    // 今回は localStorage に保存することにする
    // })]
})

export default store;
