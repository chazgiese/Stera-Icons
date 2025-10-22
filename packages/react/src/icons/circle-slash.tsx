import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CircleSlashIcon = memo(
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
          d="M4.398 4.398C8.596.2 15.403.2 19.601 4.398s4.198 11.005 0 15.203-11.005 4.198-15.203 0S.2 8.596 4.398 4.398m.554 1.614c-3.094 3.635-2.927 9.095.507 12.529s8.893 3.6 12.527.506zm13.589-.553c-3.434-3.434-8.894-3.601-12.528-.507l13.034 13.034c3.094-3.634 2.928-9.094-.506-12.527"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M4.398 4.399C8.596.2 15.403.2 19.601 4.399s4.198 11.005 0 15.203-11.005 4.198-15.203 0S.2 8.597 4.398 4.399m.554 1.614c-3.094 3.634-2.927 9.094.507 12.528s8.893 3.6 12.527.506zm13.589-.554c-3.434-3.434-8.894-3.601-12.528-.507l13.034 13.034c3.094-3.634 2.928-9.093-.506-12.527"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CircleSlashIcon.displayName = "CircleSlashIcon";
export { CircleSlashIcon };
