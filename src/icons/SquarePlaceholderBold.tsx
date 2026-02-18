import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SquarePlaceholderBoldProps = Omit<IconBaseProps, 'children'>;

const SquarePlaceholderBold = memo(
  forwardRef<SVGSVGElement, SquarePlaceholderBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="square-placeholder-bold" {...props}>
      <path fillRule="evenodd" d="M12.5 2.5q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58a6 6 0 0 1 2.63 2.63c.35.7.5 1.46.58 2.35q.09 1.32.07 3.37v1q.01 1.78-.05 3a8 8 0 0 1-.36 2.15q-.1.3-.24.57a6 6 0 0 1-3.2 2.87q-.95.31-2.16.36-1.2.06-2.99.05h-1q-2.05.02-3.37-.07a6 6 0 0 1-2.35-.58 6 6 0 0 1-2.63-2.63 6 6 0 0 1-.58-2.35q-.09-1.32-.07-3.37v-1q-.01-1.78.05-3 .05-1.19.36-2.15.1-.3.24-.57a6 6 0 0 1 3.2-2.87 8 8 0 0 1 2.16-.36q1.2-.06 2.99-.05zM4.54 8.78c-.04.71-.04 1.58-.04 2.72v.07l7.93 7.93h.07c1.14 0 2 0 2.72-.04zM4.5 14.4q0 .74.05 1.3c.07.76.19 1.24.38 1.6a4 4 0 0 0 1.74 1.75c.37.2.85.31 1.62.38q.55.04 1.29.05zm1.96-9.36a4 4 0 0 0-1.42 1.42l12.48 12.47a4 4 0 0 0 1.41-1.41zm5.03-.55c-1.14 0-2.01 0-2.72.04l10.68 10.68c.04-.71.04-1.58.04-2.72v-.07L11.57 4.5zm7.99 5.1q0-.75-.05-1.3a4 4 0 0 0-.38-1.62 4 4 0 0 0-1.74-1.74c-.37-.2-.85-.31-1.62-.38q-.55-.04-1.3-.05z" clipRule="evenodd" />
    </IconBase>
  ))
);

SquarePlaceholderBold.displayName = 'SquarePlaceholderBold';

// Triple export pattern (lucide-react style)
export { SquarePlaceholderBold, SquarePlaceholderBold as SquarePlaceholderBoldIcon, SquarePlaceholderBold as SiSquarePlaceholderBold };
export default SquarePlaceholderBold;
export type { SquarePlaceholderBoldProps };
