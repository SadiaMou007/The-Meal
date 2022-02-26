const searchbtn = () => {
  const searchId = document.getElementById("search-field");
  const error = document.getElementById("error");
  const searchtext = parseInt(searchId.value);
  //error handle
  if (searchId.value == "") {
    error.innerText = "Please Enter Item name!";
  } else if (isNaN(searchtext) == false) {
    error.innerText = "Invalid name!";
  }
  //for valid input
  else {
    error.innerText = "";
  }
  searchId.value = "";
};
