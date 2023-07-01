<template>
  <!-- 创建一个布局 -->
  <a-layout id="components-layout-demo-custom-trigger" style="height: auto">
    <!-- 创建一个可折叠的侧边栏 -->
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible="">
      <!-- logo区域 -->
      <div class="logo">
        河北农业大学
      </div>
      <!-- 创建一个暗色主题的内联菜单 -->
      <a-menu :default-selected-keys="['1']" mode="inline" theme="dark">
        <!-- 创建一个菜单项 -->
        <a-menu-item key="1">
            <router-link to="/"/>
          <!-- 菜单项图标 -->
          <a-icon type="home"/>
          <!-- 菜单项文本 -->
          <span>概述</span>
        </a-menu-item>
        <!-- 创建另一个菜单项 -->
        <a-menu-item key="2">
          <router-link to="/Details"/>
          <a-icon type="area-chart"/>
          <span>详情</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <!-- 创建主要布局 -->
    <a-layout>
      <!-- 创建头部布局 -->
      <a-layout-header style="background: #fff; padding: 0;display: flex">
        <!-- 创建一个图标，点击时切换侧边栏的折叠状态 -->
        <a-icon
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            class="trigger"
            @click="() => (collapsed = !collapsed)"
        />
        <div style="font-size: medium;color: black;">
          国家重点保护野生动物
        </div>
      </a-layout-header>
      <!-- 创建内容布局 -->
      <a-layout-content
          :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <router-view></router-view>
      </a-layout-content>

    </a-layout>
  </a-layout>
</template>
<script>

export default {
  data() {
    return {
      // 控制侧边栏的折叠状态
      collapsed: false,
    };
  },
};
</script>
<style scoped>
/* 自定义触发器样式 */
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

/* 自定义触发器悬停样式 */
#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

/* 自定义logo样式 */
#components-layout-demo-custom-trigger .logo {
  color: white;
  font-size: 25px;
  text-align: center;
  height: 32px;
  background: #001529;
  margin: 16px;
}
</style>
