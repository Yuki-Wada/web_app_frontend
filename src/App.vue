<template>
    <v-app>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/3.8.95/css/materialdesignicons.css">
        <v-navigation-drawer app v-model="drawer" temporary>
            <v-container>
                <div style="display: flex;">
                    <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
                    <v-img
                        alt="Vuetify Logo"
                        :src="require(`@/assets/logo.png`)"
                        max_height="40"
                        max_width="40"
                    />
                </div>

                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="title">
                            Navigation Lists
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>

                <v-list dense nav>
                    <div v-for="nav_list in nav_lists" :key="nav_list.name">
                        <v-list-group
                            v-if="nav_list.lists"
                            :prepend-icon="nav_list.icon"
                            no-action
                        >
                            <template v-slot:activator>
                                <v-list-item-content :to="nav_list.link">
                                    <v-list-item-title>{{ nav_list.name }}</v-list-item-title>
                                </v-list-item-content>
                            </template>
                            <v-list-item v-for="list in nav_list.lists" :key="list.name" :to="list.link">
                                <v-list-item-content>
                                    <v-list-item-title>{{ list.name }}</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-group>
                        <v-list-item v-else :to="nav_list.link">
                            <v-list-item-icon>
                                <v-icon>{{ nav_list.icon }}</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title>{{ nav_list.name }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </div>
                </v-list>
            </v-container>
        </v-navigation-drawer>

        <v-app-bar color="indigo" dark app >
            <div class="d-flex align-center">
                <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
                <font size="5" face="UD デジタル 教科書体 N-R">Yuki Wada's Homepage</font>
            </div>
        </v-app-bar>

        <v-main>
            <router-view />
        </v-main>

        <v-footer color="indigo" dark app>
            Yuki Wada
        </v-footer>

    </v-app>
</template>

<script>
import constant from './constant'

export default {
    name: "App",
    mixins: [constant],
    data: () => ({
        drawer: null,
        nav_lists:[
            {
                name: "Top Page",
                icon: "mdi-vuetify",
                link: "/"
            },
            {
                name: "About",
                icon: "mdi-account",
                link: "/about",
            },
            // {
            //     name: "Public-Relations",
            //     icon: "mdi-web",
            // },
            {
                name: "Games",
                icon: "mdi-google-controller",
                lists: [
                    {
                        name: "Maze Viewer",
                        link: "/maze_viewer",
                    },
                    {
                        name: "Reversi Viewer",
                        link: "/reversi_viewer"
                    },
                    {
                        name: "RTS Simulator",
                        link: "/rts_simulator"
                    },
                ]
            },
            // {
            //     name: "Applications",
            //     icon: "mdi-cloud-search-outline",
            //     lists: [
            //         {
            //             name: "Paper Network Viewer",
            //             link: "/paper_network",
            //         },
            //         {
            //             name: "Knowledge Graph Viewer",
            //             link: "/knowledge_graph",
            //         },
            //     ]
            // },
            // {
            //     name: "Outputs",
            //     icon: "mdi-lightbulb-on-outline",
            // },
            // {
            //     name: "Notes",
            //     icon: "mdi-book-open-variant",
            // },
        ]
    }),
    mounted: function() {
        document.title = "Yuki Wada's Homepage";
    },
};
</script>
