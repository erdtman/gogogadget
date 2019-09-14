<template>
  <div class="container">
    <div class="columns">
      <div class="column col-4">
        <h1>HEX</h1>
      </div>
      <div class="column col-4">
        <h1>BASE62</h1>
      </div>
      <div class="column col-4">
        <h1>BASE64</h1>
      </div>
    </div>
    <div class="columns">
      <div class="column col-4">
        <textarea v-model="message" ></textarea>
      </div>
      <div class="column col-4">
        <textarea v-model="message" ></textarea>
      </div>
      <div class="column col-4">
        <textarea v-model="message"  ></textarea>
    </div>
  </div>
</div>  
</template>

<script>
import axios from "axios";

export default {
  components: {
    Chart
  },
  data () {
    return {
      message: "<empty>",
    }
  },
  async mounted() {
    
  },
  methods: {
    async update() {
       
    }
  } 

};
</script>
