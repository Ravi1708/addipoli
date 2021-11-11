


//==============Product Routes=====================//


get     -   /api/products       -> get all products
Post    -   /api/products       -> create a product
get     -   /api/products/:id   -> get specific product
delete  -   /api/products/:id   -> delete product
put     -   /api/products/:id   ->  edit product

product schema
===============

{
    name,
    image,
    category,
    price,
    timestamps
}

Note:

imagelocation: /uploads/products

categories : 
Addipoli Puttu’s
Addipoli Wrappies
Addipoli Dishes
Others 
combos


//================ user Routes ===============

get     -   /api/users       -> get all  users
Post    -   /api/users       -> create a users
post    -   /api/users/login -> login user
get     -   /api/users/profile -> get user profile
Post    -   /api/users/profile -> update user profile
get     -   /api/users/:id   -> get specific users
delete  -   /api/users/:id   -> delete users
put     -   /api/users/:id   ->  edit users

{
    name,
    email,   -> unique
    phone,   -> unique
    address, -> multiple address
    pincode,
    password,
    isadmin
}


//================ Order Routes ===============

get     -   /api/orders       -> get all  orders
Post    -   /api/orders       -> create a orders
post    -   /api/orders/myorders -> specific user orders
get     -   /api/orders/:id   -> get specific orders
delete  -   /api/orders/:id   -> delete order
put     -   /api/orders/:id   ->  edit users status

{
    user,
    orderItems : [
        name,
        qty,
        Image,
        price,
    ],
    shipping address,
    payment method,
    payment result,
    total price,
    delivery status,
    order status
}