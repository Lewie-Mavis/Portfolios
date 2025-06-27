<?php
// Step 1: Check if transaction_id was sent
if (!isset($_POST['transaction_id'])) {
  die("❌ No transaction ID received.");
}

$transaction_id = htmlspecialchars($_POST['transaction_id']); // sanitize input

// Step 2: Verify payment with Flutterwave API
$curl = curl_init();
curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.flutterwave.com/v3/transactions/$transaction_id/verify",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_HTTPHEADER => array(
    "Authorization: Bearer FLWSECK_TEST-0ed6b0268b27ea7b74b0b0d4fa18a5aa-X", // Replace with your Flutterwave SECRET key
    "Content-Type: application/json"
  ),
));

$response = curl_exec($curl);
$err = curl_error($curl);
curl_close($curl);

if ($err) {
  die("❌ cURL Error: $err");
}

// Step 3: Parse and check response
$data = json_decode($response, true);
if ($data['status'] === 'success' && $data['data']['status'] === 'successful') {
  $amount = $data['data']['amount'];
  $currency = $data['data']['currency'];
  $customer_email = $data['data']['customer']['email'];
  $tx_ref = $data['data']['tx_ref'];
  $flw_ref = $data['data']['flw_ref'];
  $payment_method = $data['data']['payment_type'];
  $payment_time = $data['data']['created_at'];

  echo "✅ Payment verified successfully!<br>";
  echo "Transaction ID: $transaction_id<br>";
  echo "Amount: $amount $currency<br>";
  echo "Customer Email: $customer_email<br>";
  echo "Reference: $tx_ref<br>";
  echo "Payment Method: $payment_method<br>";
  echo "Date: $payment_time<br>";
} else {
  echo "❌ Payment not successful or verification failed.";
}
?>
