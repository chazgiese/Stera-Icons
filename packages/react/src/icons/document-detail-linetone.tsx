import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const DocumentDetailIconLinetone = memo(
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
          d="M12.675 1c.441 0 .825-.006 1.197.083.306.073.599.195.867.36.326.2.593.475.906.787l4.125 4.125c.312.312.588.58.788.906a3 3 0 0 1 .359.867c.09.372.083.756.083 1.197V17.2c0 .823.001 1.501-.044 2.052-.046.562-.144 1.079-.392 1.564a4 4 0 0 1-1.748 1.748c-.485.248-1.002.346-1.564.392-.55.045-1.228.044-2.052.044H8.8c-.824 0-1.502 0-2.052-.044-.562-.046-1.08-.144-1.564-.392a4 4 0 0 1-1.748-1.748c-.248-.485-.346-1.002-.392-1.564C2.999 18.702 3 18.023 3 17.2V6.8c0-.824-.001-1.502.044-2.052.046-.562.144-1.08.392-1.565a4 4 0 0 1 1.748-1.748c.485-.247 1.002-.345 1.564-.391C7.298.999 7.976 1 8.8 1zM8.8 3c-.857 0-1.439 0-1.889.037-.438.036-.663.1-.82.18a2 2 0 0 0-.873.875c-.08.156-.145.38-.18.819C5 5.361 5 5.943 5 6.8v10.4c0 .856 0 1.439.037 1.889.036.438.101.663.18.82.193.375.499.681.875.873.156.08.38.145.82.18C7.361 21 7.942 21 8.8 21h6.4c.857 0 1.439 0 1.889-.037.438-.036.663-.101.82-.18.375-.193.681-.499.873-.875.08-.156.145-.38.18-.82.038-.45.038-1.032.038-1.888V10h-2.8c-.543 0-1.012 0-1.395-.03-.396-.033-.789-.105-1.167-.297a3 3 0 0 1-1.31-1.31c-.194-.38-.265-.773-.298-1.168C12 6.812 12 6.343 12 5.8V3zM14 5.8c0 .576.001.949.024 1.232.023.272.06.372.085.422a1 1 0 0 0 .437.436c.05.026.15.063.422.085C15.25 8 15.624 8 16.2 8h2.381q-.088-.092-.226-.23L14.23 3.643q-.139-.138-.23-.226z"
          clipRule="evenodd"
          opacity={0.4}
        />
        <path
          fill="currentColor"
          d="M15 16a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2zM15 12a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2z"
        />
      </svg>
    ))
);
DocumentDetailIconLinetone.displayName = "DocumentDetailIconLinetone";
export { DocumentDetailIconLinetone };
