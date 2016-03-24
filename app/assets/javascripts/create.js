function createIdea() {
  $("#create-idea").on('click', function(){
    var ideaParams = {
      idea: {
        title: $("#idea-title").val(),
        body: $("#idea-body").val()
      }
    }
    saveToDatabase(ideaParams);
  })
  clearInputs();
}

function saveToDatabase(ideaParams) {
  $.ajax({
    type: 'POST',
    url : '/api/v1/ideas.json',
    data: ideaParams,
    success: function(newIdea) {
      renderIdea(newIdea)
    },
    error: function(xhr) {
      console.log(xhr.responseText)
    }
  })
}
function clearInputs() {
  $('input#idea-title').val('');
  $('input#idea-body').val('');
}
