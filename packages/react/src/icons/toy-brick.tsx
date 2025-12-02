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
          d="M9 3.25a2 2 0 0 1 2 2v2h2v-2a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2v2.047A2.75 2.75 0 0 1 21.75 10v8A2.75 2.75 0 0 1 19 20.75H5A2.75 2.75 0 0 1 2.25 18v-8A2.75 2.75 0 0 1 4.5 7.297V5.25a2 2 0 0 1 2-2zm-4 5.5c-.69 0-1.25.56-1.25 1.25v8c0 .69.56 1.25 1.25 1.25h14c.69 0 1.25-.56 1.25-1.25v-8c0-.69-.56-1.25-1.25-1.25zm1.5-4a.5.5 0 0 0-.5.5v2h3.5v-2a.5.5 0 0 0-.5-.5zm8.5 0a.5.5 0 0 0-.5.5v2H18v-2a.5.5 0 0 0-.5-.5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ToyBrickIcon.displayName = "ToyBrickIcon";
export { ToyBrickIcon };
