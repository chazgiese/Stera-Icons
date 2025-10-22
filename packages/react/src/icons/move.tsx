import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const MoveIcon = memo(
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
          d="M12 1.25c.199 0 .39.08.53.22l2.5 2.5a.75.75 0 1 1-1.06 1.06l-1.215-1.215v7.435h7.434l-1.22-1.22a.75.75 0 1 1 1.061-1.06l2.5 2.5.094.114q.034.052.058.106l.018.048q.017.045.027.091.007.02.01.041l.006.034a.741.741 0 0 1-.097.469.7.7 0 0 1-.116.157l-2.5 2.5a.75.75 0 1 1-1.06-1.06l1.22-1.22h-7.435v7.435l1.215-1.215a.75.75 0 1 1 1.06 1.06l-2.449 2.45a.75.75 0 0 1-.576.275.7.7 0 0 1-.22-.037l-.007-.002a.75.75 0 0 1-.303-.18L8.97 20.03a.75.75 0 1 1 1.06-1.06l1.225 1.224V12.75H3.81l1.22 1.22a.75.75 0 1 1-1.061 1.06l-2.5-2.5a.8.8 0 0 1-.117-.157.74.74 0 0 1-.097-.469l.006-.034q.003-.02.01-.04a1 1 0 0 1 .027-.092l.018-.048a1 1 0 0 1 .059-.106l.094-.114 2.5-2.5a.75.75 0 1 1 1.06 1.06l-1.22 1.22h7.445V3.806L10.03 5.03a.75.75 0 1 1-1.06-1.06l2.5-2.5.114-.094A.75.75 0 0 1 12 1.25"
        />
      </svg>
    ))
);
MoveIcon.displayName = "MoveIcon";
export { MoveIcon };
