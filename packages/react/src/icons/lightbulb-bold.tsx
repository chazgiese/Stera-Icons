import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LightbulbIconBold = memo(
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
          d="M12 1a7 7 0 0 1 6.24 10.175c-.253.497-.533.993-.794 1.463a26 26 0 0 0-.733 1.393c-.438.92-.713 1.77-.713 2.627V19a3 3 0 0 1-2.213 2.892 1.997 1.997 0 0 1-3.575 0A3 3 0 0 1 8 19v-2.342c0-.857-.275-1.708-.713-2.627a25 25 0 0 0-.733-1.393c-.261-.47-.54-.966-.794-1.463A7 7 0 0 1 12 1m-2 18a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2h-4zm2-16a5 5 0 0 0-4.458 7.267c.233.457.49.912.76 1.4.267.48.543.985.79 1.505.273.57.517 1.181.684 1.828h4.448c.167-.647.411-1.257.683-1.828.248-.52.524-1.026.79-1.505.271-.488.528-.944.761-1.4A5 5 0 0 0 12 3"
          clipRule="evenodd"
        />
      </svg>
    ))
);
LightbulbIconBold.displayName = "LightbulbIconBold";
export { LightbulbIconBold };
