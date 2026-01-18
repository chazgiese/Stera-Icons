import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ShipBackIconDuotone = memo(
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
          d="M4 3.25a.75.75 0 0 0-.75.75v16a.75.75 0 0 0 1.5 0V4A.75.75 0 0 0 4 3.25"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M19.125 3.085c-.38-.027-.717.114-.991.256-.28.146-.616.363-1.005.613l-9.44 6.069c-.337.216-.633.406-.856.579a1.95 1.95 0 0 0-.54.6l-.056.117-.06.165c-.12.391-.1.815.06 1.196.135.32.373.543.596.717s.52.363.856.579l9.44 6.07c.389.25.725.466 1.005.612.274.142.611.283.991.255a1.75 1.75 0 0 0 1.276-.697c.228-.304.293-.664.32-.971.03-.315.03-.714.03-1.176V5.93c0-.462 0-.861-.03-1.176-.027-.307-.092-.667-.32-.971l-.122-.146c-.3-.32-.711-.52-1.154-.552m-.095 1.498a.25.25 0 0 1 .162.09c.007.02.024.081.037.218.02.23.021.547.021 1.04v12.138c0 .492 0 .81-.021 1.039-.013.134-.03.196-.037.218a.25.25 0 0 1-.162.088 1 1 0 0 1-.204-.086 13 13 0 0 1-.886-.544l-9.44-6.07c-.361-.231-.588-.378-.744-.5a1 1 0 0 1-.139-.127.25.25 0 0 1 0-.176 1 1 0 0 1 .139-.126c.156-.122.383-.269.743-.5l9.442-6.07c.413-.266.68-.437.885-.544.124-.064.185-.082.204-.088"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ShipBackIconDuotone.displayName = "ShipBackIconDuotone";
export { ShipBackIconDuotone };
