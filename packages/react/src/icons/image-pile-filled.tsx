import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ImagePileIconFilled = memo(
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
          d="M6.19 4.776a4 4 0 0 1 4.456-3.483L19.25 2.35l.203.03a4 4 0 0 1 3.28 4.427l-1.056 8.602a4 4 0 0 1-2.934 3.375 4 4 0 0 1-.195.541 4.04 4.04 0 0 1-1.327 1.617 4 4 0 0 1-1.834.712L6.783 22.71a4 4 0 0 1-1.717-.163 4.01 4.01 0 0 1-2.71-3.117l-.03-.203-1.057-8.603a4 4 0 0 1 3.483-4.458l1.286-.158zm2.534 9.686a2.25 2.25 0 0 0-3.159.388l-1.522 1.948.268 2.186.036.2a2 2 0 0 0 2.193 1.54l8.603-1.056q.101-.012.199-.035zm1.68-11.184a2 2 0 0 0-2.23 1.742l-.091.737 5.271-.646.205-.021a4 4 0 0 1 .586.001 4.01 4.01 0 0 1 3.667 3.503l.983 8.003c.477-.311.82-.822.895-1.432l1.057-8.601a2 2 0 0 0-1.54-2.194l-.201-.036zm1.513 6.32a1.834 1.834 0 1 0 .446 3.64 1.834 1.834 0 0 0-.446-3.64"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ImagePileIconFilled.displayName = "ImagePileIconFilled";
export { ImagePileIconFilled };
