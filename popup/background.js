
function handleMessage(request, sender, sendResponse) {
  if(request.otherPage) {
    document.getElementById("error-content").classList.remove("hidden");
    document.getElementById("popup-content").classList.add("hidden");
    sendResponse({response: "Kindly ignore this message."});
  }
  else {
    document.getElementById("removed-comments").textContent = request.removed;
    sendResponse({response: "Kindly ignore this message."});
  }
}

var cat = false;

document.getElementById("bt").addEventListener("click", (e) => {
  browser.tabs.executeScript({file: "/content-scripts/scan.js"})

  if(cat == false){
  e.target.style.backgroundColor = "green";
  e.target.textContent = "ON";
  cat = true;
  }
  else{
    e.target.style.backgroundColor = "red";
    e.target.textContent = "OFF";
    cat = false;
  }
});

browser.runtime.onMessage.addListener(handleMessage);
