import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const WifiIconFilltone = memo(
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
          d="M12 4c3.95 0 7.558 1.515 10.301 4.01.4.365.399.985.021 1.373l-.668.687c-.392.404-1.038.4-1.462.03C17.986 8.167 15.125 7 12 7s-5.986 1.167-8.192 3.1c-.424.37-1.07.374-1.463-.03l-.667-.687c-.378-.388-.38-1.008.02-1.373C4.443 5.515 8.05 4 12 4"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 9c2.608 0 4.998.96 6.855 2.556.41.353.407.975.03 1.363l-.668.687c-.393.404-1.038.398-1.48.048a7.61 7.61 0 0 0-9.474 0c-.442.35-1.087.356-1.48-.048l-.668-.687c-.377-.388-.38-1.01.03-1.363A10.48 10.48 0 0 1 12 9"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 14a5.7 5.7 0 0 1 3.393 1.119c.436.32.431.947.054 1.335l-2.013 2.071a2 2 0 0 1-2.868 0l-2.013-2.07c-.378-.389-.382-1.015.054-1.336A5.7 5.7 0 0 1 12 14"
          clipRule="evenodd"
          opacity={0.4}
        />
      </svg>
    ))
);
WifiIconFilltone.displayName = "WifiIconFilltone";
export { WifiIconFilltone };
