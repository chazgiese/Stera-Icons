import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const EyeOff = memo(
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
          d="M3.293 3.293a1 1 0 0 1 1.414 0l16 16a1 1 0 1 1-1.414 1.414l-16-16a1 1 0 0 1 0-1.414M3.498 7.798a1 1 0 0 1 1.47 1.355c-.76.827-1.399 1.787-1.88 2.848 1.622 3.58 5.026 6 8.912 6 .764 0 1.508-.094 2.22-.27a1 1 0 1 1 .48 1.942c-.869.214-1.772.327-2.7.327-4.923 0-9.106-3.169-10.926-7.622a1 1 0 0 1 0-.756 12.8 12.8 0 0 1 2.424-3.824M12 4c4.924 0 9.107 3.169 10.926 7.622a1 1 0 0 1 0 .756 12.8 12.8 0 0 1-2.424 3.824 1 1 0 0 1-1.47-1.355 10.7 10.7 0 0 0 1.878-2.849C19.29 8.418 15.886 6 12 6c-.764 0-1.508.093-2.22.269a1 1 0 1 1-.48-1.942A11.3 11.3 0 0 1 12 4"
        />
      </svg>
    ))
);
EyeOff.displayName = "EyeOff";
export { EyeOff };
