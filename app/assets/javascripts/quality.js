function bindEventListenerToQualityButton(selector, listener) {
  $('#all-ideas').on('click', selector, function(){
    var $idea = $(this).closest(".idea");
    $.getJSON('/api/v1/ideas/' + $idea.attr('data-id') + '.json').then(function(idea) {
      level = listener(idea);
      updateQuality(level, $idea);
    });
  });
}

bindEventListenerToQualityButton('#thumbs-up', newUpQuality);
bindEventListenerToQualityButton('#thumbs-down', newDownQuality);

function updateQuality(level, $idea) {
  var id = $idea.attr('data-id')
  $.ajax({
    type: 'PUT',
    url : '/api/v1/ideas/' + id + '.json',
    data : { idea : { quality: level} },
    success: function(){
      $('.quality' + id).text('Quality: ' + convertQuality(level));
    },
    error: function(xhr) {
      console.log(xhr.responseText)
    }
  })
}

function newUpQuality(idea) {
  var shift = { 0: 1,
                1: 2,
                2: 2 }
  return shift[idea.quality];
};

function newDownQuality(idea) {
  var shift = { 0: 0,
                1: 0,
                2: 1 };
  return shift[idea.quality];
};
