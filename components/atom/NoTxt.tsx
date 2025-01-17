import React from "react";

export default function NoTxt({
                                  children,
                                  className,
                              }: {
    children?: React.ReactNode;
    className?: string;
}) {
    return (
        <p
            className={`${className} relative pt-16 text-center text-[#767676] after:content-[''] after:absolute after:bg-[url('/images/icon_nodata.png')] after:bg-no-repeat after:top-0 after:left-1/2 after:w-12 after:h-12 after:bg-[100%_auto] after:translate-x-[-50%]`}
        >
            {children}
        </p>
    );
}