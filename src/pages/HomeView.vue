<template>
  <div>
    <CarouselComponent></CarouselComponent>
    <a-divider/>
    <ListComponent></ListComponent>
  </div>
</template>
<script>

import CarouselComponent from "@/components/CarouselComponent.vue";
import ListComponent from "@/components/ListComponent.vue";

export default {
  components: {
    CarouselComponent,
    ListComponent
  }
}
</script>
<style scoped>

</style>