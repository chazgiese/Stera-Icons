import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const UserXIconBoldDuotone = memo(
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
          d="M12 3a5.5 5.5 0 0 1 3.445 9.786 1 1 0 0 1-1.096 1.472A10.2 10.2 0 0 0 12 14c-3.264 0-5.49 1.293-6.443 3.318-.14.298-.186.406-.21.5-.013.056-.026.139.007.344.001.003.01.04.04.11a1.9 1.9 0 0 0 .38.551c.209.144.36.177 1.427.177h5.124a1 1 0 0 1 0 2H7.2c-.91 0-1.747.033-2.562-.53-.333-.229-.611-.583-.801-.882s-.392-.702-.457-1.1a2.8 2.8 0 0 1 .022-1.14c.08-.332.227-.633.344-.881.894-1.899 2.504-3.21 4.553-3.899A5.5 5.5 0 0 1 12 3m0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M18.794 15.292a1 1 0 0 1 1.412 1.416l-1.292 1.29 1.294 1.296a1 1 0 0 1-1.416 1.412L17.5 19.412l-1.292 1.294a1 1 0 0 1-1.416-1.412l1.293-1.297-1.29-1.289a1 1 0 0 1 1.411-1.416l1.294 1.292z"
        />
      </svg>
    ))
);
UserXIconBoldDuotone.displayName = "UserXIconBoldDuotone";
export { UserXIconBoldDuotone };
