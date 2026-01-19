import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type DuplicatePlusFillProps = Omit<IconBaseProps, 'children'>;

const DuplicatePlusFill = memo(
  forwardRef<SVGSVGElement, DuplicatePlusFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="duplicate-plus-fill" {...props}>
      <path fill="currentColor" d="M15.4 7q1.44-.01 2.38.05a5 5 0 0 1 1.76.44 4.5 4.5 0 0 1 1.97 1.97q.39.8.44 1.76.06.94.05 2.38v1.8q.01 1.44-.05 2.38a5 5 0 0 1-.44 1.76 4.5 4.5 0 0 1-1.97 1.97 5 5 0 0 1-1.76.44q-.94.06-2.38.05h-1.8q-1.44.01-2.38-.05a5 5 0 0 1-1.76-.44 4.5 4.5 0 0 1-1.97-1.97 5 5 0 0 1-.44-1.76q-.04-.48-.04-1.07L7 15.4v-1.8q-.01-1.44.05-2.38a5 5 0 0 1 .44-1.76 4.5 4.5 0 0 1 1.97-1.97 5 5 0 0 1 1.76-.44Q12.16 7 13.6 7zm-.9 3.5a1 1 0 0 0-1 1v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2a1 1 0 0 0-1-1" />
        <path stroke="currentColor" strokeWidth="2" d="M16 8c0-1.4 0-2.1-.2-2.66a3.5 3.5 0 0 0-2.14-2.14C13.09 3 12.4 3 11 3H8.6c-1.96 0-2.94 0-3.69.38a3.5 3.5 0 0 0-1.53 1.53C3 5.66 3 6.64 3 8.6V11c0 1.4 0 2.1.2 2.66a3.5 3.5 0 0 0 2.14 2.14c.57.2 1.26.2 2.66.2" />
    </IconBase>
  ))
);

DuplicatePlusFill.displayName = 'DuplicatePlusFill';

// Triple export pattern (lucide-react style)
export { DuplicatePlusFill, DuplicatePlusFill as DuplicatePlusFillIcon, DuplicatePlusFill as SiDuplicatePlusFill };
export default DuplicatePlusFill;
export type { DuplicatePlusFillProps };
