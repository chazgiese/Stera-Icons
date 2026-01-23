import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BellOffRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BellOffRegularDuotone = memo(
  forwardRef<SVGSVGElement, BellOffRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="bell-off-duotone" {...props}>
      <path fillRule="evenodd" d="M3.43 8.25a.75.75 0 1 1 1.46.3q-.14.7-.14 1.45v2.45q0 .76-.4 1.41l-.89 1.5c-.5.83.1 1.89 1.07 1.89h9.21q.32 0 .53.22l1.83 1.82c.23.22.28.58.13.87a4.75 4.75 0 0 1-8.92-1.41H4.53a2.75 2.75 0 0 1-2.36-4.16l.9-1.5q.18-.3.18-.64V10q0-.9.18-1.75m5.4 10.5a3.25 3.25 0 0 0 5.78 1.18l-1.17-1.18z" clipRule="evenodd" opacity={0.4} />
        <path d="M12 1.25A8.75 8.75 0 0 1 20.75 10v2.45q0 .34.18.64l.9 1.5c.54.9.49 1.94.04 2.74a.75.75 0 0 1-1.3-.72c.2-.38.22-.84-.03-1.25l-.9-1.5q-.38-.66-.39-1.41V10A7.25 7.25 0 0 0 7.99 3.96a.75.75 0 0 1-.83-1.25A8.7 8.7 0 0 1 12 1.25" opacity={0.4} />
        <path fill="currentColor" d="M2.47 2.47c.3-.3.77-.3 1.06 0l18 18a.75.75 0 1 1-1.06 1.06l-18-18a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

BellOffRegularDuotone.displayName = 'BellOffRegularDuotone';

// Triple export pattern (lucide-react style)
export { BellOffRegularDuotone, BellOffRegularDuotone as BellOffRegularDuotoneIcon, BellOffRegularDuotone as SiBellOffRegularDuotone };
export default BellOffRegularDuotone;
export type { BellOffRegularDuotoneProps };
