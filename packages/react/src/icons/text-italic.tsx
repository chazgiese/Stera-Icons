import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TextItalic = memo(
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
          d="M20 2.25a.75.75 0 0 1 0 1.5h-3.559c-.535 0-1.01.34-1.182.847l-4.895 14.68a.75.75 0 0 0 .717.973H14a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1 0-1.5h3.559a1.25 1.25 0 0 0 1.185-.855l4.89-14.673a.75.75 0 0 0-.715-.972H10a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
TextItalic.displayName = "TextItalic";
export { TextItalic };
