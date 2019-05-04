<template>
  <a-layout-sider
    v-model="isCollapsed"
    theme="light"
    class="has--logo"
  >
    <span v-show="false">{{ defaultOpenKeys }}{{ isCollapsed }}</span>
    <app-logo-view :is-collapsed="isCollapsed" />
    <a-menu
      theme="dark"
      mode="inline"
      :default-selected-keys="defaultSelectedKeys"
      :default-open-keys="defaultOpenKeys"
    >
      <template
        v-for="(route) in routerMap"
      >
        <!-- 没有子菜单 -->
        <a-menu-item
          v-if="route.children && route.children.length ===1"
          :key="resolvePath(route.path,route.children[0].path)"
          :path="resolvePath(route.path,route.children[0].path)"
          @click="goToComponent"
        >
          <app-item
            :icon="route.children[0].meta.icon"
            :title="generateTitle(route.children[0].meta.title)"
          />
        </a-menu-item>
        <!-- 有子菜单 -->
        <a-sub-menu
          v-else
          :key="route.path"
        >
          <span slot="title">
            <app-item
              :icon="route.meta.icon"
              :title="generateTitle(route.meta.title)"
            />
          </span>
          <template
            v-for="child in route.children"
          >
            <a-menu-item
              v-if="!child.hiddex"
              :key="resolvePath(route.path,child.path)"
              :path="resolvePath(route.path,child.path)"
              @click="goToComponent"
            >
              <app-item
                :icon="child.meta.icon"
                :title="generateTitle(child.meta.title)"
              />
            </a-menu-item>
          </template>
        </a-sub-menu>
      </template>
    </a-menu>
  </a-layout-sider>
</template>
<script>
const path = require('path')
import AppItem from './components/item'
import AppLogoView from './components/logo'
import { generateTitle } from '@/utils/i18n'
export default {
  name: 'AppSideNav',
  components: {
    AppItem,
    AppLogoView
  },
  data() {
    return {
      openKeys: []
    }
  },
  computed: {
    isCollapsed() {
      const collapsed = this.$store.state.app.isCollapsed
      return collapsed
    },
    routerMap() {
      const router = this.$store.state.app.routerMap
      const routerArrPure = this.filterRouter(router)
      return routerArrPure
    },
    defaultSelectedKeys() {
      return [this.$route.path]
    },
    defaultOpenKeys() {
      // 计算初始情况是否需要展开二级菜单
      const res = []
      const fullPath = this.$route.fullPath
      const matched = this.$route.matched
      const matchedRouter = matched.filter(item => {
        return fullPath === item.path
      })
      if (matchedRouter.length > 0) {
        if (matchedRouter[0].parent) {
          res.push(matchedRouter[0].parent.path)
        }
      }
      return res
    }
  },
  watch: {
    openKeys: {
      handler: function(newVal, oldVal) {
        console.log(newVal)
      },
      deep: true
    }
  },
  methods: {
    goToComponent(item, key, keyPath) {
      this.$router.push({
        path: item.item.$attrs.path
      })
    },
    filterRouter(router) {
      // 菜单目前只有2层
      const res = []
      router.forEach(item => {
        if (!item.hidden && item.children && item.children.length > 0) {
          res.push(item)
        }
      })
      return res
    },
    resolvePath(basePath, routerPath) {
      return path.resolve(basePath, routerPath)
    },
    generateTitle
  }
}
</script>
<style lang="less" scoped>
</style>
