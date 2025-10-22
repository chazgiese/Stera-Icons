import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const TennisBallIconFilltone = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M20.429 4.93q-.65-.772-1.429-1.416c-2.443 2.017-4 5.07-4 8.485 0 3.416 1.557 6.468 4 8.486.518-.428.997-.902 1.428-1.417A8.98 8.98 0 0 1 17 11.999c0-2.866 1.34-5.42 3.428-7.068m-16.858 0Q4.221 4.159 5 3.515c2.443 2.017 4 5.07 4 8.485 0 3.416-1.557 6.468-4 8.486a11 11 0 0 1-1.429-1.417A8.98 8.98 0 0 0 7 11.999c0-2.866-1.34-5.42-3.429-7.068"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M5 20.485c2.443-2.018 4-5.07 4-8.486S7.443 5.531 5 3.514q-.778.643-1.429 1.417A8.98 8.98 0 0 1 7 11.999c0 2.867-1.34 5.42-3.429 7.069q.65.774 1.429 1.417M19 3.514c-2.443 2.017-4 5.07-4 8.485 0 3.416 1.557 6.468 4 8.486.518-.428.997-.902 1.428-1.417A8.98 8.98 0 0 1 17 11.999c0-2.866 1.34-5.42 3.428-7.068-.431-.515-.91-.99-1.428-1.417"
          clipRule="evenodd"
        />
      </svg>
    ))
);
TennisBallIconFilltone.displayName = "TennisBallIconFilltone";
export { TennisBallIconFilltone };
