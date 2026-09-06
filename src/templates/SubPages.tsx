import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";


interface ISubPageTemplate {
    children: React.ReactNode
}

const SubPageTemplate = (props: ISubPageTemplate) => {
    return <>
        {/* <StarField /> */}
        <div className="relative z-10">
            <Header />
        </div>
        {props.children}
        <Footer />
    </>
}

export default SubPageTemplate;