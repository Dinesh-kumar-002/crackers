jQuery(function() { 

    $('.add-to-cart').on('click',function(){
        $(this).hide();
        var prev=$(this).prev();
        prev.show();
        prev.children('input').val(1);
    });


    $('.plus').on('click',function(){
        $(this).prev().val(function(i, val) {
            return parseInt(val) + 1;
        });
    });



    $('.minus').on('click',function(){
        
        var grand_parent = $(this).parents().eq(1);

        if($(this).next().val()==1){
            console.log("minimum 1");
            console.log(grand_parent);
            $(this).parents().eq(0).hide();
            grand_parent.find('.add-to-cart').show();
            console.log(grand_parent.find('.add-to-cart'));
        }

        else{
            grand_parent.find('.add-to-cart').hide();
            $(this).next().val(function(i, val) {
                return parseInt(val) - 1;
            });
            console.log($(this).next().val());
        }

    });





    // tabbing for cart and wishlits 
    $('ul.tabs li').on('click', function(){
        // get the data attribute
        var tab_id = $(this).attr('data-tab');
        // remove the default classes
        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');
        // add new classes on mouse click
        $(this).addClass('current');
        $('#'+tab_id).addClass('current');
      });
    // tabbing for cart and wishlits 


});




const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (()=>{
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (()=>{
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});
signupLink.onclick = (()=>{
  signupBtn.click();
  return false;
});

