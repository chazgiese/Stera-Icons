import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CheckmarkFilled = memo(
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
          d="M18.903 4.977a1.5 1.5 0 0 1 2.194 2.046L11.244 17.58c-.212.227-.437.47-.646.658a2.54 2.54 0 0 1-.982.577 2.5 2.5 0 0 1-1.738-.123 2.54 2.54 0 0 1-.893-.708c-.18-.214-.368-.486-.547-.74l-3.667-5.24a1.5 1.5 0 1 1 2.457-1.72l3.668 5.239q.038.052.07.1l.085-.09z"
        />
      </svg>
    ))
);
CheckmarkFilled.displayName = "CheckmarkFilled";
export { CheckmarkFilled };
