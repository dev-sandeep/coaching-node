/**
 * Run the following mongo in the mongosh shell
 * 
 * db.createCollection('Customers')
 * db.createCollection('Address')
 * db.createCollection('Items')
 * db.createCollection('Images')
 * db.createCollection('Chefs')
 * db.createCollection('Orders')
 * 
 * db.Customers.insertOne({
        id: 1,
        name: 'sample-customer',
        phone: '+91289289282',
        email: 'sample@mail.com',
        token: 'somerandomtext',
        password: 'sha256encryptedtex'
    })
 * db.Address.insertOne({
        id: 1,
        line1: '12 BI Lines',
        line2: 'Lal chawl',
        city: 'Mumbai',
        state: 'MH',
        phone: '+91 920920202892',
        cid: 1
    })
 * db.Chefs.insertOne({
        id: 1,
        name: 'BK Sharma',
        mobile: '+91 39839839383',
        dp_url: 'http://image.com/some-image-url',
        email: 'random@mail.com',
        desc: 'just some test description',
        token: '83983083038308308skosks3',
        password: '83983083038308308skosks3',
        aid: 1,
    })
 * db.Items.insertOne({
        id: 1,
        name: 'Aloo paratha',
        price: 100,
        desc: 'tasty and healthy',
        ts: '892882',
        chid: 1,
    })
 * db.Images.insertOne({
        id: 1,
        url: 'http://image.com/some-image-url',
        itid: 1,
    })
 * db.Orders.insertOne({
        id: 1,
        cid: 1,
        itid: 1,
        qty: 2,
        aid: 1,
        status: 0,
    })
*   
*/