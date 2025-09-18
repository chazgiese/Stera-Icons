import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CheckmarkCircle = memo(
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
          d="M16.47 8.47a.75.75 0 1 1 1.06 1.06l-5.695 5.696c-.216.215-.41.411-.585.558-.18.152-.397.302-.672.38-.389.107-.803.078-1.173-.084a1.8 1.8 0 0 1-.611-.47c-.152-.17-.318-.391-.501-.635L6.4 12.45a.75.75 0 0 1 1.2-.9l1.893 2.524c.199.265.32.426.42.536.093.106.116.105.095.096a.25.25 0 0 0 .167.013c-.022.006.002.008.11-.082.113-.096.255-.238.49-.472z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75 1.25 17.937 1.25 12 6.063 1.25 12 1.25m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CheckmarkCircle.displayName = "CheckmarkCircle";
export { CheckmarkCircle };
