import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PoundSterlingCircleIconFilltone = memo(
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
          d="M11.929 5.79c1.539-.221 3.283.46 4.348 2.171a1 1 0 0 1-1.698 1.057c-.65-1.043-1.619-1.354-2.365-1.247C11.46 7.88 11 8.366 11 9.041v1.753h2.143a1 1 0 0 1 0 2H11v1.753c0 .457-.127.859-.312 1.204H16a1 1 0 1 1 0 2H8a1 1 0 0 1-.462-1.887l.08-.037.005-.003.043-.02c.04-.019.103-.048.18-.089.155-.082.356-.2.55-.347.445-.337.604-.628.604-.82v-1.754H8a1 1 0 0 1 0-2h1V9.041c0-1.865 1.397-3.03 2.929-3.25"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m4.277 6.96c-1.065-1.71-2.81-2.392-4.348-2.17C10.397 6.01 9 7.176 9 9.04v1.754H8a1 1 0 0 0 0 2h1v1.753c0 .193-.159.483-.604.82a4 4 0 0 1-.773.456l-.006.003-.079.037A1 1 0 0 0 8 17.75h8a1 1 0 1 0 0-2h-5.312A2.5 2.5 0 0 0 11 14.547v-1.753h2.143a1 1 0 0 0 0-2H11V9.04c0-.674.46-1.16 1.214-1.27.746-.107 1.716.205 2.365 1.248a1 1 0 0 0 1.698-1.057"
          clipRule="evenodd"
          opacity={0.4}
        />
      </svg>
    ))
);
PoundSterlingCircleIconFilltone.displayName = "PoundSterlingCircleIconFilltone";
export { PoundSterlingCircleIconFilltone };
