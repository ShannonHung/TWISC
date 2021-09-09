// 想要把checkboxes的disabled標籤拿掉 失敗...
 checkboxes = document.getElementsByClassName('task-list-item-checkbox');
console.log(checkboxes);
Array.prototype.forEach.call(checkboxes, function (e) {
  console.log(e);
  e.removeAttribute('disabled');
});
