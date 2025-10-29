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
          d="M3.294 3.293a1 1 0 0 1 1.414 0l14 14a1 1 0 0 1-1.414 1.414l-14-14a1 1 0 0 1 0-1.414M14.373 17.201l-1.118 1.15a1.75 1.75 0 0 1-2.51 0l-2.012-2.07c-.292-.301-.268-.746.022-.96a5.46 5.46 0 0 1 2.695-1.043zM9.373 12.201a8 8 0 0 0-2.265 1.257c-.357.282-.856.271-1.146-.027l-.667-.686c-.287-.296-.276-.75.014-1a10.4 10.4 0 0 1 2.17-1.438zM12.079 9.25c2.514.02 4.819.953 6.613 2.495.29.25.3.704.014 1l-.667.687c-.29.297-.789.308-1.146.026a8 8 0 0 0-1.583-.976zM5.644 8.473c-.711.415-1.381.896-2 1.438-.333.292-.828.284-1.119-.016l-.667-.686a.704.704 0 0 1 .01-1.014q.925-.841 1.974-1.524zM12 4.25c3.886 0 7.433 1.49 10.133 3.945.288.262.296.72.01 1.014l-.667.686c-.291.3-.786.308-1.119.016-2.25-1.97-5.168-3.161-8.356-3.161-.76 0-1.502.069-2.225.198l-2.07-2.07A15 15 0 0 1 12 4.25"
        />
      </svg>
    ))
);
WifiSlashIconBold.displayName = "WifiSlashIconBold";
export { WifiSlashIconBold };
