import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BubbleIconDuotone = memo(
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
          d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12 6.063 1.25 12 1.25m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M10.814 4.974a1.04 1.04 0 0 1 .835.165c.242.173.409.449.46.758s-.015.625-.188.867a1.04 1.04 0 0 1-.734.429q-.15.015-.3.04c-1.797.283-3.447 1.702-3.982 3.578q-.045.155-.082.313a.76.76 0 0 1-.318.458.75.75 0 0 1-.54.122.75.75 0 0 1-.47-.292.76.76 0 0 1-.151-.536q.025-.207.064-.414c.439-2.486 2.413-4.69 4.978-5.383q.212-.06.428-.105"
        />
      </svg>
    ))
);
BubbleIconDuotone.displayName = "BubbleIconDuotone";
export { BubbleIconDuotone };
