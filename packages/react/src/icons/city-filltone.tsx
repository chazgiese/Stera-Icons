import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CityIconFilltone = memo(
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
          d="M7 3c.333 0 .644 0 .902.02.237.02.496.06.757.172l.112.053.156.087c.352.216.64.526.828.897.152.298.202.598.224.869.022.258.021.569.021.902v5.03l.098-.01c.258-.02.568-.02.902-.02h2c.334 0 .644 0 .902.02l.098.01V10c0-.334 0-.644.02-.902a2.3 2.3 0 0 1 .225-.87l.087-.155c.216-.352.526-.64.896-.828l.113-.053c.26-.111.52-.152.757-.171.258-.022.569-.021.902-.021h2c.334 0 .644 0 .902.02.237.02.496.06.757.172l.113.053.155.087c.352.216.64.526.828.897.152.298.202.598.225.869.02.258.02.568.02.902v10H2V6c0-.333 0-.644.02-.902a2.3 2.3 0 0 1 .225-.87l.087-.155a2.25 2.25 0 0 1 .897-.828l.112-.053c.26-.111.52-.152.757-.171C4.356 2.999 4.667 3 5 3z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M22 19a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zM6 14.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75M12 14.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75M18 14.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75M6 10.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75M18 10.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75M6 6.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V7A.75.75 0 0 1 6 6.25"
        />
      </svg>
    ))
);
CityIconFilltone.displayName = "CityIconFilltone";
export { CityIconFilltone };
