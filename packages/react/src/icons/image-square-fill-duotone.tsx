import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const ImageSquareIconFillDuotone = memo(
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
          <path d="M7.635 21.929c.348.028.73.042 1.15.052q-.23-.003-.446-.01zM15.661 21.97c-.144.007-.293.008-.447.011q.236-.003.456-.011z" />
          <path
            fillRule="evenodd"
            d="M13 2c1.383 0 2.481 0 3.365.071.896.073 1.66.227 2.359.583a6 6 0 0 1 2.622 2.622c.356.7.51 1.463.583 2.359C22 8.519 22 9.616 22 11v2c0 1.383 0 2.481-.071 3.365a8 8 0 0 1-.23 1.42l-4.139-4.139-.114-.103a1.5 1.5 0 0 0-1.893 0l-.114.104-1.939 1.939-4.94-4.94a1.5 1.5 0 0 0-2.007-.103l-.114.104-4.123 4.123-.302.3C2 14.462 2 13.776 2 13v-2c0-1.384 0-2.481.071-3.365.073-.896.227-1.66.583-2.359a6 6 0 0 1 2.622-2.622c.7-.356 1.463-.51 2.359-.583C8.519 2 9.616 2 11 2zm2 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
            clipRule="evenodd"
          />
        </g>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M17 9a2 2 0 1 0-4 0 2 2 0 0 0 4 0M6.553 10.543a1.5 1.5 0 0 1 2.008.104l4.939 4.939 1.94-1.94.113-.103a1.5 1.5 0 0 1 1.893 0l.114.104 4.141 4.14a4.8 4.8 0 0 1-.355.937 6 6 0 0 1-2.622 2.622c-.7.356-1.463.51-2.359.583-.873.071-1.954.071-3.314.071H10.95c-1.36 0-2.441 0-3.314-.071-.896-.073-1.66-.227-2.359-.583a6 6 0 0 1-2.622-2.622c-.356-.7-.51-1.463-.583-2.359a21 21 0 0 1-.062-1.289l.307-.306 4.123-4.123z"
          clipRule="evenodd"
        />
        <path fill="currentColor" d="M15 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
      </svg>
    ))
);
ImageSquareIconFillDuotone.displayName = "ImageSquareIconFillDuotone";
export { ImageSquareIconFillDuotone };
