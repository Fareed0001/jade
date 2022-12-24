if ($(window).width() < 480) {
  $(".jade-div").removeClass("col-md-3").addClass("col-12");
  $(".class-image-div").css("display", "none");
  $(".forth-icon").removeClass("fa-2x").addClass("fa-lg");
  $(".about-div").removeClass("col-md-4").addClass("col-5");
  $(".connect-div").removeClass("col-md-4").addClass("col-7");
  $(".education-div").removeClass("col-md-8").addClass("col-12");
  $(".competence-div").removeClass("col-md-4").addClass("col-12")
} else {
  $(".class-image-div").css("display", "block")
}
