import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FolderOpen = memo(
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
          d="M7.93 3.25c.92 0 1.778.46 2.288 1.225l.813 1.218a1.25 1.25 0 0 0 1.04.557h7.077a2.75 2.75 0 0 1 2.742 2.54l.116 1.501a2 2 0 0 1 1.585 2.18l-.548 4.943a3.75 3.75 0 0 1-3.728 3.336H4.819a3.75 3.75 0 0 1-3.743-3.516L.384 6.172A2.75 2.75 0 0 1 3.13 3.25zm-3.81 8.5a.5.5 0 0 0-.497.444l-.507 4.558a2.25 2.25 0 0 0 2.236 2.498h13.963a2.25 2.25 0 0 0 2.236-2.002l.55-4.942a.5.5 0 0 0-.497-.556zm-.99-7A1.25 1.25 0 0 0 1.88 6.078l.345 5.527A2 2 0 0 1 4.12 10.25h16.379l-.104-1.346a1.25 1.25 0 0 0-1.247-1.154h-7.077a2.75 2.75 0 0 1-2.288-1.225L8.97 5.307a1.25 1.25 0 0 0-1.04-.557z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FolderOpen.displayName = "FolderOpen";
export { FolderOpen };
