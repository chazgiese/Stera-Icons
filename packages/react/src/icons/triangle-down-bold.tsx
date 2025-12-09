import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TriangleDownIconBold = memo(
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
          d="M15.729 2c1.338 0 2.412-.001 3.246.075.829.076 1.587.24 2.203.686a4 4 0 0 1 1.63 2.808c.082.757-.153 1.496-.498 2.253-.348.762-.881 1.694-1.545 2.856l-3.729 6.525c-.673 1.178-1.211 2.122-1.697 2.816-.482.689-1.005 1.272-1.705 1.586a4 4 0 0 1-3.267 0c-.7-.314-1.223-.897-1.706-1.586-.485-.694-1.024-1.638-1.697-2.816l-3.728-6.525C2.572 9.516 2.038 8.584 1.69 7.822c-.346-.757-.58-1.496-.498-2.253a4 4 0 0 1 1.63-2.808c.616-.446 1.374-.61 2.203-.686C5.86 2 6.933 2 8.272 2zM8.272 4c-1.378 0-2.343.001-3.064.067-.725.067-1.04.19-1.212.314a2 2 0 0 0-.814 1.404c-.023.21.027.545.329 1.208.3.659.778 1.497 1.46 2.693l3.73 6.525c.692 1.212 1.178 2.06 1.6 2.661.423.606.69.82.883.907a2 2 0 0 0 1.633 0c.193-.086.46-.301.883-.907.421-.6.908-1.45 1.6-2.661l3.729-6.525c.683-1.196 1.16-2.034 1.46-2.693.303-.663.352-.997.33-1.208a2 2 0 0 0-.815-1.404c-.171-.124-.486-.247-1.212-.314C18.072 4.001 17.106 4 15.73 4z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
TriangleDownIconBold.displayName = "TriangleDownIconBold";
export { TriangleDownIconBold };
