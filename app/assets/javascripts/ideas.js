$(document).ready(function(){
  getIdeas();
  createIdea();
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

  getIdeas()

  $('#fetch-ideas').click(function() {
    getIdeas()
  });


// function deleteIdea() {
//   $('#all-ideas').delegate('#delete-idea', 'click', function(){
//     var $idea = $(this).closest(".idea")
//     $.ajax({
//       type: 'DELETE',
//       url : 'https://idea-box-of-dreams.herokuapp.com/api/v1/ideas/' + $idea.attr('data-id') + '.json',
//       success: function(){
//         $idea.remove()
//       },
//       error: function(xhr) {
//         console.log(xhr.responseText)
//       }
//     })
//   })
// }
