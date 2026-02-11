import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SquarePlaceholderBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SquarePlaceholderBoldDuotone = memo(
  forwardRef<SVGSVGElement, SquarePlaceholderBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="square-placeholder-bold-duotone" {...props}>
      <path d="M11.93 19H9.1L5 14.9v-2.83zM17.29 18.7c-.25.12-.6.2-1.14.25q-.57.04-1.4.04L5 9.25q0-.83.05-1.4c.05-.55.13-.89.24-1.14zM19 14.75q-.01.83-.05 1.4c-.05.55-.13.89-.24 1.14l-12-12c.25-.11.6-.2 1.14-.24q.57-.04 1.4-.05zM13.6 5h1.3L19 9.1v2.83L12.07 5z" opacity={0.4} />
        <path fillRule="evenodd" d="M13.6 3q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v3.2q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06h-3.2q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q2.99 15.25 3 13.6v-3.2q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48Q8.75 2.99 10.4 3zm-3.2 2c-1.14 0-1.93 0-2.55.05-.6.05-.95.14-1.21.28a3 3 0 0 0-1.31 1.3 3 3 0 0 0-.28 1.22C5 8.47 5 9.26 5 10.4v3.2c0 1.14 0 1.93.05 2.55.05.6.14.95.28 1.21a3 3 0 0 0 1.3 1.31c.27.14.62.23 1.22.28.62.05 1.41.05 2.55.05h3.2c1.14 0 1.93 0 2.55-.05.6-.05.95-.14 1.21-.28a3 3 0 0 0 1.31-1.3c.14-.27.23-.62.28-1.22.05-.62.05-1.41.05-2.55v-3.2c0-1.14 0-1.93-.05-2.55a3 3 0 0 0-.28-1.21 3 3 0 0 0-1.3-1.31 3 3 0 0 0-1.22-.28C15.53 5 14.74 5 13.6 5z" clipRule="evenodd" />
    </IconBase>
  ))
);

SquarePlaceholderBoldDuotone.displayName = 'SquarePlaceholderBoldDuotone';

// Triple export pattern (lucide-react style)
export { SquarePlaceholderBoldDuotone, SquarePlaceholderBoldDuotone as SquarePlaceholderBoldDuotoneIcon, SquarePlaceholderBoldDuotone as SiSquarePlaceholderBoldDuotone };
export default SquarePlaceholderBoldDuotone;
export type { SquarePlaceholderBoldDuotoneProps };
