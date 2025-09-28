import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HeadphonesBold = memo(
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
          d="M12.31 1.004c3.183.088 6.029 1.53 7.981 3.767 1.788 2.048 2.3 4.557 2.263 7.06-.038 2.483-.621 5.082-1.133 7.386a1 1 0 0 1-1.007.782l-.022.099a3 3 0 0 1-5.857-1.301l.65-2.929a3 3 0 0 1 5.13-1.386c.135-.909.225-1.806.239-2.681.033-2.222-.424-4.173-1.77-5.715a8.98 8.98 0 0 0-6.28-3.072L12 3l-.504.014a8.98 8.98 0 0 0-6.28 3.072C3.87 7.628 3.413 9.579 3.446 11.8c.013.875.103 1.772.238 2.681a3 3 0 0 1 5.13 1.386l.65 2.929a3 3 0 0 1-5.857 1.3L3.585 20a1 1 0 0 1-1.006-.782c-.512-2.304-1.095-4.903-1.133-7.386-.038-2.503.475-5.012 2.263-7.06A10.98 10.98 0 0 1 12 1zM6.861 16.302a1 1 0 0 0-1.952.433l.65 2.93a1 1 0 1 0 1.953-.434zm11.469-.759a1 1 0 0 0-1.193.759l-.65 2.928a1 1 0 0 0 1.951.434l.65-2.929a1 1 0 0 0-.758-1.192"
          clipRule="evenodd"
        />
      </svg>
    ))
);
HeadphonesBold.displayName = "HeadphonesBold";
export { HeadphonesBold };
