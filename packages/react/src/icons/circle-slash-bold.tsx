import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CircleSlashIconBold = memo(
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
          d="M4.222 4.222c4.295-4.296 11.26-4.296 15.556 0 4.296 4.295 4.296 11.26 0 15.556s-11.26 4.296-15.556 0-4.296-11.26 0-15.556m.747 2.16c-2.83 3.534-2.609 8.706.667 11.982s8.446 3.496 11.98.666zm13.395-.746C15.088 2.36 9.916 2.138 6.383 4.969L19.03 17.616c2.83-3.534 2.61-8.705-.666-11.98"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M4.222 4.222c4.295-4.296 11.26-4.296 15.556 0s4.296 11.26 0 15.556-11.26 4.296-15.556 0c-4.296-4.295-4.296-11.26 0-15.556m.747 2.16c-2.83 3.535-2.609 8.707.667 11.982 3.275 3.276 8.446 3.496 11.98.666zm13.395-.746C15.088 2.36 9.916 2.139 6.383 4.969L19.03 17.616c2.83-3.533 2.61-8.705-.666-11.98"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CircleSlashIconBold.displayName = "CircleSlashIconBold";
export { CircleSlashIconBold };
