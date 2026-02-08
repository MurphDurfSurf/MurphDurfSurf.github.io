function newKeanu() {
  // cache bust so it changes more often
  const url = "https://placekeanu.com/480/360?cb=" + Date.now();
  $("#keanuImg").attr("src", url);
}

function newQuote() {
  $("#quoteText").text("Loading...");
  $("#quoteAuthor").text("—");

  $.getJSON("https://random.dog/woof.json")
    .done(function(resp) {
      const data = resp && resp.data ? resp.data : {};
      $("#quoteText").text('"' + (data.quote || "No quote returned.") + '"');
      $("#quoteAuthor").text("— " + (data.author || "Unknown"));
    })
    .fail(function() {
      $("#quoteText").text("Could not load quote right now. Try again.");
      $("#quoteAuthor").text("— Network error");
    });
}

function clearAll() {
  $("#quoteText").text('Click “New Quote” to get a quote.');
  $("#quoteAuthor").text("—");
  $("#keanuImg").attr("src", "https://placekeanu.com/480/360");
}

$(function() {
  $("#btnKeanu").on("click", newKeanu);
  $("#btnQuote").on("click", newQuote);
  $("#btnBoth").on("click", function() { newKeanu(); newQuote(); });
  $("#btnClear").on("click", clearAll);
});
