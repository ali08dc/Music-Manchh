let music = [

{
    id:1,
    name:"Ami Je Tomar ",
    artist: "Arijit Singh",
    audioSrc:"Songs/Arijit Singh - Ami Je Tomar_192(PagalWorld.com.se).mp3",
    imageSrc:"Images/Ami je tomar.jpg.jpg",
},
{
    id:2,
    name:"Dhokha ",
    artist: "Arijit Singh",
    audioSrc:"Songs/Arijit Singh - Dhokha_192(PagalWorld.com.se).mp3",
    imageSrc:"Images/Dhoka.jpg.jpg",
},
{
    id:3,
    name:"Dil Galti Kar Baitha Hai",
    artist: "Jubin Nautiyal",
    audioSrc:"Songs/Dil Galti Kar Baitha Hai_192(PagalWorld.com.se).mp3",
    imageSrc:"Images/Dil galti kr baitha h.jpg.jpg",
},
{
    id:4,
    name:"Mast Nazron Se ",
    artist: "Jubin Nautiyal",
    audioSrc:"Songs/Mast Nazron Se_192(PagalWorld.com.se).mp3",
    imageSrc:"Images/Mast Nazro se.jpg",
},
{
    id:5,
    name:"Meri Zindagi Hai Tu ",
    artist: "Jubin Nautiyal, Neha Kakkar",
    audioSrc:"Songs/Meri Zindagi Hai Tu_192(PagalWorld.com.se).mp3",
    imageSrc:"Images/Meri zindagi.jpg",
},
{
    id:6,
    name:"Srivalli",
    artist: "Javed Ali",
    audioSrc:"Songs/Srivalli_192(PagalWorld.com.se).mp3",
    imageSrc:"Images/Srivalli.jpg",
},
{
    id:7,
    name:"Tumse Pyaar Karke ",
    artist: "Jubin Nautiyal, Tulsi Kumar",
    audioSrc:"Songs/Tumse Pyaar Karke_192(PagalWorld.com.se).mp3",
    imageSrc:"Images/Tumse pyaar karke.jpg", 
},
{
    id:8,
    name:"Baarish Banke Aana ",
    artist: "Mohit Chauhan",
    audioSrc:"Songs/Baarish Banke Aana_192(PagalWorld.com.se).mp3",
    imageSrc:"Images/Baarish-Banke-Aana.jpg", 
},
{
    id:9,
    name:"Barish Aayi Hai ",
    artist: "Stebin Ben, Shreya Ghosal",
    audioSrc:"Songs/Barish Aayi Hai_192(PagalWorld.com.se).mp3",
    imageSrc:"Images/Baarish-Aayi-Hai.jpg", 
},
{
    id:10,
    name:"Galliyan Return",
    artist: "Ankit Tiwari",
    audioSrc:"Songs/Galliyan Returns_192(PagalWorld.com.se).mp3",
    imageSrc:"Images/Galliyan.avif", 
},
{
    id:11,
    name:"Hai Mera Dil Chura Ke Le Gaya & Over You(Remix)",
    artist: "Roach killa, Udit Narayan",
    audioSrc:"Songs/Hai Mera Dil Chura Ke Le Gaya & Over You (Remix)_192(PagalWorld.com.se).mp3",
    imageSrc:"Images/hai mera dil.jpg", 
},
{
    id:12,
    name:"Hum Nashe Mein Toh Nahin ",
    artist: "Arijit Singh, Tulsi Kumar",
    audioSrc:"Songs/Hum Nashe Mein Toh Nahin_192(PagalWorld.com.se).mp3",
    imageSrc:"Images/Hum nashe me.jpg", 
},
{
    id:13,
    name:"Kesariya ",
    artist: "Arijit Singh",
    audioSrc:"Songs/Kesariya_192(PagalWorld.com.se).mp3",
    imageSrc:"Images/kesariya.jfif", 
},
{
    id:14,
    name:"Love Is In The Air Mashup 2022",
    artist: "Jay Guldekar",
    audioSrc:"Songs/Love Is In The Air Mashup 2022 - Jay Guldekar_192(PagalWorld.com.se).mp3",
    imageSrc:"Images/love.jpg", 
},
{
    id:15,
    name:"Main Akela Hoon ",
    artist: "Tony Kakkar",
    audioSrc:"Songs/Main Akela Hoon_192(PagalWorld.com.se).mp3",
    imageSrc:"Images/Main-Akela-Hoon.jpg", 
},
{
    id:16,
    name:"Shades of Love Mashup 2022",
    artist: "Variuos Artist",
    audioSrc:"Songs/Shades of Love Mashup 2022 - Amtee_192(PagalWorld.com.se).mp3",
    imageSrc:"Images/shade.jpg", 
},
{
    id:17,
    name:"Barish Mein Tum",
    artist: "Neha kakkar, Rohanpreet Singh",
    audioSrc:"Songs/Baarish Mein Tum_192(PagalWorld.com.se).mp3",
    imageSrc:"Images/BMT.jpg", 
},
{
    id:18,
    name:"Jo Tainu Dhoop Lagya Ve",
    artist: "Rito Riba",
    audioSrc:"Songs/Jo Tainu Dhoop Lagya Ve_192(PagalWorld.com.se).mp3",
    imageSrc:"Images/Jo tenu.jpeg", 
},
{
    id:19,
    name:"Manike",
    artist: "Yohani, Jubin Nautiyal",
    audioSrc:"Songs/Manike_192(PagalWorld.com.se).mp3",
    imageSrc:"Images/Manike.jpg", 
},
{
    id:20,
    name:"Mehbooba Main Teri Mehbooba",
    artist: "Ananya Bhat",
    audioSrc:"Songs/Mehbooba Main Teri Mehbooba (KGF Chapter 2)_192(PagalWorld.com.se).mp3",
    imageSrc:"Images/Mehabooba.jpg", 
},

]

for (let i=0;i<music.length;i++)
{   

    

    let tile = document.createElement("div");
    tile.classList.add("tile");


    let thumbnail = document.createElement("div");
    thumbnail.classList.add("thumbnail");

    let img = document.createElement("img");
    img.src = music[i].imageSrc;

    thumbnail.append(img);
    tile.append(thumbnail);

    let description = document.createElement("div");
    description.classList.add("description");

    let h2 = document.createElement("h2");
    h2.append(music[i].name);
    description.append(h2);

    let h3 = document.createElement("h3");
    h3.append(music[i].artist);
    description.append(h3);

    tile.append(description);

    tile.addEventListener("click",function(){
        playMusic(music[i]);
    });

    document.querySelector(".music-list").append(tile);
}

function playMusic(music)
{
    document.querySelector(".player").style.marginLeft="0";
    document.querySelector(".main-thumbnail-img").src=music.imageSrc;
    document.querySelector(".song-name").innerText=music.name;
    document.querySelector(".artist-name").innerText=music.artist;
    document.querySelector(".audio").src=music.audioSrc;
    document.querySelector(".audio").play();
}

function closePlayer()
{
    document.querySelector(".player").style.marginLeft="100%";
    document.querySelector(".audio").pause();
}

