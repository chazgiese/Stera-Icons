import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BirdhouseIconBold = memo(
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
          d="M12 9a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M10.34 3.139a2.5 2.5 0 0 1 3.323 0l8.002 7.114a1 1 0 0 1-1.328 1.494l-.64-.567L18.21 19H19a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2h.79l-1.489-7.82-.637.567a1 1 0 0 1-1.328-1.494zm1.994 1.494a.5.5 0 0 0-.664 0l-5.626 5L7.829 19h8.344l1.784-9.368z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BirdhouseIconBold.displayName = "BirdhouseIconBold";
export { BirdhouseIconBold };
