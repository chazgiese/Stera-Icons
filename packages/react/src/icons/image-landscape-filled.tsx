import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ImageLandscapeIconFilled = memo(
  forwardRef < SVGSVGElement,
  IconProps >
    ((
      {
        size = 24,
        color = "currentColor",
        className,
        "aria-label": ariaLabel,
        "aria-hidden": ariaHidden,
        ...props
      },
      ref
    ) => (
      <svg
        fill={color}
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={className}
        aria-label={ariaLabel}
        aria-hidden={ariaHidden}
        ref={ref}
        {...props}
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M15.6 3c1.103 0 1.991-.001 2.709.058.728.06 1.368.185 1.96.487a5 5 0 0 1 2.186 2.185c.302.593.428 1.233.487 1.961.059.718.058 1.606.058 2.71V13.6c0 1.103.001 1.991-.058 2.709-.06.728-.185 1.368-.487 1.96a5 5 0 0 1-.148.268l-.011.02q-.158.264-.346.505l-.017.023a5 5 0 0 1-.41.46l-.025.024a5 5 0 0 1-.194.181l-.034.03a5 5 0 0 1-.22.18l-.03.021a5 5 0 0 1-.75.474c-.593.302-1.233.428-1.961.487-.718.059-1.606.058-2.71.058H8.4c-1.103 0-1.991.001-2.709-.058-.728-.06-1.368-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.593-.428-1.233-.487-1.961C.999 15.59 1 14.703 1 13.599V10.4c0-1.103-.001-1.991.058-2.709.06-.728.185-1.368.487-1.96A5 5 0 0 1 3.73 3.544c.593-.302 1.233-.428 1.961-.487C6.41 2.999 7.297 3 8.401 3zm-6.686 8a2 2 0 0 0-2.828 0l-3.084 3.083c.001.884.006 1.537.049 2.062.05.606.142.954.276 1.217a3 3 0 0 0 1.31 1.31c.264.135.612.228 1.217.277C6.471 19 7.264 19 8.4 19h7.2c1.136 0 1.929 0 2.545-.05.606-.05.954-.143 1.217-.277a3 3 0 0 0 1.31-1.31c.064-.124.117-.266.161-.444L17.914 14a2 2 0 0 0-2.828 0l-1.41 1.41a.25.25 0 0 1-.353 0zM15 7a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ImageLandscapeIconFilled.displayName = "ImageLandscapeIconFilled";
export { ImageLandscapeIconFilled };
