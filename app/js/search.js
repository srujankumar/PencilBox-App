function detectEnterKey(event) {
	if(event.keyCode == 13) {
		document.getElementById('search-button').click();
	}
}