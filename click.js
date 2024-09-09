function buttonClick () {
	console.log('button clicked');
    toggleButtonText(document.getElementById('buttonClick'));
}

function toggleButtonText(button) {
  if (button.innerText.trim() === "Click Here" || button.innerText.trim() === "Click Again"  ) {
    button.innerText = "Button Clicked";
  } else {
    button.innerText = "Click Again";
  }
}
