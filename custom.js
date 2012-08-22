
(function ($) {
  //$("#colourpicker").farbtastic("#edit-colourpicker");
  $("#colourpicker-heading").farbtastic("#edit-heading-colourpicker");
  

  var f = $.farbtastic("#colourpicker-body");
  $("#edit-secondary-colour-colourpicker")
    .each(function () { 
      f.linkTo(this); 
     })
    .focus(function() { 
      f.linkTo(this); 
    });

  $(".example-link-symbol").html($("#edit-breadcrumb-symbol").val());
  $(".breadcrumb-prefix-text").html($("#edit-breadcrumb-prefix").val());
    var h_colour = $("#edit-heading-colourpicker").val();
    $(".style-preview h1").css("color", h_colour);
    $(".style-preview h2").css("color", h_colour);
    $(".style-preview h3").css("color", h_colour);
    var p_colour = $("#edit-secondary-colour-colourpicker").val();
    $(".style-preview p").css("color", p_colour);


    $("#edit-breadcrumb-symbol").keyup(update);
    $("#edit-breadcrumb-prefix").keyup(update);
    $("#edit-clf-font").change(
      function () {
        var heading_font = $("#edit-clf-font").val();
        $(".style-preview h1").css("font-family", heading_font);
        $(".style-preview h2").css("font-family", heading_font);
        $(".style-preview h3").css("font-family", heading_font);
      }
    );
    $("#edit-clf-body-font").change(
      function () {
        var body_font = $("#edit-clf-body-font").val();
        $(".style-preview p").css("font-family", body_font);
      }
    );
    $("#edit-heading-colourpicker").change(
      function () {
        var heading_colour = $("#edit-heading-colourpicker").val();
        $(".style-preview h1").css("color", heading_colour);
        $(".style-preview h2").css("color", heading_colour);
        $(".style-preview h3").css("color", heading_colour);
      }
    );
    $("#edit-secondary-colour-colourpicker").change(function () {
        alert();
        var body_colour = $("#edit-secondary-colour-colourpicker").val();
        $(".style-preview p").css("color", body_colour);
    });
	
    function update(){				
      var title = $("#edit-breadcrumb-symbol").val();
      var prefix_text = $("#edit-breadcrumb-prefix").val();

      $(".example-link-symbol").html(title);
      $(".breadcrumb-prefix-text").html(prefix_text);
    }
}) (jQuery);