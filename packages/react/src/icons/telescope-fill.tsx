import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TelescopeIconFill = memo(
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
          d="M18.063 2.357a2.25 2.25 0 0 1 2.755 1.591l1.423 5.313a2.25 2.25 0 0 1-1.59 2.756l-1.69.453a3 3 0 0 1-2.434-.4l-1.596.298q.068.306.07.632c0 .808-.322 1.54-.842 2.08l2.736 5.473a1 1 0 0 1-1.79.894l-2.736-5.471A3 3 0 0 1 12 16q-.188-.002-.37-.024l-2.735 5.471a1 1 0 0 1-1.79-.894l2.736-5.473a3 3 0 0 1-.805-1.608l-4.02.753a2.25 2.25 0 0 1-2.586-1.63l-.437-1.628A2.25 2.25 0 0 1 3.42 8.263l11.046-3.891a3 3 0 0 1 1.907-1.561zM12 12a1 1 0 0 0-1 1 1 1 0 1 0 1.73-.683l-.003-.004A1 1 0 0 0 12 12m-7.917-1.85a.25.25 0 0 0-.158.3l.437 1.627a.25.25 0 0 0 .287.182l1.744-.327-.636-2.372zM18.58 4.288l-1.69.453a1 1 0 0 0-.707 1.225l1.034 3.862.001.002a1 1 0 0 0 1.225.707l1.69-.453a.25.25 0 0 0 .177-.306l-1.424-5.313a.25.25 0 0 0-.306-.177"
          clipRule="evenodd"
        />
      </svg>
    ))
);
TelescopeIconFill.displayName = "TelescopeIconFill";
export { TelescopeIconFill };
