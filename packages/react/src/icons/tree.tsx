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
          d="M12.073 1.255q.032.004.065.01a.7.7 0 0 1 .15.046q.032.012.064.028l.022.012q.046.025.088.06l.014.01q.045.037.084.082l.016.018.013.016 4.445 5.667a.75.75 0 0 1-.59 1.213h-1.125l3.493 4.453a.75.75 0 0 1-.59 1.213h-1.126l2.86 3.646c.643.82.059 2.02-.984 2.021H13V22a1 1 0 1 1-2 0v-2.25H5.027c-1.042 0-1.627-1.201-.983-2.021l2.859-3.646H5.777a.75.75 0 0 1-.59-1.213L8.68 8.417H7.555a.751.751 0 0 1-.59-1.213l4.445-5.667.011-.014.026-.029.022-.024.025-.023.028-.025a1 1 0 0 1 .1-.07l.014-.008.03-.015q.018-.008.038-.014.041-.02.085-.034.033-.008.068-.014.034-.008.068-.012.038-.003.075-.002.036 0 .073.002M9.096 6.917h1.126a.75.75 0 0 1 .59 1.213L7.32 12.583h1.125a.751.751 0 0 1 .59 1.213L5.542 18.25h12.916l-3.493-4.454a.75.75 0 0 1 .59-1.213h1.125L13.187 8.13a.75.75 0 0 1 .59-1.213h1.126L12 3.215z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
TreeIcon.displayName = "TreeIcon";
export { TreeIcon };
