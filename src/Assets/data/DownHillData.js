import racer1 from "../Images/ProductItem/DemoRacer29/DemoRacer29-1.jpg"
import racer2 from "../Images/ProductItem/DemoRacer29/DemoRacer29-2.jpg"
import racer3 from "../Images/ProductItem/DemoRacer29/DemoRacer29-3.jpg"
import racer4 from "../Images/ProductItem/DemoRacer29/DemoRacer29-4.jpg"


import expert1 from "../Images/ProductItem/DemoExpert29/DemoExpert29-1.jpg"
import expert2 from "../Images/ProductItem/DemoExpert29/DemoExpert29-2.jpg"
import expert3 from "../Images/ProductItem/DemoExpert29/DemoExpert29-3.jpg"
import expert4 from "../Images/ProductItem/DemoExpert29/DemoExpert29-4.jpg"

import bic1 from "../Images/ProductItem/DemoAlloy27/DemoAlloy27.5-1.jpg"
import bic2 from "../Images/ProductItem/StumpJumperExpert27/StumpJumperExpert27.5-2.jpg"
import bic3 from "../Images/ProductItem/StumpJumperExpert27/StumpJumperExpert27.5-3.jpg"

import heroImg from "../Images/Downhill/DownHillHero.jpg"
import cuid from "cuid"

const DOWNHILL_DATA = 
    {
        id: 1,
        title: 'DownHill',
        routeName: 'shop/downhill',
        heroImage:heroImg,
        items: [
           {
                id: cuid(),
                name: 'Demo Racer 29',
                price: '6,500.00',
                partNumber: 'No.94159-0006',
                quantity:0,
                imageUrl: [racer1,racer2,racer3,racer4]
        
            },
             {
                id: cuid(),
                name: 'Demo Expert 29',
                price: '6,300.00',
                partNumber: 'No.94159-0007',
                quantity:0,
                imageUrl: [expert1,expert2,expert3,expert4]
               
            },
             {
                id:cuid(),
                name: 'Demo Alloy 27.5',
                price: '3,400.00',
                partNumber: 'No.94159-0008',
                quantity:0,
                imageUrl: [bic1 ,bic2,bic3]
               
            },
        ]
    }


export default DOWNHILL_DATA;