import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CursorIconFillDuotone = memo(
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
          d="m5.19 4.26 15.712 5.237c.051.017.068.039.075.05a.16.16 0 0 1 .023.089.16.16 0 0 1-.026.088c-.008.011-.024.03-.077.046l-7.496 2.205c-.285.085-.517.29-.634.559l-.043.118-2.205 7.496c-.015.053-.035.07-.046.077a.16.16 0 0 1-.089.026.16.16 0 0 1-.089-.023c-.01-.007-.031-.024-.048-.075L5.009 4.441a.14.14 0 0 1-.006-.079.15.15 0 0 1 .04-.067.15.15 0 0 1 .068-.04.14.14 0 0 1 .079.006"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M3.112 5.074c-.558-1.675 1.035-3.268 2.71-2.71L21.534 7.6c1.99.663 1.94 3.496-.072 4.089l-6.974 2.05-2.05 6.973c-.592 2.013-3.425 2.063-4.089.072zm1.999-.819a.15.15 0 0 0-.068.04.15.15 0 0 0-.04.067.14.14 0 0 0 .006.08l5.238 15.711c.017.052.037.068.048.076a.16.16 0 0 0 .09.022c.04 0 .071-.013.088-.025.01-.008.03-.025.046-.077l2.205-7.497.043-.118a1 1 0 0 1 .634-.558l7.496-2.205c.053-.016.07-.036.077-.046a.16.16 0 0 0 .026-.09.16.16 0 0 0-.023-.088c-.007-.011-.023-.033-.075-.05L5.19 4.261a.14.14 0 0 0-.08-.006"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CursorIconFillDuotone.displayName = "CursorIconFillDuotone";
export { CursorIconFillDuotone };
