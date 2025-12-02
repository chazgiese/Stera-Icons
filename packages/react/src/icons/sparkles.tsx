import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SparklesIcon = memo(
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
          d="M10.5 4.25a.75.75 0 0 1 .718.53l.741 2.436a7.25 7.25 0 0 0 4.824 4.825l2.436.74a.75.75 0 0 1 0 1.436l-2.436.742a7.25 7.25 0 0 0-4.824 4.824l-.741 2.435a.75.75 0 0 1-1.436 0l-.741-2.435a7.25 7.25 0 0 0-4.824-4.824l-2.436-.742a.75.75 0 0 1 0-1.435l2.436-.741A7.25 7.25 0 0 0 9.04 7.217l.741-2.436.045-.113a.75.75 0 0 1 .673-.418m-.023 3.403a8.75 8.75 0 0 1-5.824 5.823l-.077.024.077.023a8.75 8.75 0 0 1 5.824 5.823l.023.077.023-.077a8.75 8.75 0 0 1 5.824-5.823l.076-.023-.076-.024a8.75 8.75 0 0 1-5.824-5.823l-.023-.077z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          d="M18.88 1.393a.124.124 0 0 1 .24 0l.192.633a4 4 0 0 0 2.663 2.662l.632.193c.118.036.118.203 0 .239l-.632.192a4 4 0 0 0-2.663 2.662l-.193.633a.124.124 0 0 1-.238 0l-.194-.633a4 4 0 0 0-2.662-2.662l-.632-.192c-.118-.036-.118-.203 0-.24l.632-.192a4 4 0 0 0 2.663-2.662z"
        />
      </svg>
    ))
);
SparklesIcon.displayName = "SparklesIcon";
export { SparklesIcon };
