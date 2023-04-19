import React, {memo, SVGProps, useRef} from 'react';
import cls from './TestSvgImgPgn.module.scss';

// import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import ResumeMaker from '../../shared/assets/icons/ResumeMaker.svg';
import Moon from 'shared/assets/icons/moon.svg';




export const TestSvgImgPgn = () => {
    // console.log(<ProfileIcon  />)

    return (
        <div className={cls.navbar}>

            <div className={cls.svg}>
                {/*<svg style = {{ width: "50px", height:"50px"}}>*/}
                {/*<svg width="20" height="20"*/}
                {/* // viewBox="0 0 17 20" xmlns="http://www.w3.org/2000/svg"*/}
                {/*     viewBox="0 0 30 30"*/}
                {/*>*/}
                    {/*<path d="M10.074 8.276h4.408v1.38h-4.408v-1.38Zm0-3.448H17v1.379h-6.926v-1.38Zm0-3.449H17v1.38h-6.926v-1.38ZM5.037 20H2.52a1.21 1.21 0 0 1-.89-.405 1.453 1.453 0 0 1-.37-.974v-4.828a1.21 1.21 0 0 1-.889-.405 1.453 1.453 0 0 1-.37-.974V8.276a2.204 2.204 0 0 1 .135-.798c.093-.253.232-.483.408-.676.177-.194.387-.346.618-.448.231-.102.479-.152.728-.147h3.778c.25-.005.497.045.728.147.231.102.441.254.618.448.176.193.315.423.408.676.094.253.14.525.135.798v4.138a1.453 1.453 0 0 1-.37.974 1.21 1.21 0 0 1-.89.405v4.828a1.453 1.453 0 0 1-.37.974 1.21 1.21 0 0 1-.889.405ZM1.89 7.586a.548.548 0 0 0-.247.041.592.592 0 0 0-.21.149.661.661 0 0 0-.135.23.708.708 0 0 0-.037.27v4.138h1.259v6.207h2.518v-6.207h1.26V8.276a.708.708 0 0 0-.038-.27.661.661 0 0 0-.136-.23.592.592 0 0 0-.21-.149.548.548 0 0 0-.246-.04H1.889Zm1.889-2.069c-.498 0-.985-.162-1.4-.465a2.72 2.72 0 0 1-.927-1.238 3.004 3.004 0 0 1-.143-1.594 2.849 2.849 0 0 1 .69-1.412A2.459 2.459 0 0 1 3.286.053 2.316 2.316 0 0 1 4.742.21c.46.209.853.562 1.13 1.016.277.454.425.987.425 1.533a2.906 2.906 0 0 1-.74 1.948 2.42 2.42 0 0 1-1.779.81Zm0-4.138c-.249 0-.492.081-.7.233a1.36 1.36 0 0 0-.463.619c-.096.252-.12.53-.072.797.049.267.168.513.345.706.176.193.4.324.644.377.245.054.498.026.728-.078.23-.104.427-.281.565-.508.138-.227.212-.494.212-.766a1.453 1.453 0 0 0-.37-.974 1.21 1.21 0 0 0-.889-.406Z"></path>*/}
                {/*<ProfileIcon  />*/}
                    <Moon  />
                {/*</svg>*/}
            </div>

        </div>
    );
};

export default memo(TestSvgImgPgn);
