import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TennisBallIcon = memo(
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
          d="M12 1.25c2.93 0 5.587 1.173 7.525 3.073A10.72 10.72 0 0 1 22.75 12a10.72 10.72 0 0 1-3.225 7.677A10.72 10.72 0 0 1 12 22.75c-2.93 0-5.587-1.173-7.525-3.073A10.72 10.72 0 0 1 1.25 12a10.72 10.72 0 0 1 3.225-7.677A10.72 10.72 0 0 1 12 1.25m0 1.5a9.2 9.2 0 0 0-5.93 2.152A10.7 10.7 0 0 1 8.75 12c0 2.72-1.015 5.204-2.68 7.097A9.2 9.2 0 0 0 12 21.25c2.258 0 4.324-.81 5.93-2.153A10.7 10.7 0 0 1 15.25 12c0-2.72 1.014-5.205 2.68-7.098A9.2 9.2 0 0 0 12 2.75M5 5.956A9.2 9.2 0 0 0 2.75 12c0 2.31.849 4.421 2.25 6.043A9.2 9.2 0 0 0 7.25 12 9.2 9.2 0 0 0 5 5.956m14 0A9.2 9.2 0 0 0 16.75 12c0 2.31.849 4.421 2.25 6.043A9.2 9.2 0 0 0 21.25 12 9.2 9.2 0 0 0 19 5.956"
          clipRule="evenodd"
        />
      </svg>
    ))
);
TennisBallIcon.displayName = "TennisBallIcon";
export { TennisBallIcon };
