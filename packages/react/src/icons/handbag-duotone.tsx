import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const HandbagIconDuotone = memo(
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
          d="M15.253 8.25c1.27 0 2.127-.014 2.858.293a3.75 3.75 0 0 1 1.549 1.209c.475.634.67 1.47.977 2.702l.6 2.4c.25 1.002.452 1.803.555 2.451.103.655.122 1.242-.051 1.802a3.75 3.75 0 0 1-1.64 2.1c-.501.304-1.076.427-1.735.485-.654.058-1.48.058-2.513.058H8.148c-1.034 0-1.859 0-2.513-.058-.66-.058-1.234-.181-1.735-.485a3.75 3.75 0 0 1-1.64-2.1c-.173-.56-.154-1.147-.05-1.802.102-.648.303-1.449.554-2.452l.6-2.399c.308-1.232.502-2.068.977-2.702.4-.534.935-.951 1.55-1.21.73-.306 1.587-.292 2.858-.292zm-6.504 1.5c-1.41 0-1.894.014-2.278.176-.368.155-.69.405-.93.725-.249.334-.38.8-.722 2.166l-.6 2.4c-.257 1.03-.437 1.755-.527 2.323-.089.562-.073.884 0 1.124.164.526.514.975.985 1.26.215.13.524.224 1.09.274.573.05 1.32.052 2.381.052h7.705c1.061 0 1.808-.001 2.38-.052.567-.05.876-.143 1.09-.273.472-.286.822-.735.985-1.261.074-.24.09-.562.001-1.124-.09-.568-.27-1.293-.527-2.322l-.6-2.4c-.342-1.368-.473-1.833-.723-2.167-.24-.32-.56-.57-.93-.725-.383-.162-.867-.176-2.277-.176z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M12 2.25A4.75 4.75 0 0 1 16.75 7v1.273c-.432-.025-.923-.023-1.498-.023h-.002V7a3.25 3.25 0 0 0-6.5 0v1.25h-.002c-.575 0-1.066-.002-1.498.023V7A4.75 4.75 0 0 1 12 2.25"
        />
      </svg>
    ))
);
HandbagIconDuotone.displayName = "HandbagIconDuotone";
export { HandbagIconDuotone };
