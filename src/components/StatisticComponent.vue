<script>
import axios from "axios";

export default {
  data() {
    return {
      list: []
    }
  },
  created() {
    axios.post('/Profile').then((data) => {
      this.list = data.data.data
    })
  }
}
</script>

<template>
  <div style="padding-left: 5%;padding-top: 1%">
    <a-row :gutter="30">
      <a-col :span="30">
        <a-statistic :key="1" :title=list[0].title :value=list[0].value />
      </a-col>
    </a-row>
    <br><br>
    <a-row style="display: flex">
      <a-col style="width: 300px;padding-right: 0px">
        <a-statistic :key="2" :title=list[1].title :value=list[1].value />
      </a-col>
      <a-col style="width: 300px;padding-left: 0px">
        <a-statistic :key="3" :title=list[2].title :value=list[2].value />
      </a-col>
    </a-row>
  </div>
</template>


<style scoped>

</style>