import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const Checkmark = memo(
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
          d="M19.452 5.489a.75.75 0 0 1 1.096 1.023l-9.851 10.556c-.222.237-.42.452-.6.612-.182.164-.404.33-.691.414a1.75 1.75 0 0 1-1.218-.085 1.8 1.8 0 0 1-.627-.508c-.154-.183-.322-.423-.508-.69l-3.667-5.237a.75.75 0 0 1 1.229-.86l3.667 5.239c.201.287.325.463.427.584.059.07.091.098.103.107a.25.25 0 0 0 .164.013.7.7 0 0 0 .119-.092c.118-.106.265-.264.505-.52z"
        />
      </svg>
    ))
);
Checkmark.displayName = "Checkmark";
export { Checkmark };
