import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const PhoneIncomingIconFilled = memo(
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
          d="M6.629 2.513c.317.05.575.23.774.489l.081.116.01.014.009.017 1.521 2.765c.3.54.503.968.614 1.323.113.36.146.691.045 1.006-.099.307-.303.52-.482.686-.208.193-.36.306-.585.532-.185.184-.234.38-.19.63.048.28.216.62.49 1.002.55.769 1.37 1.51 1.925 2.066.556.556 1.297 1.376 2.066 1.926.383.273.723.441 1.003.49.249.043.445-.006.63-.19.225-.226.338-.377.53-.586.166-.178.38-.383.687-.482.315-.101.647-.068 1.006.045.355.111.784.315 1.323.614l2.765 1.522.017.008.014.01c.322.209.547.493.605.856.054.341-.057.66-.194.916-.269.499-.781 1.005-1.184 1.408-1.187 1.187-2.525 1.78-3.975 1.803-1.434.021-2.921-.52-4.423-1.486a24.5 24.5 0 0 1-4.25-3.481 24.4 24.4 0 0 1-3.474-4.243C3.02 10.788 2.48 9.3 2.502 7.866c.021-1.45.615-2.788 1.802-3.975.403-.402.91-.915 1.409-1.183.256-.138.574-.249.916-.195"
        />
        <path
          fill="currentColor"
          d="M19.794 2.793a1 1 0 0 1 1.414 1.414L16.415 9H20a1 1 0 0 1 0 2h-6a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v3.586z"
        />
      </svg>
    ))
);
PhoneIncomingIconFilled.displayName = "PhoneIncomingIconFilled";
export { PhoneIncomingIconFilled };
