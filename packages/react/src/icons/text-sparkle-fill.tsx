import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TextSparkleIconFill = memo(
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
          d="M16.387 10.258c.203-.581 1.023-.581 1.226 0l.242.691a5.2 5.2 0 0 0 3.196 3.196l.691.242c.581.203.581 1.023 0 1.226l-.691.242a5.2 5.2 0 0 0-3.195 3.196l-.243.691c-.203.581-1.023.581-1.226 0l-.242-.691a5.2 5.2 0 0 0-3.196-3.195l-.691-.243c-.581-.203-.581-1.023 0-1.226l.691-.242a5.2 5.2 0 0 0 3.196-3.196zM8 16.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 0 1 0-3zM8 10.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 0 1 0-3zM21 4.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 1 1 0-3z"
        />
      </svg>
    ))
);
TextSparkleIconFill.displayName = "TextSparkleIconFill";
export { TextSparkleIconFill };
