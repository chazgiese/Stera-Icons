import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const EyeClosedIconFill = memo(
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
          d="M19.628 8.304a1.5 1.5 0 0 1 2.657 1.392c-.32.61-.7 1.183-1.129 1.718l1.363 1.264a1.5 1.5 0 0 1-2.039 2.2l-1.509-1.398a11.7 11.7 0 0 1-2.55 1.387l.497 1.716a1.5 1.5 0 0 1-2.882.834l-.525-1.816q-.743.095-1.511.096-.769-.002-1.512-.095l-.524 1.815a1.5 1.5 0 0 1-2.882-.834l.495-1.716a11.7 11.7 0 0 1-2.55-1.387L3.52 14.88a1.5 1.5 0 0 1-2.039-2.201l1.363-1.264a10.6 10.6 0 0 1-1.128-1.718 1.5 1.5 0 0 1 2.657-1.392c1.041 1.986 3.006 3.53 5.422 4.126l.047.011.01.003a9.2 9.2 0 0 0 4.295.001l.013-.004.056-.013c2.411-.597 4.373-2.14 5.413-4.124"
        />
      </svg>
    ))
);
EyeClosedIconFill.displayName = "EyeClosedIconFill";
export { EyeClosedIconFill };
