import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WifiSlashIconBold = memo(
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
          d="M3.293 3.293a1 1 0 0 1 1.414 0l14 14a1 1 0 0 1-1.414 1.414l-14-14a1 1 0 0 1 0-1.414M14.372 17.201l-1.117 1.15a1.75 1.75 0 0 1-2.51 0l-2.012-2.07c-.292-.301-.269-.746.022-.96a5.46 5.46 0 0 1 2.694-1.043zM9.372 12.201a8 8 0 0 0-2.264 1.257c-.358.283-.856.271-1.146-.026l-.667-.687c-.287-.295-.276-.75.014-1a10.4 10.4 0 0 1 2.169-1.438zM12.078 9.251c2.515.02 4.82.952 6.614 2.494.29.25.3.705.013 1l-.667.687c-.29.297-.788.309-1.145.026a8 8 0 0 0-1.583-.976zM5.644 8.473c-.712.415-1.382.896-2 1.438-.333.292-.828.284-1.12-.015l-.666-.687a.704.704 0 0 1 .01-1.014q.926-.842 1.974-1.524zM12 4.25c3.885 0 7.433 1.49 10.133 3.945.288.263.296.72.01 1.014l-.667.687c-.291.299-.786.307-1.12.015-2.248-1.97-5.167-3.16-8.356-3.16-.758 0-1.502.068-2.224.197l-2.07-2.07A15 15 0 0 1 12 4.25"
        />
      </svg>
    ))
);
WifiSlashIconBold.displayName = "WifiSlashIconBold";
export { WifiSlashIconBold };
