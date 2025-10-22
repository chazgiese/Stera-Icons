import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GlobeIconFilled = memo(
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
          d="M16.024 13c.144 0 .258.122.247.266a16 16 0 0 1-2.792 7.841l-1.234 1.783a.26.26 0 0 1-.203.109L12 23l-.044-.001a.25.25 0 0 1-.2-.11l-1.234-1.782a15.97 15.97 0 0 1-2.793-7.841.247.247 0 0 1 .247-.266zM5.47 13c.133 0 .243.104.252.236a17.97 17.97 0 0 0 3.155 9.01c.089.128-.03.294-.178.247-4.072-1.28-7.122-4.861-7.624-9.22A.246.246 0 0 1 1.32 13zM22.68 13c.147 0 .262.127.245.273-.502 4.36-3.553 7.94-7.625 9.22-.148.046-.265-.12-.177-.247a17.97 17.97 0 0 0 3.156-9.01.253.253 0 0 1 .25-.236zM8.699 1.507c.148-.047.266.119.178.247a17.97 17.97 0 0 0-3.155 9.01.254.254 0 0 1-.252.236H1.32a.246.246 0 0 1-.245-.273c.502-4.359 3.552-7.94 7.624-9.22M12.042 1.001c.081.002.156.042.203.108l1.234 1.784a16 16 0 0 1 2.792 7.841.247.247 0 0 1-.247.266H7.976a.247.247 0 0 1-.247-.266 16 16 0 0 1 2.793-7.841l1.233-1.784a.25.25 0 0 1 .201-.108L12 1zM15.301 1.507c4.072 1.28 7.122 4.861 7.624 9.22a.245.245 0 0 1-.245.273h-4.15a.253.253 0 0 1-.251-.236 17.97 17.97 0 0 0-3.156-9.01c-.088-.128.03-.294.178-.247"
        />
      </svg>
    ))
);
GlobeIconFilled.displayName = "GlobeIconFilled";
export { GlobeIconFilled };
