window.onload=main;

var _topslider;

function main()
{
    _topslider=document.querySelector(".top-slider");

    colboxevents();

    // document.querySelector(".more-button").addEventListener("click",(e)=>{
    //     e.currentTarget.parentElement.parentElement.viewmore();
    // });
}

//col-box outside event handlers
function colboxevents()
{
    var colholder=document.querySelector(".col-holderholder");
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