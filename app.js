
let h1 = document.querySelector('h1');
let btn = document.querySelector('button');
let image = document.querySelector('#result');
let url2 = "https://dog.ceo/api/breeds/image/random"

btn.addEventListener("click",async()=>{
    let link = await getImage(url2);
    image.setAttribute("src", link);
    console.log(link);
})

async function getImage(){
    try{
        let response = await axios.get(url2);
        return response.data.message;
    }
    catch(error) {
        console.log("ERROR - ", error);
        return "No image Found";
    }
}