function searchIdeas() {
  $("#search-box").keyup(function() {
    var $ideas = $('#all-ideas').children()
    $.each($ideas, function(index, idea){

      var id = $(idea).attr('data-id');
      var title = $(idea).children('.title'+id).text();
      var body = $(idea).children('.body'+id).text();
      var query = $('#search-box').val();

      if (title.includes(query) || body.includes(query)) {$(idea).show()
      } else {
        $(idea).hide()
      }
    })
  });
}
