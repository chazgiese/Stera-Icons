import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const KeyholeFilled = memo(
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
          d="M12 2a6.5 6.5 0 0 1 4.641 11.049l2.89 5.78A1.5 1.5 0 0 1 18.192 21H5.808a1.5 1.5 0 0 1-1.34-2.17l2.89-5.781A6.5 6.5 0 0 1 12 2"
        />
      </svg>
    ))
);
KeyholeFilled.displayName = "KeyholeFilled";
export { KeyholeFilled };
