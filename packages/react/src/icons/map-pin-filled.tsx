import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MapPinIconFilled = memo(
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
          d="M12 1.001c4.991 0 9 4.132 9 9.182 0 1.597-.582 3.189-1.374 4.63-.797 1.449-1.847 2.816-2.875 3.985a37 37 0 0 1-3.762 3.683q-.171.144-.266.221-.05.043-.1.081a1 1 0 0 1-1.245 0c-.13-.087-.248-.201-.367-.302a36.754 36.754 0 0 1-3.762-3.684c-1.028-1.168-2.078-2.535-2.875-3.985C3.582 13.373 3 11.78 3 10.183c0-5.049 4.009-9.181 9-9.181M12 6.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7"
        />
      </svg>
    ))
);
MapPinIconFilled.displayName = "MapPinIconFilled";
export { MapPinIconFilled };
