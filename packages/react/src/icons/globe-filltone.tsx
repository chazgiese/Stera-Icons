import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GlobeIconFilltone = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1c6.075 0 11 4.925 11 11 0 6.057-4.895 10.968-10.945 10.997l-.011.001h-.005L12 23l-.04-.002h-.006C5.9 22.973 1 18.06 1 12 1 5.925 5.925 1 12 1M3.057 13a9.005 9.005 0 0 0 6.698 7.717A15.9 15.9 0 0 1 7.195 13zm13.748 0a15.9 15.9 0 0 1-2.56 7.717A9.005 9.005 0 0 0 20.942 13zm-7.603 0A13.9 13.9 0 0 0 12 20.43 13.9 13.9 0 0 0 14.798 13zm.553-9.718A9.01 9.01 0 0 0 3.057 11h4.138a15.9 15.9 0 0 1 2.56-7.718M12 3.568A13.9 13.9 0 0 0 9.202 11h5.596A13.9 13.9 0 0 0 12 3.568m2.244-.286A15.9 15.9 0 0 1 16.804 11h4.14a9.01 9.01 0 0 0-6.7-7.718"
          clipRule="evenodd"
        />
      </svg>
    ))
);
GlobeIconFilltone.displayName = "GlobeIconFilltone";
export { GlobeIconFilltone };
