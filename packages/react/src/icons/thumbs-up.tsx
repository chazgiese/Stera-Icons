import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ThumbsUpIcon = memo(
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
          d="M13 2.25c1.117 0 1.996.36 2.612 1.021.599.642.874 1.483.967 2.316.136 1.212-.095 2.557-.465 3.663h2.163c1.626 0 2.924 1.416 2.69 3.06-.077.552-.168 1.13-.265 1.624-.15.77-.5 2.05-.804 3.112-.153.536-.298 1.027-.404 1.383l-.126.423-.035.115-.01.03-.002.008v.002a3.75 3.75 0 0 1-3.612 2.743H8A4.75 4.75 0 0 1 3.25 17v-4A3.75 3.75 0 0 1 7 9.25c.968 0 1.86-.518 2.34-1.358l3.009-5.264A.75.75 0 0 1 13 2.25m-2.356 6.386a4.2 4.2 0 0 1-2.394 1.922V17a3.25 3.25 0 0 0 3.25 3.25h4.209a2.25 2.25 0 0 0 2.17-1.658l.007-.02v-.004l.003-.007.009-.029.034-.114.125-.418c.105-.352.248-.837.4-1.367.305-1.071.637-2.29.773-2.987.09-.456.176-1.005.252-1.545.1-.707-.455-1.35-1.205-1.351H15a.75.75 0 0 1-.67-1.085c.503-1.007.903-2.612.758-3.911-.072-.64-.268-1.133-.572-1.46-.23-.246-.57-.446-1.097-.516zM6.75 10.765a2.25 2.25 0 0 0-2 2.235v4A3.25 3.25 0 0 0 8 20.25h.038A4.73 4.73 0 0 1 6.75 17z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ThumbsUpIcon.displayName = "ThumbsUpIcon";
export { ThumbsUpIcon };
