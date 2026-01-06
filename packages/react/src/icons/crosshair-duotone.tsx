import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CrosshairIconDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M5.797 12.75a6.25 6.25 0 0 0 5.453 5.453v1.51a7.75 7.75 0 0 1-6.963-6.963zM19.713 12.75a7.75 7.75 0 0 1-6.963 6.963v-1.51a6.25 6.25 0 0 0 5.453-5.453zM12.75 4.286a7.75 7.75 0 0 1 6.963 6.964h-1.51a6.25 6.25 0 0 0-5.453-5.454zM11.25 5.796a6.25 6.25 0 0 0-5.453 5.454h-1.51a7.75 7.75 0 0 1 6.963-6.964z" />
        </g>
        <path
          fill="currentColor"
          d="M12 1.25a.75.75 0 0 1 .75.75v9.25H22a.75.75 0 0 1 0 1.5h-9.25V22a.75.75 0 0 1-1.5 0v-9.25H2a.75.75 0 0 1 0-1.5h9.25V2a.75.75 0 0 1 .75-.75"
        />
      </svg>
    ))
);
CrosshairIconDuotone.displayName = "CrosshairIconDuotone";
export { CrosshairIconDuotone };
