<template>
  <div id="demo">
    <h2>简单的过渡</h2>
    <a-button @click="show = !show">
      Toggle
    </a-button>
    <transition name="fadeTest">
      <p v-if="show">
        hello
      </p>
    </transition>
    <h2>简单的过渡2</h2>
    <a-button @click="show1 = !show1">
      Toggle
    </a-button>
    <transition name="slideTest">
      <p v-if="show1">
        hello
      </p>
    </transition>

    <h2>css 动画用法同css过渡，区别是在动画中`v-enter`类名在节点插入DOM后不会立即删除，而是`animationend`事件触发时删除</h2>
    <a-button @click="show2=!show2">
      Toggle
    </a-button>
    <transition name="bounce">
      <p v-if="show2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.
      </p>
    </transition>

    <h2>Vue 过渡系统结合其他第三方css动画库，如 Animate.css 结合</h2>
    <a-button @click="show3=!show3">
      Toggle
    </a-button>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated tada"
      leave-active-class="animated bounceOutRight"
      :duration="{ enter: 500, leave: 800 }"
    >
      <p v-if="show3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.
      </p>
    </transition>

    <h2>JS 钩子函数</h2>
    <a-button @click="show4=!show4">
      Toggle
    </a-button>

    <transition
      name="custom-classes-transition"
      enter-active-class="animated tada"
      leave-active-class="animated bounceOutRight"
      :duration="{ enter: 500, leave: 800 }"
    >
      <p v-if="show4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.
      </p>
    </transition>

    <h2>初使渲染的过渡</h2>
    <a-button @click="show5=!show5">
      Toggle
    </a-button>
    <transition
      appear
      appear-class="appear-test-class"
      appear-to-class="appear-to-test-class"
      appear-active-class="appear-active-test-class"
    >
      <p v-if="show5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.
      </p>
    </transition>

    <h2>多个元素的过渡 </h2>
    <div>
      transition 默认 -  进入和离开会同时发生
      'in-out':新元素先进行过渡，完成之后当前元素过渡离开
      'out-in': 当前元素先进行过渡,完成之后新元素过渡进入
    </div>
    <a-button @click="isEditing=!isEditing">
      Toggle
    </a-button>
    <br>
    <transition
      enter-active-class="animated bounceOutLeft"
      leave-active-class="animated bounceOutRight"
      :duration="{ enter: 800, leave: 800 }"
      mode="out-in"
    >
      <a-button v-if="isEditing" key="save">
        Save
      </a-button>
      <a-button v-else key="edit">
        edit
      </a-button>
    </transition>

    <h2>in-out</h2>
    <div class="test--container">
      <transition
        name="modeTest"
        mode="in-out"
      >
        <a-button :key="show6" class="modeTest11" @click="show6=!show6">
          {{ show6 ? 'on' : 'out' }}
        </a-button>
      </transition>
    </div>

    <h2>多个组件过渡</h2>
    <div>多个组件的过渡简单很多 - 我们不需要使用 key 特性。相反，我们只需要使用动态组件</div>
    <a-button @click="toggle">
      toggle
    </a-button>
    <transition name="component-fade" mode="out-in">
      <component :is="view" />
    </transition>

    <h2>列表的过渡</h2>
    <div id="list-demo" class="demo11">
      <a-button @click="shuffle">
        Shuffle
      </a-button>
      <a-button @click="handleradd">
        Add
      </a-button>
      <a-button @click="remove">
        Remove
      </a-button>
      <transition-group name="listdddd" tag="p">
        <span v-for="item in items" :key="item" class="list-item">
          {{ item }}
        </span>
      </transition-group>
    </div>

    <h2>列表的排序过渡</h2>
    <div id="flip-list-demo222" class="demo222">
      <button @click="shuffle">
        Shuffle
      </button>
      <transition-group name="flip-list" tag="ul">
        <li v-for="item in items" :key="item">
          {{ item }}
        </li>
      </transition-group>
    </div>

    <h2>列表的交错过渡</h2>
    <div>通过data属性与JS通信，就可以实现列表的交错过渡</div>
    <div id="stagered-list-demo">
      <a-input v-model="query" />
      <transition-group
        name="stagered-fade"
        tag="ul"
        :css="false"
        mode="out-in"
        @before-enter="stageredBeforeEnter"
        @enter="stageredEnter"
        @leave="stageredLeave"
      >
        <li
          v-for="(item,index) in computedList"
          :key="item.msg"
          :data-index="index"
        >
          {{ item.msg }}
        </li>
      </transition-group>
    </div>

    <h2>动态过渡</h2>
    <div>
      当你想用Vue的过渡系统来定义的css过渡/动画在不同过渡间切换会非常有用
    </div>
    <div id="dynamic-fade-demo" class="demo">
      Fade In:  <input v-model="fadeInDuration" type="range" min="0" :max="maxFadeDuration">
      Fade Out: <input v-model="fadeOutDuration" type="range" min="0" :max="maxFadeDuration">
      <br>
      <transition
        :css="false"
        @before-enter="dynamicBeforeEnter"
        @enter="dynamicEnter"
        @leave="dynamicLeave"
      >
        <p v-if="dynamicShow">
          show
        </p>
      </transition>
      <br>
      <a-button
        v-if="dynamicStop"
        @click="dynamicStop = false; dynamicShow = false"
      >
        Start animating
      </a-button>
      <a-button
        v-else
        @click="dynamicStop = true"
      >
        Stop it!
      </a-button>
    </div>
  </div>
</template>
<script>
import _ from 'lodash'
import 'animate.css'
import Velocity from 'velocity-animate'
import { setTimeout } from 'timers'

export default {
  name: 'TestView',
  components: {
    'v-a': {
      template: '<div>Component A</div>'
    },
    'v-b': {
      template: '<div>Component B</div>'
    }
  },
  data() {
    return {
      fadeInDuration: 1000,
      fadeOutDuration: 1000,
      maxFadeDuration: 1000,
      dynamicStop: true,
      dynamicShow: true,
      query: '',
      list: [
        { msg: 'Bruce Lee' },
        { msg: 'Jackie Chan' },
        { msg: 'Chuck Norris' },
        { msg: 'Jet Li' },
        { msg: 'Kung Fury' }
      ],
      show: true,
      show1: true,
      show2: true,
      show3: true,
      show4: true,
      show5: true,
      show6: true,
      isEditing: true,
      view: 'v-a',
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10

    }
  },
  computed: {
    computedList() {
      if (this.query) {
        const q = this.query.toLowerCase()
        return this.list.filter(item => {
          return item.msg.toLowerCase().indexOf(q) > -1
        })
      } else return this.list
    }
  },
  mounted() {
    this.dynamicShow = false
  },
  methods: {
    randomIndex() {
      return Math.floor(Math.random() * this.items.length)
    },
    handleradd() {
      this.items.splice(this.randomIndex(), 0, this.nextNum++)
    },
    remove() {
      this.items.splice(this.randomIndex(), 1)
    },
    toggle() {
      if (this.view === 'v-a') {
        this.view = 'v-b'
      } else {
        this.view = 'v-a'
      }
    },
    beforeEnter: (el) => {
      // ...
    },
    enter: function(el, done) {
      // ...
      done()
    },
    afterEnter: function(el) {
    // ...
    },
    // leaveCancelled 只用于 v-show 中
    enterCancelled: function(el) {
      // ...
    },
    beforeLeave: function(el) {
      // ...
    },
    // 当与 CSS 结合使用时
    // 回调函数 done 是可选的
    leave: function(el, done) {
      // ...
      done()
    },
    afterLeave: function(el) {
      // ...
    },
    // leaveCancelled 只用于 v-show 中
    leaveCancelled: function(el) {
      // ...
    },
    shuffle: function() {
      this.items = _.shuffle(this.items)
    },
    stageredBeforeEnter(el) {
      console.log(el)
      el.style.opacity = 0
      el.style.height = 0
    },
    stageredEnter(el, done) {
      console.log('enter')
      // var delay = el.dataset.index * 150
      setTimeout(function() {
        Velocity(
          el,
          {
            opacity: 1,
            height: '1.6em'
          },
          {
            complele: done
          }
        )
      })
    },
    stageredLeave(el, done) {
      console.log('leave')
      // var delay = el.dataset.index * 150
      setTimeout(function() {
        Velocity(
          el,
          {
            opacity: 0,
            height: 0
          }, {
            complete: done
          }
        )
      })
    },
    dynamicBeforeEnter(el) {
      el.style.opacity = 0
    },
    dynamicEnter(el, done) {
      var vm = this
      Velocity(
        el,
        {
          opacity: 1
        },
        {
          duration: vm.fadeInDuration,
          complete: function() {
            done()
            if (!vm.dynamicStop) {
              vm.dynamicShow = false
            }
          }
        }
      )
    },
    dynamicLeave(el, done) {
      var vm = this
      Velocity(
        el,
        {
          opacity: 0
        },
        {
          duration: vm.fadeOutDuration,
          complete: function() {
            done()
            vm.dynamicShow = true
          }
        }
      )
    }
  }
}
</script>
<style lang="scss" scope>

#demo {
  padding:60px;
}
  .fadeTest-enter-active, .fadeTest-leave-active {
    transition: opacity 1s;
  }
  .fadeTest-enter, .fadeTest-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .slideTest-enter-active {
    transition: all 0.3s ease
  }
  .slideTest-leave-active {
    transition: all 0.8s cubic-bezier(1.0, 0.5, 0.8, 1.0)
  }
  .slideTest-enter {
    transform: translateX(10px);
    opacity: 0
  }
  .slideTest-leave-to {
    transform: translateX(10px);
    opacity: 0
  }
  .bounce-enter-active {
    animation:  bounce-in 0.5s
  }
  .bounce-leave-active {
    animation:  bounce-in 0.5s reverse
  }
  @keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

.appear-test-class {
  opacity: 0;
  transform: translateX(10px)
}
.appear-active-test-class {
  transition: all 10s ease
}
.appear-active-test-class {
  opacity: 1
}

.test--container {
  position: relative;
  width: 500px;
  height: 500px;
  min-height: 500px;
  border:1px solid red;
  .modeTest11{
    position:absolute;
    top:200px;
    left:200px;
  }
}
.modeTest-enter {
  opacity: 0;
  transform: translateX(200px);
}

.modeTest-enter-active{
  opacity: 1;
  transition:all 0.5s ease;
}
.modeTest-leave-active{
  opacity: 1;
  transition: all 1s ease
}
.modeTest-leave-to{
  transform: translateX(-200px);
  opacity: 0
}

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}

#list-demo {
  width: 500px;
  height: 500px;
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}

.listdddd-enter-active, .listdddd-leave-active {
  transition: all 1s;
  transform: translateY(0px);
  opacity:1
}
.listdddd-enter, .listdddd-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

.listdddd-move{
  transition: transform 1s;
}
.flip-list-move{
  transition: transform 1s;
}

// .list-enter{
//   opacity: 0;
//   transform: translateY(30px)

// }
// .list-enter-active{
//   transition:  all 1s ease;
// }

// .list-leave-active{
//   transition:  all 1s ease;
// }
// .list-leave-to{
//   opacity: 0;
//   transform: translateY(30px)
// }
</style>

