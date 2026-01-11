import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const FootballIconDuotone = memo(
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
          d="M12.822 1.71c2.677-.54 5.428-.423 7.643.293a2.38 2.38 0 0 1 1.531 1.532c.716 2.216.835 4.966.294 7.644-.54 2.68-1.753 5.345-3.76 7.351s-4.671 3.22-7.351 3.76c-2.678.54-5.428.422-7.644-.294a2.38 2.38 0 0 1-1.532-1.531c-.716-2.215-.833-4.966-.293-7.643.54-2.68 1.753-5.346 3.759-7.352s4.672-3.22 7.353-3.76m7.181 1.72c-1.938-.625-4.425-.747-6.886-.25-2.458.496-4.833 1.597-6.587 3.35s-2.854 4.13-3.35 6.587c-.497 2.461-.376 4.948.25 6.886a.88.88 0 0 0 .566.567c1.938.626 4.425.746 6.886.25 2.458-.497 4.834-1.597 6.588-3.35s2.853-4.13 3.35-6.588c.496-2.46.375-4.947-.25-6.885a.88.88 0 0 0-.567-.566"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M13.47 7.47a.75.75 0 0 1 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-.47-.47L13.06 12l.47.47a.75.75 0 1 1-1.06 1.06l-.47-.47L10.06 15l.47.47a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 1 1 1.06-1.06l.47.47L10.94 12l-.47-.47a.75.75 0 1 1 1.06-1.06l.47.47L13.94 9l-.47-.47a.75.75 0 0 1 0-1.06"
        />
      </svg>
    ))
);
FootballIconDuotone.displayName = "FootballIconDuotone";
export { FootballIconDuotone };
