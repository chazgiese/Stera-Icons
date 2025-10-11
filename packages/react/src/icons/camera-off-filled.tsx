import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CameraOffIconFilled = memo(
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
          d="M1.793 1.793a1 1 0 0 1 1.414 0l20 20a1 1 0 1 1-1.414 1.414l-20-20a1 1 0 0 1 0-1.414M8.203 11.738a4 4 0 0 0 5.058 5.058L17.464 21H6c-.684 0-1.257.001-1.724-.037-.478-.04-.934-.125-1.365-.345a3.5 3.5 0 0 1-1.53-1.529c-.22-.432-.305-.887-.344-1.365C.999 17.257 1 16.684 1 16v-5.499c0-.853-.012-1.518.172-2.084a3.5 3.5 0 0 1 1.696-2.014zM13.697 3c.397.004.76.025 1.104.13.377.115.73.303 1.034.553.37.305.634.718.947 1.187l.219.328c.253.38.309.456.362.51.14.139.318.234.512.273.074.014.166.02.624.02.853 0 1.518-.013 2.084.171a3.5 3.5 0 0 1 2.245 2.245c.184.566.172 1.23.172 2.084v5.5c0 .682 0 1.256-.037 1.723-.04.477-.126.93-.344 1.36l-6.661-6.661a4 4 0 0 0-3.382-3.382L7.705 4.17a3 3 0 0 1 .46-.487c.304-.25.656-.438 1.033-.553.345-.105.707-.126 1.104-.13z"
        />
      </svg>
    ))
);
CameraOffIconFilled.displayName = "CameraOffIconFilled";
export { CameraOffIconFilled };
