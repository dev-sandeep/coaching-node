# About the project
This project is part of FSWD, where we are planning to make an e-commerce website end to end.

# How to start
You may go to the api-contracts folder. Here you would find all the necessary details about the backend.
Which include all the APIs(in request-response.js) and database schema(db-design.png). This should give good 
idea about the backend.

## Frontend
For front end designs you may follow this figma [link](https://www.figma.com/file/4qSzRbxZ9j7oObMNoZr3zS/FoodAdda?node-id=0%3A1&t=JW5JvEWFeQ4lqT0F-1) to see the wireframes. You would be able to see all the UI related codes in the UI folder, where we are making the react app `food-adda`

## Backend
We are using Mongo-db as the database you should open mongo client(mongo compass)
At the bottom you would get the shell to run commands. Run the following commands - 
<img width="1577" alt="Screenshot 2023-03-08 at 11 35 09 PM" src="https://user-images.githubusercontent.com/7813799/223804265-58476ef2-e62c-410a-b1b2-2ce068fe82a2.png">

<img width="1077" alt="db-design" src="https://user-images.githubusercontent.com/7813799/224490636-47d41dcc-86aa-49db-b144-98ed4b7d3691.png">


Run the following command to create and use a database - 
`use foodadda`

Following commands would help you to create collections.
`db.createCollection('customers') 
db.createCollection('address') 
db.createCollection('items') 
db.createCollection('images') 
db.createCollection('chefs') 
db.createCollection('orders')`


Finally, run the following command to insert data, in each of the above mentioned collection.
 `db.customers.insertOne({ id: 1, name: 'sample-customer', phone: '+91289289282', email: 'sample@mail.com', token: 'somerandomtext', password: 'sha256encryptedtex' }) \
db.address.insertOne({ id: 1, line1: '12 BI Lines', line2: 'Lal chawl', city: 'Mumbai', state: 'MH', phone: '+91 920920202892', cid: 1 }) \
db.chefs.insertOne({ id: 1, name: 'BK Sharma', mobile: '+91 39839839383', dp_url: 'http://image.com/some-image-url', email: 'random@mail.com', desc: 'just some test description', token: '83983083038308308skosks3', password: '83983083038308308skosks3', aid: 1, }) \
db.items.insertOne({ id: 1, name: 'Aloo paratha', price: 100, desc: 'tasty and healthy', ts: '892882', chid: 1, }) \
db.images.insertOne({ id: 1, url: 'http://image.com/some-image-url', itid: 1, }) \
db.orders.insertOne({ id: 1, cid: 1, itid: 1, qty: 2, aid: 1, status: 0, })\`

Congratulations! your database is ready.
