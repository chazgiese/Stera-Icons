import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SquarePlaceholderFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SquarePlaceholderFillDuotone = memo(
  forwardRef<SVGSVGElement, SquarePlaceholderFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="square-placeholder-fill-duotone" {...props}>
      <path d="M14.75 19h-2.82L5 12.07V9.25zM9.1 19q-.74-.01-1.25-.05a3 3 0 0 1-1.21-.28 3 3 0 0 1-1.31-1.3 3 3 0 0 1-.28-1.22q-.04-.51-.04-1.24zM18.7 17.3l-.03.06a3 3 0 0 1-1.3 1.31l-.08.04-12-12 .04-.07a3 3 0 0 1 1.3-1.31l.08-.04zM12.07 5 19 11.93v2.82L9.25 5h2.82M14.9 5q.74.01 1.25.05c.6.05.95.14 1.21.28a3 3 0 0 1 1.31 1.3c.14.27.23.62.28 1.22q.04.52.04 1.24z" opacity={0.4} />
        <path fillRule="evenodd" d="M13.6 3q1.65-.01 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v3.2c0 1.56 0 2.72-.18 3.62q-.12.55-.36 1.05a5 5 0 0 1-2.19 2.19q-.5.24-1.06.36c-.9.19-2.05.18-3.61.18h-3.2q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q2.98 15.25 3 13.6v-3.2c0-1.56 0-2.72.18-3.61q.12-.57.36-1.06a5 5 0 0 1 2.19-2.19q.5-.24 1.05-.36C7.68 3 8.84 3 10.4 3zM5 10.4v1.67L11.93 19h2.82L5 9.25zm0 4.5q.01.74.05 1.25c.05.6.14.95.28 1.21a3 3 0 0 0 1.3 1.31c.27.14.62.23 1.22.28q.52.04 1.24.04zm1.64-9.57a3 3 0 0 0-1.31 1.3l-.04.08 12 12 .07-.04a3 3 0 0 0 1.31-1.3l.04-.08-12-12zM9.24 5 19 14.75v-2.82L12.07 5H9.25M19 9.1q0-.74-.04-1.25a3 3 0 0 0-.28-1.21 3 3 0 0 0-1.3-1.31 3 3 0 0 0-1.22-.28q-.52-.04-1.24-.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

SquarePlaceholderFillDuotone.displayName = 'SquarePlaceholderFillDuotone';

// Triple export pattern (lucide-react style)
export { SquarePlaceholderFillDuotone, SquarePlaceholderFillDuotone as SquarePlaceholderFillDuotoneIcon, SquarePlaceholderFillDuotone as SiSquarePlaceholderFillDuotone };
export default SquarePlaceholderFillDuotone;
export type { SquarePlaceholderFillDuotoneProps };
