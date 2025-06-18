const URL = "http://localhost:3000/data";


const mainTitle = document.querySelector("#info1>div>h1");
const subtitle = document.querySelector("#info1>div>p");
const image = document.querySelector("#info1>img");
const zeroTitle = document.querySelector("#info2>div>h1");
const subtitle2 = document.querySelector("#info2>div>p");
const image2 = document.querySelector("#info2>img");


const title1 = document.querySelector("#heading1");
const image1_1 = document.querySelector(".img1_1");
const image1_2 = document.querySelector(".img1_2");
const image1_3 = document.querySelector(".img1_3");
const image1_4 = document.querySelector(".img1_4");


const title2 = document.querySelector("#heading2");
const image2_1 = document.querySelector(".img2_1");
const image2_2 = document.querySelector(".img2_2");
const image2_3 = document.querySelector(".img2_3");
const image2_4 = document.querySelector(".img2_4");
const image2_5 = document.querySelector(".img2_5");
const image2_6 = document.querySelector(".img2_6");
const image2_7 = document.querySelector(".img2_7");


const title3 = document.querySelector("#heading3")
const image3_1 = document.querySelector(".img3_1");
const image3_2 = document.querySelector(".img3_2");
const image3_3 = document.querySelector(".img3_3");
const image3_4 = document.querySelector(".img3_4");
const image3_5 = document.querySelector(".img3_5");
const image3_6 = document.querySelector(".img3_6");
const image3_7 = document.querySelector(".img3_7");
const image3_8 = document.querySelector(".img3_8");
const image3_9 = document.querySelector(".img3_9");
const image3_10 = document.querySelector(".img3_10");
const image3_11 = document.querySelector(".img3_11");


const title4 = document.querySelector("#heading4")
const image4_1 = document.querySelector(".img4_1");
const image4_2 = document.querySelector(".img4_2");
const image4_3 = document.querySelector(".img4_3");
const image4_4 = document.querySelector(".img4_4");
const image4_5 = document.querySelector(".img4_5");


const getData = (url) => {
  const dataFromServer = fetch(url).then((response) => response.json());
  return dataFromServer;
};


const render = (url, element) => {
  const data = getData(url);


  data.then((data) => {
    element.textContent = data[0].header.title;
  });
};


const render2 = (url, element) => {
  const data = getData(url);


  data.then((data) => {
    element.textContent = data[0].header.subtitle;
  });
};
const render3 = (url, element) => {
  const data = getData(url);


  data.then((data) => {
    element.src = data[0].header.image;
  });
};


const render4 = (url, element) => {
  const data = getData(url);


  data.then((data) => {
    element.textContent = data[1].section1.title;
  });
};


const render5 = (url, element) => {
  const data = getData(url);


  data.then((data) => {
    element.textContent = data[1].section1.subtitle;
  });
};


const render6 = (url, element) => {
  const data = getData(url);


  data.then((data) => {
    element.src = data[1].section1.image;
  });
};


const renderTitle1 = (url, element) => {
  const data = getData(url);


  data.then((data) => {
    element.textContent = data[2].section2.title;
  });
};


const renderIMg1_1 = (url, element) => {
  const data = getData(url);


  data.then((data) => {
    element.src = data[2].section2.image1;
  });
};


const renderImg1_2 = (url, element) => {
  const data = getData(url);


  data.then((data) => {
    element.src = data[2].section2.image2;
  });
};


const renderImg1_3 = (url, element) => {
  const data = getData(url);


  data.then((data) => {
    element.src = data[2].section2.image3;
  });
};


const renderImg1_4 = (url, element) => {
  const data = getData(url);


  data.then((data) => {
    element.src = data[2].section2.image4;
  });
};


const renderTitle2 = (url, element) => {
  const data = getData(url);


  data.then((data) => {
    element.textContent = data[3].section3.title;
  });
};


const renderImg2_1 = (url, element) => {
  const data = getData(url);


  data.then((data) => {
    element.src = data[3].section3.image1;
  });
};


const renderImg2_2 = (url, element) => {
  const data = getData(url);


  data.then((data) => {
    element.src = data[3].section3.image2;
  });
};


const renderImg2_3 = (url, element) => {
  const data = getData(url);


  data.then((data) => {
    element.src = data[3].section3.image3;
  });
};


const renderImg2_4 = (url, element) => {
  const data = getData(url);


  data.then((data) => {
    element.src = data[3].section3.image4;
  });
};


const renderImg2_5 = (url, element) => {
  const data = getData(url);


  data.then((data) => {
    element.src = data[3].section3.image5;
  });
};


const renderImg2_6 = (url, element) => {
  const data = getData(url);


  data.then((data) => {
    element.src = data[3].section3.image6;
  });
};


const renderImg2_7 = (url, element) => {
  const data = getData(url);


  data.then((data) => {
    element.src = data[3].section3.image7;
  });
};


const renderTitle3 = (url, element) => {
  const data = getData(url);


  data.then((data) => {
    element.textContent = data[4].section4.title;
  });
};


const renderImg3_1 = (url, element) => {
  const data = getData(url);


  data.then((data) => {
    element.src = data[4].section4.image1;
  });
};


const renderImg3_2 = (url, element) => {
  const data = getData(url);


  data.then((data) => {
    element.src = data[4].section4.image2;
  });
};


const renderImg3_3 = (url, element) => {
  const data = getData(url);


  data.then((data) => {
    element.src = data[4].section4.image3;
  });
};


const renderImg3_4 = (url, element) => {
  const data = getData(url);


  data.then((data) => {
    element.src = data[4].section4.image4;
  });
};


const renderImg3_5 = (url, element) => {
  const data = getData(url);


  data.then((data) => {
    element.src = data[4].section4.image5;
  });
};


const renderImg3_6 = (url, element) => {
  const data = getData(url);


  data.then((data) => {
    element.src = data[4].section4.image6;
  });
};


const renderImg3_7 = (url, element) => {
  const data = getData(url);


  data.then((data) => {
    element.src = data[4].section4.image7;
  });
};


const renderImg3_8 = (url, element) => {
  const data = getData(url);


  data.then((data) => {
    element.src = data[4].section4.image8;
  });
};


const renderImg3_9 = (url, element) => {
  const data = getData(url);


  data.then((data) => {
    element.src = data[4].section4.image9;
  });
};


const renderImg3_10 = (url, element) => {
  const data = getData(url);


  data.then((data) => {
    element.src = data[4].section4.image10;
  });
};


const renderImg3_11 = (url, element) => {
  const data = getData(url);


  data.then((data) => {
    element.src = data[4].section4.image11;
  });
};


const renderTitle4 = (url, element) => {
  const data = getData(url);


  data.then((data) => {
    element.textContent = data[5].section5.title;
  });
};


const renderImg4_1 = (url, element) => {
  const data = getData(url);


  data.then((data) => {
    element.src = data[5].section5.image1;
  });
};


const renderImg4_2 = (url, element) => {
  const data = getData(url);


  data.then((data) => {
    element.src = data[5].section5.image2;
  });
};


const renderImg4_3 = (url, element) => {
  const data = getData(url);


  data.then((data) => {
    element.src = data[5].section5.image3;
  });
};


const renderImg4_4 = (url, element) => {
  const data = getData(url);


  data.then((data) => {
    element.src = data[5].section5.image4;
  });
};


const renderImg4_5 = (url, element) => {
  const data = getData(url);


  data.then((data) => {
    element.src = data[5].section5.image5;
  });
};


render(URL, mainTitle);
render2(URL, subtitle);
render3(URL, image);


render4(URL, zeroTitle);
render5(URL, subtitle2);
render6(URL, image2);


renderTitle1(URL, title1);
renderIMg1_1(URL, image1_1);
renderImg1_2(URL, image1_2);
renderImg1_3(URL, image1_3);
renderImg1_4(URL, image1_4);


renderTitle2(URL, title2);
renderImg2_1(URL, image2_1);
renderImg2_2(URL, image2_2);
renderImg2_3(URL, image2_3);
renderImg2_4(URL, image2_4);
renderImg2_5(URL, image2_5);
renderImg2_6(URL, image2_6);
renderImg2_7(URL, image2_7);


renderTitle3(URL, title3);
renderImg3_1(URL, image3_1);
renderImg3_2(URL, image3_2);
renderImg3_3(URL, image3_3);
renderImg3_4(URL, image3_4);
renderImg3_5(URL, image3_5);
renderImg3_6(URL, image3_6);
renderImg3_7(URL, image3_7);
renderImg3_8(URL, image3_8);
renderImg3_9(URL, image3_9);
renderImg3_10(URL, image3_10);
renderImg3_11(URL, image3_11);


renderTitle4(URL, title4);
renderImg4_1(URL, image4_1);
renderImg4_2(URL, image4_2);
renderImg4_3(URL, image4_3);
renderImg4_4(URL, image4_4);
renderImg4_5(URL, image4_5);