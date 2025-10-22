import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BaseballIconFilltone = memo(
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
          d="M4.222 4.222c4.296-4.296 11.26-4.296 15.556 0s4.296 11.26 0 15.556-11.26 4.296-15.556 0-4.296-11.26 0-15.556"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M19.54 12.125a1 1 0 0 1 1.204-.74q.422.102.848.168a1 1 0 0 1-.312 1.976q-.503-.079-1.002-.198a1 1 0 0 1-.738-1.206M11.383 20.746a1 1 0 1 1 1.945-.467q.119.496.198 1.001a1 1 0 0 1-1.975.313q-.067-.426-.168-.847M9.588 16.846a1 1 0 0 1 1.618-1.176q.3.416.567.85a1 1 0 0 1-1.705 1.045q-.225-.368-.48-.719M15.45 9.807a1 1 0 0 1 1.397-.222 11 11 0 0 0 .72.481 1.001 1.001 0 0 1-1.046 1.705 13 13 0 0 1-.849-.567 1 1 0 0 1-.221-1.397M6.103 12.559c.289-.47.906-.618 1.376-.33a13 13 0 0 1 .849.567 1 1 0 0 1-1.175 1.62 11 11 0 0 0-.72-.482 1 1 0 0 1-.33-1.375M12.226 7.48a1.001 1.001 0 0 1 1.707-1.044q.225.367.48.718a1 1 0 0 1-1.62 1.175q-.3-.415-.567-.849M10.474 2.72a1 1 0 0 1 1.975-.313q.067.427.169.848a1 1 0 0 1-1.945.466 13 13 0 0 1-.199-1M1.576 11.304a1 1 0 0 1 1.143-.833q.504.08 1.002.2a1 1 0 1 1-.466 1.944q-.422-.102-.847-.169a1 1 0 0 1-.832-1.142"
        />
      </svg>
    ))
);
BaseballIconFilltone.displayName = "BaseballIconFilltone";
export { BaseballIconFilltone };
