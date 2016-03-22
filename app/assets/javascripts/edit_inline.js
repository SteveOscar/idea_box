function editTitle() {
  $('#all-ideas').on('click', '.title', function(){
    this.contentEditable = "true";
    var $idea = $(this).closest(".idea");
    var id = $idea.attr('data-id');
    var that = this;
    $(document).keypress(function(e) {
    if(e.which == 13) {
      var ideaParams = {
        idea: {
          title: $($idea).children(".title").text(),
          body: $($idea).children(".body").text()
        }
      }
      UpdateDatabase(ideaParams, id, $idea);
      that.contentEditable = "false";
      }
    });
  })
}

function editBody() {
  $('#all-ideas').on('click', '.body', function(){
    this.contentEditable = "true";
    var $idea = $(this).closest(".idea");
    var id = $idea.attr('data-id');
    var that = this;
    $(document).keypress(function(e) {
    if(e.which == 13) {
      var ideaParams = {
        idea: {
          title: $($idea).children(".title").text(),
          body: $($idea).children(".body").text()
        }
      }
      UpdateDatabase(ideaParams, id, $idea);
      that.contentEditable = "false";
      }
    });
  })
}

function UpdateDatabase(ideaParams, id, $idea) {
  $.ajax({
    type: 'PUT',
    url : '/api/v1/ideas/' + id + '.json',
    data: ideaParams,
    success: function(idea) {
      $('.title' + id).text(ideaParams.idea.title);
      $('.body' + id).text(ideaParams.idea.body);
    },
    error: function(xhr) {
      console.log(xhr.responseText)
    }
  })
}
