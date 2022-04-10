$(document).ready(function() {
$('#all').change(function() {
    var checkboxes = $(this).closest('form').find(':checkbox');
    checkboxes.prop('all', $(this).is(':checked'));
});

$('.showPassword').on('change',function(){
    var isChecked = $(this).prop('checked');
		if (isChecked) {
           $('.my-password').attr('type','text');
          } else {
            $('.my-password').attr('type','Password');
          }
        });
   /* $('#ifYes').change(function(){
      alert ( $(this).val() ) 
      
      });*/
$('#name').blur(function () {
        if ($.trim(this.value) == "") {
          $('#submitBtn').attr("disabled", true);
        }
      else {
            $('#submitBtn').removeAttr("disabled");
      }
    });
	$('#interests').click(function() {
      checked = $("input[type=checkbox]:checked").length;

      if(!checked) {
        alert("You must check at least one checkbox.");
        return false;
      }

    });$('#radio').click(function() {
      checked = $("input[type=radio]:checked").length;

      if(!checked) {
        alert("You must check at least one checkbox.");
        return false;
      }

    });
});

(function () {
  var password = document.getElementById('password');
 
  function setErrorHighlighter(e) {
    var target = e.target || e.srcElement;             
    if (target.value.length < 8) {                     
      target.className = 'fail';                      
    } else {                                          
      target.className = 'pass';                     
    }
  }

  function removeErrorHighlighter(e) {
    var target = e.target || e.srcElement;             
    if (target.className === 'fail') {                  
      target.className = '';
    }
  }  
  addEvent(password, 'focus', removeErrorHighlighter); 
  addEvent(password, 'blur', setErrorHighlighter);
}());