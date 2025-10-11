import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SendIcon = memo(
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
          d="M19.256 2.349c1.48-.493 2.888.916 2.395 2.395l-5.237 15.712c-.587 1.758-3.089 1.713-3.612-.065l-2.089-7.104-7.103-2.089c-1.778-.523-1.823-3.026-.065-3.612zm-7.094 10.55 2.079 7.069a.393.393 0 0 0 .75.014l4.955-14.868zm-8.143-3.89a.393.393 0 0 0 .014.75l7.068 2.079 7.784-7.784z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SendIcon.displayName = "SendIcon";
export { SendIcon };
