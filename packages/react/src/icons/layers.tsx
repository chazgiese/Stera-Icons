import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const LayersIcon = memo(
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
          d="M9.875 2.224a4.75 4.75 0 0 1 4.25 0l6.869 3.435c1.105.552 1.105 2.13 0 2.682L18.676 9.5l2.318 1.16c1.105.552 1.105 2.13 0 2.682L18.676 14.5l2.318 1.159c1.105.553 1.105 2.13 0 2.682l-6.87 3.436a4.75 4.75 0 0 1-4.249 0L3.006 18.34c-1.105-.553-1.105-2.13 0-2.682l2.318-1.16-2.318-1.158c-1.105-.553-1.105-2.13 0-2.682l2.318-1.16-2.318-1.158c-1.105-.553-1.105-2.13 0-2.682zm4.25 14.553a4.75 4.75 0 0 1-4.25 0L7 15.337 3.677 17l6.87 3.435a3.25 3.25 0 0 0 2.906 0l6.87-3.434-3.324-1.664zm0-5a4.75 4.75 0 0 1-4.25 0L7 10.337l-3.322 1.664 6.87 3.434a3.25 3.25 0 0 0 2.906 0l6.87-3.434-3.324-1.664zm-.671-8.212a3.25 3.25 0 0 0-2.908 0L3.677 7l6.87 3.435a3.25 3.25 0 0 0 2.906 0L20.324 7z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
LayersIcon.displayName = "LayersIcon";
export { LayersIcon };
