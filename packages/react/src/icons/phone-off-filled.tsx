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
          d="M12.007 7.252a27.8 27.8 0 0 1 5.657.511c1.814.358 3.336.995 4.412 2.002 1.099 1.03 1.674 2.39 1.674 4.05 0 .514.009 1.249-.179 1.817-.1.301-.283.648-.634.88-.32.212-.687.268-1.053.224l-.157-.025-.025-.005-.024-.006-3.118-.823c-.615-.16-1.093-.314-1.451-.484-.36-.17-.68-.396-.878-.744-.195-.346-.2-.698-.189-.942.013-.308.04-.429.04-.727-.001-.109-.031-.19-.194-.295-.2-.128-.537-.236-1.007-.307-.942-.143-2.057-.091-2.88-.091-.824 0-1.94-.052-2.882.09-.47.072-.806.18-1.007.308-.163.105-.193.186-.193.295 0 .298.026.42.04.727.01.244.005.596-.19.942-.197.348-.518.574-.877.744a7 7 0 0 1-1.015.365l-.436.119-3.119.823-.024.006-.025.005c-.416.08-.843.043-1.21-.198-.351-.233-.535-.58-.634-.881C.24 15.064.25 14.329.25 13.814c0-1.658.575-3.02 1.674-4.049C3 8.758 4.522 8.121 6.336 7.763a27.8 27.8 0 0 1 5.658-.511V7.25h.013"
        />
      </svg>
    ))
);
PhoneOffFilled.displayName = "PhoneOffFilled";
export { PhoneOffFilled };
