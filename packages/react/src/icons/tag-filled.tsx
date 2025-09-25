import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TagFilled = memo(
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
          d="M11.675 2c.441 0 .825-.006 1.197.083.306.073.6.195.867.36.326.2.594.475.906.787l6.3 6.3c.384.384.715.715.964 1.008.257.302.484.631.616 1.035a3 3 0 0 1 0 1.854c-.132.404-.359.732-.616 1.035-.249.293-.58.623-.965 1.008l-5.474 5.474c-.385.384-.715.716-1.008.965-.302.257-.631.484-1.035.615a3 3 0 0 1-1.854 0c-.403-.131-.732-.358-1.035-.615-.293-.25-.623-.58-1.008-.965l-6.3-6.3c-.312-.312-.588-.579-.788-.905a3 3 0 0 1-.359-.867C1.993 12.5 2 12.116 2 11.675V4.599c0-.263-.001-.521.017-.738.018-.228.063-.498.2-.77.193-.376.499-.682.875-.873.271-.139.541-.183.77-.202C4.077 2 4.335 2 4.6 2zM7.75 6a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
TagFilled.displayName = "TagFilled";
export { TagFilled };
