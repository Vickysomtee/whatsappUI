<template>
  <main class="chats">
    <div v-for="(chat, index) in chats" :key="index" class="chat">
      <img src="../assets/realtor-1.jpeg" alt="img" />
      <div class="content">
        <div class="message-title">
          <div class="title">{{ chat.name }}</div>
          <div
            :style="[chat.count ? { color: '#25d366' } : { color: '#696b6a' }]"
            class="message-seen time"
          >
            {{ chat.time }}
          </div>
        </div>
        <div class="message-body">
          <div class="text">{{ chat.message.substring(0, 30) }}...</div>
          <div v-if="chat.count" class="count">{{ chat.count }}</div>
        </div>
      </div>
    </div>
    <span class="material-icons">
      chat
    </span>
  </main>
</template>

<script>
import { ref } from "@vue/reactivity";
// @ is an alias to /src

export default {
  name: "Chats",
  components: {},

  setup() {
    const chats = ref([
      {
        name: "Bishop",
        message: "Are you home now?",
        time: "2:33pm",
        count: 2,
      },
      {
        name: "Facebook Nigeria",
        message: "+234 908 567 5667 left",
        time: "2:48pm",
        count: null,
      },
      {
        name: "Sopuru",
        message: "Howfar, help me buy caprisonne when coming back",
        time: "11:02pm",
        count: 2,
      },
      {
        name: "Daniel",
        message: "Check the bitcoin minning site",
        time: "Yesterday",
        count: null,
      },
      {
        name: "Big Sis",
        message: "I mistakenly sent you N5000",
        time: "7/8/21",
        count: 1,
      },
      {
        name: "Daniel",
        message: "Check the bitcoin minning site",
        time: "Yesterday",
        count: null,
      },
      {
        name: "Class Of  2019",
        message: "+234 908 567 5667: hey guys, I finally got a job",
        time: "7/8/21",
        count: 366,
      },
      {
        name: "Software Dev Forum",
        message: "+1 759 390 3389: we would have another session",
        time: "7/8/21",
        count: 1,
      },
      {
        name: "Homie",
        message: "We are organizing a send-off party for Jay",
        time: "7/8/21",
        count: null,
      },
      {
        name: "Peter Drake",
        message: "That wasn't neccesary",
        time: "2/5/20",
        count: null,
      },
    ]);

    return { chats };
  },
};
</script>

<style scoped>
.chats {
  padding: 12px;
}
.chat {
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
}

img {
  height: 60px;
  width: 60px;
  border-radius: 100%;
}
.content {
  display: grid;
  width: 80%;
  padding-top: 10px;
  border-bottom: 1px solid #eee;
  padding-bottom: 16px;
}

/* .message-seen {
  color: #25d366;
} */

.message-body {
  display: flex;
  width: 100%;
  justify-content: space-between;
  color: #696b6a;
  font-size: 15px;
}

.title {
  font-size: 17px;
  font-weight: 600;
  color: #292929;
  margin: 0;
}

.time {
  height: 15px;
  font-size: 14px;
}
.count {
  background: #25d366;
  border-radius: 100%;
  font-size: 10px;
  width: 18px;
  height: 14px;
  color: #fff;
  text-align: center;
  padding-top: 3px;
}

.message-title {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}
span {
  color: #fff;
  padding: 15px;
  border-radius: 100%;
  position: fixed;
  z-index: 1;
  top: 90%;
  left: 80%;
  background: #25d366;
}
</style>
