<template>
  <div>
    <div style="display: flex">
      <CarouselComponent style="width: 50%;padding-right: 10%"></CarouselComponent>
      <a-divider style="height: 200px" type="vertical"/>
      <StatisticComponent></StatisticComponent>
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
  }
}
</script>
<style scoped>

</style>