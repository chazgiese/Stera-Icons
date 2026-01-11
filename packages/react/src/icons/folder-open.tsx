import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FolderOpenIcon = memo(
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
          d="M7.93 3.25c.92 0 1.778.46 2.288 1.225l.813 1.218a1.25 1.25 0 0 0 1.04.557h7.077a2.75 2.75 0 0 1 2.742 2.54l.123 1.605a2 2 0 0 1 1.15 2.488l-1.767 5.303a3.75 3.75 0 0 1-3.558 2.564H4.775a3.75 3.75 0 0 1-3.7-3.516L.386 6.172A2.75 2.75 0 0 1 3.128 3.25zm-2.028 8.5a.5.5 0 0 0-.475.342L3.59 17.605a1.25 1.25 0 0 0 1.23 1.645h13.02a2.25 2.25 0 0 0 2.134-1.538l1.768-5.304a.5.5 0 0 0-.475-.658zm-2.773-7a1.25 1.25 0 0 0-1.248 1.328l.626 10.028 1.497-4.489a2 2 0 0 1 1.898-1.367h14.596l-.103-1.346a1.25 1.25 0 0 0-1.247-1.154H12.07a2.75 2.75 0 0 1-2.288-1.225L8.97 5.307a1.25 1.25 0 0 0-1.04-.557z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FolderOpenIcon.displayName = "FolderOpenIcon";
export { FolderOpenIcon };
