var data_array;

$('#formId').submit(function() {
   let inputval = $("input:first").val()
   
   // example request


    $.get("http://127.0.0.1:4567/name", {name:inputval}).done((data)=> {   alert("success") })
                    
        .fail((xhr) => {
                        alert('Problem contacting server');
                        console.log(xhr);
                    });
});

var ctx = document.getElementById("myChart");

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["1900", "1910", "1920", "1930", "1940", "1950","1960", "1970", "1980", "1990", "2000"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3, 6, 8, 9, 0, 12],  // replace this with returned ruby stuff
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
