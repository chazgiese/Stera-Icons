import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SwatchBookIconFilled = memo(
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
          d="M9.5 2A2.5 2.5 0 0 1 12 4.5v.432a3 3 0 0 1 4.192.047l2.83 2.829A3 3 0 0 1 19.067 12 3 3 0 0 1 22 15v4a3 3 0 0 1-3 3H7l-.108-.001q-.044-.002-.087-.005a5 5 0 0 1-.878-.111l-.014-.002-.03-.008a5 5 0 0 1-.434-.12l-.06-.02a5 5 0 0 1-.388-.15l-.027-.01-.035-.017a5 5 0 0 1-1.15-.725l-.023-.017q-.032-.028-.063-.056a5 5 0 0 1-.73-.795l-.006-.008-.024-.034a5 5 0 0 1-.431-.715l-.01-.021-.045-.096-.044-.096-.06-.146-.028-.074a5 5 0 0 1-.196-.643l-.007-.032A5 5 0 0 1 2 17V4.5A2.5 2.5 0 0 1 4.5 2zm1.571 18H19a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-1.929zM7 15.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m7.778-9.356a1 1 0 0 0-1.414 0L12 7.758v8.484l5.606-5.606a1 1 0 0 0 0-1.414z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SwatchBookIconFilled.displayName = "SwatchBookIconFilled";
export { SwatchBookIconFilled };
