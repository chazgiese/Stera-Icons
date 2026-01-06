import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ClipboardIconDuotone = memo(
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
          d="M17.75 3.25a3 3 0 0 1 3 3v13.5a3 3 0 0 1-3 3H6.25a3 3 0 0 1-3-3V6.25a3 3 0 0 1 3-3h1v1.5h-1a1.5 1.5 0 0 0-1.5 1.5v13.5a1.5 1.5 0 0 0 1.5 1.5h11.5a1.5 1.5 0 0 0 1.5-1.5V6.25a1.5 1.5 0 0 0-1.5-1.5h-1v-1.5z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M14.75 1.25a2 2 0 0 1 2 2v1.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2v-1.5a2 2 0 0 1 2-2zm-5.5 1.5a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 .5.5h5.5a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 0-.5-.5z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ClipboardIconDuotone.displayName = "ClipboardIconDuotone";
export { ClipboardIconDuotone };
