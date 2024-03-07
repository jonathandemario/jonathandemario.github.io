var sharedMomentsArea = document.querySelector('#shared-moments');

// Currently not in use, allows to save assets in cache on demand otherwise
function clearCards() {
  while (sharedMomentsArea.hasChildNodes()) {
    sharedMomentsArea.removeChild(sharedMomentsArea.lastChild);
  }
}

function updateUI(data) {
  clearCards();
  cardWrapper = ``;
  for (var i = 0; i < data.length; i++) {
    if (i % 4 == 0) {
      cardWrapper += '<div class="row" style="justify-content:center; ">';
    }
    // cardWrapper += `
    // <div class="text-light col-lg-4 col-md-6 col-sm-12 pb-5">
    //       <div data-id ="`+data[i].id+`" class="card border-1" style="width: 100%; max-height: 300px;">
    //         <img class="card-img-top rounded" style="height: 15em; object-fit: cover;" src="`+data[i].image+`" alt="Card image cap">
    //         <div class="card-body">
    //           `+data[i].title+`
    //         </div>
    //       </div>
    //   </div>
    // `;

    cardWrapper += `
    <div class="text-light col-lg-3 col-md-6 col-sm-12 pb-5">
      <div class="card border-1" data-id ="`+data[i].id+`" style="width: 100%; max-height: 350px;">
        <img class="card-img-top rounded" style="height: 15em; object-fit: cover;" src="`+data[i].image+`" alt="Card image cap">
        <div class="card-body" style="padding: 20px;">
          <p style="font-size: 20px; font-weight: bold;white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;">`+data[i].title+`</p>
          <p class="card-text" style="white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;">`+data[i].description+`</p>
        </div>
        <button class="card-button">More info</button>
      </div>
    </div>
    `;

    if (i == data.length - 1) {
      cardWrapper += '</div>';
    }
  }
  sharedMomentsArea.innerHTML += (cardWrapper);
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
  // alert("tes")
  readAllData('posts')
    .then(function (data) {
      if (!networkDataReceived) {
        console.log('From cache', data);
        updateUI(data);
      }
    });
}
