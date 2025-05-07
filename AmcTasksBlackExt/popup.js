function startTracking() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://www.amctasks.com/get_key", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      // Do something with the response
      console.log(xhr.responseText);

      if (xhr.responseText !== "" && xhr.responseText !== null) {
        chrome.storage.sync.set({ ApiKey: xhr.responseText }, function () { });
        var trackBtn = document.getElementById("trackBtn");
        trackBtn.style.display = "none";

        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
          // Refresh the tab
          chrome.tabs.reload(tabs[0].id);
        });
      } else {
        alert('please make login first');
        chrome.tabs.create({ url: "https://www.amctasks.com/users/login" });
      }
    }
  };
  xhr.send();
}

function stopTracking() {
  chrome.storage.sync.remove('ApiKey', function () {
    console.log('Key was removed');
  });
}

var trackBtn = document.getElementById("trackBtn");

trackBtn.addEventListener("click", function () {
  startTracking();
});

var stopTrackBtn = document.getElementById("stopTrackBtn");

stopTrackBtn.addEventListener("click", function () {
  stopTracking();
  this.style.display = "none";
});

chrome.storage.sync.get(["ApiKey"], function (result) {
  var trackBtn = document.getElementById("trackBtn");
  var stopTrackBtn = document.getElementById("stopTrackBtn");
  console.log(result);
  if (
    result.ApiKey !== "" &&
    result.ApiKey !== null &&
    result.ApiKey !== undefined
  ) {

    trackBtn.classList.add('hide');
    stopTrackBtn.classList.remove('hide');
  } else {
    trackBtn.classList.remove('hide');
    stopTrackBtn.classList.add('hide');
  }
});
