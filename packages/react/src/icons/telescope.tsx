import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TelescopeIcon = memo(
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
          d="M18.127 2.6a2 2 0 0 1 2.45 1.413L22 9.326a2 2 0 0 1-1.414 2.45l-1.69.452a2.75 2.75 0 0 1-2.317-.422l-1.958.365a2.739 2.739 0 0 1-.77 2.857l2.82 5.637a.75.75 0 0 1-1.342.67L12.51 15.7q-.248.048-.511.05a3 3 0 0 1-.514-.05l-2.815 5.635a.75.75 0 0 1-1.342-.67l2.817-5.638a2.74 2.74 0 0 1-.887-1.851l-4.288.802a2 2 0 0 1-2.3-1.448l-.436-1.628a2 2 0 0 1 1.268-2.404l11.14-3.923a2.75 2.75 0 0 1 1.793-1.523zM12 11.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M4 9.913a.5.5 0 0 0-.316.601l.436 1.627a.5.5 0 0 0 .575.363l2.009-.377-.776-2.894zm3.347-1.18.835 3.117 1.468-.274a2.746 2.746 0 0 1 4.025-.754l1.902-.355-.045-.168-.005-.015-1.035-3.864-.003-.012-.046-.173zm11.168-4.685-1.69.453a1.25 1.25 0 0 0-.885 1.526l1.036 3.868a1.25 1.25 0 0 0 1.532.884l1.69-.452a.5.5 0 0 0 .354-.613L19.128 4.4a.5.5 0 0 0-.613-.353"
          clipRule="evenodd"
        />
      </svg>
    ))
);
TelescopeIcon.displayName = "TelescopeIcon";
export { TelescopeIcon };
