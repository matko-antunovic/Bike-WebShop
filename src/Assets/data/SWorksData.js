
import demo1 from "../Images/ProductItem/StumpJumperExpert27/StumpJumperExpert27.5-1.jpg"
import demo2 from "../Images/ProductItem/Demo8/Demo8-2.jpg"
import demo3 from "../Images/ProductItem/Demo8/Demo8-3.jpg"

import stunt2 from "../Images/ProductItem/Demo8/Demo8-4.jpg"
import stunt3 from "../Images/ProductItem/Demo8/Demo8-5.jpg"
import stunt1 from "../Images/ProductItem/SW-StumpJumper29/SWStumpJumper29-1.jpg"

import evo1 from "../Images/ProductItem/EpicEVO/EpicEvo-1.jpg"
import evo2 from "../Images/ProductItem/EpicEVO/SWEpicEvo-2.jpg"
import evo3 from "../Images/ProductItem/EpicEVO/SWEpicEvo-3.jpg"

import stump1 from "../Images/ProductItem/StumpJumperExpert27/StumpJumperExpert27.5-1.jpg"
import stump2 from "../Images/ProductItem/StumpJumperExpert27/StumpJumperExpert27.5-2.jpg"
import stump3 from "../Images/ProductItem/StumpJumperExpert27/StumpJumperExpert27.5-3.jpg"


import evo5 from "../Images/ProductItem/EpicEVO/SWEpicEvo-6.jpg"

const SWORKS_DATA = 
    {
       id: 4,
       title: 'S-Works',
       routeName: 'shop/s-works',
       hidden:true,
       items: [
           {
               id: 1,
               name: 'S-Works Demo 8',
               price: '10,400.00',
               partNumber: 'No.94159-0009',
               imageUrl: [demo1,demo2,demo3]

           },
            {
               id: 2,
               name: 'S-Works Epic EVO',
               price: '9,500.00',
               partNumber: 'No.94159-0010',
               imageUrl:[evo1,evo2,evo3]
                
           },
            {
               id: 3,
               name: 'S-Works StumpJumper 29',
               price: '9,520.00',
               partNumber: 'No.94159-0011',
              imageUrl: [stunt1,stunt2,stunt3]

           },
            {
               id: 4,
               name: 'S-Works StumpJumper 27.5',
               price: '9,520.00',
               partNumber: 'No.94159-0012',
               imageUrl:[stump1,stump2,stump3]

           },
            {
               id: 5,
               name: 'S-Works Demo 8 Frame',
               price: '4,000.00',
               partNumber: 'No.94159-0013',
               imageUrl: [evo5]
           },
       ]
   }


export default SWORKS_DATA;