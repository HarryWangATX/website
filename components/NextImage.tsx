import Image from "next/image";
import { buildUrl } from "cloudinary-build-url";
import React from "react";

type NextImageProps = {
    src?: string;
    blurred?: boolean;
    noLoader?: boolean;
    layout?: "responsive" | "fixed" | "fill" | "intrinsic";
    [x: string]: any;
};

export default function NextImage({
                                      blurred = true,
                                      noLoader = false,
                                      layout = "responsive",
                                      ...props
                                  }: NextImageProps) {
    // if the blurred prop is on, apply cloudinary image transformation to blur the image
    const blurredUrl =
        blurred &&
        buildUrl(props.src, {
            cloud: {
                cloudName: "dcg5b3jpt",
            },
            transformations: {
                effect: "blur:1000",
                quality: 1,
            },
        });

    const normalLoader = ({ src, ...props }) => src;

    // if (blurred) console.log(blurredUrl);

    if (noLoader) {
        return (
            // @ts-ignore
            <Image
                placeholder={blurred ? "blur" : "empty"}
                blurDataURL={blurredUrl}
                layout={layout}
                loader={normalLoader}
                {...props}
            />
        );
    }

    return (
        // @ts-ignore
        <Image
            placeholder={blurred ? "blur" : "empty"}
            blurDataURL={blurredUrl}
            layout={layout}
            {...props}
        />
    );
}