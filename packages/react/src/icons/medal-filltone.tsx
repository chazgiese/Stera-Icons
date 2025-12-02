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
          d="M16 1v11.117l2-.999v-10.1q.101.005.195.012c.396.033.79.105 1.168.297a3 3 0 0 1 1.31 1.31c.193.379.265.772.297 1.168.031.383.03.852.03 1.395v2.291c-.004.454-.031.866-.164 1.251-.145.42-.381.804-.692 1.121-.38.388-.888.628-1.465.916l-4.001 2A4.97 4.97 0 0 0 12 12c-.985 0-1.904.286-2.678.778l-4-1.999c-.578-.288-1.086-.528-1.465-.916a3 3 0 0 1-.693-1.12C2.987 8.228 3 7.667 3 7.022V5.2c0-.543 0-1.012.03-1.395.033-.395.105-.79.297-1.167a3 3 0 0 1 1.31-1.31c.379-.193.773-.265 1.168-.298Q5.9 1.023 6 1.02v10.1l2 .998V1z"
          opacity={0.4}
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
