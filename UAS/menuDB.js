const MongoDB = require("mongodb").MongoClient,
    dbURL = "mongodb://127.0.0.1:27017",
    dbName = "db-untar-cafe";

MongoDB.connect(dbURL, (error, client) => {
    if (error) throw error;
    let db = client.db(dbName);
    db.collection("untar-cafe")
        .insertMany([
            // Hot Coffee
            {menu: "Americano", img: "assets/images/menu/hot/americano.jpg", description: "Coffee made by mixing a shot of espresso with hot water, with a bitter taste.", price: 18000}, 
            {menu: "Cappuccino", img: "assets/images/menu/hot/cappuccino.jpg", description: "Mixture of espresso with milk in hot water.", price: 18000},
            {menu: "Con-panna", img: "assets/images/menu/hot/con-panna.jpg", description: "Espresso coffee with cream on top.", price: 18000},
            {menu: "Doppio", img: "assets/images/menu/hot/doppio.jpg", description: "Coffee with a fairly bitter taste with a thick texture.", price: 18000},
            {menu: "Espresso", img: "assets/images/menu/hot/espresso.jpg", description: "Coffee that is processed using a high-pressure brewing machine with a fairly bitter taste.", price: 18000},
            {menu: "Latte", img: "assets/images/menu/hot/latte.jpg", description: "Espresso coffee which is then mixed with steamed milk.", price: 18000}, 
            {menu: "Long Black", img: "assets/images/menu/hot/longblack.jpg", description: "Coffee with espresso added to hot water.", price: 18000},
            {menu: "Lungo", img: "assets/images/menu/hot/lungo.jpg", description: "Coffee with the bitterest taste of coffee and a liquid texture.", price: 18000},
            {menu: "Ristretto", img: "assets/images/menu/hot/ristretto.jpg", description: "Ristretto is made with the same Espresso Roast used for full espresso shots, but less hot water is pushed through the grounds. The result is a smaller, more concentrated serving with a sweeter, richer flavor.", price: 18000},
            // Iced Coffee
            {menu: "Affogato", img: "assets/images/menu/iced/affogato.jpg", description: "Mixture of gelato and espresso served in a small cup or bowl.", price: 18000}, 
            {menu: "Coconut Mochaccino", img: "assets/images/menu/iced/coconut-mochaccino.jpg", description: "Coconut water mixed with expresso coffee served in a small glass but has a fairly bitter taste.", price: 18000},
            {menu: "Cold Brew", img: "assets/images/menu/iced/cold-brew.jpg", description: "Coffee is coffee that is brewed with cold water or room temperature and soaked for 12 hours.", price: 18000},
            {menu: "Frappe", img: "assets/images/menu/iced/frappe.jpg", description: "Greek iced coffee covered in foam, made from instant coffee, sugar, water and ice.", price: 18000},
            // Non Coffee
            {menu: "Iced Black Tea", img: "assets/images/menu/non/black-tea.jpg", description: "Original fresh black tea (sugar / without sugar).", price: 18000}, 
            {menu: "Iced Chocolate", img: "assets/images/menu/non/chocolate.jpg", description: "Chocolate ice made from selected ingredients, as well as creamer to add aesthetic taste with flavors that can pamper the tongue while relaxing.", price: 18000},
            {menu: "Iced Matcha", img: "assets/images/menu/non/matcha.jpg", description: "Ice matcha comes from camellia sinensis leaves that have been processed and given coconut milk to add to the enjoyment of the taste while relaxing.", price: 18000},
            {menu: "Iced Dino-Milo", img: "assets/images/menu/non/milo.jpg", description: "Ice blend milk shake dino milo made from milo powder mixed with milk and water that has been heated and then given ice cream.", price: 18000},
            {menu: "Iced Vanilla Smoothies", img: "assets/images/menu/non/vanilla.jpg", description: "Ice blend milk shake Iced vanilla smoothies that are added with ice cream.", price: 18000},
            {menu: "Iced Choco Smoothies", img: "assets/images/menu/non/choco.jpg", description: "Original chocolate which is blended and then with topped.", price: 18000},
            // Toast
            {menu: "Avocado Toast", img: "assets/images/menu/toast/avocado.jpg", description: "This menu is made using selected bread that is baked over a hot fire and given slices of avocado, onions, mustard, and Worcestershire sauce to add to the delicious taste of the bread this food is perfect for breakfast.", price: 18000}, 
            {menu: "Bacon Toast", img: "assets/images/menu/toast/bacon.jpg", description: "This menu is made using selected bread that is roasted over a hot fire, then give a piece of beef that has been roasted and given sausages to add to the enjoyment of the taste of this food is perfect for breakfast.", price: 18000},
            {menu: "Butter Toast", img: "assets/images/menu/toast/butter.jpg", description: "This menu is made using selected bread that is baked over hot fire, then given the organic valley ghee butter option so that the taste in the mouth is more fitting for metega lovers, this food is perfect for breakfast.", price: 18000},
            {menu: "Egg Mayo Toast", img: "assets/images/menu/toast/egg-mayo.jpg", description: "This menu is made by using selected bread that is baked over a hot fire, then give the egg that has been processed on the bread and given mayonnaise to complete the taste, this food is perfect for breakfast.", price: 18000},
            {menu: "Egg & Cheese Toast", img: "assets/images/menu/toast/egg.jpg", description: "This menu is made using selected bread that is baked over a hot fire, then give it a ripe egg and give it a few pieces of sausage and melted cheese to make it more delicious, this food is perfect for breakfast.", price: 18000},
            {menu: "Pizza Toast", img: "assets/images/menu/toast/pizza.jpg", description: "This menu is made using selected bread that is baked over a hot fire, then spread with sauce and melted cheese and given a slice of beef sausage to complement the taste of pizza, this food is perfect for breakfast.", price: 18000},
            // Cookies
            {menu: "Almond Cookies", img: "assets/images/menu/cookies/almond.jpg", description: "Delicious cookies with super crispy almond flavor. Wrapped in sweet chocolate which makes it even more delicious.", price: 18000}, 
            {menu: "Cheese Cookies", img: "assets/images/menu/cookies/cheese.jpg", description: "Delicious cookies with super crunchy cheese flavors. Wrapped in sweet cheese which makes it even more delicious.", price: 18000},
            {menu: "Choco Chip Cookies", img: "assets/images/menu/cookies/chip.jpg", description: "Delicious chocolate chip cookie has a super crunchy texture.", price: 18000}
        ] ,
        (error, db) => {
            if(error) throw error;
            console.log(db);
        });
});