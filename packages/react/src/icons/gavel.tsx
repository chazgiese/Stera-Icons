import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GavelIcon = memo(
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
          d="M11.663 3.177a1.75 1.75 0 0 1 2.475 0l4.243 4.242a1.75 1.75 0 0 1 0 2.476l-.707.707a1.75 1.75 0 0 1-1.824.409l-.83.827 5.482 5.48a2.25 2.25 0 0 1-3.182 3.183l-5.48-5.481-.829.829c.219.616.084 1.33-.41 1.823l-.706.707a1.75 1.75 0 0 1-2.476 0l-4.242-4.242a1.75 1.75 0 0 1 0-2.475l.707-.707a1.75 1.75 0 0 1 1.824-.41l4.838-4.838a1.75 1.75 0 0 1 .41-1.823zm1.238 10.783 5.48 5.48a.75.75 0 0 0 1.06-1.06l-5.48-5.48zm-7.603-1.944a.25.25 0 0 0-.353 0l-.707.707a.25.25 0 0 0 0 .353L8.48 17.32a.25.25 0 0 0 .353 0l.708-.707a.25.25 0 0 0 0-.354zm1.593-.53 3.182 3.181 4.595-4.595-3.181-3.183zm6.186-7.248a.25.25 0 0 0-.353 0l-.707.707a.25.25 0 0 0 0 .353l4.242 4.242a.25.25 0 0 0 .354 0l.707-.707a.25.25 0 0 0 0-.353z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
GavelIcon.displayName = "GavelIcon";
export { GavelIcon };
