import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AlertDiamondIconFilltone = memo(
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
          d="M10.764 1.438c.803-.26 1.669-.26 2.472 0 .518.168.953.465 1.383.83.42.357.9.836 1.482 1.418l4.212 4.212c.582.582 1.062 1.062 1.42 1.483.364.43.66.865.828 1.382.261.804.261 1.67 0 2.473-.168.518-.464.953-.829 1.383-.357.42-.836.9-1.419 1.482l-4.212 4.212c-.582.582-1.061 1.062-1.482 1.42-.43.364-.865.66-1.383.828-.803.261-1.67.261-2.472 0-.518-.168-.954-.464-1.383-.829-.421-.357-.9-.837-1.483-1.419l-4.212-4.212c-.582-.582-1.061-1.061-1.419-1.482-.364-.43-.66-.865-.829-1.383a4 4 0 0 1 0-2.473c.169-.518.465-.953.83-1.382.357-.421.836-.9 1.418-1.483l4.212-4.212c.583-.582 1.062-1.061 1.483-1.419.43-.365.865-.66 1.383-.829M12 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-9a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 15a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 6a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1"
        />
      </svg>
    ))
);
AlertDiamondIconFilltone.displayName = "AlertDiamondIconFilltone";
export { AlertDiamondIconFilltone };
