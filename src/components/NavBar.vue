<template>
  <nav>
    
    <div v-if="user.loggedIn">
      <v-toolbar app >
      <v-toolbar-title >
        <span class="font-weight-light">Welcome, </span>
        <span >{{user.data.displayName}} </span>
        <span class="font-weight-light"> to the final project application</span>
      </v-toolbar-title>
      <v-spacer ></v-spacer>
        <v-navigation-drawer expand-on-hover rail id="aydol">
        <v-list density="compact" app >
          <v-list-item v-for="item in items" :key="item.title" router :to="item.path" :prepend-icon="item.icon"
            :color="item.color">
            <v-list-item-title :color="item.color">{{ item.title }}</v-list-item-title>

          </v-list-item>
          <v-list-item color="#a9252e" @click.prevent="signOut" prepend-icon="mdi-logout">Logout
              
            </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-toolbar>
    </div>
    <div v-else>
    
  </div>
  </nav>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed } from "vue";
import { auth } from '../firebaseConfig'
export default {
  name: "DashboardComponent",
  data() {
    return {
      items: [
           { title: 'Personal', icon: 'mdi-account', path: '/personal' },
           { title: 'Basic Math Demo', icon: 'mdi-plus-one', path: '/basicMath' },
           { title: 'String App', icon: 'mdi-code-string', path: '/stringApp'},
           { title: 'Axios Demo', icon: 'mdi-api', path: '/axiosDemo'},
           { title: 'Area Calculator', icon: 'mdi-calculator-variant-outline', path: '/area'},
           { title: 'Quiz App', icon: 'mdi-lightbulb-on', path: '/quiz'},
           { title: 'Quiz Score', icon: 'mdi-scoreboard', path: '/scores'},
           
      ],
      drawer: false
    }
  },
  setup() {

    const store = useStore()
    const router = useRouter()
    auth.onAuthStateChanged(user => {
      store.dispatch("fetchUser", user);
    });
    const user = computed(() => {
      return store.getters.user;
    });
    const signOut = async () => {
      await store.dispatch('logOut')
      router.push('/')
    }
    return { user, signOut }
  }


};
</script>
<style>
 #aydol{
    color: rgb(0, 0, 0);
    background-color: rgb(194, 235, 49);
   }
</style>