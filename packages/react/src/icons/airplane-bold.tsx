import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const AirplaneIconBold = memo(
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
          d="M8.971 2c.969 0 1.878.468 2.441 1.256L15.515 9h3.242a4 4 0 0 1 2.83 1.173l1.12 1.122a1.003 1.003 0 0 1 0 1.415l-1.122 1.12A4 4 0 0 1 18.758 15h-3.243l-4.103 5.744A3 3 0 0 1 8.971 22H7.758a1.5 1.5 0 0 1-1.378-2.09l2.126-4.96-2.433-.08-.843 1.488A2.25 2.25 0 0 1 3.272 17.5h-.713a1.5 1.5 0 0 1-1.491-1.665l.426-3.837-.426-3.833a1.5 1.5 0 0 1 1.489-1.666h.712c.812-.002 1.561.435 1.96 1.142l.844 1.489 2.433-.081L6.38 4.09A1.5 1.5 0 0 1 7.758 2zm1.948 7.606.042.116a1 1 0 0 1-.928 1.277l-4.5.15a1 1 0 0 1-.903-.506L3.49 8.625a.25.25 0 0 0-.218-.127h-.154l.376 3.392q.005.037.005.075l.001.027v.039q-.001.038-.005.074v.001L3.117 15.5h.154a.25.25 0 0 0 .217-.127l1.141-2.016a1 1 0 0 1 .904-.506l4.5.15.122.01a1.002 1.002 0 0 1 .763 1.383L8.517 20h.454a1 1 0 0 0 .813-.419l4.403-6.162A1 1 0 0 1 15 13h3.758c.53 0 1.04-.21 1.414-.585l.414-.414-.414-.414A2 2 0 0 0 18.757 11H15a1 1 0 0 1-.813-.419L9.784 4.42A1 1 0 0 0 8.971 4h-.454z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
AirplaneIconBold.displayName = "AirplaneIconBold";
export { AirplaneIconBold };
