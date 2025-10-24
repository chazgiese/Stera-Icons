import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ImagePileIconBold = memo(
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
          d="M11.917 9.599a1.834 1.834 0 1 1 .446 3.64 1.834 1.834 0 0 1-.446-3.64"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M6.19 4.776a4 4 0 0 1 4.457-3.482L19.25 2.35a4 4 0 0 1 3.482 4.458l-1.055 8.602a4 4 0 0 1-2.932 3.374 4 4 0 0 1-3.358 2.87L6.783 22.71a4 4 0 0 1-4.428-3.28l-.029-.203-1.057-8.602a4 4 0 0 1 3.483-4.458l1.286-.158zm1.938 11.76a1.056 1.056 0 0 0-1.482.18L4.455 19.52a2 2 0 0 0 2.085 1.206l6.006-.738zm5.47-9.44L4.997 8.152a2 2 0 0 0-1.741 2.229l.788 6.418 1.027-1.314a3.056 3.056 0 0 1 4.29-.527l5.983 4.676a2 2 0 0 0 1.54-2.195l-1.056-8.602a2 2 0 0 0-2.024-1.755zm-3.195-3.817A2 2 0 0 0 8.175 5.02l-.092.738 5.271-.647.205-.02a4 4 0 0 1 4.253 3.503l.983 8.003c.477-.312.82-.822.895-1.431l1.057-8.603a2 2 0 0 0-1.742-2.228z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ImagePileIconBold.displayName = "ImagePileIconBold";
export { ImagePileIconBold };
