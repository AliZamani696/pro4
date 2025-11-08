document.getElementById("btn").addEventListener("click",async (e)=>{
        let searchBarValue = document.getElementById("searchBar").value;
        try{
                await fetch("http://localhost:8090/searchBar",{
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
      // Add the data as a query parameter
                        await fetch(`http://localhost:8090/Category?data=${encodeURIComponent(btnValue)}`, {
                        method: "GET",});
                } catch (err) {
                        console.error("Fetch failed:", err);
                }
    console.log("Button value:", btnValue);
  });
});


