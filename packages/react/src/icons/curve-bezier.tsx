import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CurveBezierIcon = memo(
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
          d="M12 3.25a2.75 2.75 0 0 1 2.626 1.933q.009.034.018.067h4.777A1.748 1.748 0 0 1 22.75 6a1.75 1.75 0 0 1-3.33.75h-3.58c.866.694 1.65 1.585 2.312 2.586 1.118 1.686 1.959 3.766 2.352 5.962q.026.003.05.008a2.751 2.751 0 1 1-1.624.16q.037-.014.074-.027c-.365-1.945-1.117-3.787-2.103-5.275-.782-1.18-1.675-2.088-2.595-2.67-.01.014-.016.03-.026.043A2.75 2.75 0 0 1 12 8.75c-.95 0-1.786-.481-2.28-1.213q-.013-.021-.027-.043c-.92.582-1.812 1.49-2.594 2.67-.987 1.488-1.739 3.33-2.104 5.275.025.01.05.016.075.027a2.75 2.75 0 1 1-1.625-.16q.026-.005.05-.008c.393-2.196 1.235-4.276 2.353-5.962.663-1 1.446-1.892 2.312-2.586H4.58A1.748 1.748 0 0 1 1.25 6a1.75 1.75 0 0 1 3.33-.75h4.776q.009-.034.018-.067A2.75 2.75 0 0 1 12 3.25m-8 13.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 1 0 0-2.5m16 0a1.25 1.25 0 0 0-.972.463A1.25 1.25 0 1 0 20 16.75m-8-12a1.24 1.24 0 0 0-.979.473 1.248 1.248 0 0 0 1.683 1.809 1.247 1.247 0 0 0 .069-2.013A1.24 1.24 0 0 0 12 4.75"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CurveBezierIcon.displayName = "CurveBezierIcon";
export { CurveBezierIcon };
