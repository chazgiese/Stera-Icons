import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CurveBezier = memo(
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
          d="M12 3.25c1.258 0 2.317.846 2.644 2h4.777A1.748 1.748 0 0 1 22.75 6a1.75 1.75 0 0 1-3.33.75h-3.58c.866.694 1.65 1.585 2.312 2.586 1.118 1.686 1.959 3.766 2.352 5.962a2.75 2.75 0 1 1-1.5.14c-.365-1.944-1.117-3.786-2.103-5.274-.782-1.18-1.675-2.088-2.595-2.67a2.745 2.745 0 0 1-4.613 0c-.92.582-1.812 1.49-2.594 2.67-.987 1.488-1.739 3.33-2.104 5.275A2.748 2.748 0 0 1 4 20.75a2.75 2.75 0 0 1-.505-5.452c.393-2.196 1.235-4.276 2.353-5.962.663-1 1.446-1.892 2.312-2.586H4.58A1.748 1.748 0 0 1 1.25 6a1.75 1.75 0 0 1 3.33-.75h4.776a2.75 2.75 0 0 1 2.644-2m-8 13.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m16 0A1.246 1.246 0 0 0 18.75 18 1.25 1.25 0 1 0 20 16.75m-8-12A1.25 1.25 0 0 0 10.75 6 1.246 1.246 0 0 0 12 7.25 1.247 1.247 0 0 0 13.25 6 1.248 1.248 0 0 0 12 4.75"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CurveBezier.displayName = "CurveBezier";
export { CurveBezier };
