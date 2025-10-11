import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BaseballIcon = memo(
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
          d="M15.652 9.954a.75.75 0 0 1 1.048-.167 12 12 0 0 0 .736.493.75.75 0 0 1-.785 1.278 13 13 0 0 1-.832-.556.75.75 0 0 1-.167-1.048M9.79 16.7a.75.75 0 0 1 1.213-.882q.296.407.556.833a.75.75 0 1 1-1.279.783q-.23-.375-.49-.734M6.316 12.69a.75.75 0 0 1 1.032-.248A13 13 0 0 1 8.18 13a.75.75 0 0 1-.88 1.214 12 12 0 0 0-.737-.492.75.75 0 0 1-.247-1.031M12.439 7.35a.75.75 0 0 1 1.28-.783q.23.375.49.734a.75.75 0 0 1-1.213.882 13 13 0 0 1-.557-.833"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M4.4 4.4C8.596.2 15.403.2 19.601 4.4c4.198 4.197 4.198 11.004 0 15.202s-11.005 4.198-15.203 0S.201 8.597 4.4 4.399m1.06 1.06a9.2 9.2 0 0 0-2.625 5.286q.416.07.828.168a.75.75 0 1 1-.35 1.457 11 11 0 0 0-.557-.116A9.22 9.22 0 0 0 5.46 18.54a9.22 9.22 0 0 0 6.282 2.704 11 11 0 0 0-.117-.558.75.75 0 0 1 1.458-.349q.098.411.167.827a9.2 9.2 0 0 0 5.291-2.624 9.2 9.2 0 0 0 2.622-5.286 13 13 0 0 1-.827-.167.75.75 0 0 1 .35-1.459q.277.066.557.117A9.22 9.22 0 0 0 18.54 5.46a9.22 9.22 0 0 0-6.284-2.704q.051.28.117.557a.75.75 0 0 1-1.459.35q-.098-.41-.168-.827A9.2 9.2 0 0 0 5.46 5.46"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BaseballIcon.displayName = "BaseballIcon";
export { BaseballIcon };
