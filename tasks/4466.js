
const routes = [
    {
      name: 'M1',
      comp: 'C1',
    },
    {
      name: 'M2',
      comp: 'C2',
    },
    {
      name: 'M3',
      subComp: [
        {
          name: 'M3A',
          comp: 'C3A',
        },
        {
          name: 'M3B',
          comp: 'C3B',
        },
      ],
    },
    {
      name: 'M4',
      subComp: [
        {
          name: 'M4A',
          comp: 'C4A',
        },
        {
          name: 'M4B',
          comp: 'C4B',
        },
      ],
    },
    {
      name: 'M5',
      subComp: [
        {
          name: 'M5A',
          comp: 'C5A',
        },
        {
          name: 'M5B',
          subComp: [
            {
              name: 'M5BA',
              comp: 'C5BA',
            },
            {
              name: 'M5BB',
              comp: 'C5BB',
            },
            {
              name: 'M5BC',
              comp: 'C5BC',
            },
          ],
        },
        {
          name: 'M5C',
          comp: 'C5C',
        },
      ],
    },
  ];
  
  const subscription = [
    {
      name: 'M1',
      isSub: true,
    },
    {
      name: 'M2',
      isSub: true,
    },
    {
      name: 'M3',
      isSub: false,
      subMod: [
        {
          name: 'M3A',
          isSub: true,
        },
        {
          name: 'M3B',
          isSub: true,
        },
      ],
    },
    {
      name: 'M4',
      isSub: true,
      subMod: [
        {
          name: 'M4A',
          isSub: false,
        },
        {
          name: 'M4B',
          isSub: true,
        },
      ],
    },
    {
      name: 'M5',
      isSub: true,
      subMod: [
        {
          name: 'M5A',
          isSub: false,
        },
        {
          name: 'M5B',
          isSub: true,
  
          subComp: [
            {
              name: 'M5BA',
              isSub: false,
            },
            {
              name: 'M5BB',
              isSub: true,
            },
            {
              name: 'M5BC',
              isSub: false,
            },
          ],
        },
        {
          name: 'M5C',
          isSub: true,
        },
      ],
    },
  ];

  // addRedirect function has only one task to i.e adding 'addRedirect' object 
// function addRedirect(subscription,updatedRoutes){
//     for(let i=0;i<subscription.length;i++){
//         let obj = subscription[i]
//         if(obj.isSub === true){
//             let temp={}
//             temp.redirectTo = obj.name
//             updatedRoutes.push(temp)
//             break;
//         }
//     }
// }

let flag =true;

function updateComponents(routes, subscription) {
    const updatedRoutes = [];
    let flag=true
    // if(flag){
    //     console.log("first")
    //     addRedirect(subscription,updatedRoutes)
    // }
    for (const route of routes) {
        // console.log(route)
        let subMod;
      
        if(typeof subscription != "undefined" ){
            subMod = subscription.find((sub)=>{ return (sub.name === route.name && sub.isSub == true)});
            // ind = subscription.findInd((sub)=>{ return (sub.name === route.name && sub.isSub == true)});

            // console.log("-----------")
            // console.log(subMod)
        }
        
      if (!subMod || (subMod && !subMod.isSub)) {
                                                //      Module not subscribed or not present in subscription
        if (route.comp) {
          route.comp = 'UN';
        } else if (route.subComp) {
          for (const subComp of route.subComp) {
            subComp.comp = 'UN';
          }
        }
      }else if(flag){       // is  subMod is not empty that means one redirection route found
        let firstRedirectObj={}
        firstRedirectObj.redirectTo =subMod.name
        updatedRoutes.push(firstRedirectObj)
        flag=false
      }
  
      if (route.subComp) {
        // Recursively update sub-components
        let ind;
        for(let i =0;i<subscription.length;i++){
            if(route.name ==subscription[i].name){
                ind=i;
                break;
            }
        }

        
        route.subComp = updateComponents(route.subComp,subscription[ind].subMod);
      }
      updatedRoutes.push(route);
    }
    return updatedRoutes;
  }
  
  // Update components based on subscription
  const resultRoutes = updateComponents(routes, subscription);
console.log("Resulttttttttttttttttt")
console.log(JSON.stringify(resultRoutes));
  
