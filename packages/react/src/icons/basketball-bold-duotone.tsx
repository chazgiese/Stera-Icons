import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const BasketballIconBoldDuotone = memo(
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
          d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M9.975 3.231q-.111.886-.094 1.87a19 19 0 0 0 .355 3.21q1.06-.301 2.17-.474a5.26 5.26 0 0 1 .319-2.36c.333-.867.883-1.59 1.538-2.19a9 9 0 0 1 2.14.863q-.296.196-.557.41c-.598.493-1.023 1.034-1.254 1.634a3.26 3.26 0 0 0-.194 1.442 19.3 19.3 0 0 1 5.782.611c.33.72.57 1.49.7 2.298a17.3 17.3 0 0 0-5.852-.93c.275.472.63.926 1.06 1.377.795.836 1.767 1.598 2.818 2.45.537.434 1.095.893 1.637 1.39a9 9 0 0 1-.895 1.911c-.593-.586-1.272-1.157-2-1.747-1.002-.811-2.102-1.671-3.01-2.625-.71-.748-1.344-1.593-1.755-2.584a16 16 0 0 0-2.185.473 27 27 0 0 0 .654 2.013c.89 2.422 2.12 4.725 3.507 6.578q.511.682 1.037 1.263a9 9 0 0 1-2.042.694 21 21 0 0 1-.595-.758c-1.517-2.024-2.834-4.503-3.784-7.086a29 29 0 0 1-.66-2.018q-.552.245-1.072.53c.136.442.226.9.257 1.373.125 1.899-.276 3.738-.448 5.288-.06.545-.1 1.085-.095 1.632a9 9 0 0 1-1.926-1.514q.015-.17.032-.34c.205-1.837.55-3.27.44-4.934a4 4 0 0 0-.038-.335 11.5 11.5 0 0 0-2.388 2.528 9 9 0 0 1-.55-2.52 14 14 0 0 1 2.156-1.92 6.6 6.6 0 0 0-1.07-1.221 7 7 0 0 0-.608-.49 9 9 0 0 1 .882-1.822q.562.375 1.063.824a8.6 8.6 0 0 1 1.428 1.647q.705-.381 1.451-.693a21 21 0 0 1-.448-3.842q-.01-.58.02-1.15a9 9 0 0 1 2.074-.756"
        />
      </svg>
    ))
);
BasketballIconBoldDuotone.displayName = "BasketballIconBoldDuotone";
export { BasketballIconBoldDuotone };
