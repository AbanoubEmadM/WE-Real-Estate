let navItems = document.querySelectorAll(".nav-items li a");
navItems[0].classList.add("active");
navItems.forEach(item =>{
    item.addEventListener("click",()=>{
        navItems.forEach(item=>{
            item.classList.remove("active");
        })
        item.classList.add("active");
    })
})

//popup
let vidIcon = Array.from(document.querySelectorAll(".video"));

let vids = ['imgs/المني جاردنز.mp4','imgs/زين العذبيية.mp4','imgs/مروج الزين.mp4']

let links = ['https://drive.google.com/file/d/1AcNN4-7AFU0YBIr0f4gXQZPN4NgMopxK/view?usp=sharing','https://drive.google.com/file/d/1Ru7oEbXsmyxgmiTvWU6X0ptlwWeqWxnp/view?usp=sharing','https://drive.google.com/file/d/1PaqVr5Qzjx2vLZrUm6vl0oh4TegUi70x/view?usp=sharing','https://drive.google.com/file/d/19x10w6tkzTAj8m93NtObUZ5gUJwxxB0v/view?usp=sharing','https://drive.google.com/file/d/1FfAeOgvNJM1QL4p65Cx-aHqSrwVvtsI0/view?usp=sharing','https://drive.google.com/file/d/1cvFJQmzcdSFlEB7MZhQ29FoBrMraC-wE/view?usp=sharing'];

// start create popup
let popup = document.createElement("div");

popup.className = 'popup';

let innerPopup = document.createElement("div");
innerPopup.className = 'video-box'
let undefinedVideo = document.createElement("p");
innerPopup.append(undefinedVideo);
popup.appendChild(innerPopup)
//div handle video
let innerVid = document.createElement('video');

//close icon
let closePopup = document.createElement("i");

//p that handle link
let readMore = document.createElement("p");

//link to pdf
let pdfLink = document.createElement("a");

//div handle close and read more
let textHandler = document.createElement("div");

//append close and read to textHandler
textHandler.appendChild(closePopup);

textHandler.appendChild(readMore);

closePopup.className = 'fa-solid fa-xmark';

//append video and text to video box

innerPopup.appendChild(innerVid);

innerPopup.appendChild(textHandler)

vidIcon.forEach(icon => {
    icon.addEventListener("click",()=>{
        // close icon to remove popup from html
        closePopup.addEventListener("click",()=>{
            popup.remove();

        })

        //start add src to video box
        let index = vidIcon.indexOf(icon)
        //if there is no video for project
        if(vids[index] === undefined){
            undefinedVideo.innerHTML = 'لا يوجد فيديو للمشروع!';

            innerVid.style.display = 'none';

            undefinedVideo.style.display = 'block';

            undefinedVideo.style.textAlign = 'center';
        }
        else{
            innerVid.style.display = 'block'

            innerVid.src = vids[index];

            undefinedVideo.style.display = 'none';
        }
        innerVid.autoplay = true;

        innerVid.muted = false;

        pdfLink.href = links[index];

        pdfLink.textContent = 'اقرأ المزيد';

        readMore.appendChild(pdfLink);

        document.body.append(popup);

        document.querySelector('.services').appendChild(popup);

        window.scrollTo({behavior:'auto',top:1600,left:0});
    });
    
});

//nav responsive
let barsIcon = document.querySelector(".fa-bars");

let navItemsDiv = document.querySelector(".nav-items");

let logo = document.querySelector(".logo");

let closeI = document.createElement("i");
closeI.className = 'fa-solid fa-xmark';

barsIcon.addEventListener("click",()=>{
    //add active to show nav
    navItemsDiv.classList.add('active');
    logo.classList.add('hidden');
    barsIcon.classList.add("hidden");
    navItemsDiv.appendChild(closeI);

    //close icon to remove active from nav
    closeI.addEventListener("click",()=>{
        navItemsDiv.classList.remove('active');
        logo.classList.remove('hidden');
        barsIcon.classList.remove("hidden");
    
    });
});
