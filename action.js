

$.ajax({
  url: "localhost",  // whatever the url to ruby web server is
  type: "get", //send data through get method
  data: { 
    Name: 4, // populate name with the one given
  },
  success: function(response) {
    //Do Something
  },
  error: function(xhr) {
    //Do Something to handle error
  }
});

