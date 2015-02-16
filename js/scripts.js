$(document).ready(function() {
  $('form#places').submit(function(event) {
    event.preventDefault(); //Keeps info on page

    var inputPlaceName = $("input#place-name").val();
    var inputPlaceYear = $("input#place-year").val();
    var inputPlaceCity = $("input#place-city").val();

    //Set the value to our form inputs
    //Then, set value to our class property
    var newPlace = {placeName: inputPlaceName,
                    placeYear: inputPlaceYear,
                    placeCity: inputPlaceCity };

    $("ul#place-list").append("<li><span class='places'>" + newPlace.placeName + ", " + newPlace.placeYear + "</span></li>")
    $("input#place-name").val("");
    $("input#place-year").val("");
    $("input#place-city").val("");

      $(".places").last().click(function(){
        $("#show-places").show();
        $("#show-places h2").text(newPlace.placeName);
        $(".place-name").text(newPlace.placeName);
        $(".place-year").text(newPlace.placeYear);
        $(".place-city").text(newPlace.placeCity);
      });
  });
});
