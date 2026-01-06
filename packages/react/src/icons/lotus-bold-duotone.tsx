import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LotusIconBoldDuotone = memo(
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
          d="M11.37 3.225a1 1 0 0 1 1.337.068l2.343 2.343a8.96 8.96 0 0 1 2.256 3.777A9 9 0 0 1 19.997 9H22a1 1 0 0 1 1 1v2.003a9 9 0 0 1-9 9h-.002L11.999 21H10a9 9 0 0 1-9-9v-2a1 1 0 0 1 1-1h2c.937 0 1.842.147 2.693.413A8.97 8.97 0 0 1 8.95 5.636l2.343-2.343zM19.996 11c-.82 0-1.605.142-2.335.4a8.98 8.98 0 0 1-2.612 6.964l-.625.624A7 7 0 0 0 21 12.003V11zM3 12a7 7 0 0 0 6.571 6.986l-.62-.622a8.98 8.98 0 0 1-2.614-6.963A7 7 0 0 0 4 11H3zm7.364-4.95a6.97 6.97 0 0 0-1.967 3.865 6.99 6.99 0 0 0 1.967 6.035L12 18.586l1.636-1.636a6.99 6.99 0 0 0 1.967-6.036 6.97 6.97 0 0 0-1.967-3.864L12 5.414z"
          clipRule="evenodd"
        />
        <g fill="currentColor" opacity={0.4}>
          <path d="M4.815 4.593c.285-.133.617-.124.895.024l2.797 1.495a9 9 0 0 0-1.14 1.66l-1.425-.763-.445 2.119A9 9 0 0 0 4 9h-.52l.78-3.707.03-.114c.087-.257.276-.471.525-.587M18.397 4.567a1.002 1.002 0 0 1 1.344.727L20.521 9h-.524q-.765 0-1.494.126l-.445-2.118-1.427.762a9 9 0 0 0-1.14-1.659l2.8-1.495z" />
        </g>
      </svg>
    ))
);
LotusIconBoldDuotone.displayName = "LotusIconBoldDuotone";
export { LotusIconBoldDuotone };
