<script >
function fetchData() {
        
        fetch(new Request('degree.json'))
              
                .then((res) => {
                      
                        console.log(res.status, res.statusText);
                      
                        return res.json();
                })
              
                .then((degree) => {
                        console.log(degree);
                })
                //handling error
                .catch((err) => {
                        console.log(err);
                })
}

//triggering event
document.getElementById('event-occur').addEventListener('click', fetchData);

</script>

