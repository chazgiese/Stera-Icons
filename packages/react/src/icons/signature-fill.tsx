import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SignatureIconFill = memo(
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
          d="M6.8 2.5c.983 0 1.89.23 2.65.743.764.517 1.265 1.244 1.562 2.042.569 1.53.43 3.422-.004 5.22-.087.362-.193.729-.308 1.1.507-.223.827-.41 1.098-.628.378-.304.753-.74 1.366-1.633a1.5 1.5 0 0 1 2.736.848c0 .58.12 1.065.282 1.348a.55.55 0 0 0 .162.195c.016.011.055.035.157.035.432 0 1.245-.202 2.147-.675.886-.465 1.662-1.09 2.116-1.751a1.5 1.5 0 0 1 2.473 1.697c-.812 1.185-2.027 2.098-3.195 2.71-1.15.603-2.453 1.018-3.541 1.019-1.283 0-2.206-.66-2.772-1.5l-.05.045c-.738.593-1.546.967-2.535 1.352a7 7 0 0 1-1.87.451q-.097.192-.197.382H22a1.5 1.5 0 0 1 0 3H7.236a19 19 0 0 1-2.19 2.576 1.5 1.5 0 0 1-2.09-2.152q.208-.204.414-.424H2a1.5 1.5 0 0 1 0-3h3.629q.29-.47.56-.955a6 6 0 0 1-.642-.376c-1.458-.986-2.407-2.556-2.877-4.12-.467-1.552-.527-3.319.06-4.788.3-.751.783-1.456 1.499-1.972.724-.522 1.6-.789 2.572-.789m0 3c-.405 0-.653.105-.817.223-.172.124-.339.328-.467.65-.271.678-.301 1.72.027 2.813.325 1.081.937 1.993 1.685 2.499q.108.073.226.136c.262-.687.48-1.366.638-2.02.382-1.584.368-2.771.108-3.47-.117-.317-.27-.494-.43-.602-.165-.111-.453-.229-.97-.229"
          clipRule="evenodd"
        />
      </svg>
    ))
);
SignatureIconFill.displayName = "SignatureIconFill";
export { SignatureIconFill };
