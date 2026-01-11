import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TreeIconDuotone = memo(
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
          d="M12.073 1.255q.033.004.066.01a.7.7 0 0 1 .149.046q.032.012.064.028l.022.012q.045.025.089.06l.013.01q.045.037.084.082l.016.018.014.016 4.444 5.667a.75.75 0 0 1-.59 1.213H15.32l3.493 4.453a.75.75 0 0 1-.59 1.213h-1.126l2.86 3.646c.643.82.059 2.02-.983 2.021H5.027c-1.042 0-1.626-1.201-.983-2.021l2.86-3.646H5.776a.75.75 0 0 1-.59-1.213L8.68 8.417H7.555a.751.751 0 0 1-.59-1.213l4.445-5.667.012-.014.025-.029.023-.024.024-.023.028-.025a1 1 0 0 1 .1-.07l.014-.008.03-.015q.018-.008.038-.014.042-.02.085-.034.033-.008.068-.014.034-.008.069-.012.036-.003.074-.002.036 0 .073.002M9.096 6.917h1.127a.75.75 0 0 1 .59 1.213l-3.494 4.453h1.125a.751.751 0 0 1 .59 1.213L5.542 18.25h12.916l-3.492-4.454a.75.75 0 0 1 .59-1.213h1.124L13.187 8.13a.75.75 0 0 1 .59-1.213h1.126L12 3.215z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path fill="currentColor" d="M13 22a1 1 0 1 1-2 0v-2.25h2z" />
      </svg>
    ))
);
TreeIconDuotone.displayName = "TreeIconDuotone";
export { TreeIconDuotone };
