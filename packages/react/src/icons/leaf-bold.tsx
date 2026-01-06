import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LeafIconBold = memo(
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
          d="M21 3c0 4.05-.378 6.902-1.209 9.178-.841 2.302-2.119 3.936-3.77 5.588a7.63 7.63 0 0 1-9.956.717c-.155.209-.327.45-.502.714-.472.713-.906 1.494-1.115 2.12a1 1 0 0 1-1.896-.633c.291-.874.838-1.826 1.343-2.59.246-.371.497-.723.727-1.022A7.627 7.627 0 0 1 5.234 6.98c1.318-1.317 2.697-2.606 4.953-3.532C12.42 2.531 15.433 2 20 2h1zm-2.01 1.01c-3.843.073-6.293.57-8.044 1.288-1.876.77-3.026 1.825-4.297 3.096a5.63 5.63 0 0 0-.644 7.185l3.372-3.372a1 1 0 0 1 1.414 1.415l-3.373 3.372a5.63 5.63 0 0 0 7.189-.642c1.534-1.535 2.6-2.93 3.306-4.86.652-1.786 1.018-4.093 1.077-7.482"
          clipRule="evenodd"
        />
      </svg>
    ))
);
LeafIconBold.displayName = "LeafIconBold";
export { LeafIconBold };
