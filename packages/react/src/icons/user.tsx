import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const User = memo(
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
          d="M12 2.25a5.75 5.75 0 0 1 3.353 10.418c2.734.732 4.811 2.412 5.791 4.926.118.303.24.611.303.923.069.344.064.675-.018 1.06-.072.338-.255.684-.442.958s-.444.57-.734.76c-.726.48-1.495.455-2.454.455H6.2c-.958 0-1.727.024-2.453-.454-.29-.19-.547-.487-.734-.76-.187-.275-.37-.621-.442-.96a2.5 2.5 0 0 1-.018-1.06c.063-.311.185-.619.303-.922.98-2.514 3.057-4.194 5.79-4.926A5.74 5.74 0 0 1 6.25 8 5.75 5.75 0 0 1 12 2.25m0 11.5c-3.942 0-6.686 1.666-7.748 4.389-.132.34-.198.516-.23.672a1 1 0 0 0 .015.45c.015.075.084.238.213.428.13.19.257.313.32.355.276.181.534.206 1.63.206h11.6c1.094 0 1.353-.025 1.628-.206.064-.042.19-.166.32-.355.13-.19.198-.353.214-.427a1 1 0 0 0 .014-.45c-.032-.157-.097-.333-.23-.673-1.06-2.723-3.805-4.389-7.747-4.389m0-10a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5"
          clipRule="evenodd"
        />
      </svg>
    ))
);
User.displayName = "User";
export { User };
