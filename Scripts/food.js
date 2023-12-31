// let add_cart = JSON.parse(localStorage.getItem("cart_food_data")) || [];
const products = [
  {
    id: 9,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/L-8000240.jpg?ver=22.01",
    name: "The Allu Arjun Combo",
    type: "Non veg",
    price: 399.05,
    description:
      "Enjoy 1pc Hot & Crispy Chicken, 1pc Smoky Red, Reg Popcorn, Spicy Mix Fries & a Dip",
    cate: "hotDeals",
  },
  {
    id: 10,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/L-8000078.jpg?ver=22.01",
    name: "5+5 Bucket Offer",
    type: "Non veg",
    price: 619.05,
    description:
      "Save 15% on special combo of 5pc Hot & Crispy Chicken + 5 Peri Peri Strips",
    cate: "hotDeals",
  },
  {
    id: 11,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/L-8000169.jpg?ver=22.01",
    name: "Peri Peri 10 Leg piece + 4 dips",
    type: "Non veg",
    price: 868.57,
    description:
      "Save 22% on this Leg Piece Bucket with 10 KFC Peri Peri Leg Piece with 4 dips",
    cate: "hotDeals",
  },
  {
    id: 12,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/L-8000155.jpg?ver=22.01",
    name: "Mega Feast",
    type: "Non veg",
    price: 635.24,
    description:
      "Relish a big size feast with KFC favorites & new launches- 2 pc H&C,2 pc Smoky Grilled, 1 buttered bun, 1gravy, med.fries & pepsi",
    cate: "hotDeals",
  },
  {
    id: 13,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/L-8000128.jpg?ver=22.01",
    name: "Big 12 - Chicken Bucket",
    type: "Non veg",
    price: 719.05,
    description: "6pc Hot & Crispy Chicken + 6 Wings + 2 Dips",
    cate: "hotDeals",
  },
  {
    id: 14,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/L-8000185.jpg?ver=22.01",
    name: "Mingles Meal",
    type: "Non veg",
    price: 488.57,
    description:
      "21% off on-4 Wings + 2 Peri Peri Strips + Reg Popcorn + Med Fries + 2 Reg Pepsi",
    cate: "hotDeals",
  },
  {
    id: 15,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/L-403124.jpg?ver=22.01",
    name: "4pc Hot & Crispy with 2 Pepsi",
    type: "Non veg",
    price: 404.76,
    description:
      "4 pieces of crispy, juicy chicken in a bucket served with 2 Pepsi",
    cate: "hotDeals",
  },

  {
    id: 16,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/L-8000168.jpg?ver=22.01",
    name: "Peri Peri 5 Leg piece + 2 Dips + 2 Pepsi",
    type: "Non veg",
    price: 559.05,
    description:
      "Your favorite chicken leg pieces in a bucket. 5 pieces served with 2 dips",
    cate: "chickenBucket",
  },
  {
    id: 17,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/L-8000167.jpg?ver=22.01",
    name: "Peri Peri 5 Leg piece + 2 Dips",
    type: "Non veg",
    price: 459.05,
    description: "Save 20% on this combo",
    cate: "chickenBucket",
  },
  {
    id: 18,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/L-403124.jpg?ver=22.01",
    name: "4pc Hot & Crispy with 2 Pepsi",
    type: "Non veg",
    price: 404.76,
    description:
      "4 pieces of crispy, juicy chicken in a bucket served with 2 Pepsi",
    cate: "chickenBucket",
  },
  {
    id: 19,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/L-8000185.jpg?ver=22.01",
    name: "Mingles Meal",
    type: "Non veg",
    price: 488.57,
    description:
      "Save 21% on- 4 Wings + 2 Chicken Strips + Reg Popcorn + Med Fries + 2",
    cate: "chickenBucket",
  },
  {
    id: 20,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/L-100015.jpg?ver=22.01",
    name: "Hot & Crispy Chicken -8pc",
    type: "Non veg",
    price: 679.05,
    description: "8 pc Hot & Cripsy",
    cate: "chickenBucket",
  },
  {
    id: 21,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/L-8000178.jpg?ver=22.01",
    name: "Ultimate Savings Bucket",
    type: "Non veg",
    price: 648.57,
    description:
      "Save 40% on USB -KFC variety bucket now with Peri Peri Strips-Grab Now!",
    cate: "chickenBucket",
  },
  {
    id: 22,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/L-120181.jpg?ver=22.01",
    name: "Big 8 with 2 Pepsi",
    type: "Non veg",
    price: 699.05,
    description:
      "Save big with this bucket that has 4 pieces of Hot & Crispy and 4 pieces of...",
    cate: "chickenBucket",
  },
  {
    id: 28,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/L-8000238.jpg?ver=22.01",
    name: "Chicken Popcorn Maggi Bowl",
    type: "Non veg",
    price: 159.05,
    description:
      "Two flavourful favourites served together- Chicken Popcorn with Maggi",
    cate: "hotLaunches",
  },
  {
    id: 29,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/L-8000239.jpg?ver=22.01",
    name: "Veg Patty Maggi Bowl",
    type: "Veg",
    price: 128.57,
    description: "Maggi served with delicious Veg Patty",
    cate: "hotLaunches",
  },
  {
    id: 30,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/L-8000144.jpg?ver=22.01",
    name: "Spicy Mix Fries -Large",
    type: "Veg",
    price: 119.05,
    description:
      "Your KFC Medium Fries can now be seasoned with lemony tang & chili spice...",
    cate: "hotLaunches",
  },
  {
    id: 31,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000145.jpg?ver=22.01",
    name: "Spicy Mix Fries -Medium",
    type: "Veg",
    price: 114.29,
    description:
      "Your KFC Large Fries can now be seasoned with lemony tang & chili spice in this combo",
    cate: "hotLaunches",
  },
  {
    id: 32,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000195.jpg?ver=22.01",
    name: "Peri Peri 6pc Chicken Strips",
    type: "Non veg",
    price: 238.1,
    description:
      "Grab the Spicy & Sizzling Peri Peri 6 pc. Chicken Boneless Strips snack!",
    cate: "hotLaunches",
  },
  {
    id: 33,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000148.jpg?ver=22.01",
    name: "Biryani Rice",
    type: "Veg",
    price: 128.57,
    description:
      "Flavorful Aromatic rice to pair with your favorite KFC favorites",
    cate: "hotLaunches",
  },
  {
    id: 34,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000223.jpg?ver=22.01",
    name: "Chocolate Lava Cake",
    type: "Veg",
    price: 99.05,
    description:
      "Soft Chocolate cake with a gooey center- perfect chocolaty end to every meal",
    cate: "hotLaunches",
  },

  {
    id: 35,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000042.jpg?ver=22.01",
    name: "Popcorn Biryani Box",
    type: "Non veg",
    price: 279.05,
    description:
      "Value Meal with flavorful Popcorn Biryani Bucket & spicy dip, 2 piece Hot Wings and Pepsi",
    cate: "boxMeals",
  },
  {
    id: 36,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000043.jpg?ver=22.01",
    name: "Veg Biryani Box",
    type: "Veg",
    price: 248.57,
    description:
      "Value Meal with flavorful Veg Biryani Bucket & spicy dip, veg patty and Pepsi",
    cate: "boxMeals",
  },
  {
    id: 37,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-404059.jpg?ver=22.01",
    name: "Classic Zinger Box Meal",
    type: "Non veg",
    price: 288.57,
    description:
      "Value Meal with Classic Zinger, 2 piece Hot Wings, Fries and Pepsi",
    cate: "boxMeals",
  },
  {
    id: 38,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000189.jpg?ver=22.01",
    name: "All Chicken Box Meal",
    type: "Non veg",
    price: 179.05,
    description: "1pc Hot & Crispy + 2 Peri Peri Strips + Reg Pepsi",
    cate: "boxMeals",
  },
  {
    id: 39,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-404060.jpg?ver=22.01",
    name: "Tandoori Zinger Box Meal",
    type: "Non veg",
    price: 299.05,
    description:
      "Value Meal with Tandoori Zinger, 2 piece Hot Wings, Fries and Pepsi",
    cate: "boxMeals",
  },

  {
    id: 40,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-404085.jpg?ver=22.01",
    name: "Classic Veg Krisper",
    type: "Veg",
    price: 79.05,
    description: "Value burger with a veg patty, lettuce and mayo",
    cate: "burgers",
  },
  {
    id: 41,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-404086.jpg?ver=22.01",
    name: "Spicy Veg Krisper",
    type: "Veg",
    price: 79.05,
    description: "Value burger with a veg patty, lettuce and spicy sauce",
    cate: "burgers",
  },
  {
    id: 42,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-404087.jpg?ver=22.01",
    name: "Classic Chicken Krisper",
    type: "Non veg",
    price: 99.05,
    description: "Value burger with a chicken fillet, lettuce and mayo",
    cate: "burgers",
  },

  {
    id: 43,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-404088.jpg?ver=22.01",
    name: "Spicy Chicken Krisper",
    type: "Non veg",
    price: 99.05,
    description: "Value burger with a chicken fillet, lettuce and spicy sauce",
    cate: "burgers",
  },
  {
    id: 44,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-404089D.jpg?ver=22.01",
    name: "Classic Veg Krisper, Fries & Pepsi combo",
    type: "Veg",
    price: 178.1,
    description:
      "Value burger with a veg patty, lettuce and mayo served with fries & Pepsi",
    cate: "burgers",
  },
  {
    id: 45,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-404090D.jpg?ver=22.01",
    name: "Spicy Veg Krisper, Fries & Pepsi combo",
    type: "Veg",
    price: 167.62,
    description:
      "Value burger with a veg patty, lettuce and spicy sauce served with fries & Pepsi",
    cate: "burgers",
  },
  {
    id: 46,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-404140.jpg?ver=22.01",
    name: "Classic Chicken Krisper, Popcorn & Pepsi Combo",
    type: "Non veg",
    price: 228.57,
    description:
      "Value burger with a chicken fillet, lettuce and mayo served with Popcorn & Pepsi",
    cate: "burgers",
  },
  {
    id: 47,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-404141.jpg?ver=22.01",
    name: "Spicy Chicken Krisper, Popcorn & Pepsi Combo",
    type: "Non veg",
    price: 228.57,
    description:
      "Value burger with a chicken fillet, lettuce and spicy sauce served with Popcorn & Pepsi",
    cate: "burgers",
  },
  {
    id: 68,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-402912.jpg?ver=22.01",
    name: "Chicken Popcorn & Fries bucket",
    type: "Non veg",
    price: 248.57,
    description: "Large Popcorn + Med Fries",
    cate: "snack",
  },
  {
    id: 69,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-100007.jpg?ver=22.01",
    name: "Hot & Crispy Chicken-1pc",
    type: "Non veg",
    price: 99.05,
    description: "1 pc Hot & Crispy",
    cate: "snack",
  },
  {
    id: 70,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000114.jpg?ver=22.01",
    name: "Dynamite Spicy Mayo Sauce Bottle",
    type: "Veg",
    price: 189.52,
    description: "Spicy dynamite mayo -one of our signature sauce in a bottle",
    cate: "snack",
  },
  {
    id: 71,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-150001.jpg?ver=22.01",
    name: "Regular Fries",
    type: "Veg",
    price: 79.05,
    description: "Regular Fries",
    cate: "snack",
  },
  {
    id: 72,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-120004.jpg?ver=22.01",
    name: "Boneless Chicken strips -3pc",
    type: "Non veg",
    price: 155.24,
    description: "Tender, juicy, signature boneless chicken strips",
    cate: "snack",
  },
  {
    id: 73,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-120146.jpg?ver=22.01",
    name: "Veg Patty -2 pc",
    type: "Veg",
    price: 151.43,
    description: "Delicious, crispy, veg add-on",
    cate: "snack",
  },
  {
    id: 74,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000115.jpg?ver=22.01",
    name: "Nashville Hot Pepper Dip",
    type: "Veg",
    price: 28.57,
    description: "Nashville Hot Pepper Dip",
    cate: "snack",
  },
  {
    id: 75,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-404037.jpg?ver=22.01",
    name: "Tandoori Masala Dip",
    type: "Veg",
    price: 28.57,
    description: "Tandoori masala dip",
    cate: "snack",
  },
  {
    id: 76,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-120006.jpg?ver=22.01",
    name: "Boneless Chicken strips -6pc",
    type: "Non veg",
    price: 228.57,
    description: "Tender, juicy, signature boneless chicken strips",
    cate: "snack",
  },

  {
    id: 77,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000223.jpg?ver=22.01",
    name: "Chocolate Lava Cake",
    type: "Veg",
    price: 99.05,
    description:
      "Soft Chocolate cake with a gooey center- perfect chocolaty end to every meal",
    cate: "beveragesAndDesserts",
  },
  {
    id: 78,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-160065.jpg?ver=22.01",
    name: "Chocolate Mud Pie",
    type: "Veg",
    price: 119.05,
    description:
      "Chocolate lovers unite! Say hello to our delicous, new, creamy chocolate & cake dessert- a must try!",
    cate: "beveragesAndDesserts",
  },
  {
    id: 79,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-160067.jpg?ver=22.01",
    name: "Coffee Mousse Cake",
    type: "Veg",
    price: 119.05,
    description:
      "Coffee, chocolate, cake?what's not to love? Enjoy our delicious, new dessert for those coffee-licious temptations!",
    cate: "beveragesAndDesserts",
  },
  {
    id: 80,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-200011.jpg?ver=22.01",
    name: "Pepsi Large",
    type: "Veg",
    price: 99.05,
    description: "Refereshing beverage",
    cate: "beveragesAndDesserts",
  },
  {
    id: 81,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-200015.jpg?ver=22.01",
    name: "Mirinda Large",
    type: "Veg",
    price: 99.05,
    description: "Refereshing beverage",
    cate: "beveragesAndDesserts",
  },
  {
    id: 48,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-110212.jpg?ver=22.01",
    name: "Zinger, Wings and Pepsi combo",
    type: "Non veg",
    price: 402.86,
    description: "Relish the Classic Zinger with 4 pieces Hot Wings and Pepsi",
    cate: "burgers",
  },
  {
    id: 49,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-404007.jpg?ver=22.01",
    name: "Zinger & Popcorn combo",
    type: "Non veg",
    price: 378.1,
    description: "Relish the Classic Zinger with a large popcorn",
    cate: "burgers",
  },
  {
    id: 50,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-404010.jpg?ver=22.01",
    name: "Zinger, Fries & Pepsi combo",
    type: "Non veg",
    price: 298.1,
    description: "The Classic Zinger meal served with fries and Pepsi",
    cate: "burgers",
  },
  {
    id: 51,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-110003.jpg?ver=22.01",
    name: "Veg Zinger",
    type: "Veg",
    price: 168.57,
    description:
      "Signature veg burger with crispy patties, veggies & a tangy sauce",
    cate: "burgers",
  },
  {
    id: 52,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-404028.jpg?ver=22.01",
    name: "Tandoori Zinger & Popcorn combo",
    type: "Non veg",
    price: 387.62,
    description: "Relish the Tandoori Zinger with large Popcorn",
    cate: "burgers",
  },
  {
    id: 53,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-110201.jpg?ver=22.01",
    name: "Chicken Zinger Burger - Classic",
    type: "Non veg",
    price: 179.05,
    description:
      "Signature chicken burger made with a crunchy chicken fillet, veggies & a delicious mayo sauce",
    cate: "burgers",
  },
  {
    id: 54,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-404029.jpg?ver=22.01",
    name: "Tandoori Zinger, Fries & Pepsi combo",
    type: "Non veg",
    price: 307.62,
    description: "The Tandoori Zinger meal served with fries and Pepsi",
    cate: "burgers",
  },
  {
    id: 23,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/L-120180.jpg?ver=22.01",
    name: "Big 8 - Chicken Bucket",
    type: "Non veg",
    price: 579.05,
    description:
      "Save upto 31% with this bucket that has 4 pieces of Hot & Crispy and 4...",
    cate: "chickenBucket",
  },
  {
    id: 24,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/L-8000172.jpg?ver=22.01",
    name: "Dips Bucket",
    type: "Non veg",
    price: 389.52,
    description: "8 Peri Peri Strips with 2 Dips!",
    cate: "chickenBucket",
  },
  {
    id: 25,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/L-404002.jpg?ver=22.01",
    name: "5pc Smoky Red with 2 Pepsi",
    type: "Non veg",
    price: 439.05,
    description: "5 pieces of Colonel's signature Smoky Red with 2 Pepsi",
    cate: "chickenBucket",
  },
  {
    id: 26,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/L-120187.jpg?ver=22.01",
    name: "Grilled Chicken - Smoky Red-5 pc",
    type: "Non veg",
    price: 428.57,
    description: "5 pieces of Colonel's signature Smoky Red",
    cate: "chickenBucket",
  },
  {
    id: 27,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/lg/L-100010.jpg?ver=22.01",
    name: "Hot & Crispy Chicken-4pc",
    type: "Non veg",
    price: 399.05,
    description:
      "Ask for four more! 4 pieces of Colonel's signature Hot & Crispy...",
    cate: "chickenBucket",
  },
  {
    id: 55,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-404015.jpg?ver=22.01",
    name: "Veg Zinger, Fries & Pepsi combo",
    type: "Veg",
    price: 268.57,
    description: "The Veg Zinger meal served with fries and Pepsi",
    cate: "burgers",
  },
  {
    id: 56,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-404027.jpg?ver=22.01",
    name: "Chicken Zinger Burger - Tandoori",
    type: "Non veg",
    price: 188.57,
    description: "Chicken zinger with a delicious tandoori sauce",
    cate: "burgers",
  },

  {
    id: 57,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000038.jpg?ver=22.01",
    name: "Classic Chicken Biryani Bucket + Reg Pepsi",
    type: "Non veg",
    price: 248.57,
    description:
      "New flavorful Biryani rice with Hot & Crispy chicken served with a spicy gravy & Pepsi",
    cate: "biryaniBuckets",
  },
  {
    id: 58,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000039.jpg?ver=22.01",
    name: "Popcorn Chicken Biryani Bucket + Reg Pepsi",
    type: "Non veg",
    price: 248.57,
    description:
      "New flavorful Biryani rice with Popcorn chicken served with a spicy gravy & Pepsi",
    cate: "biryaniBuckets",
  },
  {
    id: 59,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000040.jpg?ver=22.01",
    name: "Grilled Chicken Biryani Bucket + Reg Pepsi",
    type: "Non veg",
    price: 248.57,
    description:
      "New flavorful Biryani rice with Grilled chicken served with a spicy gravy & Pepsi",
    cate: "biryaniBuckets",
  },
  {
    id: 60,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000037.jpg?ver=22.01",
    name: "Veg Biryani Bucket + Reg Pepsi",
    type: "Veg",
    price: 219.05,
    description:
      "New flavorful Biryani rice with Veg Patty served with a spicy gravy & Pepsi",
    cate: "biryaniBuckets",
  },
  {
    id: 61,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000024.jpg?ver=22.01",
    name: "Classic Chicken Biryani Bucket",
    type: "Non veg",
    price: 208.57,
    description:
      "New flavorful Biryani rice with Hot & Crispy chicken served with a spicy gravy",
    cate: "biryaniBuckets",
  },
  {
    id: 62,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000025.jpg?ver=22.01",
    name: "Popcorn Chicken Biryani Bucket",
    type: "Non veg",
    price: 208.57,
    description:
      "New flavorful Biryani rice with Popcorn chicken served with a spicy gravy",
    cate: "biryaniBuckets",
  },
  {
    id: 63,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000026.jpg?ver=22.01",
    name: "Smoky Grilled Chicken Biryani Bucket",
    type: "Non veg",
    price: 208.57,
    description:
      "New flavorful Biryani rice with Grilled chicken served with a spicy gravy",
    cate: "biryaniBuckets",
  },
  {
    id: 64,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000027.jpg?ver=22.01",
    name: "Veg Biryani Bucket",
    type: "Veg",
    price: 168.57,
    description:
      "New flavorful Biryani rice with Veg Patty served with a spicy gravy",
    cate: "biryaniBuckets",
  },
  {
    id: 65,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000028.jpg?ver=22.01",
    name: "Classic Chicken Biryani Bucket-Large",
    type: "Non veg",
    price: 428.57,
    description:
      "New flavorful Biryani rice with 2 Hot & Crispy chicken pieces served with a spicy gravy",
    cate: "biryaniBuckets",
  },
  {
    id: 66,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000029.jpg?ver=22.01",
    name: "Popcorn Chicken Biryani Bucket -Large",
    type: "Non veg",
    price: 428.57,
    description:
      "New flavorful Biryani rice with Popcorn chicken served with a spicy gravy",
    cate: "biryaniBuckets",
  },

  {
    id: 67,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000211.jpg?ver=22.01",
    name: "Solo Feast",
    type: "Non veg",
    price: 328.57,
    description:
      "Relish a feast of KFC favorites packed with 1 H&C, 2 Strips,2 Hot Wings, Buttered Bun,spicy signature nashville dip & 1 regular pepsi",
    cate: "snack",
  },

  {
    id: 82,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-200013.jpg?ver=22.01",
    name: "7UP Large",
    type: "Veg",
    price: 99.05,
    description: "Refereshing beverage",
    cate: "beveragesAndDesserts",
  },
  {
    id: 83,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-210002.jpg?ver=22.01",
    name: "Mojito",
    type: "Veg",
    price: 79.05,
    description: "Our signature Krusher",
    cate: "beveragesAndDesserts",
  },
  {
    id: 84,
    quantity: 1,
    images:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-210044.jpg?ver=22.01",
    name: "7up Krush Lime",
    type: "Veg",
    price: 48.57,
    description: "Our signature Krusher",
    cate: "beveragesAndDesserts",
  },
];
// let cartData = JSON.parse(localStorage.getItem("cart_food_data"));
const totalcartitems = document.querySelector("#total-cart-item");

//showing total item  in nava
const cartDataJSON = localStorage.getItem("cart_food_data");
const cartData = cartDataJSON ? JSON.parse(cartDataJSON) : [];

if (cartData.length === 0) {
  totalcartitems.innerHTML = 0;
} else {
  totalcartitems.innerHTML = cartData.length;
}

let lowtohigh = document.querySelector("#lowtohigh");
let hightolow = document.querySelector("#hightolow");
let biryani = document.getElementById("biryani");
let hotDeals = document.getElementById("hotDeals");
let burger = document.getElementById("burger");
let chicken = document.getElementById("chicken");
let fries = document.getElementById("fries");
let chococake = document.getElementById("chococake");
let drinks = document.getElementById("drinks");
let veg = document.getElementById("veg");
let nonveg = document.getElementById("nonveg");
// --
const handleredtolog = document.querySelector("#handleredtolog");
const currentuser = sessionStorage.getItem("cur_user_email");
const user_name = document.querySelector("#user_name");

let sortname = currentuser.replace(/\@gmail\.com$/, "");

user_name.innerHTML = sortname;

handleredtolog.addEventListener("click", function () {
  localStorage.removeItem("cart_food_data");
  sessionStorage.removeItem("cur_user_email");
});
// --

createGrid(products);
function createGrid(products) {
  const grid = document.querySelector(".food-grid");
  grid.innerHTML = "";
  products?.forEach((product) => {
    const item = document.createElement("div");
    item.classList.add("food-item");

    const img = document.createElement("img");
    img.src = product.images;
    img.alt = product.name;

    const name = document.createElement("h5");
    name.textContent = product.name;

    const price = document.createElement("h6");
    price.textContent = `₹ ${product.price}`;

    item.appendChild(img);
    item.appendChild(name);
    item.appendChild(price);
    grid.appendChild(item);

    item.addEventListener("click", () => {
      setTimeout(() => {
        window.location.href = "../HTML/discription.html";
      }, 1200);
      localStorage.setItem("food_cart", JSON.stringify(product));
    });
  });
}

// // <!-- ----------- -->
//functionalaties
lowtohigh.addEventListener("click", function () {
  let sortdata = products.slice().sort(function (a, b) {
    return a.price - b.price;
  });
  const grid = document.querySelector(".food-grid");
  grid.innerHTML = "";
  createGrid(sortdata);
});
hightolow.addEventListener("click", function () {
  let sortdata = products.slice().sort(function (a, b) {
    return b.price - a.price;
  });
  const grid = document.querySelector(".food-grid");
  grid.innerHTML = "";
  createGrid(sortdata);
});
//******************

//---------

biryani.addEventListener("click", function () {
  const biryaniItems = products.filter((product) =>
    product.name.toLowerCase().includes("biryani")
  );
  const grid = document.querySelector(".food-grid");
  grid.innerHTML = "";
  createGrid(biryaniItems);
});
//-----
chicken.addEventListener("click", function () {
  const chickenItems = products.filter(
    (product) =>
      product.name.toLowerCase().includes("chicken") ||
      product.cate.toLowerCase().includes("chickenBucket")
  );
  const grid = document.querySelector(".food-grid");
  grid.innerHTML = "";
  createGrid(chickenItems);
});
//-----
fries.addEventListener("click", function () {
  const friesItems = products.filter((product) =>
    product.name.toLowerCase().includes("fries")
  );
  const grid = document.querySelector(".food-grid");
  grid.innerHTML = "";
  createGrid(friesItems);
});
//-----
burger.addEventListener("click", function () {
  const burgerItems = products.filter(
    (product) =>
      product.cate.toLowerCase().includes("burger") ||
      product.name.toLowerCase().includes("burger")
  );
  const grid = document.querySelector(".food-grid");
  grid.innerHTML = "";
  createGrid(burgerItems);
});
//-----
hotDeals.addEventListener("click", function () {
  const hotDealsItems = products.filter((product) =>
    product.cate.toLowerCase().includes("hotdeals")
  );
  const grid = document.querySelector(".food-grid");
  grid.innerHTML = "";
  createGrid(hotDealsItems);
});

//----
chococake.addEventListener("click", function () {
  const cakeItems = products.filter(
    (product) =>
      product.name.toLowerCase().includes("cake") ||
      product.name.toLowerCase().includes("chocolate")
  );
  const grid = document.querySelector(".food-grid");
  grid.innerHTML = "";
  createGrid(cakeItems);
});
//---
drinks.addEventListener("click", function () {
  const drinkItems = products.filter(
    (product) =>
      product.name.toLowerCase().includes("mojito") ||
      product.name.toLowerCase().includes("7up") ||
      product.name.toLowerCase().includes("mirinda") ||
      product.name.toLowerCase().includes("pepsi")
  );
  const grid = document.querySelector(".food-grid");
  grid.innerHTML = "";
  createGrid(drinkItems);
});

//---------
veg.addEventListener("click", function () {
  const vegItems = products.filter(
    (product) =>
      product.name.toLowerCase().includes("fries") ||
      product.name.toLowerCase().includes("cake") ||
      product.name.toLowerCase().includes("chocolate") ||
      product.name.toLowerCase().includes("mojito") ||
      product.name.toLowerCase().includes("7up") ||
      product.name.toLowerCase().includes("mirinda")
  );
  const grid = document.querySelector(".food-grid");
  grid.innerHTML = "";
  createGrid(vegItems);
});

nonveg.addEventListener("click", function () {
  const vegItems = products.filter((product) =>
    product.type.toLowerCase().includes("veg")
  );
  const grid = document.querySelector(".food-grid");
  grid.innerHTML = "";
  createGrid(vegItems);
});

//******************
