var button,button2,button3,button4,button5,button6,button7,button8,button9,button10,button11,button12,button13
    button14,button15,button16,button17,button18,button19,button20,button21,button22,button23;

var alphabetsSound;

function preload(){
    alphabetsSound = loadSound("sounds/alphabets.ogg");
    bananaSound = loadSound("sounds/banana.ogg");
    bathTimeSound = loadSound("sounds/bath time.ogg");
    beedsGameSound = loadSound("sounds/beeds game.ogg");
    brushingSound = loadSound("sounds/brushing.ogg");
    chipsSound = loadSound("sounds/chips.ogg");
    chuChuTvSound = loadSound("sounds/chu chu tv.ogg");
    coloringSound = loadSound("sounds/coloring time.ogg");
    cookiesSound = loadSound("sounds/cookies.ogg");
    gymSound = loadSound("sounds/gym time.ogg");
    juiceSound = loadSound("sounds/juice.ogg");
    mouldsSound = loadSound("sounds/moulds.ogg");
    nappySound = loadSound("sounds/nappy.ogg");
    orangeSound = loadSound("sounds/orange.ogg");
    peeTimeSound = loadSound("sounds/poo poo and pee time.ogg");
    rhymesSound = loadSound("sounds/rhymes.ogg");
    foodSound = loadSound("sounds/roti dal and chawal.ogg");
    rotiPizzaSound = loadSound("sounds/roti pizza.ogg");
    schoolBusSound = loadSound("sounds/school bus.ogg");
    schoolTimeSound = loadSound("sounds/school time.ogg");
    shoesAndJacketSound = loadSound("sounds/shoes and jacket.ogg");
    swingsSound = loadSound("sounds/swings.ogg");
    waterSound = loadSound("sounds/water.ogg");
}

function setup(){
    createCanvas(displayWidth,displayHeight);
    button = createButton("Sound 👂👂");
    button2 = createButton("Sound 👂👂");
    button3 = createButton("Sound 👂👂");
    button4 = createButton("Sound 👂👂");
    button5 = createButton("Sound 👂👂");
    button6 = createButton("Sound 👂👂");
    button7 = createButton("Sound 👂👂");
    button8 = createButton("Sound 👂👂");
    button9 = createButton("Sound 👂👂");
    button10 = createButton("Sound 👂👂");
    button11 = createButton("Sound 👂👂");
    button12 = createButton("Sound 👂👂");
    button13 = createButton("Sound 👂👂");
    button14 = createButton("Sound 👂👂");
    button15 = createButton("Sound 👂👂");
    button16 = createButton("Sound 👂👂");
    button17 = createButton("Sound 👂👂");
    button18 = createButton("Sound 👂👂");
    button19 = createButton("Sound 👂👂");
    button20 = createButton("Sound 👂👂");
    button21 = createButton("Sound 👂👂");
    button22 = createButton("Sound 👂👂"); 
    button23 = createButton("Sound 👂👂");
}

function draw(){
    button.position(displayWidth/2-130,displayHeight/2+200);
    button.style("font-family","Berlin Sans FB");
    button.style("background-color","gold");
    button.style("color","#000");
    button.style("width","250px");
    button.style("height","40px");
    button.style("font-size","30px");

    button.mousePressed(()=>{
        alphabetsSound.play();
    })

    button2.position(displayWidth/2-130,displayHeight/2+870);
    button2.style("font-family","Berlin Sans FB");
    button2.style("background-color","gold");
    button2.style("color","#000");
    button2.style("width","250px");
    button2.style("height","40px");
    button2.style("font-size","30px");

    button2.mousePressed(()=>{
        bananaSound.play();
    })

    button3.position(displayWidth/2-130,displayHeight/2+1440);
    button3.style("font-family","Berlin Sans FB");
    button3.style("background-color","gold");
    button3.style("color","#000");
    button3.style("width","250px");
    button3.style("height","40px");
    button3.style("font-size","30px");

    button3.mousePressed(()=>{
        bathTimeSound.play();
    })

    button4.position(displayWidth/2-130,displayHeight/2+2080);
    button4.style("font-family","Berlin Sans FB");
    button4.style("background-color","gold");
    button4.style("color","#000");
    button4.style("width","250px");
    button4.style("height","40px");
    button4.style("font-size","30px");

    button4.mousePressed(()=>{
        beedsGameSound.play();
    })

    button5.position(displayWidth/2-130,displayHeight/2+2740);
    button5.style("font-family","Berlin Sans FB");
    button5.style("background-color","gold");
    button5.style("color","#000");
    button5.style("width","250px");
    button5.style("height","40px");
    button5.style("font-size","30px");

    button5.mousePressed(()=>{
        brushingSound.play();
    })

    button6.position(displayWidth/2-130,displayHeight/2+3420);
    button6.style("font-family","Berlin Sans FB");
    button6.style("background-color","gold");
    button6.style("color","#000");
    button6.style("width","250px");
    button6.style("height","40px");
    button6.style("font-size","30px");

    button6.mousePressed(()=>{
        chipsSound.play();
    })

    button7.position(displayWidth/2-130,displayHeight/2+4390);
    button7.style("font-family","Berlin Sans FB");
    button7.style("background-color","gold");
    button7.style("color","#000");
    button7.style("width","250px");
    button7.style("height","40px");
    button7.style("font-size","30px");

    button7.mousePressed(()=>{
        coloringSound.play();
    })

    button8.position(displayWidth/2-130,displayHeight/2+4760);
    button8.style("font-family","Berlin Sans FB");
    button8.style("background-color","gold");
    button8.style("color","#000");
    button8.style("width","250px");
    button8.style("height","40px");
    button8.style("font-size","30px");

    button8.mousePressed(()=>{
        cookiesSound.play();
    })

    button9.position(displayWidth/2-130,displayHeight/2+5460);
    button9.style("font-family","Berlin Sans FB");
    button9.style("background-color","gold");
    button9.style("color","#000");
    button9.style("width","250px");
    button9.style("height","40px");
    button9.style("font-size","30px");

    button9.mousePressed(()=>{
        juiceSound.play();
    })

    button10.position(displayWidth/2-130,displayHeight/2+6090);
    button10.style("font-family","Berlin Sans FB");
    button10.style("background-color","gold");
    button10.style("color","#000");
    button10.style("width","250px");
    button10.style("height","40px");
    button10.style("font-size","30px");

    button10.mousePressed(()=>{
        mouldsSound.play();
    })

    button11.position(displayWidth/2-130,displayHeight/2+6750);
    button11.style("font-family","Berlin Sans FB");
    button11.style("background-color","gold");
    button11.style("color","#000");
    button11.style("width","250px");
    button11.style("height","40px");
    button11.style("font-size","30px");

    button11.mousePressed(()=>{
        nappySound.play();
    })

    button12.position(displayWidth/2-130,displayHeight/2+7110);
    button12.style("font-family","Berlin Sans FB");
    button12.style("background-color","gold");
    button12.style("color","#000");
    button12.style("width","250px");
    button12.style("height","40px");
    button12.style("font-size","30px");

    button12.mousePressed(()=>{
        orangeSound.play();
    })

    button13.position(displayWidth/2-130,displayHeight/2+7920);
    button13.style("font-family","Berlin Sans FB");
    button13.style("background-color","gold");
    button13.style("color","#000");
    button13.style("width","250px");
    button13.style("height","40px");
    button13.style("font-size","30px");

    button13.mousePressed(()=>{
        gymSound.play();
    })

    button14.position(displayWidth/2-130,displayHeight/2+8610);
    button14.style("font-family","Berlin Sans FB");
    button14.style("background-color","gold");
    button14.style("color","#000");
    button14.style("width","250px");
    button14.style("height","40px");
    button14.style("font-size","30px");

    button14.mousePressed(()=>{
        peeTimeSound.play();
    })

    button15.position(displayWidth/2-130,displayHeight/2+9020);
    button15.style("font-family","Berlin Sans FB");
    button15.style("background-color","gold");
    button15.style("color","#000");
    button15.style("width","250px");
    button15.style("height","40px");
    button15.style("font-size","30px");

    button15.mousePressed(()=>{
        rhymesSound.play();
    })

    button16.position(displayWidth/2-130,displayHeight/2+9490);
    button16.style("font-family","Berlin Sans FB");
    button16.style("background-color","gold");
    button16.style("color","#000");
    button16.style("width","250px");
    button16.style("height","40px");
    button16.style("font-size","30px");

    button16.mousePressed(()=>{
        foodSound.play();
    })

    button17.position(displayWidth/2-130,displayHeight/2+10060);
    button17.style("font-family","Berlin Sans FB");
    button17.style("background-color","gold");
    button17.style("color","#000");
    button17.style("width","250px");
    button17.style("height","40px");
    button17.style("font-size","30px");

    button17.mousePressed(()=>{
        rotiPizzaSound.play();
    })

    button18.position(displayWidth/2-130,displayHeight/2+10760);
    button18.style("font-family","Berlin Sans FB");
    button18.style("background-color","gold");
    button18.style("color","#000");
    button18.style("width","250px");
    button18.style("height","40px");
    button18.style("font-size","30px");

    button18.mousePressed(()=>{
        schoolBusSound.play();
    })

    button19.position(displayWidth/2-130,displayHeight/2+11220);
    button19.style("font-family","Berlin Sans FB");
    button19.style("background-color","gold");
    button19.style("color","#000");
    button19.style("width","250px");
    button19.style("height","40px");
    button19.style("font-size","30px");

    button19.mousePressed(()=>{
        schoolTimeSound.play();
    })

    button20.position(displayWidth/2-130,displayHeight/2+11670);
    button20.style("font-family","Berlin Sans FB");
    button20.style("background-color","gold");
    button20.style("color","#000");
    button20.style("width","250px");
    button20.style("height","40px");
    button20.style("font-size","30px");

    button20.mousePressed(()=>{
        shoesAndJacketSound.play();
    })

    button21.position(displayWidth/2-130,displayHeight/2+12360);
    button21.style("font-family","Berlin Sans FB");
    button21.style("background-color","gold");
    button21.style("color","#000");
    button21.style("width","250px");
    button21.style("height","40px");
    button21.style("font-size","30px");

    button21.mousePressed(()=>{
        swingsSound.play();
    })

    button22.position(displayWidth/2-130,displayHeight/2+13070);
    button22.style("font-family","Berlin Sans FB");
    button22.style("background-color","gold");
    button22.style("color","#000");
    button22.style("width","250px");
    button22.style("height","40px");
    button22.style("font-size","30px");

    button22.mousePressed(()=>{
        waterSound.play();
    })

    button23.position(displayWidth/2-130,displayHeight/2+3750);
    button23.style("font-family","Berlin Sans FB");
    button23.style("background-color","gold");
    button23.style("color","#000");
    button23.style("width","250px");
    button23.style("height","40px");
    button23.style("font-size","30px");

    button23.mousePressed(()=>{
        chuChuTvSound.play();
    })
}