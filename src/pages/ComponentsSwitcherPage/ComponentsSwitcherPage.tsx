import React, {useEffect, useState} from 'react';
import cls from "./ComponentsSwitcherPage.module.scss";
import Component from "../../widgets/ComponentsChanger/components/Component";
import ComponentABCD from "../../widgets/ComponentsChanger/components/ComponentABCD";

const ComponentsSwitcherPage = () => {
        const componentsForRender = [
            {id: 0, content: {title: '<ComponentA/>', description: '<A/>',}},
            {id: 1, content: {title: '<ComponentB/>', description: '<B/>',}},
            {id: 2, content: {title: '<ComponentC/>', description: '<C/>',}},
            {id: 3, content: {title: '<ComponentD/>', description: '<D/>',}},
        ]
        const [visible, setVisible] = useState(0)
        useEffect(() => {
            const interval = setInterval(() => {
                if (visible >= 3) {
                    setVisible(0)
                } else {
                    setVisible(visible => visible + 1)
                }

            }, 5000)
            return () => clearInterval(interval);

        }, [visible])
        return (
            <div className={cls.container}>
                <div>{visible}.</div>
                {componentsForRender.map((component) => {
                    if (component.id === visible) {
                        return <div key={component.id}  className={cls.container}><ComponentABCD
                            title={component.content.title} description={component.content.description}/>
                        </div>
                    }
                })}
            </div>);
    }
;

export default ComponentsSwitcherPage;

// const ComponentsSwitcherPage = props => {
//     const contentForRender = [{
//         id: 0,
//         title: 'Lorem1',
//         description: '1Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, culpa deleniti dolores ipsa'
//     }, {
//         id: 1,
//         title: 'Lorem2',
//         description: '2Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, culpa deleniti dolores ipsa'
//     },
//
//         {
//             id: 2,
//             title: 'Lorem3',
//             description: '3Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, culpa deleniti dolores ipsa'
//         },
//
//         {
//             id: 3,
//             title: 'Lorem4',
//             description: '4Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, culpa deleniti dolores ipsa'
//         },
//
//     ]
//     const [showDescription, setShowDescription] = useState(0)
//     useEffect(() => {
//         const interval = setInterval(() => {
//             if (showDescription >= 3) {
//                 setShowDescription(0)
//             } else {
//                 setShowDescription(visible => visible + 1)
//             }
//
//         }, 2000)
//         return () => clearInterval(interval);
//     }, [showDescription])
//     return (<div className={cls.container}>
//         <div>]{showDescription}.</div>
//         {contentForRender.map((component) => {
//             {
//                 return <div key={component.id}>
//                     <Component title={component.title}
//                                description={component.description}
//                                showDescription={component.id === showDescription}/></div>
//             }
//         })}
//     </div>);
// };
//
// export default (ComponentsSwitcherPage);
