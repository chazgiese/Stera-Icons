import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const StoreIconFilled = memo(
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
          d="M18.159 2.013a4 4 0 0 1 3.474 2.722l1.09 3.27c.207.622.253 1.424-.166 2.143a4.9 4.9 0 0 1-1.556 1.649V16.2c0 .824 0 1.502-.044 2.052-.046.562-.145 1.08-.392 1.564a4 4 0 0 1-1.748 1.749c-.485.247-1.003.345-1.564.391-.361.03-.777.037-1.252.04V22H8v-.004c-.476-.003-.892-.01-1.252-.04-.562-.046-1.08-.144-1.565-.392a4 4 0 0 1-1.748-1.748c-.247-.485-.346-1.002-.391-1.564C3 17.702 3 17.024 3 16.2v-4.403a4.9 4.9 0 0 1-1.557-1.65c-.419-.718-.373-1.52-.166-2.141l1.09-3.27A4 4 0 0 1 6.163 2h11.676zM11.1 15c-.56 0-.84 0-1.053.11a1 1 0 0 0-.437.436c-.109.214-.11.494-.11 1.054V20h5v-3.4c0-.56 0-.84-.109-1.054a1 1 0 0 0-.436-.437C13.74 15 13.46 15 12.9 15zM6.003 4.007a2 2 0 0 0-1.738 1.36L3.175 8.64c-.085.255-.05.422-.003.502.462.794 1.184 1.275 1.958 1.347l.204.011c.998 0 1.956-.694 2.399-1.855l.065-.14a1.001 1.001 0 0 1 1.803.14c.443 1.16 1.4 1.855 2.4 1.855.998 0 1.956-.694 2.399-1.855l.066-.14a1 1 0 0 1 1.802.14c.443 1.16 1.4 1.855 2.4 1.855q.1-.001.2-.01c.775-.073 1.499-.554 1.962-1.348.046-.08.08-.247-.004-.502l-1.09-3.272a2 2 0 0 0-1.737-1.36L17.839 4H6.163z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
StoreIconFilled.displayName = "StoreIconFilled";
export { StoreIconFilled };
