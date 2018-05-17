// Example starter JavaScript for disabling form submissions if there are invalid fields
(function(){
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }else{
          console.log("running");
          event.preventDefault();

          //updating values in modal
          $('#tname').html($('#InputName').val());
          $('#troll').html($('#InputRollNumber').val());
          $('#twebmail').html($('#InputWebmail').val());
          $('#thostel').html($('#InputHostel').val());
          $('#troom').html($('#InputRoom').val());
          $('#tmobile').html($('#InputMobile').val());
          $('#tstay').html($('#InputTo').val().toString() + " to " +$('#InputFrom').val().toString());

          //disable clicking outside Modal
          $('#successModal').modal({
            backdrop: 'static',
            keyboard: false
          })

          //show modal
          $('#successModal').modal('show');
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

function refresh(){
  $("form")[0].reset();
}
