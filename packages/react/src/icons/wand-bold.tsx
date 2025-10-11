import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WandIconBold = memo(
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
          d="M12 18a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M6.793 6.793a1 1 0 0 1 1.195-.166l2.156 1.207a3.8 3.8 0 0 0 3.712 0l2.156-1.207.15-.068a1 1 0 0 1 1.21 1.43l-1.206 2.155a3.8 3.8 0 0 0-.001 3.712l1.207 2.155a1.001 1.001 0 0 1-1.36 1.361l-2.156-1.206a3.8 3.8 0 0 0-3.56-.08q-.03.02-.06.038l-1.026.57a9 9 0 0 0-1.977 1.486l-.004.006-3.521 3.521a.996.996 0 0 1-1.258.128 1 1 0 0 1-.285-.284 1 1 0 0 1 .128-1.258l3.552-3.552a9 9 0 0 0 1.459-1.936l.54-.968a3.8 3.8 0 0 0-.01-3.693L6.628 7.988a1 1 0 0 1 .165-1.195m7.27 3.144a5.8 5.8 0 0 1-4.126 0 5.8 5.8 0 0 1 0 4.125 5.8 5.8 0 0 1 4.126 0 5.8 5.8 0 0 1 0-4.125"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M18.293 18.293a1 1 0 0 1 1.414 0l1 1a1 1 0 1 1-1.414 1.414l-1-1a1 1 0 0 1 0-1.414M5 11a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zM22 11a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2zM3.293 3.293a1 1 0 0 1 1.414 0l1 1a1 1 0 1 1-1.414 1.414l-1-1a1 1 0 0 1 0-1.414M12 1a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1M19.293 3.293a1 1 0 1 1 1.414 1.414l-1 1a1 1 0 1 1-1.414-1.414z"
        />
      </svg>
    ))
);
WandIconBold.displayName = "WandIconBold";
export { WandIconBold };
