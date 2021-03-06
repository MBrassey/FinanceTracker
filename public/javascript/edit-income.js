const user_id = document.querySelector('input[name="user-id"]').value;

const editIncomeHandler = async function(event) {
  event.preventDefault();

  
  const amount = document.querySelector('input[name="income-amount"]').value;
  

  await fetch(`/api/income/${user_id}`, {
    method: "PUT",
    body: JSON.stringify({
      amount,
      
    }),
    headers: { "Content-Type": "application/json" },
  });

  document.location.replace('/dashboard');
};

document.querySelector('#edit-income-form').addEventListener('submit', editIncomeHandler);


