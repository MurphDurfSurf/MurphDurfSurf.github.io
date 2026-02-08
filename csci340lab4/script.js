function newKeanu() {
  // cache bust so it changes more often
  const url = "https://placekeanu.com/480/360?cb=" + Date.now();
  $("#keanuImg").attr("src", url);
}

function newDog() {
  $.getJSON("https://random.dog/woof.json")
    .done(function(resp) {
      if (resp.url.endsWith(".mp4") || resp.url.endsWith(".webm")) { // Sometimes has mp4 or webm videos, this skips them.
        newDog();
        return;
      }
      $("#dogImg").attr("src", resp.url);
    })
    .fail(function() {
      alert("Could not load dog image.");
    });
}

function clearAll() {
  $("#dogImg").attr("src", "https://placekeanu.com/480/360");
  $("#keanuImg").attr("src", "https://placekeanu.com/480/360");
}

$(function() {
  $("#btnKeanu").on("click", newKeanu);
  $("#btnDog").on("click", newDog);
  $("#btnBoth").on("click", function() { newKeanu(); newDog(); });
  $("#btnClear").on("click", clearAll);
});
