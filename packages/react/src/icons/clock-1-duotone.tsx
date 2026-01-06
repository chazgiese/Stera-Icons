import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const Clock1IconDuotone = memo(
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
          d="M12 5.25a.75.75 0 0 1 .75.75v3.201l.6-1.04a.75.75 0 1 1 1.3.75l-2 3.464-.022.031-.013.02a.8.8 0 0 1-.132.142q-.022.02-.046.038-.034.024-.072.044-.025.016-.053.03-.034.015-.07.026-.037.013-.072.023a1 1 0 0 1-.112.018h-.015q-.02.001-.043.003a1 1 0 0 1-.089-.006l-.012-.002q-.047-.007-.092-.021-.044-.01-.085-.026l-.022-.008a1 1 0 0 1-.075-.038q-.016-.01-.032-.021l-.02-.013a.7.7 0 0 1-.136-.125q-.026-.027-.047-.056-.023-.035-.042-.07-.015-.025-.027-.05a.7.7 0 0 1-.05-.143.8.8 0 0 1-.021-.171V6a.75.75 0 0 1 .75-.75"
        />
      </svg>
    ))
);
Clock1IconDuotone.displayName = "Clock1IconDuotone";
export { Clock1IconDuotone };
