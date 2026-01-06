import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ToyBrickIcon = memo(
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
          d="M9 4.75a2 2 0 0 1 2 2v1.5h2v-1.5a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2v1.946A2.75 2.75 0 0 1 20.75 11v6A2.75 2.75 0 0 1 18 19.75H6A2.75 2.75 0 0 1 3.25 17v-6c0-.965.498-1.813 1.25-2.304V6.75a2 2 0 0 1 2-2zm-3 5c-.69 0-1.25.56-1.25 1.25v6c0 .69.56 1.25 1.25 1.25h12c.69 0 1.25-.56 1.25-1.25v-6c0-.69-.56-1.25-1.25-1.25zm.5-3.5a.5.5 0 0 0-.5.5v1.5h3.5v-1.5a.5.5 0 0 0-.5-.5zm8.5 0a.5.5 0 0 0-.5.5v1.5H18v-1.5a.5.5 0 0 0-.5-.5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ToyBrickIcon.displayName = "ToyBrickIcon";
export { ToyBrickIcon };
