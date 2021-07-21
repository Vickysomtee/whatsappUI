<template>
  <div class="container">
    <div class="status">
      <div class="image">
        <img src="../assets/realtor-1.jpeg" alt="img" />
         <span class="material-icons">
        add
      </span>
      </div>
      <div class="content">
        <div class="name">
          My status
        </div>
        <div class="time">
          Tap to add status update
        </div>
      </div>
    </div>
    <h4>Recent Updates</h4>

     <div class="status" v-for="(stat, index) in status" :key="index">
      <div class="image">
        <img src="../assets/realtor-1.jpeg" alt="img"  class="content-image"/>
      </div>
      <div class="main-content content">
        <div class="name">
          {{stat.name}}
        </div>
        <div class="time">
          {{stat.time}}
        </div>
      </div>
    </div>

    <h4>Viewed Updates</h4>
    <div class="status" v-for="(stat, index) in viewedStatus" :key="index">
      <div class="image">
        <img src="../assets/realtor-1.jpeg" alt="img"  class="content-viewed"/>
      </div>
      <div class="main-content content">
        <div class="name">
          {{stat.name}}
        </div>
        <div class="time">
          {{stat.time}}
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Status",

  data() {
    return {
      status: [],
      viewedStatus: [],
      image: "../assets/realtor-1.jpeg"
    };
  },

  mounted() {
    this.status = [
      {
        name: "Bishop",
        time: "2 minutes ago",
      },
      {
        name: "Mirabel",
        time: "4 minutes ago",
      },
      {
        name: "Tochii",
        time: "37 minutes ago",
      },
       {
        name: "Apeh",
        time: "56 minutes ago",
      },
       {
        name: "Susan",
        time: "Today,  8:35pm",
      },
       {
        name: "Eby",
        time: "Today, 7:00pm",
      },

    ];

    console.log(this.status)

    this.viewedStatus = [
        {
        name: "Kayce",
        img: "../assets/logo.png",
        time: "Today, 1:00pm",
      },
      {
        name: "King",
        time: " 7:00am",
      },
      {
        name: "Sopuru",
        time: " Yesterday, 11:55pm",
      },
      {
        name: "Niceboy",
        time: " Yesterday, 10:00pm",
      },
    ]

    console.log(this.viewedStatus)
  },
};
</script>

<style scoped>
.container {
  background: #f0eeee;
  height: 100vh;
  margin-top: 7px
}

.status {
  display: flex;
  justify-content: space-between;
  padding: 12px;
  background: white;
  height: 66px;
}

.content {
  width: 80%;
  padding-top: 10px;
}

.main-content {
  margin-left: 18px;
   border-bottom: 1px solid #eee;
  padding-bottom: 60px
}
.name {
  font-size: 17px;
  font-weight: 600;
  color: #292929;
  margin: 0;
  margin-bottom: 3px;
}

.time {
  display: flex;
  width: 100%;
  justify-content: space-between;
  color: #696b6a;
  font-size: 15px;
}
img {
  height: 60px;
  width: 60px;
  border-radius: 100%;
  
}

span {
  position: relative;
  bottom: 27px;
  left: 42px;
  background: #25d366;
  border-radius: 100%;
  color: #fff;

}

h4 {
  color: #777978;
  font-size: 14px;
  margin: 10px;
  padding-left: 5px;
}
.content-image {
  padding: 2px;
  border: 2px dashed #25d366;
}

.content-viewed {
  padding: 2px;
  border: 2px solid #cecbcb;
}
</style>
