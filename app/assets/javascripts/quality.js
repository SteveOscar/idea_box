function newUpQuality(idea) {
  if (idea.quality == 0) {return 1 };
  if (idea.quality == 1) {return 2 };
  if (idea.quality == 2) {return 2 };
};

function newDownQuality(idea) {
  if (idea.quality == 0) {return 0 };
  if (idea.quality == 1) {return 0 };
  if (idea.quality == 2) {return 1 };
};


$('#all-ideas').delegate('#thumbs-up', 'click', function(){
  var $idea = $(this).closest(".idea");
  $.getJSON('/api/v1/ideas/' + $idea.attr('data-id') + '.json').done(function(idea) {
    console.log('quality: ' + idea.quality)
    level = newUpQuality(idea);
    updateQuality(level, $idea);
  })
})

$('#all-ideas').delegate('#thumbs-down', 'click', function(){
  var $idea = $(this).closest(".idea");
  $.getJSON('/api/v1/ideas/' + $idea.attr('data-id') + '.json').done(function(idea) {
    console.log('quality: ' + idea.quality)
    level = newDownQuality(idea);
    updateQuality(level, $idea);
  })
})

function updateQuality(level, $idea) {
  $.ajax({
    type: 'PUT',
    url : '/api/v1/ideas/' + $idea.attr('data-id') + '.json',
    data : { idea : {id: $idea.id,
                     quality: level}
            },
    success: function(){
      $idea.remove()
    },
    error: function(xhr) {
      console.log(xhr.responseText)
    }
  })
}
