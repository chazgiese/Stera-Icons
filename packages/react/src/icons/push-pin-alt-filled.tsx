import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PushPinAltIconFilled = memo(
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
          d="M12.307 2.326a1.96 1.96 0 0 1 2.771 0l6.597 6.596a1.96 1.96 0 0 1-2.006 3.245l-.635-.21a.5.5 0 0 0-.512.12l-2.442 2.442a.5.5 0 0 0-.137.452l.43 2.15a2 2 0 0 1-.547 1.806l-.72.72a2 2 0 0 1-2.828 0L9.022 16.39 5.4 20.015A1 1 0 0 1 3.985 18.6l3.622-3.623-3.254-3.255a2 2 0 0 1 0-2.828l.72-.72a2 2 0 0 1 1.807-.547l2.15.43a.5.5 0 0 0 .451-.137l2.443-2.442a.5.5 0 0 0 .12-.512l-.211-.635a1.96 1.96 0 0 1 .474-2.005"
        />
      </svg>
    ))
);
PushPinAltIconFilled.displayName = "PushPinAltIconFilled";
export { PushPinAltIconFilled };
