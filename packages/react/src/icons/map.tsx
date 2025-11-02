import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MapIcon = memo(
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
          d="M8.731 3.254q.015 0 .028.002.03.004.057.01l.045.01.008.002.076.026.005.002q.033.014.064.03.011.007.022.012l.005.003.01.005 6.282 3.769 6.281-3.769A.75.75 0 0 1 22.75 4v12a.75.75 0 0 1-.364.644l-6.667 4a1 1 0 0 1-.106.05l-.01.004a1 1 0 0 1-.084.028l-.007.002a1 1 0 0 1-.088.015l-.023.002a1 1 0 0 1-.136 0q-.012 0-.024-.002a1 1 0 0 1-.088-.015l-.007-.002a1 1 0 0 1-.084-.028l-.01-.004a1 1 0 0 1-.105-.05l-6.281-3.769-6.28 3.769A.75.75 0 0 1 1.25 20V8a.75.75 0 0 1 .364-.644l6.667-4a.8.8 0 0 1 .19-.08l.01-.003.079-.015.013-.002.029-.002q.028-.003.055-.004h.019q.027 0 .055.004M2.75 8.424v10.25l5.166-3.1V5.324zm6.667 7.15 5.166 3.1V8.425l-5.166-3.1zm6.666-7.15v10.25l5.167-3.1V5.324z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
MapIcon.displayName = "MapIcon";
export { MapIcon };
