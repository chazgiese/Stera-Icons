import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TextAiIconFillDuotone = memo(
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
          <path d="M8 16.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 0 1 0-3zM8 10.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 0 1 0-3zM21 4.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 1 1 0-3z" />
        </g>
        <path
          fill="currentColor"
          d="M16.387 10.258c.202-.581 1.024-.581 1.227 0l.241.692a5.2 5.2 0 0 0 3.196 3.195l.691.242c.581.202.581 1.024 0 1.227l-.691.241a5.2 5.2 0 0 0-3.196 3.196l-.24.691c-.204.581-1.026.581-1.228 0l-.243-.691a5.2 5.2 0 0 0-3.194-3.196l-.692-.24c-.581-.204-.581-1.026 0-1.228l.692-.242a5.2 5.2 0 0 0 3.194-3.195z"
        />
      </svg>
    ))
);
TextAiIconFillDuotone.displayName = "TextAiIconFillDuotone";
export { TextAiIconFillDuotone };
