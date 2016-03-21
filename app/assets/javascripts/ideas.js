$(document).ready(function(){

  function renderIdea(idea){
    $('#all-ideas').append(
      "<div class='idea' data-id='" +
      idea.id +
      "'><h6>Published on: " +
      idea.created_at +
      "</h6><p>" +
      idea.body +
      "</p>" +
      "<button id='delete-idea' name='button-fetch' class='btn btn-default btn-xs'>Delete</button>" +
      "</div>"
    )
  }

  function getIdeas(){
    $.getJSON('/api/v1/ideas', function(ideas){
      console.log(ideas);
      $.each(ideas, function(index, idea){
        renderIdea(idea);
      })
    })
  };

  getIdeas()

  $('#fetch-ideas').click(function() {
    getIdeas()
  });

})

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

//
// $("#create-idea").on('click', function(){
//   var ideaParams = {
//     idea: {
//       title: $("#idea-title").val(),
//       body: $("#idea-body").val(),
//       quality: $("#idea-quality").val()
//     }
//   }
//   $.ajax({
//     type: 'POST',
//     url : 'https://idea-box-of-dreams.herokuapp.com/api/v1/ideas.json',
//     data: ideaParams,
//     success: function(newIdea) {
//       renderIdea(newIdea)
//     },
//     error: function(xhr) {
//       console.log(xhr.responseText)
//     }
//   })
// })
