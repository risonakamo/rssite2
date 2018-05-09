window.onload=main;

function main()
{
    colboxevents();
}

//col-box outside event handlers
function colboxevents()
{
    var colboxs=document.querySelectorAll("col-box");
    var currentOpen;

    for (var x=0;x<colboxs.length;x++)
    {
        colboxs[x].addEventListener("expanded",(e)=>{
            if (currentOpen)
            {
                if (currentOpen==e.currentTarget)
                {
                    currentOpen=null;
                }

                else
                {
                    currentOpen.classList.remove("expanded");
                }
            }

            currentOpen=e.currentTarget;
        });
    }
}