import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const UserSettingsIconBold = memo(
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
          d="M19.38 14.967a1 1 0 0 1 1.732 1l-.336.58c.24.28.43.603.555.957l.672.002a1 1 0 1 1-.006 2l-.669-.002a3 3 0 0 1-.552.95l.335.58a1 1 0 0 1-1.732 1l-.337-.583a3 3 0 0 1-.541.051q-.285-.001-.555-.054l-.334.58a1.001 1.001 0 0 1-1.733-.999l.338-.585a3 3 0 0 1-.544-.94l-.67.002a1 1 0 1 1-.006-2l.674-.002c.123-.35.31-.67.546-.946l-.338-.586a1 1 0 0 1 1.732-1l.336.58a3 3 0 0 1 1.095-.001zm-.88 2.535a1.002 1.002 0 0 0-.503 1.864 1 1 0 0 0 1.001.004 1 1 0 0 0-.497-1.868"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 3a5.5 5.5 0 0 1 3.445 9.786 1 1 0 0 1-1.096 1.472A10.2 10.2 0 0 0 12 14c-3.264 0-5.49 1.293-6.443 3.318-.14.298-.186.406-.21.5-.013.056-.026.139.007.344.001.003.01.04.04.11a1.9 1.9 0 0 0 .38.551c.209.144.36.177 1.427.177h5.124a1 1 0 0 1 0 2H7.2c-.91 0-1.747.033-2.562-.53-.333-.229-.611-.583-.801-.882s-.392-.702-.457-1.1a2.8 2.8 0 0 1 .022-1.14c.08-.332.227-.633.344-.881.894-1.899 2.504-3.21 4.553-3.899A5.5 5.5 0 0 1 12 3m0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7"
          clipRule="evenodd"
        />
      </svg>
    ))
);
UserSettingsIconBold.displayName = "UserSettingsIconBold";
export { UserSettingsIconBold };
