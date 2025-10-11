import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const NotebookIconFilled = memo(
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
          d="M18.558 2.004q.349.004.637.026c.396.033.789.104 1.167.297a3 3 0 0 1 1.31 1.31c.194.379.265.772.298 1.168.031.383.03.852.03 1.395v11.6c0 .543.001 1.012-.03 1.395-.033.396-.104.789-.297 1.167a3 3 0 0 1-1.31 1.31c-.379.194-.772.265-1.168.298-.383.031-.852.03-1.395.03H8V2h9.8zM12 12a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2zm0-4a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M6 21.999c-.46 0-.86-.002-1.195-.03-.396-.032-.789-.103-1.167-.296a3 3 0 0 1-1.31-1.31c-.194-.379-.265-.772-.298-1.168a10 10 0 0 1-.026-.637L2 17.8V6.2c0-.543-.001-1.012.03-1.395.033-.396.104-.789.297-1.167a3 3 0 0 1 1.31-1.31c.379-.194.772-.265 1.168-.298C5.14 2.003 5.54 2 6 2z"
        />
      </svg>
    ))
);
NotebookIconFilled.displayName = "NotebookIconFilled";
export { NotebookIconFilled };
