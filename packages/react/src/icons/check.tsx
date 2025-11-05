import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CheckIcon = memo(
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
          d="M19.452 5.489a.75.75 0 0 1 1.096 1.023L10.023 17.79c-.106.114-.22.235-.323.329a1.3 1.3 0 0 1-.492.289 1.25 1.25 0 0 1-.869-.062 1.3 1.3 0 0 1-.446-.354c-.09-.108-.185-.243-.274-.37l-4.233-6.048a.75.75 0 0 1 1.229-.86l4.233 6.047.035.05.043-.044z"
        />
      </svg>
    ))
);
CheckIcon.displayName = "CheckIcon";
export { CheckIcon };
