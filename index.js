window.onload=main;

var _topslider;

function main()
{
    _topslider=document.querySelector(".top-slider");

    colboxevents();
    tallsliders();

    // document.querySelector(".more-button").addEventListener("click",(e)=>{
    //     e.currentTarget.parentElement.parentElement.viewmore();
    // });
}

//col-box outside event handlers
function colboxevents()
{
    var colscroll=document.querySelector(".col-holderscroll");
    var colholder=colscroll.querySelector(".col-holderholder");
    var colboxs=colholder.querySelectorAll("col-box");
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


    colscroll.addEventListener("mousedown",(e)=>{

    });
}

function tallsliders()
{
    var slider=document.querySelector(".inside-slider");
    var sliderimgs=["img/anitrack/1.png","img/anitrack/2.png",
        "img/anitrack/3.png","img/anitrack/4.png"];
    var sliderpos=0;

    setInterval(()=>{
        sliderpos++;
        if (sliderpos>=sliderimgs.length)
        {
            sliderpos=0;
        }

        slider.children[1].src=sliderimgs[sliderpos];
        slider.classList.add("slidedown");

        setTimeout(()=>{
            slider.children[0].src=sliderimgs[sliderpos];
            slider.classList.remove("slidedown");
        },410);
    },3000);
}