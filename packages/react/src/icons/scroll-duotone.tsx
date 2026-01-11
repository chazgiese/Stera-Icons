import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScrollIconDuotone = memo(
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
          <path
            fillRule="evenodd"
            d="M20.25 15.25a2 2 0 0 1 2 2V18a2.75 2.75 0 0 1-2.75 2.75h-11v-1.5c.69 0 1.25-.56 1.25-1.25v-.75a2 2 0 0 1 2-2zm-8.5 1.5a.5.5 0 0 0-.5.5V18c0 .45-.11.875-.303 1.25H19.5c.69 0 1.25-.56 1.25-1.25v-.75a.5.5 0 0 0-.5-.5z"
            clipRule="evenodd"
          />
          <path d="M4.5 4.75c-.69 0-1.25.56-1.25 1.25v2.25a.5.5 0 0 0 .5.5h2v1.5h-2a2 2 0 0 1-2-2V6A2.75 2.75 0 0 1 4.5 3.25z" />
        </g>
        <path
          fill="currentColor"
          d="M16.5 3.25A2.75 2.75 0 0 1 19.25 6v9.25h-1.5V6c0-.69-.56-1.25-1.25-1.25H6.947c.192.375.303.8.303 1.25v12c0 .69.56 1.25 1.25 1.25v1.5A2.75 2.75 0 0 1 5.75 18V6c0-.69-.56-1.25-1.25-1.25v-1.5z"
        />
      </svg>
    ))
);
ScrollIconDuotone.displayName = "ScrollIconDuotone";
export { ScrollIconDuotone };
