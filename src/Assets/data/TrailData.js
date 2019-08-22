
import stumpE2 from "../Images/ProductItem/StumpJumperExpert29/StumpJumperExpert29-2.jpg"
import stumpE3 from "../Images/ProductItem/StumpJumperExpert29/StumpJumperExpert29-3.jpg"
import stumpE4 from "../Images/ProductItem/StumpJumperExpert29/StumpJumperExpert29-4.jpg"

import stump1 from "../Images/ProductItem/StumpJumperExpert27/StumpJumperExpert27.5-1.jpg"
import stump2 from "../Images/ProductItem/StumpJumperExpert27/StumpJumperExpert27.5-2.jpg"
import stump3 from "../Images/ProductItem/StumpJumperExpert27/StumpJumperExpert27.5-3.jpg"
import stump4 from "../Images/ProductItem/StumpJumperExpert27/StumpJumperExpert27.5-4.jpg"


import expert1 from "../Images/ProductItem/EpicEVO/EpicEvo-1.jpg"
import expert2 from "../Images/ProductItem/StumpJumperExpert27/StumpJumperExpert27.5-2.jpg"
import expert3 from "../Images/ProductItem/StumpJumperExpert27/StumpJumperExpert27.5-3.jpg"

import fuse1 from "../Images/ProductItem/SW-StumpJumper29/SWStumpJumper29-1.jpg";
import fuse2 from "../Images/ProductItem/StumpJumperExpert29/StumpJumperExpert29-2.jpg"
import fuse3 from "../Images/ProductItem/StumpJumperExpert29/StumpJumperExpert29-3.jpg"

import bic1 from "../Images/ProductItem/DemoAlloy27/DemoAlloy27.5-1.jpg"
import demo2 from "../Images/ProductItem/Demo8/Demo8-2.jpg"
import demo3 from "../Images/ProductItem/Demo8/Demo8-3.jpg"

const TRAIL_DATA = 
    {
        id: 2,
        title: 'Trail',
        routeName: 'shop/trail',
        hidden:true,
        items: [
            {
                id: 1,
                name: 'StumpJumper Pro 29',
                price: '6,300.00',
                partNumber: 'No.94159-0001',
                imageUrl: [stump1,stump2,stump3,stump4]
            

            },
             
             {
                id: 3,
                name: 'StumpJumper Expert 27.5',
                price: '5,000.00',
                partNumber: 'No.94159-0003',
                imageUrl: [expert1,expert2,expert3]
            

            },
             {
                id: 4,
                name: 'Fuse Expert 29',
                price: '2,100.00',
                partNumber: 'No.94159-0004',
                imageUrl: [fuse1,fuse2,fuse3
                ]
            

            },
            
             {
                id: 5,
                name: 'Fuse Expert 27.5',
                price: '2,000.00',
                partNumber: 'No.94159-0005',
                imageUrl: [bic1,demo2,demo3
                ]
            

            },
            {
                id: 2,
                name: 'StumpJumper Expert 29',
                price: '5,000.00',
                partNumber: 'No.94159-0002',
                imageUrl: [stump2,stumpE2,stumpE3,stumpE4]
            

            }
        ]
    }


export default TRAIL_DATA;