import React, { useState, useEffect, useCallback } from "react";
import { DotButton, PrevButton, NextButton } from "./EmblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import NextImage from "@/components/NextImage";

const EmblaCarousel = ({ slides }) => {
    const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);

    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
    const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
        embla
    ]);

    const onSelect = useCallback(() => {
        if (!embla) return;
        setSelectedIndex(embla.selectedScrollSnap());
        setPrevBtnEnabled(embla.canScrollPrev());
        setNextBtnEnabled(embla.canScrollNext());
    }, [embla, setSelectedIndex]);

    useEffect(() => {
        if (!embla) return;
        onSelect();
        setScrollSnaps(embla.scrollSnapList());
        embla.on("select", onSelect);
    }, [embla, setScrollSnaps, onSelect]);


    return (
        <>
        <div className="embla py-5 overflow-hidden rounded-lg">
            <div className="embla__viewport overflow-hidden" ref={viewportRef}>
                <div className="embla__container pt-5">
                    {slides.map(({ ...props }, index) => (
                        <div className="embla__slide" key={index}>
                            <div className="embla__slide__inner rounded-lg">
                                <img src={props.src} alt={props.alt}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
            <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
        </div>
    <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
            <DotButton
                key={index}
                selected={index === selectedIndex}
                onClick={() => scrollTo(index)}
            />
        ))}
    </div>
            </>
);
};

export default EmblaCarousel;
