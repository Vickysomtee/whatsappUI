<template>
  <div class="search">
   <div class="top">
      <span class="material-icons arow" @click="$emit('closeSearch')">
      arrow_back
    </span>
    <input type="text" placeholder="Search..." />
   </div>

    <div v-if="router.currentRoute.value.name === 'Chats'" class="search-options">
      <div>
        <span class="material-icons icon">
          image
        </span>
        <span>Photo</span>
      </div>

      <div>
        <span class="material-icons icon">
          gif
        </span>
        <span>GIFs</span>
      </div>
      <div>
        <span class="material-icons icon">
          videocam
        </span>
        <span>Videos</span>
      </div>
      <div>
        <span class="material-icons icon">
          link
        </span>
        <span>Links</span>
      </div>
      <div>
        <span class="material-icons icon">
          headset
        </span>
        <span>Audio</span>
      </div>
      <div>
        <span class="material-icons icon">
          article
        </span>
        <span>Documents</span>
      </div>
    </div>
  </div>
</template>

<script>
import {useRouter} from 'vue-router'
export default {
  name: "Search",

  setup() {
    const router = useRouter()

    return {router}
  }
};
</script>

<style scoped>
.search {
  background: #fff;
  padding: 5px 15px;
 box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
}

input {
  border: none;
  padding: 15px;
  margin-right: 40px;
  font-size: 17px;
}

.arow {
  position: relative;
  top: 13px;
}

.search-options {
  display: flex;
width: 100%;
justify-content: space-between;
flex-wrap: wrap;
}

.search-options div {
width: 30%;
display: flex;
font-size: 15px;
color: #696b6a;
background: #7779781f;
border-radius: 15px;
height: 20px;
margin-bottom: 10px;
padding: 7px 4px 5px;
}

.icon {
font-size: 15px;
margin-right: 7px;
position: relative;
top: 1px;
}
</style>
