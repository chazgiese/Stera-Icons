import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const DocumentIconFill = memo(
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
          d="M12.675 1c.441 0 .825-.006 1.197.083.306.073.599.195.867.36.326.2.593.475.906.787l4.125 4.125c.312.312.588.58.788.906.164.268.285.56.359.867.09.372.083.756.083 1.197V17.2c0 .823.001 1.502-.044 2.052-.046.562-.144 1.079-.392 1.564a4 4 0 0 1-1.748 1.748c-.485.248-1.002.346-1.564.392-.55.045-1.228.044-2.052.044H8.8c-.824 0-1.502 0-2.052-.044-.562-.046-1.08-.144-1.564-.392a4 4 0 0 1-1.748-1.748c-.248-.485-.346-1.002-.392-1.564C2.999 18.702 3 18.023 3 17.2V6.8c0-.824-.001-1.502.044-2.052.046-.562.144-1.08.392-1.565a4 4 0 0 1 1.748-1.748c.485-.247 1.002-.345 1.564-.391C7.298.999 7.976 1 8.8 1zM12 6.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C13.52 10 14.08 10 15.2 10H19v-.337c0-.245 0-.367-.027-.482a1 1 0 0 0-.12-.29c-.062-.1-.149-.187-.322-.36L13.47 3.47c-.173-.173-.26-.26-.36-.322a1 1 0 0 0-.29-.12C12.704 3 12.581 3 12.337 3H12z"
          clipRule="evenodd"
        />
      </svg>
    ))
);
DocumentIconFill.displayName = "DocumentIconFill";
export { DocumentIconFill };
