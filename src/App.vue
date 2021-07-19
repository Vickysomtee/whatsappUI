<template>
  <div class="header">
    <div class="top">
      <div class="title">
        WhatsApp
      </div>
      <div class="top-icon">
        <span class="material-icons">
          search
        </span>
        <span class="material-icons" @click="showMenu = !showMenu">
          more_vert
        </span>
      </div>
    </div>
    <div class="bottom">
      <span class="material-icons">
        photo_camera
      </span>
      <div class="router">
        <router-link to="/"
          >CHATS <span class="chat-count">6</span></router-link
        >
        <router-link to="/status">STATUS</router-link>
        <router-link to="/calls">CALLS</router-link>
      </div>
    </div>
  </div>

  <div v-if="showMenu" class="icon-menu" @click="showMenu = false">
    <MenuList />
  </div>
  <!-- <div v-if="showMenu" class="icon-menu">
    <ul v-if="router.currentRoute.value.name === 'Chats'">
      <li>Settings</li>
    <li>Settings</li>
    <li>Settings</li>
    </ul>
     <ul v-if="router.currentRoute.value.name === 'Calls'">
      <li>call</li>
    <li>call</li>
    <li>call</li>
    </ul>

     <ul v-if="router.currentRoute.value.name === 'Status'">
      <li>Status</li>
    <li>Staus</li>
    <li>Status</li>
    </ul>
  </div>  -->
  <router-view />
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRoute, useRouter } from "vue-router";

import MenuList from "./components/MenuList.vue";
export default {
  components: {
    MenuList,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();

    const showMenu = ref(false);

    return { showMenu, router };
  },
};
</script>
<style>
body {
  font-family: Helvetica;
  margin: 0;
  padding: 0;
}

.header {
  display: grid;
  background: #075e54;
  padding: 10px 0;
  color: white;
}

.top {
  display: flex;
  justify-content: space-between;
  margin: 10px 2px 17px 4px;
}

.title {
  margin: 5px;
  font-size: 20px;
  font-weight: bold;
}

.top-icon {
  width: 60px;
  display: flex;
  justify-content: space-between;
}

.bottom {
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
  top: 13px;
  padding-left: 7px;
}
.bottom > span {
  width: 10%;
  opacity: 0.4;
}

.router {
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 3px;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
}

.router a {
  color: white;
  text-decoration: none;
  width: 30%;
  padding-bottom: 10px;
  opacity: 0.4;
}

.router a:hover {
  background: none;
}

a.router-link-active {
  border-bottom: 3px solid #fff;
  color: white;
  opacity: 1;
}

.chat-count {
  background: #fff;
  display: inline-block;
  font-size: 12px;
  color: #075e54;
  border-radius: 100%;
  width: 15px;
  height: 15px;
  position: relative;
  bottom: 2px;
  left: 2px;
  padding: 2px;
}

.icon-menu {
 position: fixed;
  font-family: Arial, Helvetica, sans-serif;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(190, 154, 154, 0);
  z-index: 99999;
  opacity: 1;
  -webkit-transition: opacity 400ms ease-in;
  -moz-transition: opacity 400ms ease-in;
  transition: opacity 4
}
</style>
