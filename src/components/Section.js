import React from "react";

const Section = (props) => {
    return (
        <section id={props.id}>
            <h3 className="title">
                {props.title}
            </h3>
            {props.children}
        </section>
    )
}

export default Section;