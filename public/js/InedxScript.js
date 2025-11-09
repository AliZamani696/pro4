
document.getElementById("btn").addEventListener("click",async (e)=>{
        let searchBarValue = document.getElementById("searchBar").value;
 const {port} = require("./../../config/config");
        try{
                await fetch(`http://localhost:${port}/searchBar`,{
                method:"POST",
                body: new URLSearchParams({ data:searchBarValue })})
        }catch(err){
                console.error(err)
        }
        e.preventDefault()
})

const buttons = document.querySelectorAll('.btn-outline-primary');
buttons.forEach(btn => {

        btn.addEventListener('click', async () => {
       
                const btnValue = btn.value;
                try {
                        await fetch(`http://localhost:${port}/Category`, {
                        method: "GET",});
                } catch (err) {
                        console.error("Fetch failed:", err);
                }
    console.log("Button value:", btnValue,port);
  });
});


