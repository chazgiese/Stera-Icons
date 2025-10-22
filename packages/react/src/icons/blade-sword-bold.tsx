import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BladeSwordIconBold = memo(
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
          d="M2.293 2.294a1 1 0 0 1 .95-.263l4 1c.175.044.336.135.464.263L17 12.587l1.293-1.293a1 1 0 1 1 1.414 1.414L18 14.415v2.172l2.04 2.04 1.22.406c.184.061.352.165.49.302l.28.282a1.25 1.25 0 0 1 0 1.767l-.646.647a1.25 1.25 0 0 1-1.673.086l-.094-.086-.282-.281a1.3 1.3 0 0 1-.248-.355l-.054-.135-.407-1.218L16.586 18h-2.171l-1.708 1.707a1 1 0 0 1-1.414-1.414L12.586 17 3.293 7.708a1 1 0 0 1-.221-.336l-.041-.13-1-4a1 1 0 0 1 .262-.948m2.61 4.195L14 15.587 15.586 14 6.49 4.903l-2.116-.528z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BladeSwordIconBold.displayName = "BladeSwordIconBold";
export { BladeSwordIconBold };
