import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TreeIcon = memo(
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
          d="M12.073 1.255q.033.004.066.01a.7.7 0 0 1 .15.046q.031.012.064.028l.021.012q.045.025.089.06l.014.01q.044.037.084.082l.015.017.014.017 4.444 5.667a.75.75 0 0 1-.59 1.213H15.32l3.494 4.453a.75.75 0 0 1-.59 1.213h-1.126l2.86 3.646c.642.82.058 2.02-.984 2.021H13V22a1 1 0 1 1-2 0v-2.25H5.027c-1.042 0-1.626-1.201-.983-2.021l2.86-3.646H5.776a.75.75 0 0 1-.59-1.213l3.494-4.453H7.556a.751.751 0 0 1-.59-1.213l4.444-5.667.012-.015.025-.028.023-.024.024-.023.029-.025a1 1 0 0 1 .1-.07l.014-.008.03-.015q.018-.008.037-.015.042-.019.085-.033.034-.008.069-.014.033-.008.068-.012.038-.003.074-.002.037 0 .073.002M9.097 6.917h1.126a.75.75 0 0 1 .59 1.213l-3.494 4.453h1.125a.75.75 0 0 1 .59 1.213L5.542 18.25h12.916l-3.492-4.454a.75.75 0 0 1 .59-1.213h1.125L13.188 8.13a.75.75 0 0 1 .59-1.213h1.125L12 3.215z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
TreeIcon.displayName = "TreeIcon";
export { TreeIcon };
