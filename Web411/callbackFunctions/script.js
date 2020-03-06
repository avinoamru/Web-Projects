const fetchAPI = (url) => {

    fetch(url).then((res) => {
        if (res.ok !== true){
            console.log(`Wrong response, it's ${res.status}`);
            
        }

        return res.json().then(data => {

            
            const dataEntries = Object.values(data);
            console.log(dataEntries[1]);
             
            $(document).ready(function () {
      
                for (let i = 0; i < dataEntries.length; i++){

                      post = Object.entries(dataEntries[i]);
                      
                    $("#content").append(`<ul class = col-md-4 id = post-${i+1}></ul>`);
                    
                    for (let j = 0; j < post.length; j++ ){
                        
                        let postData = {
                           userid: post[j][0],
                           value: post[j][1]
                        }
                        
                        $(`#post-${i+1}`).append(`<li class col-md-12>${postData.userid}:  ${postData.value}</li>`);
                    }
                    

                }                
                
                });

        })

    }).catch((err)=> console.log(err)
    )

}
  fetchAPI(`https://jsonplaceholder.typicode.com/posts`)







