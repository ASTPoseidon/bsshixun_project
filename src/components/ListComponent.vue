<script>
import axios from "axios";

export default {
  data() {
    return {
      listData: [],
      pagination: {
        pageSize: 2,
      },
    }
  },
  created() {
    axios.post('/List').then((data) => {
      this.listData = data.data.data
    })
  }
}
</script>

<template>
  <a-list :data-source="listData" :pagination="pagination" item-layout="vertical" size="large"
          style="padding-bottom: 15px">
    <a-list-item key="item.title" slot="renderItem" slot-scope="item">
      <template v-for="{ type, text } in item.profile" slot="actions">
        <span :key="type">
          <a-icon :type="type" style="margin-right: 8px"/>
          {{ text }}
        </span>
      </template>
      <img
          slot="extra"
          :src=item.img
          alt="logo"
          width="272"
      />
      <a-list-item-meta :description="item.description">
        <a slot="title" :href="item.href">{{ item.title }}</a>
        <a-avatar slot="avatar" :src="item.avatar"/>
      </a-list-item-meta>
      {{ item.content }}
    </a-list-item>
    <div slot="footer"><b>国家重点保护野生动物列表</b> List Part</div>
  </a-list>
</template>

<style scoped>

</style>