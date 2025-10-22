import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const CoinIconFilltone = memo(
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
          d="M1 10c0 .899.603 1.555 1.207 1.983q.355.251.793.466v1.535c.007.021.058.152.364.368.265.188.644.381 1.136.568v-1.886l.142.045c.565.17 1.188.317 1.858.444v1.96c.613.128 1.284.234 2 .318v-1.985q.965.105 2 .15v1.995c.488.023.988.039 1.5.039s1.012-.016 1.5-.04v-1.993q1.035-.046 2-.15V15.8c.716-.084 1.387-.19 2-.318v-1.96a18 18 0 0 0 1.858-.444q.072-.022.142-.045v1.886c.492-.187.87-.38 1.136-.568.306-.216.357-.347.364-.368V12.45q.437-.215.793-.466C22.397 11.555 23 10.9 23 10v4c0 .899-.603 1.555-1.207 1.983-.63.447-1.478.81-2.435 1.096-1.926.578-4.527.921-7.358.921s-5.432-.343-7.358-.92c-.957-.288-1.805-.65-2.435-1.097C1.603 15.555 1 14.9 1 14z"
          opacity={0.32}
        />
        <path
          fill="currentColor"
          d="M12 6c2.83 0 5.432.343 7.358.92.957.288 1.805.65 2.435 1.097C22.397 8.445 23 9.1 23 10s-.603 1.555-1.207 1.983c-.63.447-1.478.81-2.435 1.096-1.926.578-4.527.921-7.358.921s-5.432-.343-7.358-.92c-.957-.288-1.805-.65-2.435-1.097C1.603 11.555 1 10.9 1 10s.603-1.555 1.207-1.983c.63-.447 1.478-.81 2.435-1.096C6.568 6.343 9.169 6 12 6"
        />
      </svg>
    ))
);
CoinIconFilltone.displayName = "CoinIconFilltone";
export { CoinIconFilltone };
