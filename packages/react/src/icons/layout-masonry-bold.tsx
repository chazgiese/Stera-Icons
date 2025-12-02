import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LayoutMasonryIconBold = memo(
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
          d="M8.75 15A2.25 2.25 0 0 1 11 17.25v2.5A2.25 2.25 0 0 1 8.75 22h-4.5A2.25 2.25 0 0 1 2 19.75v-2.5A2.25 2.25 0 0 1 4.25 15zm-4.5 2a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h4.5a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25zM19.75 11A2.25 2.25 0 0 1 22 13.25v6.5A2.25 2.25 0 0 1 19.75 22h-4.5A2.25 2.25 0 0 1 13 19.75v-6.5A2.25 2.25 0 0 1 15.25 11zm-4.5 2a.25.25 0 0 0-.25.25v6.5c0 .138.112.25.25.25h4.5a.25.25 0 0 0 .25-.25v-6.5a.25.25 0 0 0-.25-.25zM8.75 2A2.25 2.25 0 0 1 11 4.25v6.5A2.25 2.25 0 0 1 8.75 13h-4.5A2.25 2.25 0 0 1 2 10.75v-6.5A2.25 2.25 0 0 1 4.25 2zm-4.5 2a.25.25 0 0 0-.25.25v6.5c0 .138.112.25.25.25h4.5a.25.25 0 0 0 .25-.25v-6.5A.25.25 0 0 0 8.75 4zM19.75 2A2.25 2.25 0 0 1 22 4.25v2.5A2.25 2.25 0 0 1 19.75 9h-4.5A2.25 2.25 0 0 1 13 6.75v-2.5A2.25 2.25 0 0 1 15.25 2zm-4.5 2a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h4.5a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
LayoutMasonryIconBold.displayName = "LayoutMasonryIconBold";
export { LayoutMasonryIconBold };
