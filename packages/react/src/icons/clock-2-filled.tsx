import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const Clock2IconFilled = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 4a1 1 0 0 0-1 1v6.026a1 1 0 0 0 .017.155l.005.027.023.09.006.017.008.02q.01.034.024.065.011.025.024.048l.018.035.009.017q.008.015.018.028l.029.044q.015.023.034.045l.02.026a1 1 0 0 0 .123.123l.011.01.054.04.032.022a1 1 0 0 0 .09.052q.014.007.027.013l.07.03.02.007q.032.011.065.02.02.007.04.01a1 1 0 0 0 .098.02l.047.005q.034.004.067.004L12 13l.008-.001.074-.004h.025q.038-.005.074-.013.013-.001.027-.005l.045-.011.057-.016.026-.01q.033-.01.064-.024.025-.011.048-.024l.035-.018.017-.008 3.464-2a1 1 0 0 0-1-1.732L13 10.268V6a1 1 0 0 0-1-1"
          clipRule="evenodd"
        />
      </svg>
    ))
);
Clock2IconFilled.displayName = "Clock2IconFilled";
export { Clock2IconFilled };
