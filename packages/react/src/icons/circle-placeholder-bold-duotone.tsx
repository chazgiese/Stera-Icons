import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CirclePlaceholderIconBoldDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M12.828 20.96Q12.42 21 12 21a9 9 0 0 1-2.241-.281l-6.478-6.478a9 9 0 0 1-.243-3.07zM17.418 19.186a9 9 0 0 1-1.783 1.046L3.767 8.364a9 9 0 0 1 1.047-1.782zM20.232 15.635a9 9 0 0 1-1.046 1.783L6.582 4.814a9 9 0 0 1 1.782-1.047zM12 3c.774 0 1.525.098 2.242.281l6.477 6.478a9 9 0 0 1 .241 3.07l-9.79-9.79Q11.58 3 12 3" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CirclePlaceholderIconBoldDuotone.displayName =
  "CirclePlaceholderIconBoldDuotone";
export { CirclePlaceholderIconBoldDuotone };
