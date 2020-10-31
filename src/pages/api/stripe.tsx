const stripe = require('stripe')(
  'sk_test_51HKP4mANCpLvBRrutdMr6kDEFKQrFNlrMakwoyRQ6obXgGUc03qOt8AnKClfHCelmAHe1APjqzcbXe2iGHY48y8q00SnpBWmXH'
);

export default async function handler(req, res) {
  console.log(req);
  if (req.method === 'POST') {
    // Process a POST request
    var session = await stripe.billingPortal.sessions.create({
      customer: 'cus_HuExRr4zkkH1P9',
      return_url: 'https://livingfitfamily.com/account',
    });

    res.send(session);
  } else {
    // Handle any other HTTP method
  }
}
