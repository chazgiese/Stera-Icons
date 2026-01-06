import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BladeSwordIconDuotone = memo(
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
          d="M18.47 11.47a.75.75 0 1 1 1.06 1.06l-1.78 1.78v2.38l2.154 2.154 1.278.426c.147.049.28.132.39.242l.282.281a1 1 0 0 1 0 1.414l-.647.647a1 1 0 0 1-1.338.068l-.076-.068-.281-.282a1 1 0 0 1-.242-.39l-.426-1.278-2.155-2.154h-2.378l-1.78 1.78a.75.75 0 1 1-1.061-1.06z"
        />
        <path
          fill="currentColor"
          d="M2.47 2.47a.75.75 0 0 1 .712-.197l4 1a.75.75 0 0 1 .348.197L17 12.94 15.94 14 6.616 4.678 4.03 4.03l.647 2.586L14 15.94 12.94 17 3.47 7.53a.8.8 0 0 1-.166-.252l-.031-.096-1-4a.75.75 0 0 1 .197-.712"
          opacity={0.4}
        />
      </svg>
    ))
);
BladeSwordIconDuotone.displayName = "BladeSwordIconDuotone";
export { BladeSwordIconDuotone };
