import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CheckBadgeIconDuotone = memo(
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
          d="M10.056 1.884a2.75 2.75 0 0 1 3.889 0l1.221 1.222c.235.234.553.366.884.366h1.729a2.75 2.75 0 0 1 2.75 2.75v1.729c0 .33.132.65.366.883l1.222 1.222a2.75 2.75 0 0 1 0 3.889l-1.222 1.221a1.25 1.25 0 0 0-.366.884v1.729a2.75 2.75 0 0 1-2.75 2.75H16.05c-.331 0-.65.131-.884.366l-1.221 1.222a2.75 2.75 0 0 1-3.889 0l-1.222-1.222a1.25 1.25 0 0 0-.883-.366H6.222a2.75 2.75 0 0 1-2.75-2.75V16.05c0-.331-.132-.65-.366-.884l-1.222-1.221a2.75 2.75 0 0 1 0-3.889l1.222-1.222c.234-.234.366-.552.366-.883V6.222a2.75 2.75 0 0 1 2.75-2.75h1.729c.33 0 .649-.132.883-.366zm2.828 1.06a1.25 1.25 0 0 0-1.767 0L9.895 4.167a2.75 2.75 0 0 1-1.944.806H6.222c-.69 0-1.25.56-1.25 1.25v1.729c0 .729-.29 1.428-.806 1.944l-1.221 1.222a1.25 1.25 0 0 0 0 1.767l1.221 1.222c.516.515.806 1.215.806 1.944v1.729c0 .69.56 1.25 1.25 1.25h1.729c.729 0 1.428.29 1.944.805l1.222 1.222a1.25 1.25 0 0 0 1.767 0l1.222-1.222a2.75 2.75 0 0 1 1.944-.805h1.729c.69 0 1.25-.56 1.25-1.25V16.05c0-.73.29-1.429.805-1.944l1.222-1.222a1.25 1.25 0 0 0 0-1.767l-1.222-1.222a2.75 2.75 0 0 1-.805-1.944V6.222c0-.69-.56-1.25-1.25-1.25H16.05c-.729 0-1.429-.29-1.944-.806z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M15.345 8.97a.75.75 0 1 1 1.06 1.06l-4.847 4.848c-.103.103-.214.215-.316.3-.109.092-.265.206-.477.265a1.25 1.25 0 0 1-.838-.06 1.3 1.3 0 0 1-.435-.328c-.089-.1-.183-.226-.27-.343L7.526 12.45a.75.75 0 0 1 1.199-.9l1.697 2.263.034.044.041-.04z"
        />
      </svg>
    ))
);
CheckBadgeIconDuotone.displayName = "CheckBadgeIconDuotone";
export { CheckBadgeIconDuotone };
