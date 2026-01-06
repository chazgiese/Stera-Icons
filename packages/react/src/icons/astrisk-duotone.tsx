import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AstriskIconDuotone = memo(
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
          d="M12 1.25a.75.75 0 0 1 .75.75v9.558l8.293 4.788a.751.751 0 0 1-.75 1.3l-8.288-4.786-8.287 4.785a.75.75 0 0 1-.75-1.3l8.282-4.781V2a.75.75 0 0 1 .75-.75"
        />
        <g fill="currentColor" opacity={0.4}>
          <path d="M12.75 13.29V22a.751.751 0 0 1-1.5 0v-8.704l.755-.436zM20.288 6.347a.75.75 0 0 1 .75 1.298l-7.532 4.35-.756-.437v-.86zM2.698 6.621a.75.75 0 0 1 1.025-.274l7.527 4.344v.872l-.745.43-7.532-4.348a.75.75 0 0 1-.275-1.024" />
        </g>
      </svg>
    ))
);
AstriskIconDuotone.displayName = "AstriskIconDuotone";
export { AstriskIconDuotone };
