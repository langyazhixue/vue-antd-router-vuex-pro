// 是一种观察者模式的实现
class Bus {
  constructor() {
    this.callbacks = {}
  }
  $on(eventName, fn) {
    // 事件监听集合
    this.callbacks[eventName] = this.callbacks[eventName] || []
    this.callbacks[eventName].push(fn)
  }
  $emit(eventName, data) {
    //  监听函数
    if (this.callbacks[eventName]) {
      this.callbacks[eventName].forEach(cb => {
        cb(data)
      })
    }
  }
}

export default Bus
