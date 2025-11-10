import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PushPinAltIconLinetone = memo(
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
          d="M12.13 2.149a2.21 2.21 0 0 1 3.126 0l6.596 6.596a2.21 2.21 0 0 1-2.262 3.66l-.634-.211a.25.25 0 0 0-.256.06l-2.442 2.442a.25.25 0 0 0-.069.226l.43 2.15c.147.737-.084 1.5-.615 2.032l-.72.72a2.25 2.25 0 0 1-3.182 0l-7.925-7.925a2.25 2.25 0 0 1 0-3.182l.72-.72a2.25 2.25 0 0 1 2.032-.615l2.15.43a.25.25 0 0 0 .226-.068L11.748 5.3a.25.25 0 0 0 .06-.256l-.212-.634a2.21 2.21 0 0 1 .535-2.262m1.711 1.414a.21.21 0 0 0-.347.216l.21.633c.27.809.06 1.7-.542 2.303l-2.443 2.443a2.25 2.25 0 0 1-2.032.615l-2.15-.43a.25.25 0 0 0-.226.068l-.72.72a.25.25 0 0 0 0 .354l7.925 7.925a.25.25 0 0 0 .354 0l.72-.72a.25.25 0 0 0 .068-.227l-.43-2.15a2.25 2.25 0 0 1 .616-2.031l2.442-2.443a2.25 2.25 0 0 1 2.303-.543l.633.211c.076.025.16.006.216-.05a.21.21 0 0 0 0-.298z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="m8.847 16.568-3.448 3.448A1 1 0 0 1 3.985 18.6l3.446-3.448zM9.554 14.446l.007.01-.017-.018z"
        />
      </svg>
    ))
);
PushPinAltIconLinetone.displayName = "PushPinAltIconLinetone";
export { PushPinAltIconLinetone };
