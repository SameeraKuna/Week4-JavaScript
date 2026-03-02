// Shopping Cart Billing
// Each item: price × quantity
// Bill: sum of all items
// Discount rules:
// 1000 → 10%
// 2000 → 20%
// Final bill:
//  final = total − (total × discount%)
  
  function toNumber(value) {
    // convert to number; treat negatives or invalid(infinite) as 0
    var n = Number(value);
    if (!isFinite(n) || n < 0) n = 0;
    return n;
  }

  function lineTotal(price, qty) {
    if (price < 0) price = 0;
    if (qty < 0) qty = 0;
    return price * qty;
  }

  function getDiscountPercent(total) {
    if (total >= 2000) {
      return 20;
    } else if (total >= 1000) {
      return 10;
    } else {
      return 0;
    }
  }

  // To calculate when button is clicked ----
  document.getElementById('calcBtn').addEventListener('click', function () {
    // 1) Read inputs as basic numbers and item names
    var i1 = (document.getElementById('i1').value);
    var p1 = toNumber(document.getElementById('p1').value);
    var q1 = toNumber(document.getElementById('q1').value);

    var i2 = (document.getElementById('i2').value);
    var p2 = toNumber(document.getElementById('p2').value);
    var q2 = toNumber(document.getElementById('q2').value);

    var i3 = (document.getElementById('i3').value);
    var p3 = toNumber(document.getElementById('p3').value);
    var q3 = toNumber(document.getElementById('q3').value);

    // 2) Line totals
    var t1 = lineTotal(p1, q1);
    var t2 = lineTotal(p2, q2);
    var t3 = lineTotal(p3, q3);

    // 3) Subtotal (sum of all items)
    var subtotal = t1 + t2 + t3;

    // 4) Discount percent based on rules
    var dPercent = getDiscountPercent(subtotal);

    // 5) Final bill = total − (total × discount%)
    var discountAmount = subtotal * (dPercent / 100);
    var finalBill = subtotal - discountAmount;

    // 6) Show results (basic text)
    document.getElementById('line1').textContent =i1 + ":  ₹" + t1.toFixed(2);
    document.getElementById('line2').textContent = i2 + ":  ₹" + t2.toFixed(2);
    document.getElementById('line3').textContent = i3 + ":  ₹" + t3.toFixed(2);
    document.getElementById('subtotal').textContent = "Subtotal: ₹" + subtotal.toFixed(2);
    document.getElementById('discountPct').textContent = "Discount %: " + dPercent + "%";
    document.getElementById('final').textContent = "Final Price: ₹" + finalBill.toFixed(2);
  });
