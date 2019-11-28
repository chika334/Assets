import React from 'react';
import StickyFooter from 'react-sticky-footer';

function Footer() {
    return(
        <StickyFooter
    normalStyles={{
    backgroundColor: "#999999",
    textAlign: "center"
    }}
    stickyStyles={{
    backgroundColor: "rgba(255,255,255,.8)",
    }}
>
    @Freshaluck
</StickyFooter>
    )
}
export default Footer;