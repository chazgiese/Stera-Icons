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
          d="M13.355 5.111a4 4 0 0 1 4.458 3.484l1.056 8.602a4 4 0 0 1-3.483 4.457l-8.603 1.057a4 4 0 0 1-4.457-3.482L1.27 10.626a4 4 0 0 1 3.482-4.458zM8.128 16.534a1.057 1.057 0 0 0-1.482.183l-2.19 2.802a2 2 0 0 0 2.084 1.207l6.008-.739zm5.47-9.437L4.997 8.153a2 2 0 0 0-1.741 2.229l.788 6.417 1.027-1.315a3.056 3.056 0 0 1 4.29-.526l5.983 4.676a2 2 0 0 0 1.54-2.193l-1.056-8.603A2 2 0 0 0 13.6 7.097"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M7.246 2.996a4.67 4.67 0 0 1 4.48-2.084l7.279.894a4.667 4.667 0 0 1 4.063 5.2l-.894 7.28a4.7 4.7 0 0 1-.412 1.425 1 1 0 1 1-1.808-.854c.118-.25.2-.524.235-.816l.894-7.278a2.667 2.667 0 0 0-2.322-2.972l-7.278-.893a2.67 2.67 0 0 0-2.561 1.19 1 1 0 0 1-1.676-1.092"
        />
      </svg>
    ))
);
ImagePileIconBold.displayName = "ImagePileIconBold";
export { ImagePileIconBold };
