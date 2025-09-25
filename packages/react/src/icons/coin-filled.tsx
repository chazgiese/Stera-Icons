import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CoinFilled = memo(
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
          d="M12 6c2.83 0 5.432.343 7.358.92.957.288 1.805.65 2.435 1.097C22.397 8.445 23 9.1 23 10v4c0 .899-.603 1.555-1.207 1.983-.63.447-1.478.81-2.435 1.096-1.926.578-4.527.921-7.358.921s-5.432-.343-7.358-.92c-.957-.288-1.805-.65-2.435-1.097C1.603 15.555 1 14.9 1 14v-4c0-.899.603-1.555 1.207-1.983.63-.447 1.478-.81 2.435-1.096C6.568 6.343 9.169 6 12 6m1.75 7.954a34 34 0 0 1-3.5 0v1.995c.566.031 1.15.051 1.75.051s1.184-.02 1.75-.05zm-7.5 1.477c.748.167 1.59.3 2.5.397v-1.986a26 26 0 0 1-2.5-.367zm11.5-1.956a26 26 0 0 1-2.5.367v1.986c.91-.097 1.752-.23 2.5-.397zM3 13.985c.007.02.058.15.364.367.308.22.77.446 1.386.66v-1.903l-.108-.03c-.6-.18-1.155-.389-1.642-.63zm18-1.536c-.487.241-1.043.45-1.642.63l-.108.03v1.903c.615-.214 1.078-.44 1.386-.66.306-.216.357-.347.364-.368z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CoinFilled.displayName = "CoinFilled";
export { CoinFilled };
