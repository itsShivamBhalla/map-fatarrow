import React from 'react';
import Card from './Card';
import cardData from './CardData';
import './index.css';
function App()
{
    return(
        
<>
<h1 >NETFLIX</h1>
<Card 
imgsrc={cardData[0].imgsrc}
sname={cardData[0].sname}
title = {cardData[0].title}
link={cardData[0].link}
/>

<Card 
imgsrc={cardData[1].imgsrc}
sname={cardData[1].sname}
title = {cardData[1].title}
link={cardData[1].link}
/>

<Card 
imgsrc={cardData[2].imgsrc}
sname={cardData[2].sname}
title = {cardData[2].title}
link={cardData[2].link}
/>

<Card 
imgsrc={cardData[3].imgsrc}
sname={cardData[3].sname}
title = {cardData[3].title}
link={cardData[3].link}
/>


</>
    )
}

export default App;
