import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ToolboxIconFillDuotone = memo(
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
          <path d="M1 14h5v.5a1 1 0 1 0 2 0V14h8v.5a1 1 0 1 0 2 0V14h5v2.8c0 .543.001 1.012-.03 1.395-.033.396-.104.789-.297 1.167a3 3 0 0 1-1.31 1.31c-.379.194-.772.265-1.168.298-.383.031-.852.03-1.395.03H5.2c-.543 0-1.012.001-1.395-.03-.396-.033-.789-.104-1.167-.297a3 3 0 0 1-1.31-1.31c-.194-.379-.265-.772-.298-1.168C1 17.812 1 17.343 1 16.8zM18.8 6c.543 0 1.012-.001 1.395.03.396.033.789.104 1.167.297a3 3 0 0 1 1.31 1.31c.194.379.265.772.298 1.168.031.383.03.852.03 1.395V12h-5v-.5a1 1 0 1 0-2 0v.5H8v-.5a1 1 0 1 0-2 0v.5H1v-1.8c0-.543-.001-1.012.03-1.395.033-.396.104-.789.297-1.167a3 3 0 0 1 1.31-1.31c.379-.194.772-.265 1.168-.298C4.188 6 4.657 6 5.2 6z" />
        </g>
        <path
          fill="currentColor"
          d="M9.584 4.5a.25.25 0 0 0-.247.215L9.153 6h-2.02l.223-1.568A2.25 2.25 0 0 1 9.584 2.5h4.832c1.12 0 2.07.823 2.228 1.932L16.867 6h-2.02l-.184-1.285a.25.25 0 0 0-.247-.215zM17 10.5a1 1 0 0 1 1 1v.5h5v2h-5v.5a1 1 0 1 1-2 0V14H8v.5a1 1 0 1 1-2 0V14H1v-2h5v-.5a1 1 0 1 1 2 0v.5h8v-.5a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
ToolboxIconFillDuotone.displayName = "ToolboxIconFillDuotone";
export { ToolboxIconFillDuotone };
