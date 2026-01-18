import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CoffeeMugIconDuotone = memo(
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
          d="M18.749 5.01v.015L18.36 16.71a4.75 4.75 0 0 1-4.025 4.537l-.18.027c-2.091.322-4.22.322-6.31 0l-.18-.027a4.75 4.75 0 0 1-4.026-4.537L3.25 5.025v-.017c.004.652.462 1.11.88 1.392q.302.2.68.367l.33 9.892a3.25 3.25 0 0 0 2.754 3.105l.18.027a19.3 19.3 0 0 0 5.854 0l.18-.027a3.25 3.25 0 0 0 2.754-3.105l.328-9.891c.252-.112.482-.233.68-.368.42-.282.875-.739.88-1.39"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M19.433 7.25a2.75 2.75 0 0 1 2.748 2.842l-.1 3a2.75 2.75 0 0 1-2.749 2.658h-.94l.05-1.5h.89a1.25 1.25 0 0 0 1.25-1.208l.1-3a1.25 1.25 0 0 0-1.25-1.292h-.806l.05-1.5z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11 2.25c1.982 0 3.805.228 5.156.614.67.192 1.268.434 1.714.736.42.284.88.743.88 1.4s-.46 1.116-.88 1.4c-.446.302-1.044.544-1.714.736-1.35.386-3.174.614-5.156.614s-3.805-.228-5.156-.614c-.67-.192-1.268-.434-1.714-.736-.42-.284-.88-.743-.88-1.4s.46-1.116.88-1.4c.446-.302 1.044-.544 1.714-.736C7.194 2.478 9.018 2.25 11 2.25m0 1.5c-1.884 0-3.561.219-4.744.557-.596.17-1.025.359-1.286.536A1 1 0 0 0 4.78 5c.032.035.088.089.189.157.261.177.69.366 1.286.536 1.183.338 2.86.557 4.744.557s3.562-.219 4.744-.557c.596-.17 1.024-.359 1.286-.536.1-.068.156-.122.188-.157a1 1 0 0 0-.188-.157c-.262-.177-.69-.366-1.286-.536-1.182-.338-2.86-.557-4.744-.557"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CoffeeMugIconDuotone.displayName = "CoffeeMugIconDuotone";
export { CoffeeMugIconDuotone };
