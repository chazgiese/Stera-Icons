import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ToolboxIconFilled = memo(
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
          d="M6 14.5a1 1 0 1 0 2 0V14h8v.5a1 1 0 1 0 2 0V14h5v2.8c0 .543.001 1.012-.03 1.395-.033.396-.104.789-.297 1.167a3 3 0 0 1-1.31 1.31c-.379.194-.772.265-1.168.298-.383.031-.852.03-1.395.03H5.2c-.543 0-1.012.001-1.395-.03-.396-.033-.789-.104-1.167-.297a3 3 0 0 1-1.31-1.31c-.194-.379-.265-.772-.298-1.168C1 17.812 1 17.343 1 16.8V14h5z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M14.416 2.5c1.12 0 2.07.823 2.228 1.932L16.867 6H18.8c.543 0 1.012-.001 1.395.03.396.033.789.104 1.167.297a3 3 0 0 1 1.31 1.31c.194.379.265.772.298 1.168.031.383.03.852.03 1.395V12h-5v-.5a1 1 0 1 0-2 0v.5H8v-.5a1 1 0 1 0-2 0v.5H1v-1.8c0-.543-.001-1.012.03-1.395.033-.396.104-.789.297-1.167a3 3 0 0 1 1.31-1.31c.379-.194.772-.265 1.168-.298C4.188 6 4.657 6 5.2 6h1.933l.223-1.568A2.25 2.25 0 0 1 9.584 2.5zm-4.832 2a.25.25 0 0 0-.247.215L9.153 6h5.694l-.184-1.285a.25.25 0 0 0-.247-.215z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
ToolboxIconFilled.displayName = "ToolboxIconFilled";
export { ToolboxIconFilled };
