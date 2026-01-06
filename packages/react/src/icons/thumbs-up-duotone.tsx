import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ThumbsUpIconDuotone = memo(
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
          d="M13 2.25c1.117 0 1.995.361 2.612 1.021.598.642.873 1.483.967 2.316.136 1.212-.095 2.557-.465 3.663h2.163c1.626 0 2.923 1.416 2.69 3.06-.039.276-.081.56-.125.835l-.14.789c-.151.77-.5 2.05-.804 3.112-.153.536-.298 1.027-.404 1.383l-.126.423-.035.115-.01.03-.002.008-.001.002a3.75 3.75 0 0 1-3.611 2.743h-4.21a.75.75 0 0 1 0-1.5h4.21a2.25 2.25 0 0 0 2.17-1.658l.006-.02v-.004l.003-.007.01-.029.033-.114.125-.418c.105-.352.248-.837.4-1.367.306-1.071.638-2.29.774-2.987.09-.456.175-1.005.252-1.545.1-.707-.456-1.35-1.205-1.351H15a.75.75 0 0 1-.671-1.085c.503-1.007.904-2.612.759-3.911-.072-.64-.269-1.133-.573-1.46-.23-.245-.569-.446-1.096-.516l-2.776 4.858a4.2 4.2 0 0 1-3.035 2.07.75.75 0 0 1-.217-1.484 2.7 2.7 0 0 0 1.95-1.33l3.007-5.264A.75.75 0 0 1 13 2.25"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M7.392 9.222a.75.75 0 0 0 .216 1.484q.33-.05.642-.148V17a3.25 3.25 0 0 0 3.25 3.25.75.75 0 0 0 0 1.5H8A4.75 4.75 0 0 1 3.25 17v-4A3.75 3.75 0 0 1 7 9.25q.198 0 .392-.028m-.642 1.543a2.25 2.25 0 0 0-2 2.235v4A3.25 3.25 0 0 0 8 20.25h.037A4.73 4.73 0 0 1 6.75 17z"
          clipRule="evenodd"
          opacity={0.4}
        />
      </svg>
    ))
);
ThumbsUpIconDuotone.displayName = "ThumbsUpIconDuotone";
export { ThumbsUpIconDuotone };
