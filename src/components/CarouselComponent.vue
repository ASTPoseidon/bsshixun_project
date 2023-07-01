<script>
import axios from "axios";

export default {
  data() {
    return {
      urls: []
    }
  },
  created() {
    axios.post('/ImgList').then((data) => {
      this.urls = data.data.data
    })
  },
  methods: {
    Img(i) {
      console.log(" Click Img " + i)
      this.$viewerApi({
        images: [
          this.urls[i]
        ]
      })
    }
  }
}
</script>

<template>
  <a-carousel arrows autoplay>
    <div slot="prevArrow" class="custom-slick-arrow" style="left: 10px;zIndex: 1">
      <a-icon type="left-circle"/>
    </div>

    <div v-for="(i , index) in urls" :key=index>
      <img :src=i @click="Img(index)">
    </div>

    <div slot="nextArrow" class="custom-slick-arrow" style="right: 10px">
      <a-icon type="right-circle"/>
    </div>
  </a-carousel>
</template>

<style scoped>
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 200px;
  line-height: 200px;
  background: white;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

}

.ant-carousel >>> .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: black;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
}

.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}

.ant-carousel >>> .custom-slick-arrow:hover {
  opacity: 0.5;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}

.ant-carousel >>> .slick-slide img {
  height: 200px;
  margin-top: 100px;
}
</style>