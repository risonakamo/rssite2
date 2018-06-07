window.onload=main;

var _topslider;
var _loadedimg=0;
var _colscroll;

function main()
{
    _topslider=document.querySelector(".top-slider");

    colboxevents();
    tallsliders();
    footerchange();

    // document.querySelector(".more-button").addEventListener("click",(e)=>{
    //     e.currentTarget.parentElement.parentElement.viewmore();
    // });
}

//col-box outside event handlers
function colboxevents()
{
    _colscroll=document.querySelector(".col-holderscroll");
    var colholder=_colscroll.querySelector(".col-holderholder");
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

    colboxloaded();
}

function tallsliders()
{
    var slider=document.querySelector(".inside-slider");

    var sliderimgs;
    if (!document.documentElement.lang || document.documentElement.lang!="ja")
    {
        sliderimgs=["../img/anitrack/1.png","../img/anitrack/2.png",
            "../img/anitrack/3.png","../img/anitrack/4.png"];
    }

    else
    {
        sliderimgs=["img/anitrack/1.png","img/anitrack/2.png",
            "img/anitrack/3.png","img/anitrack/4.png"];
    }

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

function footerchange()
{
    var footer=document.querySelector("footer");
    footer.querySelector(".show-about a").addEventListener("click",(e)=>{
        e.preventDefault();

        footer.classList.add("show");
    });
}

//run when a colbox img finishes loading, or the colboxevents finishes
function colboxloaded()
{
    _loadedimg++;

    //for 6 colboxes
    if (_loadedimg>=6 && _colscroll)
    {
        _colscroll.classList.remove("loading");
    }
}