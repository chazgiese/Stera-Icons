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
          d="M12.043 1.001q.03 0 .058.004l.037.005a1 1 0 0 1 .154.033l.035.012.029.01.043.017.025.012.038.02a1 1 0 0 1 .142.09q.006.003.013.009l.005.004a1 1 0 0 1 .158.157l.007.009 4.445 5.667a1 1 0 0 1-.787 1.617h-.612l3.176 4.049a1 1 0 0 1-.786 1.617h-.611l2.54 3.241c.772.984.072 2.426-1.18 2.426H13v2a1 1 0 0 1-2 0v-2H5.028c-1.251 0-1.952-1.442-1.18-2.426l2.54-3.241h-.61a1 1 0 0 1-.787-1.617l3.176-4.049h-.611a1.001 1.001 0 0 1-.787-1.617l4.444-5.667.025-.03.017-.02.04-.042q.013-.014.028-.027l.05-.043.01-.008a1 1 0 0 1 .074-.053l.026-.015a1 1 0 0 1 .289-.119l.027-.005.06-.011.043-.005.054-.004.02-.001h.049zM9.611 6.667h.612a1 1 0 0 1 .786 1.617l-3.176 4.049h.611a1 1 0 0 1 .788 1.617L6.055 18h11.89l-3.176-4.05a1 1 0 0 1 .787-1.617h.611l-3.176-4.049a1 1 0 0 1 .787-1.617h.61L12 3.62z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
TreeIconBold.displayName = "TreeIconBold";
export { TreeIconBold };
