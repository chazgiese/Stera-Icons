import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BubbleIconFillDuotone = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m-.138 3.812a1.35 1.35 0 0 0-1.11-.208 8 8 0 0 0-.45.115c-2.692.76-4.722 3.098-5.145 5.685a7 7 0 0 0-.06.431c-.024.247.055.501.21.705.157.204.377.34.622.382a1 1 0 0 0 .71-.158c.214-.142.373-.358.43-.599q.039-.15.085-.297c.552-1.773 2.149-3.061 3.817-3.275q.138-.02.277-.03c.396-.04.75-.235.982-.56.23-.322.32-.75.25-1.168a1.57 1.57 0 0 0-.618-1.023"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M10.752 4.604a1.35 1.35 0 0 1 1.11.208c.324.23.547.604.617 1.023.07.42-.019.846-.25 1.17-.23.323-.585.519-.981.558a5 5 0 0 0-.278.03c-1.668.214-3.264 1.502-3.816 3.275a5 5 0 0 0-.085.297 1.01 1.01 0 0 1-.43.599 1 1 0 0 1-.71.158 1 1 0 0 1-.622-.382 1 1 0 0 1-.21-.705q.022-.216.06-.43c.423-2.588 2.452-4.925 5.145-5.686q.223-.064.45-.115"
        />
      </svg>
    ))
);
BubbleIconFillDuotone.displayName = "BubbleIconFillDuotone";
export { BubbleIconFillDuotone };
