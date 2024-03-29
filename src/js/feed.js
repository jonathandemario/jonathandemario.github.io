var program = document.querySelector('#program');


// Function to clear cards
function clearCards() {
  while (program.hasChildNodes()) {
    program.removeChild(program.lastChild);
  }
}

// Function to update UI with fetched data
function updateUI(data) {

  clearCards();
  program
  var cardWrapper = ``;
  for (var i = 0; i < data.length; i++) {
    if (i % 4 == 0) {
      cardWrapper += '<div class="row" style="justify-content:center;">';
    }
    cardWrapper += `
    <div class="text-light col-lg-3 col-md-6 col-sm-12 pb-5">
      <div class="card border-1" data-id ="`+ data[i].id + `" style="width: 100%; max-height: 350px;">
        <img class="card-img-top rounded" style="height: 15em; object-fit: cover;" src="`+ data[i].image + `" alt="Card image cap">
        <div class="card-body" style="padding: 20px;">
          <p style="font-size: 20px; font-weight: bold;white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;">`+ data[i].title + `</p>
          <p class="card-text" style="white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;">`+ data[i].description + `</p>
        </div>
        <button class="card-button">More info</button>
      </div>
    </div>
    `;

    if (i == data.length - 1) {
      cardWrapper += '</div>';
    }
  }
  program.innerHTML += (cardWrapper);
}

var url = 'https://ambwku-74104-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json';
var networkDataReceived = false;

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    networkDataReceived = true;
    console.log('From web', data);
    var dataArray = [];
    for (var key in data) {
      dataArray.push(data[key]);
    }
    updateUI(dataArray);
  });

if ('indexedDB' in window) {
  readAllData('posts')
    .then(function (data) {
      if (!networkDataReceived) {
        console.log('From cache', data);
        updateUI(data);
      }
    });
}
