$('#all-ideas').delegate('.edit', 'click', function(){
  var $idea = $(this).closest(".idea");
  var id = $idea.attr('data-id')
  toggleElements($idea);
  updateIdea(id);
})

function toggleElements($idea) {
  $($idea).children('.save').toggle();
  $($idea).children('#update-title').toggle();
  $($idea).children('#update-body').toggle();
}


function updateIdea(id) {
  $("#save"+id).on('click', function(){
    var $idea = $(this).closest(".idea");
    var ideaParams = {
      idea: {
        title: $($idea).children("#update-title").val(),
        body: $($idea).children("#update-body").val()
      }
    }
    UpdateDatabase(ideaParams, id, $idea);
  })
  // clearInputs();
}

function UpdateDatabase(ideaParams, id, $idea) {
  $.ajax({
    type: 'PUT',
    url : '/api/v1/ideas/' + id + '.json',
    data: ideaParams,
    success: function(idea) {
      console.log('idea updated')
      $('.title' + id).text(ideaParams.idea.title);
      $('.body' + id).text(ideaParams.idea.body);
      toggleElements($idea);
    },
    error: function(xhr) {
      console.log(xhr.responseText)
    }
  })
}
