import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const DownloadIconFilled = memo(
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
          d="M21 14a1 1 0 0 1 1 1c0 .918 0 1.657-.04 2.257-.042.608-.13 1.146-.34 1.656a5 5 0 0 1-2.707 2.706c-.51.211-1.047.3-1.656.341-.6.04-1.339.04-2.257.04H9c-.918 0-1.657 0-2.257-.04-.608-.042-1.146-.13-1.656-.34a5 5 0 0 1-2.706-2.707c-.211-.51-.3-1.047-.341-1.656C2 16.657 2 15.918 2 15a1 1 0 1 1 2 0c0 .945.001 1.604.036 2.12.035.507.1.803.193 1.028a3 3 0 0 0 1.623 1.624c.225.093.521.157 1.028.192.516.035 1.175.036 2.12.036h6c.945 0 1.604-.001 2.12-.036.507-.035.803-.1 1.028-.192a3 3 0 0 0 1.624-1.624c.093-.225.157-.521.192-1.028.035-.516.036-1.175.036-2.12a1 1 0 0 1 1-1"
        />
        <path
          fill="currentColor"
          d="M12 2a1 1 0 0 1 1 1v6h5a1 1 0 0 1 .707 1.707l-6 6A1 1 0 0 1 12 17c-.273 0-.508-.115-.707-.293l-6-6A1 1 0 0 1 6 9h5V3a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
DownloadIconFilled.displayName = "DownloadIconFilled";
export { DownloadIconFilled };
