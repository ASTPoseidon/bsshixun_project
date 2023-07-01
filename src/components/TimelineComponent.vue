<script>
import axios from "axios";

export default {
  data() {
    return {
      list: []
    }
  },
  created() {
    axios.post('TimeList').then((data) => {
      this.list = data.data.data
    })
  }
}
</script>

<template>
  <a-timeline pending="至今...">
    <div v-for="(i,index) in list" :key="index">
      <a-timeline-item v-if="index!==list.length-1">
        {{ i.text }}
      </a-timeline-item>
      <a-timeline-item v-else color="red">
        {{ i.text }}
      </a-timeline-item>
    </div>
  </a-timeline>
</template>


<style scoped>

</style>