document.getElementById('form').addEventListener('submit', function(event){
	event.preventDefault(); // Prevent form submission

	// Generate text if you submit the form
	var generatedText = 'Form Submmitted sucessfully';

	// Display the submission message
	 document.getElementById('output').innerText = generatedText;
});