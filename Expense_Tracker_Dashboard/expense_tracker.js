//For toogle button
const toggle = document.getElementById("toggleBtn");
toggle.addEventListener("change", function () {
  document.body.classList.toggle("dark-mode", this.checked);
});

//For dynamic date-Today's date
document.getElementById("date").value = new Date().toISOString().slice(0, 10);

// new Date() creates a new date Object for current time, .toISOString() converts that Date to a string in ISO 8601 format in 
// UTC (not your local time) which looks something like "2026-03-05T11:19:21.123Z" and .slice(0, 10) takes the first 10 characters of that string
// ("2026-03-05"). Resulting date string in YYYY-MM-DD format, based on UTC date.

//Global array to store expenses
  let expenses = [];
//Default filter
  let currentFilter = "All";

// Function for add expenses
 function addExpense() {
    let title = document.getElementById("title").value.trim(); //stores user-typed title in title obj by trimming spaces
    let amount = document.getElementById("amount").value; //stores the user-typed amount value in amount obj
    let category = document.getElementById("category").value; //stores choosen category in category obj
    let date = document.getElementById("date").value; // stores the date choosen in date obj

// Validation
  if (title === "" || amount === "" || amount <= 0) {
      document.getElementById("error").textContent = "Please enter valid title and amount!";
      return;
    } //if validates all error conditions if error found it displays "Please enter valid title and amount!" on UI
    document.getElementById("error").textContent = ""; //Once user changes the value it sets error message to empty

// Create expense object
  let exp = {
      id: Date.now(),
      title: title,
      amount: Number(amount),
      category: category,
      date: date
    };

  expenses.push(exp);
  displayExpenses();
  updateTotal();

// Clear inputs
  document.getElementById("title").value = "";
  document.getElementById("amount").value = "";
  }

function displayExpenses() {
    let list = document.getElementById("list");
    list.innerHTML = "";

    let filtered = expenses.filter(function(exp) {
      return currentFilter === "All" || exp.category === currentFilter;
    });

    filtered.forEach(function(exp) {
      let div = document.createElement("div");
      div.className = "expense-item";
      div.innerHTML = `
        <b>${exp.title}</b> - ₹${exp.amount} <br>
        Category: ${exp.category} <br>
        Date: ${exp.date} <br>
        <button onclick="deleteExpense(${exp.id})">Delete</button>
      `;
      list.appendChild(div);
    });
  }

  function deleteExpense(id) {
    expenses = expenses.filter(function(exp) {
      return exp.id !== id;
    });
    displayExpenses();
    updateTotal();
  }

  function updateTotal() {
    let total = expenses.reduce(function(sum, exp) {
      return sum + exp.amount;
    }, 0);

  document.getElementById("total").textContent = total;
  }

  function filterCategory(cat) {
    currentFilter = cat;
    displayExpenses();
  }


