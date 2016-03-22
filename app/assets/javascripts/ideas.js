$(document).ready(function(){
  getIdeas();
  createIdea();
  deleteIdea();
  searchIdeas();
})

function renderIdea(idea){
  $('#all-ideas').prepend(
    "<div class='idea' data-id='" +
    idea.id +
    "'><h6>Published on: " +
    idea.created_at +
    "</h6><p class='title"+ idea.id + "'>Title: " +
    idea.title +
    "</p>" +
    "</h6><p class='body"+ idea.id + "'>Body: " +
    idea.body +
    "</p>" +
    "</h6><p class='quality"+ idea.id + "'>Quality: " +
    convertQuality(idea.quality) +
    "</p>" +
    "<input id='update-title' class='form-control' value='(New title)' type='text' id='idea-title'>" +
    "<input id='update-body' class='form-control' value='(New Body)' type='text' id='idea-title'>" +
    "<button id='delete-idea' name='button-fetch' class='btn btn-default btn-xs'>Delete</button>" +
    "<button id='thumbs-up' name='button-fetch' class='btn btn-default btn-xs'>Thumbs Up</button>" +
    "<button id='thumbs-down' name='button-fetch' class='btn btn-default btn-xs'>Thumbs Down</button>" +
    "<button id='edit"+ idea.id + "' name='button-fetch' class='edit btn btn-default btn-xs'>Edit</button>" +
    "<button id='save"+ idea.id + "' class='red save' name='button-fetch' class='btn btn-default btn-xs'>Save</button>" +
    "</div>"
  )
}

function convertQuality(quality) {
  if (quality == 0) {return 'Swill' };
  if (quality == 1) {return 'Plausible' };
  if (quality == 2) {return 'Genius' };
}

function getIdeas(){
  $.getJSON('/api/v1/ideas', function(ideas){
    $.each(ideas, function(index, idea){
      renderIdea(idea);
    })
  })
};
