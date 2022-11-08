<template>
    <div>
  
      <section> 
        <div class="user-container">
          <div>
            <i class="fas fa-user"></i>
          </div>
          <div class="user-description">
            <div>
                {{ userInfo.id }}
            </div>
            <div class="time">
              {{userInfo.created}}
            </div>
          </div>
        </div>
        
      </section>
  
      
  
    </div>
  </template>
  
  <script>
  export default {
    computed: {
    userInfo() {
      return this.$store.state.user;
    },
  },
  };
  </script>
  
  <style scoped>
    .user-container{
      display: flex;
      align-items: center;
      padding: .5rem;
    }
    .fa-user {
      font-size: 2.5rem;
    }
    .user-description {
      padding-left: 1rem;
    }
    .time{
      font-size: 0.7rem;
    }
  </style>