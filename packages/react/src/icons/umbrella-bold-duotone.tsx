import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const UmbrellaIconBoldDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M12 12.5c.31 0 .656.047 1 .133V19.5a1.5 1.5 0 0 0 3 0V19a1 1 0 1 1 2 0v.5a3.5 3.5 0 1 1-7 0v-6.867c.344-.086.69-.133 1-.133M12 1a1 1 0 0 1 1 1v1.05a10 10 0 0 0-2 0V2a1 1 0 0 1 1-1" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 3c5.523 0 10 4.477 10 10a1 1 0 0 1-1.837.547C19.783 12.964 18.99 12.5 18 12.5c-.475 0-.753.107-.956.244-.226.152-.44.395-.707.803a1 1 0 0 1-1.674 0c-.135-.207-.476-.48-1.028-.707A4.5 4.5 0 0 0 12 12.5c-.504 0-1.104.122-1.635.34-.552.227-.893.5-1.028.707a1 1 0 0 1-1.674 0c-.267-.408-.481-.65-.707-.803-.203-.137-.481-.244-.956-.244-.99 0-1.782.464-2.163 1.047A1 1 0 0 1 2 13C2.001 7.477 6.477 3 12 3m0 2a8 8 0 0 0-7.69 5.794A5 5 0 0 1 6 10.5c.816 0 1.495.196 2.073.585.196.132.372.282.53.44a5.4 5.4 0 0 1 1.002-.536A6.5 6.5 0 0 1 12 10.5c.787 0 1.644.181 2.395.49.338.138.682.317 1 .535.16-.158.335-.308.532-.44.578-.39 1.257-.585 2.073-.585.59 0 1.163.103 1.69.294A8 8 0 0 0 12 5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
UmbrellaIconBoldDuotone.displayName = "UmbrellaIconBoldDuotone";
export { UmbrellaIconBoldDuotone };
