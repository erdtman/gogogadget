<template>
  <div class="container">
    <div class="columns">
      <div class="column col-3">
        <h1>HEX</h1>
      </div>
      <div class="column col-3">
        <h1>BASE62</h1>
      </div>
      <div class="column col-3">
        <h1>BASE64</h1>
      </div>
      <div class="column col-3">
        <h1>UTF8</h1>
      </div>
    </div>
    <div class="columns">
      <div class="column col-3">
        <textarea v-model="hex"></textarea>
      </div>
      <div class="column col-3">
        <textarea v-model="base62" ></textarea>
      </div>
      <div class="column col-3">
        <textarea v-model="base64"  ></textarea>
      </div>
      <div class="column col-3">
        <textarea v-model="utf8"  ></textarea>
      </div>
    </div>
  </div>  
</template>

<script>
import baseX from "base-x";
const base62 = baseX('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');

export default {
  data() {
    return {
      hex: "",
      base62: "",
      base64: "",
      utf8: ""
    }
  },
  watch: {
    hex () {
      const buffer = Buffer.from(this.hex, 'hex');

      this.base62 = base62.encode(buffer);
      this.base64 = buffer.toString('base64');
      this.utf8 = buffer.toString('utf8');
    },
    base62 () {
      const buffer = base62.decode(this.base62);

      this.base64 = buffer.toString('base64');
      this.utf8 = buffer.toString('utf8');
      this.hex = buffer.toString('hex');
    },
    base64 () {
      const buffer = Buffer.from(this.base64, 'base64');
      
      this.base62 = base62.encode(buffer);
      this.utf8 = buffer.toString('utf8');
      this.hex = buffer.toString('hex');
    },
    utf8 () {
      const buffer = Buffer.from(this.utf8, 'utf8');
      
      this.base64 = buffer.toString('base64');
      this.base62 = base62.encode(buffer);
      this.hex = buffer.toString('hex');
    }
  }
};
</script>
