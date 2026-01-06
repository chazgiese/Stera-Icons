import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FolderOpenIconDuotone = memo(
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
          d="M7.93 3.25c.92 0 1.778.46 2.288 1.225l.813 1.218a1.25 1.25 0 0 0 1.04.557h7.077a2.75 2.75 0 0 1 2.742 2.54l.123 1.605a2 2 0 0 0-.747-.145h-.768l-.103-1.346a1.25 1.25 0 0 0-1.247-1.154H12.07a2.75 2.75 0 0 1-2.288-1.225L8.97 5.307a1.25 1.25 0 0 0-1.04-.557h-4.8A1.25 1.25 0 0 0 1.88 6.078l.626 10.028-.34 1.025a2.75 2.75 0 0 0 2.346 3.605 3.75 3.75 0 0 1-3.437-3.502L.384 6.172A2.75 2.75 0 0 1 3.13 3.25z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M21.266 10.25a2 2 0 0 1 1.898 2.633l-1.768 5.303a3.75 3.75 0 0 1-3.558 2.564H4.775a2.75 2.75 0 0 1-2.609-3.62l1.838-5.513a2 2 0 0 1 1.898-1.367zm-15.364 1.5a.5.5 0 0 0-.475.342L3.59 17.605a1.25 1.25 0 0 0 1.186 1.645h13.063a2.25 2.25 0 0 0 2.135-1.538l1.768-5.304a.5.5 0 0 0-.475-.658z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FolderOpenIconDuotone.displayName = "FolderOpenIconDuotone";
export { FolderOpenIconDuotone };
