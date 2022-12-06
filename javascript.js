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
                
                .catch((error) => {
                        console.log(error);
                })
}

//trigger event
document.getElementById('event-occur').addEventListener('click', fetchData);

</script>

