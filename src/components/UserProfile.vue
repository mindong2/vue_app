<template>
    <div>
  
      <section> 
        <div class="user-container">
          <div>
            <i class="fas fa-user"></i>
          </div>

          <div class="user-description">
            <div>
              <slot name="username"></slot>
            </div>

            <div class="time">
              <slot name="time"></slot>
            </div>

            <slot name="karma"></slot>
          </div>
        </div>
        
      </section>
  
      
  
    </div>
  </template>
  
  <script>
  export default {
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