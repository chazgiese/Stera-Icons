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
          d="M15.652 9.954a.75.75 0 0 1 1.048-.166 12 12 0 0 0 .737.492.75.75 0 0 1-.786 1.278 13 13 0 0 1-.832-.556.75.75 0 0 1-.167-1.048M9.79 16.7a.75.75 0 0 1 1.214-.882q.295.408.555.833a.75.75 0 0 1-1.278.784q-.23-.376-.49-.735M6.316 12.69a.75.75 0 0 1 1.032-.247 13 13 0 0 1 .833.556.75.75 0 0 1-.881 1.214 12 12 0 0 0-.737-.491.75.75 0 0 1-.247-1.032M12.44 7.35a.751.751 0 0 1 1.28-.783q.23.376.49.735a.75.75 0 0 1-1.214.88q-.296-.405-.557-.832"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M4.399 4.399C8.597.2 15.403.2 19.6 4.399s4.198 11.004 0 15.202-11.004 4.198-15.202 0S.2 8.597 4.399 4.4m1.06 1.06a9.2 9.2 0 0 0-2.623 5.288q.415.07.827.167a.75.75 0 1 1-.35 1.457 11 11 0 0 0-.557-.116 9.22 9.22 0 0 0 2.703 6.286 9.22 9.22 0 0 0 6.282 2.703 11 11 0 0 0-.116-.556.75.75 0 0 1 1.458-.35q.098.41.168.826a9.2 9.2 0 0 0 5.29-2.623 9.2 9.2 0 0 0 2.622-5.286q-.415-.07-.827-.167a.751.751 0 0 1 .35-1.459q.277.066.558.117a9.22 9.22 0 0 0-2.703-6.287 9.22 9.22 0 0 0-6.283-2.703q.05.28.116.557a.751.751 0 0 1-1.459.35q-.097-.41-.168-.826A9.2 9.2 0 0 0 5.46 5.459"
          clipRule="evenodd"
        />
      </svg>
    ))
);
BaseballIcon.displayName = "BaseballIcon";
export { BaseballIcon };
