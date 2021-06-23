export default (_, inject) => {
  inject("displayCardOnScroll", isFormSimShowed => {
    let card = document.getElementById("formationCard");
    // let formaJumboHeight = document.getElementById('formaSection').offsetHeight;
    let formaSim = document.getElementById("formationSimilaire");
    let formaBanner = document.getElementById("formaBanner");
    let contactezHeight = document.getElementById("contactez").offsetHeight;
    let detailFormaHeight = document.getElementById("detailFormation")
      .offsetHeight;
    let FooterHeight = document.getElementById("mysysFooter").offsetHeight;
    let verticalPos = window.scrollY; // récupérer la position de scroll en px
    let divHeight =
      detailFormaHeight -
      formaSim.offsetHeight -
      contactezHeight -
      FooterHeight; // récupérer la taille vertical de 'div'
    //console.log('vert pos : ' + verticalPos + ' div height : ' + divHeight);
    if (screen.width >= 1024) {
      // fixer 'card' avec les grandes écrans
      formaBanner.setAttribute("style", "display: none !important");
      if (verticalPos > 100 && verticalPos < divHeight) {
        card.setAttribute(
          "style",
          "position: fixed; top: 0; opacity: 1; z-index: 10;"
        );
        // hide formSimilaire on scroll
        if (!isFormSimShowed) {
          formaSim.setAttribute("style", "opacity: 0");
        }
      } else {
        // laisser 'card' avec sa position d'origine
        card.setAttribute(
          "style",
          "position: absolute; opacity: 1; z-index: 10;"
        );
      }
      if (verticalPos > divHeight) {
        card.setAttribute("style", "opacity: 0; z-index: 0;");
        // *** show formSimilaire on scroll ***
        formaSim.setAttribute("style", "opacity: 1");
        isFormSimShowed = true;
      }
    } else if (screen.width < 1024) {
      // laisser 'card' relative avec le jumbotron (position d'origine relative)
      card.style.position = "relative";
      // banner formation
      if (verticalPos > 700 && verticalPos < divHeight) {
        formaBanner.setAttribute(
          "style",
          "display: block; position: fixed; bottom: 0;"
        );
      } else {
        // laisser 'formaBanner' avec sa position d'origine
        formaBanner.setAttribute(
          "style",
          "display: block; position: relative;"
        );
      }
      if (verticalPos > divHeight) {
        formaBanner.style.display = "none";
      }
      // *** show formSimilaire on scroll ***
      formaSim.setAttribute("style", "opacity: 1");
      isFormSimShowed = true;
    } // screen width
  });
};
