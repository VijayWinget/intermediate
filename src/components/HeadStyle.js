import React from 'react';

// import './header.css';

import styles from './header.module.css';

function HeadStyle() {
// const mystyle = {
//     color : 'red',
//     backgroundColor: "black",
//     padding: "10px"
// }
    return (
        <>
            {/* <h2  style={{color : "blue"}} > Hello header style  Inline </h2> */}
            {/* <h2  style={mystyle} > header  style defined in class</h2> */}
            {/* <h2 > header  style  external file css</h2> */}
            <h2 className={styles.bigBlue} > header  style from module </h2>
        </>
    )
}

export default HeadStyle;