import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FlagIconBoldDuotone = memo(
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
          d="M4.903 2.137c1.933-.242 3.307-.209 4.402.003 1.113.216 1.879.607 2.557.964.668.351 1.238.658 2.087.872.854.215 2.039.345 3.883.232C18.961 4.14 20 5.018 20 6.22v7.918a1.98 1.98 0 0 1-1.821 1.979c-2.048.158-3.491.047-4.626-.224-1.143-.273-1.921-.697-2.591-1.055-.658-.351-1.207-.636-2.02-.801-.686-.14-1.601-.2-2.942-.085v-2.006c1.393-.109 2.457-.05 3.34.13 1.119.228 1.886.636 2.564.998.667.355 1.244.666 2.113.874.872.208 2.089.321 3.983.176v-7.9l-.004-.005a.06.06 0 0 0-.042-.014c-1.987.12-3.388-.011-4.493-.29-1.11-.279-1.873-.696-2.528-1.04-.645-.34-1.196-.614-2.008-.771C8.24 3.97 7.328 3.917 6 4.033v-.9a1 1 0 0 0-1.097-.996"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M5 2.133a1 1 0 0 1 1 1V21a1 1 0 1 1-2 0V3.133a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
FlagIconBoldDuotone.displayName = "FlagIconBoldDuotone";
export { FlagIconBoldDuotone };
