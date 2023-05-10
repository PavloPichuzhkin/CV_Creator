import React, {
    Fragment, memo,
    ReactNode, useCallback,
    useEffect, useMemo,
    useRef,
    useState
} from 'react';
import cls from './AboutPage.module.scss';

import {IInputValue, InputSomthing} from "pages/AboutPage/ui/InputSomthing";
import MainPage from "pages/MainPage/ui/MainPage";
import {splitComponentsIntoPages} from './splitComponentsIntoPages';

// import {MainPage} from "pages/MainPage"; //// +1 more render => loading from LAZY

function AboutPage(props: any) {

    const componentsRefs: React.MutableRefObject<HTMLDivElement[]> = useRef([]);
    const [componentsRefsCurrent, setComponentsRefsCurrent] = useState([]);
    const [textArray, setTextArray] = useState([]);

    const componentsForPagesMock = [
        <MainPage/>,
        ...textArray.map((text, i) => <p key={`${text}+${i}`}>{text}</p>),
        <div>gfhlk</div>,
        // <MainPage/>,
    ]

    const pageHeightMock = 100   // to constants

    useEffect(() => {
        // console.log('useEffect', componentsRefs?.current[1]?.clientHeight)
        componentsRefs.current = componentsRefs.current.slice(0, componentsForPagesMock.length);
        setComponentsRefsCurrent(priv => {
            // console.log('useEffect222', componentsRefs?.current[1]?.clientHeight)
            return componentsRefs.current
        })

    }, [componentsRefs, textArray]);

    console.log('Render', componentsRefsCurrent.reduce((acc, componentRef) => acc + componentRef?.clientHeight, 0))
    // console.log(componentsRefsCurrent)

    const sendToComponent = useCallback(function (inputValue: IInputValue) {
        setTextArray(priv => {
            return [...priv, inputValue.firstName]
        })
        console.log('sendToComponent', inputValue)
    }, [])

    return (
        <main className={cls.container}>

            <div className={cls.container2}>Professional Summary</div>
            <InputSomthing sendToComponent={sendToComponent}/>
            <div className={cls.divContainer}>
                <div className={cls.divComponentsPreRender}>
                    {
                        (componentsForPagesMock.map((item, i) => {
                            return <div
                                key={i}
                                ref={el => componentsRefs.current[i] = el}
                            > {item}
                            </div>
                        }))
                    }</div>

                {(splitComponentsIntoPages(componentsForPagesMock, pageHeightMock, componentsRefsCurrent).map((page, i) => {
                    return <div className={cls.divComponents} key={i}>
                        {page.map((component, index) => {
                            return <div className={''}
                                        key={index}
                            > {component}
                            </div>
                        })}</div>
                }))
                }
            </div>
        </main>
    );
}

export default AboutPage;
