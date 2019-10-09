// import $ from 'jquery'
// (function ($) {
//   $('body').on('mousedown', '.el-dialog .el-dialog__header', function (ev) {
//     ev.preventDefault()
//     const $modalHeader = $(this)
//     const el = $modalHeader.parent().parent()

//     const offset = el.offset()
//     const dx = ev.pageX - offset.left
//     const dy = ev.pageY - offset.top

//     $(document).on('mousemove.drag', e => {
//       el.offset({ top: e.pageY - dy, left: e.pageX - dx })
//     })
//   })

//   $('body').on('mouseup', '.el-dialog .el-dialog__header', () => {
//     $(document).off('mousemove.drag')
//   })
// })($)
