import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const Clock7IconFilltone = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 4a1 1 0 0 0-1 1v5.731l-1.866 3.233a1 1 0 0 0 1.732 1l2-3.464.008-.017.018-.035q.013-.023.024-.048.014-.03.024-.064l.01-.026.016-.057.011-.045.005-.027a1 1 0 0 0 .017-.173L13 12V6a1 1 0 0 0-1-1"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 5a1 1 0 0 1 1 1v6.008a1 1 0 0 1-.022.2l-.014.053q-.005.024-.014.048l-.01.027q-.01.034-.025.066l-.012.027-.034.063q0 .004-.003.008l-2 3.464a1 1 0 0 1-1.732-1L11 11.73V6a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
Clock7IconFilltone.displayName = "Clock7IconFilltone";
export { Clock7IconFilltone };
