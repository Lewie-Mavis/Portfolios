<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Secure Payment - Flutterwave</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://checkout.flutterwave.com/v3.js"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>

  <div class="fwave-payment-wrapper">
    <div class="fwave-payment-container">
      <h2 class="fwave-title">Make a Payment</h2>
      <form id="fwave-payment-form">
        <input type="text" id="fwave-name" class="fwave-input" placeholder="Full Name" required>
        <input type="email" id="fwave-email" class="fwave-input" placeholder="Email Address" required>
        <input type="number" id="fwave-amount" class="fwave-input" placeholder="Amount in KES" required>
        <button type="submit" class="fwave-button">Pay Now</button>
      </form>
    </div>
  </div>

  <script>
    const paymentForm = document.getElementById('fwave-payment-form');
    paymentForm.addEventListener('submit', payWithFlutterwave);

    function payWithFlutterwave(e) {
      e.preventDefault();

      const name = document.getElementById('fwave-name').value;
      const email = document.getElementById('fwave-email').value;
      const amount = document.getElementById('fwave-amount').value;

      FlutterwaveCheckout({
        public_key: "FLWPUBK-fcd87cc787010fef2940b836b13d5196-X",
        tx_ref: "txref-" + Date.now(),
        amount: amount,
        currency: "KES",
        payment_options: "card, mpesa, mobilemoney",
        customer: {
          email: email,
          name: name,
        },
        customizations: {
          title: "My Store Payment",
          description: "Payment for items in cart",
          logo: "images/logo.png",
        },
        callback: function (response) {
          console.log("Payment response: ", response);
          alert('Payment complete! Reference: ' + response.transaction_id);

          fetch("confirm_payment.php", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: "transaction_id=" + encodeURIComponent(response.transaction_id)
          })
          .then(res => res.text())
          .then(data => {
            console.log("Server verification result:", data);
            alert(data);
          })
          .catch(err => {
            console.error("Error verifying payment:", err);
            alert("An error occurred while verifying the payment.");
          });
        },
        onclose: function () {
          alert('Payment window closed.');
        },
      });
    }
  </script>
</body>
</html>
