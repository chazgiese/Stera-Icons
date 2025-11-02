import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HashItalicIcon = memo(
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
          d="M16.268 2.836a.751.751 0 0 1 1.464.327l-1.13 5.087H21a.75.75 0 0 1 0 1.5h-4.731l-1 4.5H19a.75.75 0 0 1 0 1.5h-4.065l-1.203 5.413a.75.75 0 0 1-1.464-.326l1.13-5.087H8.936l-1.204 5.413a.75.75 0 0 1-1.464-.326l1.13-5.087H3a.75.75 0 1 1 0-1.5h4.731l1-4.5H5a.75.75 0 0 1 0-1.5h4.064l1.204-5.414a.751.751 0 0 1 1.464.327l-1.13 5.087h4.463zm-7 11.414h4.463l1-4.5H10.27z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
HashItalicIcon.displayName = "HashItalicIcon";
export { HashItalicIcon };
