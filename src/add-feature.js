function waitFor(query, callback) {
  const checkExist = setInterval(function () {
      const element=document.querySelector(query);
      
    if (element) {
      clearInterval(checkExist);
      callback(element);
    }
  }, 200);
}
window.addEventListener("load", (event) => {
  waitFor(".offers__list .offer:nth-of-type(2)", (offer) => {

    // const offer = document.querySelector(".offers__list .offer:nth-of-type(2)");
    const itemCloned = offer
      .querySelector(".offer__features .disclaimerPopup li")
      .cloneNode(true);
    console.log(offer,itemCloned);
      itemCloned.querySelector("span").innerHTML =
      "Fifteen minutes could save you 15% or more on car insurance ";

    offer.querySelector(".offer__features .disclaimerPopup").append(itemCloned);
  });
});
