import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CupIconFilltone = memo(
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
          d="m19.99 6.174-.488 6.825-.04.573A8 8 0 0 1 11.482 21H9.518a8 8 0 0 1-7.98-7.43L1.01 6.174c.087.773.742 1.24 1.172 1.478.546.304 1.27.545 2.079.736C5.894 8.772 8.099 9 10.5 9s4.606-.228 6.24-.612c.808-.19 1.532-.432 2.078-.736.43-.239 1.086-.706 1.172-1.481z"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M19.857 8.02A3.5 3.5 0 0 1 19.5 15h-.273q.181-.692.235-1.429l.04-.572a1.5 1.5 0 0 0 .213-2.982z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M10.5 3c2.4 0 4.606.228 6.24.612.808.19 1.532.432 2.078.736C19.28 4.604 20 5.122 20 6s-.72 1.396-1.182 1.652c-.546.304-1.27.545-2.079.736C15.106 8.772 12.901 9 10.5 9s-4.606-.228-6.24-.612c-.808-.19-1.532-.432-2.078-.736C1.72 7.396 1 6.878 1 6s.72-1.396 1.182-1.652c.546-.304 1.27-.545 2.079-.736C5.894 3.228 8.099 3 10.5 3m0 2c-2.294 0-4.338.22-5.781.56-.598.14-1.056.293-1.374.44.318.147.776.3 1.374.44C6.162 6.78 8.206 7 10.5 7s4.338-.22 5.781-.56c.598-.14 1.055-.293 1.373-.44-.318-.147-.775-.3-1.373-.44C14.838 5.22 12.794 5 10.5 5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CupIconFilltone.displayName = "CupIconFilltone";
export { CupIconFilltone };
