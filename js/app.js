// get search result
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
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchId.value}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => getMeals(data.meals));
  }
  searchId.value = "";
};

// show search result
const getMeals = (data) => {
  const mealContainer = document.getElementById("mealContainer");
  for (const meal of data) {
    const div = document.createElement("div");
    div.innerHTML = `
     <div class="col">
         <div class="card">
             <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
             <div class="card-body">
                 <h5 class="card-title">${meal.strMeal}</h5>
                 
             </div>
          </div>
        </div>
`;
    mealContainer.appendChild(div);
    console.log(meal.strMeal);
  }
  console.log(data);
};
