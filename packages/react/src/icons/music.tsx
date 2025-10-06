import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const Music = memo(
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
          d="M18.42 2.503a2 2 0 0 1 2.33 1.972V15.5l-.002.03.002.032a4.187 4.187 0 0 1-4.187 4.188 2.813 2.813 0 0 1-2.813-2.813 4.19 4.19 0 0 1 4.188-4.187 2.8 2.8 0 0 1 1.312.326v-5.19l-10.5 1.75V17.5l-.002.03.002.032a4.187 4.187 0 0 1-4.187 4.188 2.813 2.813 0 0 1-2.813-2.813 4.19 4.19 0 0 1 4.188-4.187 2.8 2.8 0 0 1 1.312.326V6.058a2 2 0 0 1 1.67-1.972zM5.938 16.25a2.69 2.69 0 0 0-2.687 2.687c0 .725.588 1.313 1.313 1.313a2.687 2.687 0 0 0 2.687-2.688c0-.725-.588-1.312-1.312-1.312m12-2a2.69 2.69 0 0 0-2.687 2.687c0 .725.588 1.313 1.313 1.313a2.687 2.687 0 0 0 2.687-2.688c0-.725-.588-1.312-1.312-1.312m.731-10.268-9.5 1.583a.5.5 0 0 0-.418.493v2.056l10.5-1.75V4.475a.5.5 0 0 0-.582-.493"
          clipRule="evenodd"
        />
      </svg>
    ))
);
Music.displayName = "Music";
export { Music };
