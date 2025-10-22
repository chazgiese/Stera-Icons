import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const VolleyballIconBold = memo(
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
          d="M12 1c1.931 0 3.75.499 5.33 1.375 1.803 1 3.295 2.492 4.295 4.296A10.96 10.96 0 0 1 23 12a10.997 10.997 0 0 1-11.845 10.968c-5.562-.423-9.967-4.98-10.15-10.607Q1 12.181 1 12A10.997 10.997 0 0 1 12 1M6.554 11.994c.602 4.336 2.582 7.033 5.05 8.996q.197.01.396.01c.852 0 1.674-.12 2.454-.34a7.3 7.3 0 0 1-1.954-2.11l-.166-.277a10.6 10.6 0 0 1-.878-2.023 14.537 14.537 0 0 1-.356-1.34 16 16 0 0 1-.262-1.645c-1.77-.742-3.17-1.128-4.284-1.27m-2.014.032a3.35 3.35 0 0 0-1.51.711 9 9 0 0 0 4.663 7.166c-1.571-1.997-2.73-4.534-3.153-7.877m16.419-.884c-1.015 2.508-3.047 4.936-6.332 6.958a4.63 4.63 0 0 0 2.157 1.522 8.99 8.99 0 0 0 4.175-8.48m-2.945-5.836c-.193 1.25-.814 2.489-1.6 3.628-.947 1.372-2.224 2.74-3.596 4.039.048.457.132 1.068.287 1.738.123.53.291 1.097.522 1.656 4.376-2.707 6.022-6.03 6.118-8.952a9 9 0 0 0-1.731-2.11M10.2 6.678C8.2 6.23 6 6.38 4.046 7.784a9 9 0 0 0-.898 2.581c.65-.261 1.397-.418 2.264-.435q.329-.007.678.013c1.493.086 3.29.543 5.48 1.457 1.01-.964 1.924-1.935 2.663-2.882-.948-.713-2.39-1.472-4.033-1.84M12 3a8.96 8.96 0 0 0-5.034 1.54 10.5 10.5 0 0 1 3.67.187 12.9 12.9 0 0 1 4.718 2.131c.631-1.146.838-2.115.656-2.917A8.96 8.96 0 0 0 12 3"
          clipRule="evenodd"
        />
      </svg>
    ))
);
VolleyballIconBold.displayName = "VolleyballIconBold";
export { VolleyballIconBold };
