fetch('http://localhost:3000/heroContent')
  .then(res => res.json())
  .then(data => {
    console.log(data);
  });

fetch('http://localhost:3000/featureCards')
  .then(res => res.json())
  .then(cards => {
    console.log(cards); 
  });