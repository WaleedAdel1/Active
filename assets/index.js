
 /*start function active */
 $(document).ready(function()
 {
   $("li a").click(function()
   {
     $("a").removeClass("active");
     $(this).addClass("active");
   });
 });
/*End function active */

$( function() {
  $( "#dialogOne" ).dialog({
    modal: true,
    draggable: false,
    autoOpen: false,
    show: {
      effect: "blind",
      duration: 1000
    },
    hide: {
      effect: "explode",
      duration: 1000
    }
  });

  $( "#openerOne" ).on( "click", function() {
    $( "#dialogOne" ).dialog( "open" );
  });
} );

///////////////////////////

$( function() {
  $( "#dialogTwo" ).dialog({
    modal: true,
    draggable: false,
    autoOpen: false,
    show: {
      effect: "blind",
      duration: 1000
    },
    hide: {
      effect: "explode",
      duration: 1000
    }
  });

  $( "#openerTwo" ).on( "click", function() {
    $( "#dialogTwo" ).dialog( "open" );
  });
} );


/////////////////////////

$( function() {
  $( "#dialogThree" ).dialog({
    modal: true,
    draggable: false,
    autoOpen: false,
    show: {
      effect: "blind",
      duration: 1000
    },
    hide: {
      effect: "explode",
      duration: 1000
    }
  });

  $( "#openerThree" ).on( "click", function() {
    $( "#dialogThree" ).dialog( "open" );
  });
} );


/* start function of copy number */
// function myFunction() {
//   var copyText = document.getElementById("myInput");
//   copyText.select();
//   document.execCommand("نسخ");

//   var tooltip = document.getElementById("myTooltip");
//   tooltip.innerHTML = "تم نسخ: " + copyText.value;
// }

// function outFunc() {
//   var tooltip = document.getElementById("myTooltip");
//   tooltip.innerHTML = "نسخ";
// }

/* end function of copy number */



// /* Start Send Email Function */
//  $(document).ready(function () {
//   $('.submit').click(function (event) {
//     event.preventDefault()
//     console.log('clicked once')
//     var myName = $('.name').val()
//     var myNumber = $('.number').val()
//     var myEmail = $('.email').val()
//     var myMessage = $('.message').val()
//     console.log(myName)
//     console.log(myEmail)
//     console.log(myNumber)
//     console.log(myMessage)

//     if(email.length > 5 && email.includes('@') && email.includes('.')) {
//       console.log('Email is valid')
//     } else {
//       event.preventDefault()
//       console.log('Email is not valid')
//     }
//   })
//  })
/* End Send Email Function */


/*tooltip number copy */
// $(document).ready(function(){
//   $('.Call').tooltip();
// });



// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// Start progress bar
// window.onscroll = function() {myFunction()};

// function myFunction() {
//   var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//   var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//   var scrolled = (winScroll / height) * 100;
//   document.getElementById("myBar").style.width = scrolled + "%";
// }

/* Start Button More Image */
var more = document.getElementById('MoreImages');
var Link = document.getElementById('GalleryLink');
var Home = document.getElementById('HomeLink');



$('#MoreImages').click(function ()
{
  alert('ddd');
    $(Link).removeClass("active");
    $('#GalleryLink').addClass("active");
  });
/* End Button More Image */
