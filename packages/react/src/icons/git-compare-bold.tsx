import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GitCompareIconBold = memo(
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
          d="M19 1.5a3.5 3.5 0 0 1 1 6.854V16a4 4 0 0 1-4 4h-2.586l1.293 1.293a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1-.087-.102q-.02-.025-.038-.051a1 1 0 0 1-.125-.263l-.013-.05a1 1 0 0 1-.003-.472l.016-.062a1 1 0 0 1 .122-.257q.056-.085.128-.157l3-3a1 1 0 1 1 1.414 1.414L13.414 18H16a2 2 0 0 0 2-2V8.354A3.5 3.5 0 0 1 19 1.5m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9.293 1.293a1 1 0 0 1 1.414 0l3 3A1 1 0 0 1 14 5q-.001.088-.017.172v.008q-.006.03-.014.06l-.013.051a1 1 0 0 1-.163.315 1 1 0 0 1-.086.101l-3 3a1 1 0 1 1-1.414-1.414L10.586 6H8a2 2 0 0 0-2 2v7.646a3.501 3.501 0 1 1-2 0V8a4 4 0 0 1 4-4h2.586L9.293 2.707a1 1 0 0 1 0-1.414M5 17.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M19 1.5a3.5 3.5 0 0 1 1 6.853V16a4 4 0 0 1-4 4h-2.586l1.293 1.293a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1-.087-.102l-.038-.051a1 1 0 0 1-.125-.263l-.013-.05a1 1 0 0 1-.003-.473l.016-.061a1 1 0 0 1 .122-.257q.056-.085.128-.157l3-3a1 1 0 1 1 1.414 1.414L13.414 18H16a2 2 0 0 0 2-2V8.353A3.5 3.5 0 0 1 19 1.5m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9.293 1.293a1 1 0 0 1 1.414 0l3 3A1 1 0 0 1 14 5q-.001.088-.017.172v.008q-.006.03-.014.06l-.013.05a1 1 0 0 1-.163.316 1 1 0 0 1-.086.101l-3 3a1 1 0 1 1-1.414-1.414L10.586 6H8a2 2 0 0 0-2 2v7.645a3.501 3.501 0 1 1-2 0V8a4 4 0 0 1 4-4h2.586L9.293 2.707a1 1 0 0 1 0-1.414M5 17.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
          clipRule="evenodd"
        />
      </svg>
    ))
);
GitCompareIconBold.displayName = "GitCompareIconBold";
export { GitCompareIconBold };
