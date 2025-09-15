import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const Crop = memo(
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
          d="M6 1a1 1 0 0 1 1 1v3h7.8c.543 0 1.012-.001 1.395.03.396.033.789.104 1.167.297a3 3 0 0 1 1.31 1.31c.194.379.265.772.298 1.168.031.383.03.852.03 1.395V17h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H9.2c-.543 0-1.012.001-1.395-.03-.396-.033-.789-.104-1.167-.297a3 3 0 0 1-1.31-1.31c-.194-.379-.265-.772-.298-1.168C5 15.812 5 15.343 5 14.8V7H2a1 1 0 0 1 0-2h3V2a1 1 0 0 1 1-1m1 13.8c0 .576.001.949.024 1.232.023.272.06.373.085.422.096.188.249.34.437.437.05.025.15.062.422.085.283.023.656.024 1.232.024H17V9.2c0-.576-.001-.949-.024-1.232-.023-.272-.06-.373-.085-.422a1 1 0 0 0-.437-.437c-.05-.025-.15-.062-.422-.085A17 17 0 0 0 14.8 7H7z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
Crop.displayName = "Crop";
export { Crop };
