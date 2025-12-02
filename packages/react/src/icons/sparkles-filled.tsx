import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SparklesIconFilled = memo(
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
          d="M10.5 4a1 1 0 0 1 .957.709l.741 2.434a7 7 0 0 0 4.658 4.659l2.435.74a1 1 0 0 1 0 1.915l-2.435.74a7 7 0 0 0-4.658 4.66l-.741 2.434a1 1 0 0 1-1.914 0l-.741-2.435a7 7 0 0 0-4.658-4.658l-2.435-.741a1 1 0 0 1 0-1.914l2.435-.741a7 7 0 0 0 4.658-4.659l.741-2.434c.128-.421.517-.71.957-.71M18.88 1.393a.124.124 0 0 1 .24 0l.192.633a4 4 0 0 0 2.663 2.662l.632.193c.118.036.118.203 0 .239l-.632.192a4 4 0 0 0-2.663 2.662l-.193.633a.124.124 0 0 1-.238 0l-.194-.633a4 4 0 0 0-2.662-2.662l-.632-.192c-.118-.036-.118-.203 0-.24l.632-.192a4 4 0 0 0 2.663-2.662z"
        />
      </svg>
    ))
);
SparklesIconFilled.displayName = "SparklesIconFilled";
export { SparklesIconFilled };
