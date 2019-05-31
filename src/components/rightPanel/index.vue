<template>
  <transition>
    <div ref="rightPanel" :class="{'app--rightPanel--show':show}" class="app--rightPanel-cotainer">
      <div id="rightPanelBg" class="app--rightPanel--background" />
      <div id="rightPanel" class="app--rightPanel ">
        <div
          class="app-handle-button"
          :style="{
            'top':buttonTop +'px'
          }"
          @click="handlerClick"
        >
          <a-icon :type="type" />
        </div>
        <div class="app--rightPanel--body">
          <slot />
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import { addClass, removeClass } from '@/utils'
export default {
  name: 'RightPanel',
  props: {
    clickNotClose: {
      default: false,
      type: Boolean
    },
    buttonTop: {
      default: 250,
      type: Number
    }
  },
  data() {
    return {
      show: false
    }
  },
  computed: {
    theme() {
      return this.$store.state.settings.theme
    },
    type() {
      return this.show ? 'close' : 'setting'
    }
  },
  watch: {
    show(newVal) {
      if (newVal && !this.clickNotClose) {
        this.addEventClick()
      }
      if (newVal) {
        addClass(document.body, 'app--showRightPanel')
      } else {
        removeClass(document.body, 'app--showRightPanel')
      }
    }
  },
  mounted() {
    this.insertToBody()
  },
  beforeDestroy() {
    const elx = this.$refs.rightPanel
    elx.remove()
  },
  methods: {
    handlerClick() {
      this.show = !this.show
    },
    addEventClick() {
      const bgEl = document.getElementById('rightPanelBg')
      bgEl.addEventListener('click', this.closeSidebar)
    },
    closeSidebar(evt) {
      this.show = false
      const bgEl = document.getElementById('rightPanelBg')
      bgEl.removeEventListener('click', this.closeSidebar)
    },
    insertToBody() {
      const elx = this.$refs.rightPanel
      const body = document.querySelector('body')
      body.insertBefore(elx, body.firstChild)
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/variables.less';
.app--rightPanel-cotainer {
  .app--rightPanel--background {
    position: fixed;
    top:0;
    left:0;
    opacity: 0;
    transition: opacity 0.3s cubic-bezier(.7,.3,.1,1);
    background:rgba(0,0,0,0.2);
    z-index: -1
  }
  .app--rightPanel {
    width: 100%;
    max-width: 260px;
    height: 100vh;
    position: fixed;
    top:0;
    right: 0;
    box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.05);
    transform: translate(100%);
    background: #fff;
    z-index: 4000;
    transition: all 0.3s cubic-bezier(.7,.3,.1,1)
  }
  .app-handle-button {
    width: 48px;
    height: 48px;
    position:absolute;
    left:-48px;
    text-align: center;
    font-size: 24px;
    border-radius: 6px 0 0 6px !important;
    z-index: 0;
    pointer-events: auto;
    cursor: pointer;
    color: #fff;
    line-height: 48px;
    background-color:@primary-color
  }
}
.app--rightPanel--show {
  .app--rightPanel--background {
    z-index:2000;
    opacity: 1;
    width: 100%;
    height: 100%;
  }
  .app--rightPanel {
    transform: translate(0);
  }
}
</style>

