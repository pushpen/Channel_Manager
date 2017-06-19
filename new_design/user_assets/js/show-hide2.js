// Hiding the panel content. If JS is inactive, content will be displayed
  $( '.panel-content' ).hide();

  // Preparing the DOM
  
  // -- Update the markup of accordion container 
  $( '.accordion' ).attr({
    role: 'tablist',
    multiselectable: 'true'
   });

  // -- Adding ID, aria-labelled-by, role and aria-labelledby attributes to panel content
  $( '.panel-content' ).attr( 'id', function( IDcount ) { 
    return 'panel-' + IDcount; 
  });
  $( '.panel-content' ).attr( 'aria-labelledby', function( IDcount ) { 
    return 'control-panel-' + IDcount; 
  });
  $( '.panel-content' ).attr( 'aria-hidden' , 'true' );
  // ---- Only for accordion, add role tabpanel
  $( '.accordion .panel-content' ).attr( 'role' , 'tabpanel' );
  
  // -- Wrapping panel title content with a <a href="">
  $( '.panel-title' ).each(function(i){
    
    // ---- Need to identify the target, easy it's the immediate brother
    $target = $(this).next( '.panel-content' )[0].id;
    
    // ---- Creating the link with aria and link it to the panel content
    $link = $( '<a>', {
      'href': '#' + $target,
      'aria-expanded': 'false',
      'aria-controls': $target,
      'id' : 'control-' + $target
    });
    
    // ---- Output the link
    $(this).wrapInner($link);  
    
  });

  // Optional : include an icon. Better in JS because without JS it have non-sense.
  $( '.panel-title a' ).append('<span class="icon">+</span>');

  // Now we can play with it
  $( '.panel-title a' ).click(function() {
    
    if ($(this).attr( 'aria-expanded' ) == 'false'){ //If aria expanded is false then it's not opened and we want it opened !
      
      // -- Only for accordion effect (2 options) : comment or uncomment the one you want
      
      // ---- Option 1 : close only opened panel in the same accordion
      //      search through the current Accordion container for opened panel and close it, remove class and change aria expanded value
      $(this).parents( '.accordion' ).find( '[aria-expanded=true]' ).attr( 'aria-expanded' , false ).removeClass( 'active' ).parent().next( '.panel-content' ).slideUp(200).attr( 'aria-hidden' , 'true');

      // Option 2 : close all opened panels in all accordion container
      //$('.accordion .panel-title > a').attr('aria-expanded', false).removeClass('active').parent().next('.panel-content').slideUp(200);
      
      // Finally we open the panel, set class active for styling purpos on a and aria-expanded to "true"
      $(this).attr( 'aria-expanded' , true ).addClass( 'active' ).parent().next( '.panel-content' ).slideDown(200).attr( 'aria-hidden' , 'false');

    } else { // The current panel is opened and we want to close it

      $(this).attr( 'aria-expanded' , false ).removeClass( 'active' ).parent().next( '.panel-content' ).slideUp(200).attr( 'aria-hidden' , 'true');;

    }
    // No Boing Boing
    return false;
  });