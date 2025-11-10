import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TreeIconBold = memo(
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
          d="M12.043 1.001q.028 0 .057.004l.037.005.068.011.017.004.07.018.035.012.028.01.043.017.026.012.038.02a1 1 0 0 1 .135.084l.02.015.03.023.028.028a1 1 0 0 1 .103.108l.009.01L17.23 7.05a1 1 0 0 1-.787 1.617h-.611l3.175 4.049a1 1 0 0 1-.786 1.617h-.611l3.176 4.05A1 1 0 0 1 20 20h-7v2a1 1 0 1 1-2 0v-2H4a1 1 0 0 1-.787-1.617l3.175-4.05h-.611a1 1 0 0 1-.786-1.617l3.176-4.049h-.612a1 1 0 0 1-.787-1.617l4.445-5.667.024-.03.018-.02.039-.042q.014-.014.029-.027l.049-.043.01-.008a1 1 0 0 1 .075-.053l.027-.016a1 1 0 0 1 .1-.054l.033-.015a1 1 0 0 1 .241-.065l.043-.005.055-.004.02-.001h.048zM9.61 6.667h.611a1 1 0 0 1 .786 1.617l-3.175 4.049h.611a1 1 0 0 1 .787 1.617L6.055 18h11.889l-3.176-4.05a1 1 0 0 1 .787-1.617h.612L12.99 8.284a1 1 0 0 1 .786-1.617h.611L12 3.62z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
TreeIconBold.displayName = "TreeIconBold";
export { TreeIconBold };
