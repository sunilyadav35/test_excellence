/**
 * Let’s see we an api url www.example.com/api/get/1 
Write a sample code to call this rest api and display the result.

 */



const userAction = async () => {
    const response = await fetch('http://www.example.com/api/get/1', {
      method: 'POST',
      body: myBody, // string or object
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
  }