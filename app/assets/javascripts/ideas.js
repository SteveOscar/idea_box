$(document).ready(function(){


  function renderIdea(idea){
    $('#all-ideas').append(
      "<div class='idea' data-id='" +
      idea.id +
      "'><h6>Published on: " +
      idea.created_at +
      "</h6><p>" +
      idea.description +
      "</p>" +
      "<button id='delete-idea' name='button-fetch' class='btn btn-default btn-xs'>Delete</button>" +
      "</div>"
    )
  }

  function getIdeas(){
    $('#latest-ideas').empty()
    $.ajax({
      type: "GET",
      url : 'https://turing-birdie.herokuapp.com/api/v1/ideas.json',
      success: function(ideas) {
        $.each(ideas, function(index, idea) {
          renderPost(idea)
        })
      }
    })
  }

  getPosts()

  $("#create-idea").on('click', function(){
    var ideaParams = {
      idea: {
        description: $("#idea-description").val()
      }
    }
    $.ajax({
      type: 'POST',
      url : 'https://turing-birdie.herokuapp.com/api/v1/ideas.json',
      data: ideaParams,
      success: function(newPost) {
        renderPost(newPost)
      },
      error: function(xhr) {
        console.log(xhr.responseText)
      }
    })
  })



  $('#fetch-ideas').click(function() {
    getPosts()
  });

})

function deletePost() {
  $('#latest-ideas').delegate('#delete-idea', 'click', function(){
    var $idea = $(this).closest(".idea")
    $.ajax({
      type: 'DELETE',
      url : 'https://turing-birdie.herokuapp.com/api/v1/ideas/' + $idea.attr('data-id') + '.json',
      success: function(){
        $idea.remove()
      },
      error: function(xhr) {
        console.log(xhr.responseText)
      }
    })
  })
}
