import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const NotebookIconFill = memo(
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
          d="M16 2c.684 0 1.257-.001 1.724.037.478.04.933.125 1.365.345a3.5 3.5 0 0 1 1.53 1.53c.22.43.305.886.344 1.364C21 5.743 21 6.316 21 7v10c0 .684.001 1.257-.037 1.724-.04.478-.125.933-.345 1.365a3.5 3.5 0 0 1-1.53 1.53c-.43.22-.886.305-1.364.344C17.257 22 16.684 22 16 22H8c-.684 0-1.257.001-1.724-.037-.478-.04-.933-.125-1.365-.345a3.5 3.5 0 0 1-1.53-1.53c-.22-.43-.305-.886-.344-1.364C3 18.257 3 17.684 3 17V7c0-.684-.001-1.257.037-1.724.04-.478.125-.933.345-1.365a3.5 3.5 0 0 1 1.53-1.53c.43-.22.886-.305 1.364-.344C6.743 2 7.316 2 8 2zM7.5 4.002c-.451.001-.787.006-1.06.028-.355.03-.518.08-.62.133a1.5 1.5 0 0 0-.657.656c-.052.103-.104.266-.133.62C5 5.806 5 6.283 5 7v10c0 .716 0 1.194.03 1.56.03.355.08.518.133.62.144.283.374.513.656.657.103.052.266.104.62.133.274.022.61.026 1.061.027zm4 7.998a1 1 0 1 0 0 2H14a1 1 0 1 0 0-2zm0-4a1 1 0 1 0 0 2H16a1 1 0 1 0 0-2z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
NotebookIconFill.displayName = "NotebookIconFill";
export { NotebookIconFill };
