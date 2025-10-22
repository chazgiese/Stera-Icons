import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FolderOpenIconFilled = memo(
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
          d="M7.93 3a3 3 0 0 1 2.496 1.336l.812 1.219A1 1 0 0 0 12.07 6h7.077a3 3 0 0 1 2.992 2.77l.065.85q.017.236.007.47a2.003 2.003 0 0 1 1.299 2.543l-1.877 5.632A4 4 0 0 1 17.838 21H4.774q-.13-.001-.257-.013a4 4 0 0 1-3.69-3.737L.134 6.188A3 3 0 0 1 3.129 3zM3.129 5a1 1 0 0 0-.998 1.063l.546 8.742 1.146-3.438A2 2 0 0 1 5.721 10h14.492a2 2 0 0 0-.003-.228l-.066-.85A1 1 0 0 0 19.147 8H12.07a3 3 0 0 1-2.496-1.336l-.812-1.219A1 1 0 0 0 7.93 5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
FolderOpenIconFilled.displayName = "FolderOpenIconFilled";
export { FolderOpenIconFilled };
