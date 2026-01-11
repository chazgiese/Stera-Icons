import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ScrollTextIcon = memo(
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
          d="M13.5 10.75a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1 0-1.5zM15 7.25a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1 0-1.5z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M16.5 3.25A2.75 2.75 0 0 1 19.25 6v9.25h1a2 2 0 0 1 2 2V18a2.75 2.75 0 0 1-2.75 2.75h-11a1 1 0 0 1-.08-.005A2.747 2.747 0 0 1 5.75 18v-7.75h-2a2 2 0 0 1-2-2V6A2.75 2.75 0 0 1 4.5 3.25zm-9.553 1.5c.192.375.303.8.303 1.25v12a1.25 1.25 0 1 0 2.5 0v-.75a2 2 0 0 1 2-2h6V6c0-.69-.56-1.25-1.25-1.25zm4.803 12a.5.5 0 0 0-.5.5V18c0 .45-.11.875-.303 1.25H19.5c.69 0 1.25-.56 1.25-1.25v-.75a.5.5 0 0 0-.5-.5zm-7.25-12c-.69 0-1.25.56-1.25 1.25v2.25a.5.5 0 0 0 .5.5h2V6c0-.69-.56-1.25-1.25-1.25"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ScrollTextIcon.displayName = "ScrollTextIcon";
export { ScrollTextIcon };
