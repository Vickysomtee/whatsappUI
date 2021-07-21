<template>
  <main class="calls">
    <div class="call" v-for="(call, index) in calls" :key="index">
      <img :src="call.image" :alt="[call.name]" />
      <div class="content">
        <div class="main-content">
          <div class="name">
            {{ call.name }}
          </div>
          <div class="time">
            <span
              :style="[call.answered ? { color: 'red' } : { color: '#25d366' }]"
              class="material-icons"
            >
              {{ call.type }}
            </span>
            {{ call.time }}
          </div>
        </div>
        <span class="material-icons">
          call
        </span>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Calls",

  data() {
    return {
      calls: [],
    };
  },

  mounted() {
    this.calls = [
      {
         image: require("../assets/amin-rk-Sn7VDZ3yMuE-unsplash.jpg"),
        name: "Bishop",
        time: "2 minutes ago",
        type: "call_received",
        answered: false,
      },
      {
         image: require("../assets/edward-howell-c_BuV-xal7I-unsplash.jpg"),
        name: "Mirabel",
        time: "4 minutes ago",
        type: "call_made",
        answered: true,
      },
      {
        image: require("../assets/vine-ramazani-MRW40FzUASE-unsplash.jpg"),
        name: "Tochii",
        time: "37 minutes ago",
        type: "call_received",
        answered: true,
      },
      {
        image: require("../assets/realtor-1.jpeg"),
        name: "Apeh",
        time: "Yesterday, 5:04 Pm",
        type: "call_made",
        answered: false,
      },
      {
         image: require("../assets/chris-yang-bSjj-ghl-wk-unsplash.jpg"),
        name: "Susan",
        time: "June 30,  8:35 PM",
        type: "call_made",
        answered: false,
      },
      {
        image: require("../assets/jarritos-mexican-soda-FtmjYbEcqTo-unsplash.jpg"),
        name: "Eby",
        time: "June 17, 2:05 PM",
        type: "call_made",
        answered: true,
      },
      {
         image: require("../assets/jimmy-dean-TYQ6fyF3Amc-unsplash.jpg"),
        name: "Big Sis",
        time: "June 14, 11:00 AM",
        type: "call_made",
        answered: true,
      },
      {
         image: require("../assets/jimmy-dean-TYQ6fyF3Amc-unsplash.jpg"),
        name: "Big Sis",
        time: "June 5, 12:16 PM",
        type: "call_received",
        answered: false,
      },
    ];
  },
};
</script>
#075e54
<style scoped>
.calls {
  padding: 12px;
}

.call {
  display: flex;
  justify-content: space-around;
  margin-bottom: 14px;
}

img {
  width: 60px;
  height: 60px;
  border-radius: 100%;
}

.content {
  display: flex;
  justify-content: space-between;
  width: 75%;
  padding-top: 10px;
  border-bottom: 1px solid #eee;
  padding-bottom: 16px;
}

.name {
  font-size: 17px;
  font-weight: 600;
  color: #292929;
  margin: 0;
}

.time {
  color: #696b6a;
  font-size: 15px;
}

.time span {
  font-size: 17px;
  position: relative;
  top: 3px;
}

span {
  color: #075e54;
  padding-top: 5px;
}
</style>
