import { forwardRef, memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { IconProps } from "../types";
const GithubIconFill = memo(
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
          d="M12.02 2c5.512 0 9.999 4.508 9.978 10.08a10.06 10.06 0 0 1-6.863 9.568c-.492.102-.677-.226-.677-.493 0-.328.02-1.414.02-2.765 0-.943-.306-1.557-.675-1.865 2.233-.245 4.568-1.106 4.568-4.978 0-1.106-.369-2.008-1.024-2.704.102-.246.45-1.27-.103-2.663-.019-.006-.861-.252-2.745 1.045A10.2 10.2 0 0 0 12 6.896c-.84 0-1.701.103-2.5.329C7.595 5.913 6.755 6.18 6.755 6.18c-.553 1.372-.205 2.417-.103 2.663-.635.696-1.024 1.598-1.024 2.704 0 3.872 2.336 4.753 4.549 4.978-.287.246-.554.697-.636 1.353-.574.266-2.008.696-2.91-.84 0 0-.532-.983-1.535-1.045 0 0-.963 0-.062.614.006.003.658.314 1.107 1.476.01.032.598 1.797 3.359 1.208 0 .819.02 1.638.02 1.864 0 .267-.184.595-.675.492a10.07 10.07 0 0 1-6.843-9.567C2.002 6.508 6.468 2 12.02 2"
        />
      </svg>
    ))
);
GithubIconFill.displayName = "GithubIconFill";
export { GithubIconFill };
