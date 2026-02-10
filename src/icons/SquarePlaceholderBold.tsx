import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SquarePlaceholderBoldProps = Omit<IconBaseProps, 'children'>;

const SquarePlaceholderBold = memo(
  forwardRef<SVGSVGElement, SquarePlaceholderBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="square-placeholder-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13.6 3q1.65-.01 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v3.2c0 1.56 0 2.72-.18 3.62q-.12.55-.36 1.05a5 5 0 0 1-2.19 2.19q-.5.24-1.06.36c-.9.19-2.05.18-3.61.18h-3.2q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q2.98 15.25 3 13.6v-3.2c0-1.56 0-2.72.18-3.61q.12-.57.36-1.06a5 5 0 0 1 2.19-2.19q.5-.24 1.05-.36C7.68 3 8.84 3 10.4 3zM5 10.4v1.67L11.93 19h2.82L5 9.25zm0 4.5q.01.74.05 1.25c.05.6.14.95.28 1.21a3 3 0 0 0 1.3 1.31c.27.14.62.23 1.22.28q.52.04 1.24.04zm1.64-9.57a3 3 0 0 0-1.31 1.3l-.04.08 12 12 .07-.04a3 3 0 0 0 1.31-1.3l.04-.08-12-12zM9.24 5 19 14.75v-2.82L12.07 5H9.25M19 9.1q0-.74-.04-1.25a3 3 0 0 0-.28-1.21 3 3 0 0 0-1.3-1.31 3 3 0 0 0-1.22-.28 18 18 0 0 0-1.25-.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

SquarePlaceholderBold.displayName = 'SquarePlaceholderBold';

// Triple export pattern (lucide-react style)
export { SquarePlaceholderBold, SquarePlaceholderBold as SquarePlaceholderBoldIcon, SquarePlaceholderBold as SiSquarePlaceholderBold };
export default SquarePlaceholderBold;
export type { SquarePlaceholderBoldProps };
