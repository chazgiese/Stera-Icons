import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TextAiIcon = memo(
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
          d="M16.387 10.258c.203-.581 1.023-.581 1.226 0l.242.691a5.2 5.2 0 0 0 3.196 3.196l.691.242c.581.203.581 1.023 0 1.226l-.691.242a5.2 5.2 0 0 0-3.195 3.196l-.243.691c-.203.581-1.023.581-1.226 0l-.242-.691a5.2 5.2 0 0 0-3.196-3.195l-.691-.243c-.581-.203-.581-1.023 0-1.226l.691-.242a5.2 5.2 0 0 0 3.196-3.196zM8 17.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5zM8 11.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5zM21 5.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
TextAiIcon.displayName = "TextAiIcon";
export { TextAiIcon };
