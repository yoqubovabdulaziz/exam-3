const promoRow = document.querySelector(".promo__row");
const newsRow = document.querySelector(".news__row");

const promoProducts = [
  {
    name: "Г/Ц Блинчики с мясом вес, Россия",
    price: "50,50₽",
    disPrice: "44,50₽",
    img: "../assets/images/promo-card1.png",
    discount: "-50%",
  },
  {
    name: "Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...",
    price: "50,50₽",
    disPrice: "44,50₽",
    img: "../assets/images/promo-card2.png",
    discount: "-50%",
  },
  {
    name: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
    price: "50,50₽",
    disPrice: "44,50₽",
    img: "../assets/images/promo-card3.png",
    discount: "-50%",
  },
  {
    name: "Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...",
    price: "50,50₽",
    disPrice: "44,50₽",
    img: "../assets/images/promo-card4.png",
    discount: "-50%",
  },
];

const newsProducts = [
  {
    name: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    price: "",
    disPrice: "44,50₽",
    img: "../assets/images/promo-card5.png",
    discount: "hello",
  },
  {
    name: "Г/Ц Блинчики с мясом вес, Россия",
    price: "50,50₽",
    disPrice: "44,50₽",
    img: "../assets/images/promo-card3.png",
    discount: 1,
  },
  {
    name: "Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...",
    price: "50,50₽",
    disPrice: "44,50₽",
    img: "../assets/images/promo-card4.png",
    discount: 1,
  },
  {
    name: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
    price: "50,50₽",
    disPrice: "44,50₽",
    img: "../assets/images/promo-card2.png",
    discount: 1,
  },
];


function getPromoCard({ name, price, disPrice, img, discount }) {
  const promoCard = document.createElement("div");
  promoCard.className = "promo__card";
  const promoCardFrame = document.createElement("div");
  promoCardFrame.className = "promo__card__img";
  const promoCardImg = document.createElement("img");
  promoCardImg.src = img;
  const promoCardLikeBtn = document.createElement("button");
  promoCardLikeBtn.className = "like-btn";
  const promoCardLikeBtnImg = document.createElement("img");
  promoCardLikeBtnImg.className = "card__heart";
  promoCardLikeBtnImg.src = "../../assets/images/like-btn.svg";
  const promoCardDiscount = document.createElement("span");
  const promoCardContent = document.createElement("div");
  promoCardContent.className = "promo__card__content";
  const promoCardContentTop = document.createElement("div");
  promoCardContentTop.className = "promo__card__top";
  const promoCardContentTopLeft = document.createElement("div");
  promoCardContentTopLeft.className = "promo__card__top__left";
  const promoCardContentTopLeftH1 = document.createElement("h1");
  const promoCardContentTopLefP1 = document.createElement("p");
  const promoCardContentTopRight = document.createElement("div");
  promoCardContentTopRight.className = "promo__card__top__right";
  const promoCardContentTopLeftH2 = document.createElement("h2");
  const promoCardContentTopLefP2 = document.createElement("p");
  const promoCardContentText = document.createElement("h5");
  promoCardContentText.className = "promo__card__text";
  const promoCardRating = document.createElement("img");
  promoCardRating.src = "../../assets/images/rating4.svg";
  const promoCardBtnDiv = document.createElement("div");
  promoCardBtnDiv.className = "promo__card__btn";
  const promoCardBtn = document.createElement("button");
  promoCardBtn.className = "basket__btn";

  const promoCardDiscountText = document.createTextNode(discount);
  const promoCardContentTopLeftH1Text = document.createTextNode(disPrice);
  const promoCardContentTopLefP1Text = document.createTextNode("С картой");
  const promoCardContentTopLeftH2Text = document.createTextNode(price);
  const promoCardContentTopLefP2text = document.createTextNode("Обычная");
  const promoCardContentTextText = document.createTextNode(name);
  const promoCardBtnText = "В корзину";

  promoCardDiscount.appendChild(promoCardDiscountText);
  promoCardContentTopLeftH1.appendChild(promoCardContentTopLeftH1Text);
  promoCardContentTopLefP1.appendChild(promoCardContentTopLefP1Text);
  promoCardContentTopLeftH2.appendChild(promoCardContentTopLeftH2Text);
  promoCardContentTopLefP2.appendChild(promoCardContentTopLefP2text);
  promoCardContentText.appendChild(promoCardContentTextText);
  promoCardBtn.append(promoCardBtnText);

  promoCardBtnDiv.appendChild(promoCardBtn);

  promoCardFrame.append(promoCardImg, promoCardLikeBtn, promoCardDiscount);
  promoCardLikeBtn.append(promoCardLikeBtnImg);

  promoCardContentTopRight.append(
    promoCardContentTopLeftH2,
    promoCardContentTopLefP2
  );

  promoCardContentTopLeft.append(
    promoCardContentTopLeftH1,
    promoCardContentTopLefP1
  );

  promoCardContentTop.append(promoCardContentTopLeft, promoCardContentTopRight);

  promoCardContent.append(
    promoCardContentTop,
    promoCardContentText,
    promoCardRating,
    promoCardBtnDiv
  );

  promoCard.append(promoCardFrame, promoCardContent);

  return promoCard;
}

promoProducts.forEach((el) => {
  promoRow.append(getPromoCard(el));
});

newsProducts.forEach((el) => {
  newsRow.append(getPromoCard(el));
});
