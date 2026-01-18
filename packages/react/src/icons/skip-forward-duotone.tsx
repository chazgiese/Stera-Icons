import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SkipForwardIconDuotone = memo(
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
          d="M20 3.25a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M4.875 3.085c.38-.027.717.114.991.256.28.146.616.363 1.005.613l9.44 6.069c.337.216.633.406.856.579.195.152.401.342.54.6l.056.117.06.165c.121.391.1.815-.06 1.196-.135.32-.373.543-.596.717s-.52.363-.856.579l-9.44 6.07c-.389.25-.725.466-1.005.612-.274.142-.611.283-.991.255a1.75 1.75 0 0 1-1.276-.697c-.228-.304-.292-.664-.32-.971-.03-.315-.029-.714-.029-1.176V5.93c0-.462 0-.861.028-1.176.029-.307.093-.667.32-.971l.123-.146c.3-.32.711-.52 1.154-.552m.095 1.498a.25.25 0 0 0-.162.09c-.007.02-.024.081-.037.218-.02.23-.021.547-.021 1.04v12.138c0 .492 0 .81.021 1.039.013.134.03.196.037.218.04.05.098.08.162.088a1 1 0 0 0 .204-.086c.204-.107.472-.278.886-.544l9.441-6.07c.36-.231.587-.378.743-.5a1 1 0 0 0 .139-.127.25.25 0 0 0 0-.176 1 1 0 0 0-.139-.126 11 11 0 0 0-.743-.5L6.06 5.215a13 13 0 0 0-.886-.544 1 1 0 0 0-.204-.088"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SkipForwardIconDuotone.displayName = "SkipForwardIconDuotone";
export { SkipForwardIconDuotone };
