import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BubbleIconFilled = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m-.138 3.812a1.35 1.35 0 0 0-1.11-.208q-.226.05-.45.115c-2.693.76-4.722 3.097-5.145 5.685a7 7 0 0 0-.06.431c-.024.247.055.501.21.705.157.204.377.34.622.382a1 1 0 0 0 .71-.158c.214-.142.373-.357.43-.599q.039-.15.085-.297c.552-1.774 2.148-3.061 3.817-3.275q.138-.02.277-.03a1.35 1.35 0 0 0 .982-.56c.23-.323.32-.749.25-1.168a1.57 1.57 0 0 0-.618-1.023"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BubbleIconFilled.displayName = "BubbleIconFilled";
export { BubbleIconFilled };
