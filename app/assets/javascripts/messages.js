$(function(){
function buildHTML(message){
    var image = message.image ? '<img src="${message.image}" class="lower-message__image" />' : "";
    var html = `<div class="message">
                 <div class="message__user-name" >
                   ${message.name}
                 </div>
                 <div class="message__date">
                   ${message.date}
                  </div>
                  <div class="message__body">
                  <p class="lower-message__content">
                    ${message.content}
                    ${image}
                  </p>
                </div>`;
    return html
    }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new formData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.form__message').val('');
      $(".form__submit").removeAttr("disabled");
      $('.messages').animate({
        scrollTop: $('.messages')[0].scrollHeight
      })
    })
    .fail(function(){
      alert('同期に失敗しました');
      $(".form__submit").removeAttr("disabled");
    })
  })
});
