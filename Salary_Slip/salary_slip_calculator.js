// Salary Slip
// Given: basic salary
//  Formulas:
// HRA = 20% of basic
// DA = 10%
// PF = 12%
// Gross = basic + HRA + DA
// Net = Gross − PF

     function toNumber(value) {
    // convert to number; treat negatives or invalid(infinite) as 0
    var n = Number(value);
    if (!isFinite(n) || n < 0) n = 0;
    return n;
    }

    // For rupees with 2 decimals (basic string ops)
    function rupees(n) {
      return "₹" + n.toFixed(2);
    }
    function calcSlip(basic) {
      var hra = 0.20 * basic;       // 20%
      var da  = 0.10 * basic;       // 10%
      var pf  = 0.12 * basic;       // 12%
      var gross = basic + hra + da; // Gross = basic + HRA + DA
      var net   = gross - pf;       // Net   = gross - PF

      // Return an object with all values(as function returns a single value let's return multiple values as single object)
      return {
        hra: hra,
        da: da,
        pf: pf,
        gross: gross,
        net: net
      };
    }

    // ---- Event: Calculate button ----
    document.getElementById('calcBtn').addEventListener('click', function () {
      // Read inputs
      var name  = document.getElementById('empName').value || '(No name)';
      var basic = toNumber(document.getElementById('basic').value);

      // Optional: if-else to warn for zero/invalid basic
      if (basic === 0 || basic < 0) {
        alert("Please enter a valid Basic Salary (non-negative number).");
      }

    //   To compute salary
      var s = calcSlip(basic);

      // Output
      document.getElementById('oName').textContent  = "Employee: " + name;
      document.getElementById('oHra').textContent   = "HRA (20%): " + rupees(s.hra);
      document.getElementById('oDa').textContent    = "DA (10%): " + rupees(s.da);
      document.getElementById('oPf').textContent    = "PF (12%): " + rupees(s.pf);
      document.getElementById('oGross').textContent = "Gross: " + rupees(s.gross);
      document.getElementById('oNet').textContent   = "Net Salary: " + rupees(s.net);
    });
 