import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const Clock1IconFilled = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 4a1 1 0 0 0-1 1v6.02q0 .034.004.067.002.024.006.047a1 1 0 0 0 .087.294l.012.025a1 1 0 0 0 .052.09q.01.018.023.033a1 1 0 0 0 .172.189l.026.02.045.033.044.03.029.018.05.026q.024.013.049.024.03.014.064.024l.027.01.056.016a1 1 0 0 0 .098.02q.019.004.038.006l.053.004q.027.002.056.003L12 13l.02-.001.067-.004q.024-.002.047-.006a1 1 0 0 0 .098-.018l.04-.01.066-.021.02-.007.069-.03.026-.013.045-.024.046-.028.032-.023a1 1 0 0 0 .189-.172l.02-.026.033-.045q.017-.024.033-.049.007-.011.015-.023l2-3.464a1 1 0 0 0-1.732-1L13 8.268V6a1 1 0 0 0-1-1"
          clipRule="evenodd"
        />
      </svg>
    ))
);
Clock1IconFilled.displayName = "Clock1IconFilled";
export { Clock1IconFilled };
