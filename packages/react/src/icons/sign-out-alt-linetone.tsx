import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const SignOutAltIconLinetone = memo(
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
          d="M16 1c.866 0 1.494-.008 2.035.137a4 4 0 0 1 2.828 2.828c.145.54.137 1.17.137 2.035a1 1 0 1 1-2 0c0-.994-.009-1.295-.068-1.517a2 2 0 0 0-1.414-1.415C17.295 3.008 16.994 3 16 3H8.8c-.857 0-1.439 0-1.889.037-.438.036-.663.101-.82.18a2 2 0 0 0-.873.875c-.08.156-.145.38-.18.82C5 5.361 5 5.943 5 6.8v10.4c0 .857 0 1.439.037 1.889.036.438.101.663.18.82a2 2 0 0 0 .875.873c.156.08.38.145.82.181C7.361 21 7.942 21 8.8 21H16c.994 0 1.295-.009 1.518-.068a2 2 0 0 0 1.414-1.414c.06-.223.068-.524.068-1.518a1 1 0 1 1 2 0c0 .866.008 1.494-.137 2.035a4 4 0 0 1-2.828 2.828c-.54.145-1.17.137-2.035.137H8.8c-.824 0-1.502.001-2.052-.044-.562-.046-1.08-.144-1.564-.392a4 4 0 0 1-1.748-1.747c-.248-.486-.346-1.003-.392-1.565C2.999 18.702 3 18.024 3 17.2V6.8c0-.824-.001-1.502.044-2.052.046-.562.144-1.079.392-1.564a4 4 0 0 1 1.748-1.748c.485-.248 1.002-.346 1.564-.392C7.298.999 7.976 1 8.8 1z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M14.293 6.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L17.586 13H8.5a1 1 0 0 1 0-2h9.086l-3.293-3.293a1 1 0 0 1 0-1.414"
        />
      </svg>
    ))
);
SignOutAltIconLinetone.displayName = "SignOutAltIconLinetone";
export { SignOutAltIconLinetone };
