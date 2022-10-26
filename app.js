

$('#newButton').on('click', function() {
    var dname = $('#dname').val();
  
    var comment = $('#comment').val();
    
    $('#container').prepend(`
      <div class="counterContainer">

        <div id="image">
          <img src="userImg.png" alt="user image" width="60" height="60"/>
        </div>
        <div id="big">
          <div id="header">
            <div id="jDname">
              <div id="jjDname">
                ` + dname + `
              </div>
              <div id="theButtons">
                <div class="editButton">Edit</div>
                <div class="deleteButton">Delete</div>
              </div>
            </div>
          </div>

          <div id="jComment">
            ` + comment + `
          </div>

          <div id="edit">
            <input type="text" id="thisComment" class="noDisplay" value="`+ comment +`">
            <div id="thisButton" class="noDisplay" > submit </div> 
          </div>
        </div>
      </div>
    `);
      
  });

  $('#container').on('click', '.editButton', function() {
    $(this).parent().parent().parent().next().next().children().toggleClass('noDisplay');
    $(this).parent().parent().parent().next().next().children().next().next().toggleClass('noDisplay');
  });

  $('#container').on('click', '.deleteButton', function() {
    
    var elem = document.getElementById(this);
    $(this).parent().parent().parent().parent().parent().remove();
    
  });
  
$('#container').on('click', '#thisButton', function() {
  var thisComment = $(this).parent().children('#thisComment').val();
   $(this).parent().parent().children('#jComment').text(thisComment);
    // console.log(comment);
});