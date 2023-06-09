//  the Fetch API is used to make an HTTP request to the specified API endpoint
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // Process the data returned by the API
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occurred during the API request
    console.error(error);
  });

// XMLHttpRequest, an older method for making HTTP requests.
  var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data', true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var data = JSON.parse(xhr.responseText);
    // Process the data returned by the API
    console.log(data);
  }
};
xhr.send();

// Axios:

axios.get('https://api.example.com/data')
  .then(response => {
    // Process the data returned by the API
    console.log(response.data);
  })
  .catch(error => {
    // Handle any errors that occurred during the API request
    console.error(error);
  });
