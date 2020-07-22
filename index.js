$("input").keydown(function (e) {
  $("h1").text(e.key);
});

const board1 = Xiangqiboard("board1", "start");
