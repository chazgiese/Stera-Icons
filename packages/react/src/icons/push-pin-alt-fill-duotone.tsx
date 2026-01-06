import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PushPinAltIconFillDuotone = memo(
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
          d="M12.307 2.326a1.96 1.96 0 0 1 2.772 0l6.596 6.596a1.96 1.96 0 0 1-2.005 3.245l-.635-.21a.5.5 0 0 0-.512.12l-2.442 2.442a.5.5 0 0 0-.137.452l.43 2.15a2 2 0 0 1-.547 1.806l-.72.72a2 2 0 0 1-2.828 0l-7.925-7.925a2 2 0 0 1 0-2.828l.72-.72a2 2 0 0 1 1.807-.547l2.149.43a.5.5 0 0 0 .452-.137l2.443-2.442a.5.5 0 0 0 .12-.512l-.211-.635a1.96 1.96 0 0 1 .473-2.005"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M9.023 16.39 5.4 20.017A1 1 0 0 1 3.985 18.6l3.623-3.624z"
        />
      </svg>
    ))
);
PushPinAltIconFillDuotone.displayName = "PushPinAltIconFillDuotone";
export { PushPinAltIconFillDuotone };
