
const navigation = document.getElementById("navbar__list");
const sections = Array.from(document.querySelectorAll("section"));
const upButton = document.getElementById('button_up');
//const lists = Array.from(document.querySelectorAll('li'));

let isScrolling;

//create list item based on numbers of sections
function createListItem()
{
    //for each section
    for(section of sections)
    {
        item = document.createElement("li");
        item.innerHTML = `<a class='menu__link' href='#${section.getAttribute('id')}' data-nav='${section.id}' > ${section.getAttribute('data-nav')} </a>`;
        navigation.appendChild(item);
    }
};

createListItem();
//Detect the section position 
function getSectionPosition(elem)
{
    let secPosition = elem.getBoundingClientRect();
    return (secPosition);
};

//but section on active class
function activeClass()
{
    //const lists = Array.from(document.querySelectorAll('li'));
    const links = Array.from(document.querySelectorAll('ul li a'));
    for( section of sections)
    {
        if( getSectionPosition(section).top >=-10 && getSectionPosition(section).top <= 120 && !section.hasAttribute('your-active-class') )
        {
            section.classList.add('your-active-class');
            for(link of links)
            {
                if( section.id == link.getAttribute('data-nav'))
                {
                    link.classList.add('list_active');
                }
                else
                {
                    link.classList.remove('list_active');
                }
            } 
        }
        else
        {
            section.classList.remove('your-active-class');
        }
    }
};


//document.addEventListener('scroll',active_bar);
document.addEventListener('scroll',activeClass);

//make smooth scroling
navigation.addEventListener('click' , (evet) => {
    evet.preventDefault();
   if(evet.target.dataset.nav)
    {
        document.getElementById(evet.target.dataset.nav).scrollIntoView({behavior:"smooth"});
       
    }
});

//add button to scroll up
window.onscroll = function()
{
    if(window.pageYOffset>=250)
    {
        upButton.style.display='block';
    }
    else
    {
        setTimeout( () =>{
            upButton.style.display='none';
        },100);
    }
}

//scroll up
upButton.addEventListener('click',()=>{
    window.scrollTo({ top:0 , behavior:'smooth'});

});

//hide and display navigation bar

window.addEventListener('scroll', ()=>{
    navigation.style.display = "block"
    clearTimeout(isScrolling)
     isScrolling = setTimeout(() => {
      navigation.style.display = "none";
    }, 5000);
});


