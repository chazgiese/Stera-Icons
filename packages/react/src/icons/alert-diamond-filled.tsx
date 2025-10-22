import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AlertDiamondIconFilled = memo(
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
          d="M10.763 1.438a4 4 0 0 1 2.473 0c.518.168.953.464 1.383.829.42.357.9.837 1.482 1.419l4.212 4.212c.582.582 1.062 1.061 1.419 1.482.365.43.66.865.83 1.383.26.803.26 1.67 0 2.473-.17.518-.465.953-.83 1.382-.357.422-.837.9-1.419 1.483l-4.212 4.212c-.582.582-1.061 1.061-1.482 1.419-.43.365-.865.66-1.383.829a4 4 0 0 1-2.473 0c-.518-.168-.953-.464-1.383-.83-.42-.357-.9-.836-1.482-1.418L3.686 16.1c-.582-.582-1.062-1.062-1.419-1.482-.365-.43-.66-.865-.829-1.383a4 4 0 0 1 0-2.473c.168-.518.464-.953.83-1.383.356-.42.836-.9 1.418-1.482l4.212-4.212c.582-.582 1.061-1.062 1.482-1.419.43-.365.865-.66 1.383-.83M12 14.999a1.5 1.5 0 1 0 .002 3.002 1.5 1.5 0 0 0-.002-3.002m0-9a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1"
          clipRule="evenodd"
        />
      </svg>
    ))
);
AlertDiamondIconFilled.displayName = "AlertDiamondIconFilled";
export { AlertDiamondIconFilled };
