//app.js

  var app = angular.module("foodStore", []);

  app.controller("PanelController", function($scope) {

    $scope.tab=0;

    $scope.products = foods;
    $scope.selectTab = function(setTab) {
    $scope.tab=setTab;
};


    $scope.isSelected = function(checkTab) {
    return $scope.tab === checkTab;
};

  });

  app.controller("StoreController", function($scope){

    $scope.products = foods;
    });

  /*

    this.addReview = function(product){
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };

  });
*/
/*
var Chinese = [{
    name: "Spring Rolls",
    description: "Teleport to the great land of China with a single bite of these savoury spring rolls, loaded with vegeies. Choice of chicken filling is available too!",
    price: 90.81,
    image: "springRoll.jpg"

  }, {
    name: "Daikin Chicken",
    description: "Spicy boneless chicken pieces cooked in oriental sauce served with steaming rice and relsihed with special seasoning.",
    price: 152.10,
    image: "ChineseFood.png"

  }, {
    name: "Vegetarian Dumplings",
    description: "Tender and steamed dumplings prepared with fresh herbs and vegetables to give you authentic taste of the Chinese heritage. ",
    price: 82.70,
    image: "momos.jpg"
  }];


  var foods = [{
    name: "Margherita Pizza",
    description: "The classic Margherita with your choice of crust from thin, thick, stuffed or deep dish with seasoning.",
    price: 110.50,
    image: "Pizza-Margherita.jpg"

  }, {
    name: "Arabiata Pasta",
    description: "Soft and delicious pasta of your choice from Penne, Spahgetti, Fettucini or Primavera in freshly made tangy tomato sauce  and vegetables of your choice.",
    price: 122.90,
    image: "redPasta.png"

  }, {
    name: "Alfredo Pasta",
    description: "Soft and delicious pasta of your choice from Penne, Spahgetti, Fettucini or Primavera in creamy cheese sauce along with vegetables of your choice.",
    price: 110.70,
    image: "whitePasta.jpg"
  }];
*/

  var foods = [{
"italian": [{
    name: "Margherita Pizza",
    description: "The classic Margherita with your choice of crust from thin, thick, stuffed or deep dish with seasoning.",
    price: 110.50,
    image: "pizza.jpg"

  }, {
    name: "Arabiata Pasta",
    description: "Soft and delicious pasta of your choice from Penne, Spahgetti, Fettucini or Primavera in freshly made tangy tomato sauce  and vegetables of your choice.",
    price: 122.90,
    image: "redPasta.png"

  }, {
    name: "Alfredo Pasta",
    description: "Soft and delicious pasta of your choice from Penne, Spahgetti, Fettucini or Primavera in creamy cheese sauce along with vegetables of your choice.",
    price: 110.70,
    image: "whitePasta.jpg"
      }]
},
{
"indian": [{
    name: "Vegetarian Thali",
    description: "The standard veg thali served with two choices of vegetables, tandoori roti, rice, a dessert and some Raita. Choices of salads and pickle are also available.",
    price: 100.94,
    image: "Thali.jpg"

  }, {
    name: "Paneer Tikka",
    description: "Looking for a delightful starter? Here is your go to option that will never disappoint you. Paneer cubes seered and cooked to perfection to enjoy with green chutney.",
    price: 95.90,
    image: "Paneer-Tikka.jpg"

  }, {
    name: "Chhole Bhature",
    description: "The famous Punjabi dish with Channa Masala and soft fried maida bhature that will kill your hunger for good.",
    price: 132.11,
    image: "chole.jpg"
      }]
}
,{
"Chinese": [{
    name: "Spring Rolls",
    description: "Teleport to the great land of China with a single bite of these savoury spring rolls, loaded with vegeies. Choice of chicken filling is available too!",
    price: 90.81,
    image: "springRoll.jpg"

  }, {
    name: "Daikin Chicken",
    description: "Spicy boneless chicken pieces cooked in oriental sauce served with steaming rice and relsihed with special seasoning.",
    price: 152.10,
    image: "ChineseFood.jpg"

  }, {
    name: "Vegetarian Dumplings",
    description: "Tender and steamed dumplings prepared with fresh herbs and vegetables to give you authentic taste of the Chinese heritage. ",
    price: 82.70,
    image: "momos.jpg"
  }]

  }];
