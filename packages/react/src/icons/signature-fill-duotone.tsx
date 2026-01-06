import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SignatureIconFillDuotone = memo(
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
        <g fill="currentColor" opacity={0.4}>
          <path d="M5.629 15.5c-.682 1.108-1.449 2.14-2.258 3H2a1.5 1.5 0 0 1 0-3zM22 15.5a1.5 1.5 0 0 1 0 3H7.236a25 25 0 0 0 1.842-3z" />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M6.8 2.5c.983 0 1.89.23 2.65.743.764.517 1.265 1.244 1.562 2.042.568 1.53.43 3.422-.004 5.22-.087.362-.193.729-.308 1.1.507-.223.827-.41 1.098-.628.377-.304.753-.74 1.366-1.633a1.5 1.5 0 0 1 2.736.848c0 .58.12 1.065.281 1.348a.55.55 0 0 0 .163.195c.016.011.054.035.157.035.432 0 1.245-.202 2.147-.675.886-.465 1.662-1.09 2.116-1.751a1.5 1.5 0 0 1 2.473 1.697c-.812 1.185-2.027 2.098-3.195 2.71-1.15.603-2.453 1.018-3.541 1.019-1.283 0-2.206-.66-2.772-1.5l-.05.045c-.738.593-1.546.967-2.536 1.352a7 7 0 0 1-1.87.451c-1.12 2.237-2.6 4.377-4.227 5.958a1.5 1.5 0 0 1-2.091-2.152c1.194-1.16 2.319-2.716 3.233-4.38a6 6 0 0 1-.641-.375c-1.458-.986-2.407-2.556-2.877-4.12-.467-1.552-.527-3.319.06-4.788.3-.751.783-1.456 1.498-1.972.725-.522 1.602-.789 2.573-.789m0 3c-.405 0-.653.105-.817.223-.172.124-.339.327-.467.65-.271.678-.301 1.72.027 2.813.325 1.081.937 1.993 1.684 2.499q.11.073.227.136c.262-.687.48-1.366.638-2.02.382-1.584.368-2.771.108-3.47-.118-.317-.27-.494-.43-.602-.165-.111-.453-.229-.97-.229"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SignatureIconFillDuotone.displayName = "SignatureIconFillDuotone";
export { SignatureIconFillDuotone };
