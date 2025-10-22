import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MedalIconFilltone = memo(
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
          d="M16.8 1c.543 0 1.011-.001 1.395.03.395.033.789.104 1.167.297a3 3 0 0 1 1.31 1.31c.193.379.265.772.297 1.168.032.383.03.852.03 1.395v1.822c0 .646.014 1.207-.163 1.72a3 3 0 0 1-.693 1.121c-.38.388-.887.628-1.465.916l-4.8 2.4c-.473.236-.88.45-1.325.534-.366.068-.74.068-1.106 0-.445-.084-.852-.298-1.325-.534l-4.8-2.4c-.578-.288-1.086-.528-1.466-.916a3 3 0 0 1-.692-1.12C2.987 8.228 3 7.667 3 7.022V5.2c0-.543-.001-1.012.03-1.395.032-.396.104-.789.297-1.167a3 3 0 0 1 1.31-1.31c.379-.194.772-.265 1.167-.298C6.188 1 6.657 1 7.2 1z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="m8 12.117-2-.999v-10.1C6.344 1 6.746 1 7.2 1H8zM16.8 1c.454 0 .856 0 1.2.019v10.1l-2 .998V1zM17 17a5 5 0 1 1-10 0 5 5 0 0 1 10 0"
        />
      </svg>
    ))
);
MedalIconFilltone.displayName = "MedalIconFilltone";
export { MedalIconFilltone };
