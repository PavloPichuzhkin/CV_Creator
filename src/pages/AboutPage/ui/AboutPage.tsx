import React, {RefObject, useEffect, useMemo, useRef, useState} from 'react';
import cls from './AboutPage.module.scss';
// import TestSvgImgPgn from '@/widgets/testSvgImgPgn/TestSvgImgPgn';

import {TestSvgImgPgn} from "widgets/testSvgImgPgn/TestSvgImgPgn";

function AboutPage(props: any) {

    // const divRef: React.MutableRefObject<HTMLDivElement[]> = useRef([]);
    const divRef: React.MutableRefObject<HTMLDivElement> = useRef();

    const [divText, setDivText] = useState(['something 1 Lorem ipsum dolor sit amet, consectetur adipisicing \n' +
    '                elit. Tenetur, voluptatem.', 'something 2 Lorem ipsum dolor sit amet, consectetur adipisicing \n' +
    '                elit. Tenetur, voluptatem.']);
    const [divHeight, setDivHeight] = useState(divRef?.current?.clientHeight);
    const [inputValue, setInputValue] = useState<inputValue>({firstName:''});
    interface inputValue {
        firstName: string;
        type?: string;
    }



    useEffect(() => {
        // setDivHeight(prev => {
        //     return divRef?.current?.clientHeight
        // });

    }, [ ])
    useEffect(() => {
        // setDivHeight(prev => {
        //     return divRef?.current?.clientHeight
        // });
        if (divRef?.current?.clientHeight>96){
            setDivText((prevState) => {
                // return [...prevState,'']/////////////////////////
                console.log(prevState.push(inputValue.firstName))
                return prevState

            })
        }
    }, [ divRef?.current?.clientHeight])
    useEffect(()=>{
        setDivText((priv)=>{
            console.log(inputValue)

            // return [...priv.slice(0, priv.length-1), priv[priv.length-1]+=inputValue.firstName?inputValue.firstName[inputValue?.firstName.length-1]:'']
            return [...priv.slice(0, priv.length-1), inputValue.firstName]

        })
    },[inputValue])

    console.log(divRef)

    const inputHandler=(evt:any)=>{
        setInputValue(inputValue => {
           return  { ...
                inputValue, [evt.target.name]
            :
                evt.target.value
            }
        });

        // setDivText((priv)=>{
        //     console.log(priv)
        //     return [priv[0],priv[priv.length-1]=priv[priv.length-1]+evt.target.value[evt.target.value.length-1]]
        // })
    }




    return (
        <main className={cls.container} ref={null}>
            <div>AboutPage</div>
            <div className={cls.container2}>Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Tenetur, voluptatem.
            </div>
            <div className={cls.container2}>Professional Summary</div>
            {/*<TestSvgImgPgn/>*/}
            <input id="firstName" name="firstName"
                   value={inputValue.firstName}
                   onChange={inputHandler} />
            <div className={cls.divContainer}>
                {divText.map((textItem, i) => {
                    // debugger
                    // console.log(divRef)
                    return <div key={i + textItem} className={cls.divText}>
                        <div ref={divRef}>{textItem}</div>
                    </div>
                })}
            </div>
        </main>
    );
}

export default AboutPage;

// function AboutPage(props: any) {
//     const elRef: React.MutableRefObject<HTMLElement> = useRef();
//
//     // const divRef: React.MutableRefObject<HTMLDivElement[]> = useRef([]);
//     const divRef: React.MutableRefObject<HTMLDivElement> = useRef();
//
//     const [height, setHeight] = useState(0);
//     const [divHeight, setDivHeight] = useState(0);
//     const [inputValue, setInputValue] = useState<inputValue>({firstName:''});
//     interface inputValue {
//         firstName: string;
//         type?: string;
//     }
//
//
//     const [divText, setDivText] = useState(['something 1 Lorem ipsum dolor sit amet, consectetur adipisicing \n' +
//     '                elit. Tenetur, voluptatem.', 'something 2 Lorem ipsum dolor sit amet, consectetur adipisicing \n' +
//     '                elit. Tenetur, voluptatem.']);
//
//     useEffect(() => {
//         setHeight(prev => {
//             return elRef?.current?.clientHeight
//         });
//         setDivHeight(prev => {
//             return divRef?.current?.clientHeight
//         });
//         if (divHeight>96){
//             setDivText((prevState) => {
//                 // return [...prevState,'']/////////////////////////
//                 console.log(prevState.push(''))
//                 return prevState
//
//             })
//         }
//     }, [ divText])
//     console.log(divHeight)
//     // console.log('RENDER ABOUT')
//     // console.log(divRef)
//
//     const inputHandler=(evt:any)=>{
//         // setInputValue({ [evt.target.name]: evt.target.value });
//         setInputValue({ ...inputValue,[evt.target.name]: evt.target.value });
//
//         setDivText((priv)=>{
//             // console.log(priv[priv.length-1])
//             console.log(priv)
//             return [priv[0],priv[priv.length-1]=priv[priv.length-1]+evt.target.value[evt.target.value.length-1]]
//
//         })
//     }
//     console.log(inputValue)
//
//
//
//     return (
//         <main className={cls.container} ref={elRef}>
//             <div>AboutPage</div>
//             <div className={cls.container2}>Lorem ipsum dolor sit amet, consectetur adipisicing
//                 elit. Tenetur, voluptatem.
//             </div>
//             <div className={cls.container2}>Professional Summary</div>
//             <TestSvgImgPgn/>
//             <input id="firstName" name="firstName"
//                    value={inputValue.firstName}
//                    onChange={inputHandler} />
//             <div className={cls.divContainer}>
//                 {divText.map((textItem, i) => {
//                     // debugger
//                     // console.log(divRef)
//                     return <div key={i + textItem} className={cls.divText}>
//                         <div ref={divRef}>{textItem}</div>
//                     </div>
//                 })}
//             </div>
//         </main>
//     );
// }
//
// export default AboutPage;
