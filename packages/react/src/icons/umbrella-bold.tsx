import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const UmbrellaIconBold = memo(
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
          d="M12 1a1 1 0 0 1 1 1v1.05c5.053.502 9 4.765 9 9.95a1 1 0 0 1-1.837.547C19.783 12.964 18.99 12.5 18 12.5c-.475 0-.753.107-.956.244-.226.152-.44.395-.707.803a1 1 0 0 1-1.674 0c-.135-.207-.476-.48-1.028-.707a5 5 0 0 0-.635-.207V19.5a1.5 1.5 0 0 0 3 0V19a1 1 0 1 1 2 0v.5a3.5 3.5 0 1 1-7 0v-6.867q-.326.081-.635.207c-.552.227-.893.5-1.028.707a1 1 0 0 1-1.674 0c-.267-.408-.481-.65-.707-.803-.203-.137-.481-.244-.956-.244-.99 0-1.782.464-2.163 1.047A1 1 0 0 1 2 13c0-5.185 3.946-9.448 8.999-9.95V2a1 1 0 0 1 1-1m0 4a8 8 0 0 0-7.69 5.794A5 5 0 0 1 6 10.5c.816 0 1.495.196 2.073.585.196.132.372.282.53.44a5.4 5.4 0 0 1 1.002-.536A6.5 6.5 0 0 1 12 10.5c.787 0 1.644.181 2.395.49.338.138.682.317 1 .535.16-.158.335-.308.532-.44.578-.39 1.257-.585 2.073-.585.59 0 1.163.103 1.69.294A8 8 0 0 0 12 5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
UmbrellaIconBold.displayName = "UmbrellaIconBold";
export { UmbrellaIconBold };
