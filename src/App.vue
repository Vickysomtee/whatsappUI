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
        <span class="material-icons">
          more_vert
        </span>
      </div>
    </div>
    <div class="bottom">
      <span class="material-icons">
        photo_camera
      </span>

      <div class="router">
        <router-link to="/">CHATS</router-link>
        <router-link to="/status">STATUS</router-link>
        <router-link to="/calls">CALLS</router-link>
      </div>
    </div>
  </div>
  <router-view />
</template>

<style>
body {
  font-family: Helvetica;
  margin: 0;
  padding: 0;
}

.header {
  display: grid;
  background: #075e54;
  padding: 10px;
  color: white;
}

.top {
  display: flex;
  justify-content: space-between;
  margin: 10px 2px 17px 4px;
}

.title {
  margin: 5px;
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
}
.bottom span {
  width: 10%;
}

.router {
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 3px;
  text-align: center;
  padding-right: 12px;
  font-size: 12px;
  font-weight: bold;
}

.router a {
  color: white;
  text-decoration: none;
  border-bottom: 3px solid #fff;
  width: 30%;
  padding-bottom: 10px;
}
</style>
