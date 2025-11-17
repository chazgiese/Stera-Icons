import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const RocketIconFilltone = memo(
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
          d="M12 1a1 1 0 0 1 .555.168C14.95 2.765 16.4 4.601 17.188 6.49c.426 1.02.648 2.038.73 3.015v-.001a11.2 11.2 0 0 1-.05 2.37q-.04.304-.09.6-.104.59-.248 1.128c-.237.9-.54 1.684-.821 2.308q-.094.211-.195.422c-.135.28-.279.559-.436.827q-.117.201-.246.395A1 1 0 0 1 15 18H8.999c-.334 0-.647-.168-.832-.446-.343-.515-.624-1.08-.877-1.644a14.6 14.6 0 0 1-1.068-3.436 13 13 0 0 1-.143-1.117c-.123-1.504.029-3.18.731-4.867.788-1.889 2.24-3.725 4.634-5.322.168-.112.363-.168.556-.168m0 6a1.75 1.75 0 1 0 0 3.5A1.75 1.75 0 0 0 12 7"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M6.079 9.506c-.07.825-.04 1.621.053 2.368.203 1.627.709 3.038 1.158 4.036.253.563.534 1.129.877 1.644.185.277.498.446.832.446h.287L5.53 20.348a1.002 1.002 0 0 1-1.518-.696l-1-6.5a1 1 0 0 1 .28-.859zM20.707 12.293a1 1 0 0 1 .281.86l-1 6.5a1 1 0 0 1-1.518.695L14.714 18H15c.334 0 .647-.168.832-.446.343-.515.624-1.08.877-1.644.449-.998.955-2.409 1.158-4.036.093-.747.121-1.545.05-2.37zM12 7a1.75 1.75 0 1 1 0 3.5A1.75 1.75 0 0 1 12 7M13.5 19a1 1 0 0 1 1 1c0 .371-.13.747-.294 1.073-.48.956-1.345 1.55-2.206 2.13-.86-.58-1.727-1.174-2.206-2.13C9.63 20.747 9.5 20.371 9.5 20a1 1 0 0 1 1-1z"
        />
      </svg>
    ))
);
RocketIconFilltone.displayName = "RocketIconFilltone";
export { RocketIconFilltone };
