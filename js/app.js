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
     <div class="col" onclick="loaddetail(${meal.idMeal})">
         <div class="card">
             <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
             <div class="card-body">
                 <h5 class="card-title">${meal.strMeal}</h5>
                 
             </div>
          </div>
        </div>
`;
    mealContainer.appendChild(div);
    // console.log(meal.strMeal);
  }
  //   console.log(data);
};

function loaddetail(mealId) {
  const url = `  https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}
  `;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showDetail(data));
}
const showDetail = (data) => {
  const modal = document.getElementById("modalC");
  modal.innerHTML = "";
  console.log(data.meals[0]);
  const div = document.createElement("div");
  div.innerHTML = `
    <div class="card my-3 mx-auto" style="max-width: 540px;" id="detailCard">
        <i class="fa-solid fa-xmark ms-auto p-2" onclick="closeDetails()"></i>

         <div class="row g-0">
            <div class="col-md-4">
                 <img src="${data.meals[0].strMealThumb}" 
                 class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${data.meals[0].strMeal} </h5>
                    <p class="card-text">${data.meals[0].strInstructions.slice(
                      0,
                      200
                    )}</p>
                </div>
            </div>
         </div>
    </div>
  `;
  modal.appendChild(div);
};
const closeDetails = () => {
  const modal = document.getElementById("modalC");
  modal.innerHTML = "";
};
