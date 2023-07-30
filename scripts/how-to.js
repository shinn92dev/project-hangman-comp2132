const $howToBtn = $(".how-to-btn");
const $howToSection = $("#how-to-section");

$howToSection.hide();
$howToBtn.click(function () {
    $howToSection.slideToggle(250);
});
