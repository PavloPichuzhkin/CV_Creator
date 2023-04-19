import React from 'react';
import desktop1 from 'shared/assets/images/desktop1.jpg'
import desktop2 from 'shared/assets/images/desktop2.jpg'
import desktop3 from 'shared/assets/images/desktop3.jpg'
import cls from './DesignPage.module.scss';

const DesignPage = (props: any) => (
    <section>
        <div className={cls.container}>To see actual design of this project
            <a className={cls.extLinc}
                href="https://www.figma.com/file/XrHHgUcTNJlSVl100VCIF9/ResumeMaker?node-id=23%3A39&t=UAOTArgONqN0rcku-1"
               target="_blank"
                // rel="noopener noreferrer"
            >GO HERE</a>
        </div>
        <div className={cls.container}>
            <img src={desktop1} alt={'first screen of design image'}
                // className={cls.images}
            />
        </div>
        <div className={cls.container}>
            <img src={desktop2} alt={'first screen of design image'}/>
        </div>
        <div className={cls.container}>
            <img src={desktop3} alt={'first screen of design image'}/>
        </div>

    </section>
);

export default DesignPage;
