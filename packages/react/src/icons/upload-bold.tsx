import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const UploadIconBold = memo(
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
          d="M21 14a1 1 0 0 1 1 1c0 .918 0 1.657-.04 2.257-.042.608-.13 1.146-.34 1.656a5 5 0 0 1-2.707 2.706c-.51.21-1.048.3-1.656.34-.6.042-1.339.04-2.257.04H9l-1.248-.004a19 19 0 0 1-1.009-.035c-.608-.042-1.147-.13-1.656-.341a5 5 0 0 1-2.706-2.706c-.211-.51-.3-1.048-.341-1.656C2 16.657 2 15.917 2 15a1 1 0 1 1 2 0c0 .945.001 1.604.036 2.12.035.507.1.803.193 1.028a3 3 0 0 0 1.623 1.623c.225.094.521.158 1.028.193.258.017.552.026.9.03L9 20h6c.945 0 1.604-.001 2.12-.036.507-.035.803-.1 1.028-.193a3 3 0 0 0 1.624-1.623c.093-.225.157-.521.192-1.028.035-.516.036-1.175.036-2.12a1 1 0 0 1 1-1"
        />
        <path
          fill="currentColor"
          d="M11.37 2.224a1 1 0 0 1 1.337.069l6 6a1 1 0 0 1-1.414 1.414L13 5.414V16a1 1 0 0 1-2 0V5.414L6.707 9.707a1 1 0 0 1-1.414-1.414l6-6z"
        />
      </svg>
    ))
);
UploadIconBold.displayName = "UploadIconBold";
export { UploadIconBold };
