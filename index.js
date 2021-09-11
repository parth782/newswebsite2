console.log("hello world");
//a3e2ccbf6c574c9799a9f6f1d3f4f4b1
let source = "business";
let api = "a3e2ccbf6c574c9799a9f6f1d3f4f4b1";
let newsaccordion = document.getElementById("accordionExample");
let url=`https://newsapi.org/v2/top-headlines?country=us&category=${source}&apiKey=${api}`;
fetch(url).then((response)=>{
    return response.json();
}).then((data)=>{
    let json=data;
    let articles = json.articles;
        //source,author,description,publishedat;
        console.log(articles);
        let str="";
        let i=0;
        for (news in articles) {
             str+= ` <div class="card">
        <div class="card-header noteked" id="heading${i}">
            <h2 class="mb-0">
                <button class="btn btn-link btn-block text-left  " type="button" data-toggle="collapse"
                    data-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}" >
                    Breaking News ${i+1}:  ${articles[news].title}
                </button>
            </h2>
        </div>
        
        <div id="collapse${i}" class="collapse " aria-labelledby="heading${i}"
            data-parent="#accordionExample">
            <div class="card-body">
               ${articles[news].content}.<a href="${articles[news].url}" target="_blank">Read More here</a>
            </div>
        </div>
        </div>`;
        i++;

        }
        newsaccordion.innerHTML=str;
})
//create a get request
/**const xhr = new XMLHttpRequest();
xhr.open("GET", `https://newsapi.org/v2/top-headlines?country=us&category=${source}&apiKey=${api}`, true);
xhr.getResponseHeader('Content-type', 'application/json');
xhr.onload = function () {
    if (this.status == 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        //source,author,description,publishedat;
        console.log(articles);
        let str="";
        let i=0;
        for (news in articles) {
             str+= ` <div class="card">
        <div class="card-header noteked" id="heading${i}">
            <h2 class="mb-0">
                <button class="btn btn-link btn-block text-left  " type="button" data-toggle="collapse"
                    data-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}" >
                    Breaking News ${i+1}:  ${articles[news].title}
                </button>
            </h2>
        </div>
        
        <div id="collapse${i}" class="collapse " aria-labelledby="heading${i}"
            data-parent="#accordionExample">
            <div class="card-body">
               ${articles[news].content}.<a href="${articles[news].url}" target="_blank">Read More here</a>
            </div>
        </div>
        </div>`;
        i++;

        }
        newsaccordion.innerHTML=str;
    }
    else {
        console.log("some error occured");
    }
}
xhr.send();**/

//grab the news container
let search=document.getElementById('search');
search.addEventListener("input",function(){
    
       let val1=search.value;
       
       let notescard=document.getElementsByClassName("noteked");
      // console.log(notescard);
       Array.from(notescard).forEach(function(element){
           let cardtxt=element.getElementsByTagName("button")[0].innerText;
           if(cardtxt.includes(val1)){
               element.style.display="block";
               console.log(cardtxt);
           }
           else{
               element.style.display="none";
           }
       })

       
})