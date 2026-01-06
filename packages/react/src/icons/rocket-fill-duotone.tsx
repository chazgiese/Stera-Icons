import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RocketIconFillDuotone = memo(
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
          d="M12 1a1 1 0 0 1 .554.168c2.396 1.597 3.847 3.433 4.634 5.322.425 1.02.648 2.038.73 3.015v-.001a11.2 11.2 0 0 1-.051 2.37q-.039.304-.09.6-.103.59-.247 1.128a15 15 0 0 1-.821 2.308q-.095.211-.196.422c-.134.28-.278.559-.435.827q-.118.201-.246.395A1 1 0 0 1 15 18H8.999c-.334 0-.647-.168-.832-.446-.344-.515-.624-1.08-.877-1.644a14.6 14.6 0 0 1-1.069-3.436 13 13 0 0 1-.142-1.117c-.123-1.504.029-3.18.731-4.867.787-1.889 2.239-3.725 4.634-5.322.168-.112.362-.168.556-.168m0 6a1.75 1.75 0 1 0 0 3.5A1.75 1.75 0 0 0 12 7"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M6.08 9.506c-.07.825-.041 1.621.052 2.368.203 1.627.71 3.038 1.158 4.036.254.563.534 1.129.877 1.644.186.277.498.446.832.446h.287L5.53 20.348a1.002 1.002 0 0 1-1.518-.696l-1-6.5a1 1 0 0 1 .281-.859zM20.707 12.293a1 1 0 0 1 .281.86l-1 6.5a1 1 0 0 1-1.518.695L14.714 18H15c.334 0 .647-.168.832-.446.343-.515.624-1.08.877-1.644.45-.998.955-2.409 1.158-4.036.094-.747.121-1.545.051-2.37zM12 7a1.75 1.75 0 1 1 0 3.5A1.75 1.75 0 0 1 12 7M13.5 19a1 1 0 0 1 1 1c0 .371-.13.747-.294 1.073-.48.956-1.345 1.55-2.206 2.13-.86-.58-1.726-1.174-2.206-2.13C9.63 20.747 9.5 20.371 9.5 20a1 1 0 0 1 1-1z"
        />
      </svg>
    ))
);
RocketIconFillDuotone.displayName = "RocketIconFillDuotone";
export { RocketIconFillDuotone };
