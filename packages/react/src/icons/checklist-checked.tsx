import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ChecklistCheckedIcon = memo(
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
          d="M5 13.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m1.777 2.084a.5.5 0 0 0-.693.139l-1.576 2.364-.008.01-.008-.01-.576-.864a.5.5 0 1 0-.832.554l.576.865c.066.098.133.2.197.28a.84.84 0 0 0 .33.26c.2.084.426.084.626 0a.84.84 0 0 0 .33-.26c.064-.08.131-.182.197-.28l1.576-2.365a.5.5 0 0 0-.139-.693"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M22 16.25a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1 0-1.5z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M5 3.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m1.777 2.084a.5.5 0 0 0-.693.139L4.508 7.837l-.008.01-.008-.01-.576-.864a.5.5 0 1 0-.832.554l.576.865c.066.098.133.2.197.28a.84.84 0 0 0 .33.26.82.82 0 0 0 .626 0 .84.84 0 0 0 .33-.26c.064-.08.131-.182.197-.28l1.576-2.365a.5.5 0 0 0-.139-.693"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M22 6.25a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1 0-1.5z"
        />
      </svg>
    ))
);
ChecklistCheckedIcon.displayName = "ChecklistCheckedIcon";
export { ChecklistCheckedIcon };
