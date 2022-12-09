

let balance = 0;
let budget = 0;
let expName = '';
let expCost = 0;
let totalExp = 0;
let list = '';
let temp = '';
function set_budget() {

    budget = budgetAmount.value;
    budget = parseFloat(budget).toFixed(2);
    balance = budget;
    if (budget <= 0) {

        alert('Value cannot be empty or negative');

    } else {

        document.getElementById("totalBudget").innerHTML = `${budget}`;
        document.getElementById("totalBalance").innerHTML = `${balance}`;
    }

}

function add_exp() {
    expName = expenseName.value;
    expCost = expenseCost.value;
    if (budget <= 0 || budget == 'NaN') {

        alert('Add the budget amount');

    } else {
        if (expCost <= 0) {

            alert('Value cannot be empty or negative');

        } else {
            expCost = parseFloat(expCost);
            balance -= expCost;
            balance = parseFloat(balance).toFixed(2);
            totalExp += expCost;

            temp = list;
            list = `  <tr>
                        <td>${expName}</td>
                        <td  id="costs">${expCost}</td>
                      </tr>`;
                      // <td ><input name="${expCost}" type="button" value="&#9940" onclick="deleteRow(this)" style="background-color:rgb(243, 243, 243); border:none;"></td>

            list += temp;
            document.getElementById('tbody').innerHTML = list;

            document.getElementById("totalBalance").innerHTML = `${balance}`;
            document.getElementById("totalExpense").innerHTML = `${totalExp}`;
        }
    }
    expenseName.value = '';
    expenseCost.value = '';
}

function remove() {

    totalExp = 0;

    document.getElementById("tbody").innerHTML = '';
    document.getElementById("totalExpense").innerHTML = `${totalExp}`;

    expenseName.value = '';
    expenseCost.value = '';
    list = '';
    balance = budget;
    document.getElementById("totalBalance").innerHTML = `${balance}`;
}

function refresh() {
    budgetAmount.value = '';
    expenseName.value = '';
    expenseCost.value = '';
}







// function deleteRow(r) {
 
//     let delData = r.getAttribute("name");
//     totalExp -= delData;
//     balance = budget;
//     balance -= totalExp;
//     document.getElementById("totalBalance").innerHTML = `${balance}`;
//     document.getElementById("totalExpense").innerHTML = `${totalExp}`;

//     var i = r.parentNode.parentNode.rowIndex;
//     document.getElementById("tbody").deleteRow(i);

//     if (totalExp < 1) {
//         list = '';
//         document.getElementById("tbody").innerHTML = list;
//         balance = budget;
//         document.getElementById("totalBalance").innerHTML = `${balance}`;
//     }
// }

