<template>
  <ul v-if="router.currentRoute.value.name === 'Chats'">
    <li>New group</li>
    <li>New broadcast</li>
    <li>Whatsapp Web</li>
    <li>Starred messages</li>
    <li>Settings</li>
  </ul>
  <ul v-if="router.currentRoute.value.name === 'Calls'">
    <li>Clear call log</li>
    <li>Settings</li>
  </ul>

  <ul v-if="router.currentRoute.value.name === 'Status'">
     <li>Status privacy</li>
    <li>Settings</li>
  </ul>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
export default {
  name: "MenuList",

  setup() {
    const route = useRoute();
    const router = useRouter();

    return { router };
  },
};
</script>

<style>
ul {
width: 170px;
position: relative;
border-radius: 4px;
background: #fff;
bottom: 15px;
float: right;
padding: 15px 20px 0 15px;
float: right;
}

li {
  list-style: none;
  margin-bottom: 20px;
  padding-top: 10px
}
</style>
