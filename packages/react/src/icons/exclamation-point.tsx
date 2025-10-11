import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ExclamationPointIcon = memo(
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
          d="M12 18.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 2.25c.345 0 .676.132.91.366.235.235.354.553.34.884l-.025.6-.45 10.8-.025.6a.76.76 0 0 1-.234.509.75.75 0 0 1-.516.21.75.75 0 0 1-.516-.21.76.76 0 0 1-.234-.509l-.025-.6-.45-10.8-.025-.6a1.17 1.17 0 0 1 .34-.884c.234-.234.565-.366.91-.366"
        />
      </svg>
    ))
);
ExclamationPointIcon.displayName = "ExclamationPointIcon";
export { ExclamationPointIcon };
