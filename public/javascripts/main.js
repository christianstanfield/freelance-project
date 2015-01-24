$(function () {

  $('#business-examples a').on('click', function (e) {
    e.preventDefault();
    $('#business-examples h3').removeClass('selected');
    $(this).parent().addClass('selected');
  });

  if (window.matchMedia("(max-width: 768px)").matches) {
    $('.carousel-inner').html('');
    $('.carousel-inner').append(
      '<div class="item active">' +
        '<img src="images/slide-sm-1.jpg" alt="slide1">' +
      '</div>'
    );
    $('.carousel-inner').append(
      '<div class="item">' +
        '<img src="images/slide-sm-2.jpg" alt="slide2">' +
      '</div>'
    );
    $('.carousel-inner').append(
      '<div class="item">' +
        '<img src="images/slide-sm-3.jpg" alt="slide3">' +
      '</div>'
    );
    $('.carousel-inner').append(
      '<div class="item">' +
        '<img src="images/slide-sm-4.jpg" alt="slide4">' +
      '</div>'
    );
    $('.carousel-inner').append(
      '<div class="item">' +
        '<img src="images/slide-sm-5.jpg" alt="slide5">' +
      '</div>'
    );
    $('.carousel-inner').append(
      '<div class="item">' +
        '<img src="images/slide-sm-6.jpg" alt="slide6">' +
      '</div>'
    );
    $('.carousel-indicators').append('<li data-target="#carousel" data-slide-to="3"></li>');
    $('.carousel-indicators').append('<li data-target="#carousel" data-slide-to="4" style="margin-left:5px; margin-right:5px"></li>');
    $('.carousel-indicators').append('<li data-target="#carousel" data-slide-to="5"></li>');
  }
});
