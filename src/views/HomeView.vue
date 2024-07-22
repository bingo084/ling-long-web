<template>
  <t-layout class="home">
    <t-header class="header">
      <t-head-menu>
        <template #logo>
          <h2 class="logo">{{ logo }}</h2>
        </template>
        <t-button shape="square" variant="text" @click="changeCollapsed">
          <t-icon name="view-list" />
        </t-button>
        <template #operations>
          <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="search" /></a>
          <a href="javascript:;"
            ><t-icon class="t-menu__operations-icon" name="notification-filled"
          /></a>
          <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="home" /></a>
          <t-dropdown trigger="click">
            <t-button variant="text">
              <template #icon> <t-icon name="user-circle" /></template>bingo
              <template #suffix> <t-icon name="chevron-down" /></template>
            </t-button>
            <t-dropdown-menu>
              <t-dropdown-item>
                <template #prefixIcon> <t-icon name="user-circle" /></template>个人中心
              </t-dropdown-item>
              <t-dropdown-item>
                <template #prefixIcon> <t-icon name="logout" /></template>退出登录
              </t-dropdown-item>
            </t-dropdown-menu>
          </t-dropdown>
        </template>
      </t-head-menu>
    </t-header>
    <t-layout>
      <t-aside width="fit-content">
        <t-menu :collapsed="collapsed">
          <t-submenu v-for="menu in menus" :title="menu.name" :key="menu.id" :value="menu.id">
            <template #icon>
              <t-icon :name="menu.icon" />
            </template>
            <t-menu-item
              v-for="sub in menu.children"
              :title="sub.name"
              :key="menu.id"
              :value="sub.id"
            >
              {{ sub.name }}
            </t-menu-item>
          </t-submenu>
        </t-menu>
      </t-aside>
      <t-layout>
        <t-content class="content">
          <div>Content</div>
        </t-content>
      </t-layout>
    </t-layout>
  </t-layout>
</template>
<script lang="ts" setup>
import { api } from '@/api/ApiInstance'
import { onMounted, ref } from 'vue'
let collapsed = ref(false)
let logo = ref('玲珑后台管理系统')
function changeCollapsed() {
  collapsed.value = !collapsed.value
  logo.value = collapsed.value ? '玲珑' : '玲珑后台管理系统'
}
let menus = ref()
onMounted(() => {
  api.menuService.findTree().then((res) => {
    menus.value = res
  })
})
</script>
<style lang="less" scoped>
.home {
  .header {
    .logo {
      color: var(--td-brand-color-7);
    }

    border-bottom: 1px solid var(--td-component-stroke);
  }

  .content {
    height: calc(100vh - var(--td-comp-size-xxxl));
  }
}
</style>
