let dataTransform = [
  { symbol: "##", tag: "h5", classes: "txt_bold mt-5", addition: "" }, // section title
  { symbol: "&&", tag: "h6", classes: "mb-1 txt_bold", addition: "" }, // subtitle bold
  {
    symbol: "@@",
    tag: "ul",
    classes: "d-flex flex-row flex-wrap list-unstyled ",
    addition: ""
  }, // ul list container
  {
    symbol: "__",
    tag: "li",
    classes:
      "font-weight-light pl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12",
    addition: "<strong>+ </strong>"
  }, // li list element
  { symbol: "**", tag: "strong", classes: "", addition: "" }, // text bold
  { symbol: "^^", tag: "p", classes: "font-s5", addition: "" }, // italic
  { symbol: "//", tag: "em", classes: "font-s5", addition: "" }, // italic
  { symbol: "~~", tag: "u", classes: "", addition: "" }, // underline
  { symbol: "||", tag: "mark", classes: "bg-dark text_light", addition: "" },
  { symbol: '""', tag: "q", classes: "", addition: "" }
];

//  **** TRANSFORM CONTENT ****
function TransformContent(textToTransform, symbol, tag, classes, addition) {
  try {
    if (textToTransform) {
      return textToTransform
        .split(symbol)
        .map(function(value, index) {
          if (index % 2 == 0) {
            return value;
          } else {
            return `<${tag} class="${classes}">${addition}${value}</${tag}>`;
          }
        })
        .join("");
    } else {
      return null;
    }
  } catch {
    throw new Error("Somthing s wrong");
  }
}

function ConvertStringToHtml(textToConvert, domId) {
  let domGoal = document.getElementById(domId);
  let newDom = document.createElement("article");
  newDom.innerHTML = textToConvert ? textToConvert : "(vide)";
  domGoal.innerHTML = ""; // clean old paragraph
  domGoal.append(newDom); // append new paragraph
}

export default (_, inject) => {
  inject("ConvertDataTextToView", (originText, domId) => {
    let myText = originText;
    // remplacer les symboles du paragraph de formation par des tags HTML
    dataTransform.map(trans => {
      let converted = TransformContent(
        myText,
        trans.symbol,
        trans.tag,
        trans.classes,
        trans.addition
      );
      myText = converted;
      //console.log("domId", domId);
    });
    // convert transformed text to HTML
    ConvertStringToHtml(myText, domId);
  });
};
