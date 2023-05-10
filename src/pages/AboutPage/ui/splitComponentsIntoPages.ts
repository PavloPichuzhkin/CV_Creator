import {ReactNode} from "react";

export function splitComponentsIntoPages(componentsForPages:ReactNode[],pageHeight:number,componentsRefsCurrent: HTMLDivElement []|null []) {
    let componentsHeight = 0
    const componentsForPagesArray: ReactNode[][] = []
    let componentsForPage: ReactNode[] = []
    componentsForPages.forEach((component, index) => {
        componentsHeight += componentsRefsCurrent[index]?.clientHeight
        if(componentsHeight < pageHeight*(componentsForPagesArray.length+1)  ) {

            componentsForPage.push(component)
            if (index+ 1=== componentsForPages.length ){
                componentsForPagesArray.push(componentsForPage)
            }
            // console.log(componentsForPage,'componentsHeight',componentsHeight)

        }  else if (componentsHeight >= pageHeight * (componentsForPagesArray.length + 1)) {

            componentsForPagesArray.push(componentsForPage)
            componentsForPage=[]
            componentsForPage.push(component)
            // console.log('componentsHeight',componentsHeight,'(componentsForPagesArray.length+1)', (componentsForPagesArray.length + 1))
            if (index+ 1=== componentsForPages.length ){
                componentsForPagesArray.push([component])
            }
        }
    })
    // console.log(componentsForPagesArray)
    return componentsForPagesArray
}
