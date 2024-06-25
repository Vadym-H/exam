function func() {
  let input_name = document.getElementById("name").value;
  let input_surname = document.getElementById("surname").value;
  let input_age = document.getElementById("age").value;

  if (input_name === "" || input_surname === "" || input_age === "") {
      return;
  }

  if (input_age < 18) {
      alert("Your age is less than 18");
      return;
  }

  let input_data = {
      name: input_name,
      surname: input_surname,
      age: input_age
  };

  let text = `${input_data.name} ${input_data.surname}, ${input_data.age} years old`;

  let new_list = document.createElement("li");
  let list = document.getElementById("list");
  new_list.textContent = text;
  list.appendChild(new_list);

  document.getElementById("name").value = "";
  document.getElementById("surname").value = "";
  document.getElementById("age").value = "";
}
