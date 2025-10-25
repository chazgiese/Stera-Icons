import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LayersIcon = memo(
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
          d="M9.873 2.783a4.5 4.5 0 0 1 4.254 0l6.814 3.625c1.079.574 1.079 2.166 0 2.74l-1.393.74 1.393.742c1.079.573 1.079 2.166 0 2.74l-1.393.74 1.393.741c1.079.574 1.079 2.167 0 2.74l-6.814 3.625a4.5 4.5 0 0 1-4.254 0l-6.814-3.625c-1.079-.574-1.079-2.166 0-2.74l1.392-.741-1.392-.74c-1.078-.574-1.079-2.167 0-2.74l1.392-.742-1.392-.74c-1.078-.574-1.079-2.166 0-2.74zm4.254 14.212a4.5 4.5 0 0 1-4.254 0l-3.825-2.036-2.284 1.216-.005.005a.1.1 0 0 0-.009.041q.001.031.009.041.002.004.005.005l6.814 3.625a3 3 0 0 0 2.844 0l6.814-3.625q.003 0 .005-.005a.1.1 0 0 0 .009-.04.1.1 0 0 0-.009-.042l-.005-.005-2.285-1.216zm0-4.222a4.5 4.5 0 0 1-4.254 0l-3.825-2.035-2.284 1.216q-.003 0-.005.005a.1.1 0 0 0-.009.04q.001.03.009.042l.005.005 6.814 3.625a3 3 0 0 0 2.844 0l6.814-3.625.005-.005A.1.1 0 0 0 20.25 12a.1.1 0 0 0-.009-.041q-.002-.004-.005-.005l-2.285-1.216zm-.705-8.666a3 3 0 0 0-2.844 0L3.764 7.732q-.003.001-.005.005a.1.1 0 0 0-.009.041q.001.03.009.041.002.004.005.005l6.814 3.625a3 3 0 0 0 2.844 0l6.814-3.625.005-.005a.1.1 0 0 0 .009-.041.1.1 0 0 0-.009-.041q-.002-.004-.005-.005z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
LayersIcon.displayName = "LayersIcon";
export { LayersIcon };
