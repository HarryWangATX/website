import React from "react";

export const Thumb = ({ selected, onClick, ...props }) => (
    <div
        className={`mx-1 embla__slide--thumb h-24 w-24 ${
            selected ? "is-selected" : ""
        }`}
    >
        <button
            onClick={onClick}
            className="embla__slide__inner embla__slide__inner--thumb"
            type="button"
        >
            <img className="embla__slide__thumbnail" {...props} src={props.src} />
        </button>
    </div>
);