import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const EyeClosedIconFillDuotone = memo(
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
          d="M19.628 8.304a1.5 1.5 0 0 1 2.656 1.392c-1.882 3.59-5.81 6.001-10.284 6.001s-8.403-2.411-10.285-6A1.5 1.5 0 0 1 4.37 8.303c1.344 2.563 4.226 4.393 7.63 4.393 3.402 0 6.283-1.83 7.627-4.393"
        />
        <g fill="currentColor" opacity={0.4}>
          <path d="M7.577 14.867c.918.36 1.895.61 2.911.735l-.524 1.815a1.5 1.5 0 0 1-2.882-.834zM16.918 16.583a1.501 1.501 0 0 1-2.882.834l-.525-1.815a12 12 0 0 0 2.91-.735zM2.843 11.414c.626.78 1.362 1.475 2.184 2.066L3.52 14.88a1.5 1.5 0 0 1-2.04-2.201zM22.52 12.678a1.5 1.5 0 0 1-2.04 2.2l-1.508-1.398a11.2 11.2 0 0 0 2.183-2.066z" />
        </g>
      </svg>
    ))
);
EyeClosedIconFillDuotone.displayName = "EyeClosedIconFillDuotone";
export { EyeClosedIconFillDuotone };
