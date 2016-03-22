$(document).ready(function(){
  getIdeas();
  createIdea();
  deleteIdea();
})

  function renderIdea(idea){
    $('#all-ideas').prepend(
      "<div class='idea' data-id='" +
      idea.id +
      "'><h6>Published on: " +
      idea.created_at +
      "</h6><p>Title: " +
      idea.title +
      "</p>" +
      "</h6><p>Body: " +
      idea.body +
      "</p>" +
      "</h6><p>Quality: " +
      idea.quality +
      "</p>" +
      "<button id='delete-idea' name='button-fetch' class='btn btn-default btn-xs'>Delete</button>" +
      "<button id='thumbs-up' name='button-fetch' class='btn btn-default btn-xs'>Thumbs Up</button>" +
      "<button id='thumbs-down' name='button-fetch' class='btn btn-default btn-xs'>Thumbs Down</button>" +
      "</div><br>"
    )
  }

  function getIdeas(){
    $.getJSON('/api/v1/ideas', function(ideas){
      $.each(ideas, function(index, idea){
        renderIdea(idea);
      })
    })
  };
  //
