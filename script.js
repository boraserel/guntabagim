$(document).ready(function() {
  var moveSwitch = false;
      $("#en-azalt").click(function() {
        $('.yemek-resim').each(function() {
          if ($(this).data('selected') === "true") {
            var selectedImage = $(this);
            var currentWidth = selectedImage.width();
            selectedImage.width(currentWidth - 10); // 10 piksel azalt
          }
      });
       
    });

    // En'i arttır butonuna tıklanınca
    $("#en-arttir").click(function() {
      $('.yemek-resim').each(function() {
        if ($(this).data('selected') === "true") {
          var selectedImage = $(this);
          var currentWidth = selectedImage.width();
          selectedImage.width(currentWidth + 10); // 10 piksel azalt
        }
    });
    });
    // Yemekler listesinden yemek ismine tıklanınca
    $('.list-group-item').on('click', function(event) {
      event.preventDefault();
  
      var yemek = $(this).data('yemek');
      var img = document.createElement("img");
      img.src = "images/" + yemek + ".png";
      img.alt = yemek;
      img.className = "yemek-resim";
      img.dataset.selected = false;
      img.style.left = '250px'; // Tabak ortasına yerleştir
      img.style.top = '250px'; // Tabak ortasına yerleştir
      $('#yemekler').append(img);
    });
  
    $(document).on('mousemove', function(event) {
      console.log('mousemove');
      $('.yemek-resim').each(function() {
        if ($(this).data('selected') === "true" && moveSwitch) {
            var x = event.pageX - ($(this).width() / 2);
            var y = event.pageY - ($(this).height() / 2);
            $(this).css({
                'left': x-412 + 'px',
                'top': y-100 + 'px'
            });
        }
    });

    });
  
    $('#yemekler').on('click', '.yemek-resim', function(event) {
      event.stopPropagation(); // İçeriğe tıklamada yukarıya tıklamayı tetikleme
  

      if ($(this).data('selected') == "true") {
        $(this).css('border', 'none');
        $(this).data('selected', "false");
        $('#selected-item-text').text("");
        moveSwitch = false;
        $("#move").addClass('btn-danger')
        $("#move").removeClass('btn-success')
    } else {
        $(this).css('border', '1px solid green');
        $(this).data('selected', "true");
        $('#selected-item-text').html($(this).attr('alt'));
    }
    });
    
    $("#move").click(function() {
      if(moveSwitch == false){
        moveSwitch = true;
        $("#move").removeClass('btn-danger')
        $("#move").addClass('btn-success')
      }
      else{
        moveSwitch = false;
        $("#move").addClass('btn-danger')
        $("#move").removeClass('btn-success')
      }
    });
  });