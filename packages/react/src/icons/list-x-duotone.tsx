import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ListXIconDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M9 15.25a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5zM9 10.25a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5zM22 5.25a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M17.5 9.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5m2.298 2.952a.75.75 0 0 0-1.06 0L17.5 13.44l-1.237-1.238a.75.75 0 0 0-1.06 1.06l1.236 1.238-1.237 1.237a.75.75 0 0 0 1.06 1.06L17.5 15.56l1.237 1.238a.75.75 0 0 0 1.06-1.06L18.562 14.5l1.237-1.237a.75.75 0 0 0 0-1.06"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ListXIconDuotone.displayName = "ListXIconDuotone";
export { ListXIconDuotone };
