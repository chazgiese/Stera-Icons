import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SwatchBookIconBold = memo(
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
          d="M7 15.625a1.375 1.375 0 1 1 0 2.75 1.375 1.375 0 0 1 0-2.75"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M9 2a3 3 0 0 1 2.998 2.933 3 3 0 0 1 4.194.046l2.83 2.829A3 3 0 0 1 19.066 12 3 3 0 0 1 22 15v4a3 3 0 0 1-3 3l-11.854-.002a5 5 0 0 1-.254.001 5 5 0 0 1-.948-.112l-.03-.006a5 5 0 0 1-.668-.198l-.044-.017a4.9 4.9 0 0 1-2.05-1.474A4.985 4.985 0 0 1 2 17V5a3 3 0 0 1 3-3zM5 4a1 1 0 0 0-1 1v12a2.98 2.98 0 0 0 .69 1.915q.167.2.366.37.329.281.73.46.034.014.07.026A3 3 0 0 0 6.934 20L7 20a3 3 0 0 0 .826-.115l.238-.08.13-.055a3 3 0 0 0 .467-.253l.03-.02a3 3 0 0 0 .172-.127q.053-.044.106-.09a3 3 0 0 0 .688-.871q.045-.084.082-.17l.032-.07q.048-.12.087-.24l.024-.083A3 3 0 0 0 10 17V5a1 1 0 0 0-1-1zm6.072 15.998L19 20a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-1.929zm3.706-13.604a1 1 0 0 0-1.414 0L12 7.758v8.484l5.606-5.606a1 1 0 0 0 0-1.414z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SwatchBookIconBold.displayName = "SwatchBookIconBold";
export { SwatchBookIconBold };
