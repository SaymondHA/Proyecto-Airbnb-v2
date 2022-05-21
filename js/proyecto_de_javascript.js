var submit_button = document.getElementById("send")

submit_button.onclick = function(event){
  event.preventDefault();
  var email = document.getElementById("email_input").value;
  var name = document.getElementById("name_input").value;
  var text= document.getElementById("message").value;
  Swal.fire({
    title: '<strong> your information is</strong>',
    icon: 'info',
    html:
      'inserted email value is : '+email+' inserted name value is '+name+' inserted information is '+text,
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Great!',
    confirmButtonAriaLabel: 'Thumbs up, great!',
    cancelButtonText:
      '<i class="fa fa-thumbs-down"></i>',
    cancelButtonAriaLabel: 'Thumbs down'
  })
}
