<template>
  <div>
    <div :style="{display:shouldShowComponent?'flex':'block'}">
      <CarouselComponent v-if="shouldShowComponent" style="width: 50%;padding-right: 10%"></CarouselComponent>
      <CarouselComponent v-else style="width: 100%"></CarouselComponent>
      <a-divider v-if="shouldShowComponent" style="height: 200px" type="vertical"/>
      <a-divider v-else/>
      <StatisticComponent v-if="shouldShowComponent"></StatisticComponent>
      <StatisticComponent v-else style="width: 100%;"></StatisticComponent>
    </div>
    <a-divider/>
    <div style="display: flex">
      <TimelineComponent></TimelineComponent>
    </div>
  </div>
</template>
<script>

import CarouselComponent from "@/components/CarouselComponent.vue";
import StatisticComponent from "@/components/StatisticComponent.vue";
import TimelineComponent from "@/components/TimelineComponent.vue";

export default {
  components: {
    TimelineComponent,
    CarouselComponent,
    StatisticComponent,
  },
  data() {
    return {
      screenWidth: window.innerWidth,

    }
  },
  created() {
    window.addEventListener('resize', this.updateScreenWidth);
  },
  methods: {
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
    }
  },
  computed: {
    shouldShowComponent() {
      return this.screenWidth >= 768; // 根据您定义的屏幕宽度阈值来判断
    }
  }
}
</script>
<style scoped>

</style>