const elList = document.querySelector(".list");
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => fn(data));


  function fn(data) {
    data.map((item) => {
      let newLi = document.createElement("li");
      newLi.innerHTML = `
      <li class="list__item">
      <h2 class="text">Name: <span class="span">${item.name}</span></h2>
      <h2 class="text">Adress: <span class="span">${item.address.street}</span></h2>
      <h2 class="text">Email: <span class="span">${item.email}</span></h2>
      <h2 class="text">Tel:  <span class="span">${item.phone}</span></h2>
  </li>
          `
          elList.appendChild(newLi)
    })
  }

const elHeader = document.querySelector('.header')  

window.addEventListener("scroll", (a) => {
    let val = Math.floor(window.scrollY);
    if (val >= 90) {
      elHeader.style.boxShadow = `0px 0px 20px 10px black`;
    } else {
      elHeader.style.boxShadow = `0px 0px 0px 0px black`;
    }
  });