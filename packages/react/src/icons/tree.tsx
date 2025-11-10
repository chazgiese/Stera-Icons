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
          d="M12.073 1.255q.033.004.066.01a.7.7 0 0 1 .15.046q.031.012.064.028l.021.012q.045.025.089.06l.014.01q.044.037.084.082l.015.018.014.016 4.444 5.667a.75.75 0 0 1-.59 1.213H15.32l3.494 4.453a.75.75 0 0 1-.59 1.213h-1.126l3.493 4.454A.75.75 0 0 1 20 19.75h-7V22a1 1 0 1 1-2 0v-2.25H4a.75.75 0 0 1-.59-1.213l3.493-4.454H5.777a.75.75 0 0 1-.59-1.213l3.494-4.453H7.556a.751.751 0 0 1-.59-1.213l4.444-5.667.012-.014.025-.029.023-.024.024-.023.029-.025.014-.012a1 1 0 0 1 .088-.06l.022-.011q.03-.015.062-.027.04-.019.08-.03.034-.009.069-.015.033-.008.068-.012.038-.003.074-.002.037 0 .073.002M9.097 6.917h1.126a.75.75 0 0 1 .59 1.213l-3.494 4.453h1.125a.751.751 0 0 1 .59 1.213L5.541 18.25H18.46l-3.493-4.454a.75.75 0 0 1 .59-1.213h1.125L13.188 8.13a.75.75 0 0 1 .59-1.213h1.125L12 3.215z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
TreeIcon.displayName = "TreeIcon";
export { TreeIcon };
