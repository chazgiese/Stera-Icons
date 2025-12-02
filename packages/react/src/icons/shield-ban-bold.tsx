import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ShieldBanIconBold = memo(
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
          d="M11.734 1.036c.203-.056.42-.047.618.028l8 3A1 1 0 0 1 21 5v5.584a13 13 0 0 1-7.187 11.627l-1.366.684a1 1 0 0 1-.894 0l-1.367-.684A13 13 0 0 1 3 10.584V5l.001-.015q0-.06.009-.123l.007-.038a1 1 0 0 1 .079-.25l.013-.027a1 1 0 0 1 .132-.197l.013-.014a1 1 0 0 1 .104-.102l.04-.032a1 1 0 0 1 .243-.136l8.007-3.002zM5 10.584a11 11 0 0 0 6.081 9.838l.919.459.919-.46a11 11 0 0 0 3.832-3.176L5 7.173zm.935-5.242 11.887 10.19A11 11 0 0 0 19 10.583v-4.89l-7-2.626z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ShieldBanIconBold.displayName = "ShieldBanIconBold";
export { ShieldBanIconBold };
