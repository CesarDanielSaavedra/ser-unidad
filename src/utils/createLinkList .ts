interface LinksDictionary {
  [key: string]: string;
}

interface Routes{
  [key: string]: string;
}

interface LinksItems {
  path: string;
  label: string;
}
  
export const createLinkList  = (linksDictionary: LinksDictionary, routes: Routes) : LinksItems[] => {
  
  return Object.keys(linksDictionary).map((key) => {
    if (routes[key]) {
      return {
        path: routes[key],
        label: linksDictionary[key],
      };
    } else {
      console.warn(`ROUTES does not contain key: ${key}`);
      return {
        path: "#", 
        label: linksDictionary[key],
      };
    }
  });

};