import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const DocumentDetailIconFilled = memo(
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
          d="M12.675 1c.441 0 .825-.006 1.197.083.306.073.599.195.867.36.326.2.593.475.906.787l4.125 4.125c.312.312.588.58.788.906a3 3 0 0 1 .359.867c.09.372.083.756.083 1.197V17.2c0 .823.001 1.501-.044 2.052-.046.562-.144 1.079-.392 1.564a4 4 0 0 1-1.748 1.748c-.485.248-1.002.346-1.564.392-.55.045-1.228.044-2.052.044H8.8c-.824 0-1.502 0-2.052-.044-.562-.046-1.08-.144-1.564-.392a4 4 0 0 1-1.748-1.748c-.248-.485-.346-1.002-.392-1.564C2.999 18.702 3 18.023 3 17.2V6.8c0-.824-.001-1.502.044-2.052.046-.562.144-1.08.392-1.565a4 4 0 0 1 1.748-1.748c.485-.247 1.002-.345 1.564-.391C7.298.999 7.976 1 8.8 1zM9 16a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2zm0-4a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2zm4.27-8.646a.25.25 0 0 0-.21.087c-.06.07-.06.222-.06.525V5.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C14.52 9 15.08 9 16.2 9h1.834c.303 0 .454 0 .525-.06a.25.25 0 0 0 .086-.21c-.007-.092-.114-.199-.328-.413l-4.634-4.635c-.214-.214-.322-.32-.413-.328"
          clipRule="evenodd"
        />
      </svg>
    ))
);
DocumentDetailIconFilled.displayName = "DocumentDetailIconFilled";
export { DocumentDetailIconFilled };
