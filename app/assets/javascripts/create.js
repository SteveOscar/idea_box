function createIdea() {
  $("#create-idea").on('click', function(){
    console.log('create clicked')
    var ideaParams = {
      idea: {
        title: $("#idea-title").val(),
        body: $("#idea-body").val()
      }
    }
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
  })
  clearInputs();
}

function clearInputs() {
  $('input#idea-title').val('New Title');
  $('input#idea-body').val('New Idea');
}
