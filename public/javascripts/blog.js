define(['editor', 'marked'], function(){
  var editor = new Editor(), title, content;
  editor.render();
  $('#save').click(function(){
    title = $('#title').val();
    content = editor.codemirror.getValue();
    $.post('/blogs/create', {
      title: title,
      content: content
    }, function(data){
      if(data) {
        window.location = '/blogs';
      }
    })
  })
})