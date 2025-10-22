import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CardHolderIconFilltone = memo(
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
          d="M8.5 10a1 1 0 0 1 1 1 2.5 2.5 0 0 0 5 0 1 1 0 0 1 1-1H22a1 1 0 0 1 1 1v5c0 .684.001 1.257-.037 1.724-.04.478-.125.933-.345 1.365a3.5 3.5 0 0 1-1.53 1.53c-.43.22-.886.305-1.364.344C19.257 21 18.684 21 18 21H6c-.684 0-1.257.001-1.724-.037-.478-.04-.933-.125-1.365-.345a3.5 3.5 0 0 1-1.53-1.53c-.22-.43-.305-.886-.344-1.364C1 17.257 1 16.684 1 16v-5a1 1 0 0 1 1-1z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M18.8 3c.543 0 1.012-.001 1.395.03.396.033.789.104 1.167.297a3 3 0 0 1 1.31 1.31c.194.379.265.772.298 1.168.031.383.03.852.03 1.395V11h-2V8.5H3V11H1V7.2c0-.543-.001-1.012.03-1.395.033-.396.104-.789.297-1.167a3 3 0 0 1 1.31-1.31c.379-.194.772-.265 1.168-.298C4.188 3 4.657 3 5.2 3zM5.2 5c-.576 0-.949.001-1.232.024-.272.023-.373.06-.422.085a1 1 0 0 0-.437.437c-.025.05-.062.15-.085.422a8 8 0 0 0-.02.532h17.992a8 8 0 0 0-.02-.532c-.023-.272-.06-.373-.085-.422a1 1 0 0 0-.437-.437c-.05-.025-.15-.062-.422-.085A17 17 0 0 0 18.8 5z"
          clipRule="evenodd"
          opacity={0.32}
        />
      </svg>
    ))
);
CardHolderIconFilltone.displayName = "CardHolderIconFilltone";
export { CardHolderIconFilltone };
