import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChartBarYBig = memo(
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
          d="M13.75 16.25a2 2 0 0 1 2 2v1.5a2 2 0 0 1-2 2h-9.5a2 2 0 0 1-2-2v-1.5a2 2 0 0 1 2-2zm-9.5 1.5a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 .5.5h9.5a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 0-.5-.5zM19.75 9.25a2 2 0 0 1 2 2v1.5a2 2 0 0 1-2 2H4.25a2 2 0 0 1-2-2v-1.5a2 2 0 0 1 2-2zm-15.5 1.5a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 .5.5h15.5a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 0-.5-.5zM16.75 2.25a2 2 0 0 1 2 2v1.5a2 2 0 0 1-2 2H4.25a2 2 0 0 1-2-2v-1.5a2 2 0 0 1 2-2zm-12.5 1.5a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 .5.5h12.5a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 0-.5-.5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ChartBarYBig.displayName = "ChartBarYBig";
export { ChartBarYBig };
