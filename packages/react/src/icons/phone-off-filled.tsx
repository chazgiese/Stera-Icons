import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PhoneOffFilled = memo(
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
          d="M12.007 7.252a27.8 27.8 0 0 1 5.657.511c1.814.358 3.336.995 4.412 2.002 1.099 1.03 1.674 2.39 1.674 4.05 0 .514.009 1.249-.179 1.817-.1.301-.283.648-.635.88-.32.212-.687.268-1.052.224l-.158-.025-.024-.005-.024-.006-3.119-.823c-.614-.16-1.092-.314-1.45-.484-.36-.17-.681-.396-.878-.744-.195-.346-.2-.698-.19-.942.014-.308.04-.429.04-.727 0-.109-.03-.19-.194-.295-.2-.128-.536-.236-1.006-.307-.942-.143-2.058-.091-2.881-.091-.824 0-1.939-.052-2.881.09-.47.072-.806.18-1.007.308-.163.105-.193.186-.193.295 0 .298.026.42.039.727.01.244.006.596-.19.942-.196.348-.518.574-.877.744a7 7 0 0 1-1.014.365l-.436.119-3.119.823-.024.006-.025.005c-.417.08-.843.043-1.21-.199-.352-.232-.535-.579-.634-.88-.188-.568-.18-1.303-.18-1.818 0-1.658.576-3.02 1.675-4.049C3 8.758 4.522 8.121 6.336 7.763a27.8 27.8 0 0 1 5.658-.511l-.001-.001h.014"
        />
      </svg>
    ))
);
PhoneOffFilled.displayName = "PhoneOffFilled";
export { PhoneOffFilled };
