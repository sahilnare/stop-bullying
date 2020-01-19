

function handleMessage(request, sender, sendResponse) {
  if(request.otherPage) {
    document.getElementById("error-content").classList.remove("hidden");
    document.getElementById("popup-content").classList.add("hidden");
    sendResponse({response: "Kindly ignore this message."});
  }
  else {
    document.getElementById("total-comments").textContent = request.total;
    document.getElementById("removed-comments").textContent = request.removed;
    sendResponse({response: "Kindly ignore this message."});
  }
}



document.getElementById("press").addEventListener("click", () => {
  browser.tabs.executeScript({file: "/content-scripts/scan.js"})
});

browser.runtime.onMessage.addListener(handleMessage);
