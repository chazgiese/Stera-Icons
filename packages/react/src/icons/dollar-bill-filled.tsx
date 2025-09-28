import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const DollarBillFilled = memo(
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
          d="M20 5a3 3 0 0 1 1.222.26q.066.03.13.064a3 3 0 0 1 .588.39q.06.052.118.106l.08.077q.059.062.115.126.042.047.082.095.044.056.084.113.042.055.08.11.037.057.07.116.04.065.078.132.031.062.061.127.034.067.065.138.02.053.038.107.032.082.06.165l.01.045c.076.263.119.541.119.829v8a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3zm1 9.046c-1.921.194-2.76 1.033-2.954 2.954H20a1 1 0 0 0 1-1zM3 16a1 1 0 0 0 1 1h1.954C5.76 15.079 4.921 14.24 3 14.046zm9-7.75c-1.917 0-3.25 1.813-3.25 3.75s1.333 3.75 3.25 3.75 3.25-1.813 3.25-3.75S13.917 8.25 12 8.25M4 7a1 1 0 0 0-1 1v1.953C4.921 9.76 5.76 8.921 5.954 7zm14.046 0C18.24 8.921 19.079 9.759 21 9.953V8a1 1 0 0 0-.898-.995L20 7z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
DollarBillFilled.displayName = "DollarBillFilled";
export { DollarBillFilled };
