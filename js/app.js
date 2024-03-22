async function getCoinValue() {
  const coin = document.getElementById("coin").value;
  const response = await fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=brl`
  );
  const data = await response.json();
  document.getElementById("value").innerText =
    "O valor atual de " + coin + " é R$ " + data[coin].brl;
}
