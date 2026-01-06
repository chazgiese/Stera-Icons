import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CoinIconFill = memo(
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
          d="M12 6c2.83 0 5.432.343 7.358.92.957.288 1.805.65 2.435 1.097C22.397 8.445 23 9.1 23 10v4c0 .899-.603 1.555-1.207 1.983-.63.447-1.478.81-2.435 1.096-1.926.578-4.527.921-7.358.921s-5.432-.343-7.358-.92c-.957-.288-1.805-.65-2.435-1.097C1.603 15.555 1 14.9 1 14v-4c0-.899.603-1.555 1.207-1.983.63-.447 1.478-.81 2.435-1.096C6.568 6.343 9.169 6 12 6m-1.5 9.96c.488.024.988.04 1.5.04s1.012-.016 1.5-.04v-1.993a34 34 0 0 1-3 0zm7-2.437q-.945.179-2 .293v1.985c.716-.084 1.387-.19 2-.318zm-11 1.96c.613.128 1.284.234 2 .318v-1.985a26 26 0 0 1-2-.293zM3 13.984c.007.021.058.152.364.368.265.188.644.381 1.136.568v-1.886A10.3 10.3 0 0 1 3 12.45zm18-1.535c-.448.222-.955.415-1.5.585v1.886c.492-.187.87-.38 1.136-.568.306-.216.357-.347.364-.368z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
CoinIconFill.displayName = "CoinIconFill";
export { CoinIconFill };
