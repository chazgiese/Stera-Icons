import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type DuplicatePlusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const DuplicatePlusFillDuotone = memo(
  forwardRef<SVGSVGElement, DuplicatePlusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="duplicate-plus-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.4 7q1.44-.01 2.38.05a5 5 0 0 1 1.76.44 4.5 4.5 0 0 1 1.97 1.97q.39.8.44 1.76.06.94.05 2.38v1.8q.01 1.44-.05 2.38a5 5 0 0 1-.44 1.76 4.5 4.5 0 0 1-1.97 1.97 5 5 0 0 1-1.76.44q-.94.06-2.38.05h-1.8q-1.44.01-2.38-.05a5 5 0 0 1-1.76-.44 4.5 4.5 0 0 1-1.97-1.97 5 5 0 0 1-.44-1.76q-.04-.48-.04-1.07L7 15.4v-1.8q-.01-1.44.05-2.38a5 5 0 0 1 .44-1.76 4.5 4.5 0 0 1 1.97-1.97 5 5 0 0 1 1.76-.44Q12.16 7 13.6 7zm-.9 3.5a1 1 0 0 0-1 1v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2a1 1 0 0 0-1-1" clipRule="evenodd" />
        <path fill="currentColor" d="M10.4 2q1.44-.01 2.38.05a5 5 0 0 1 1.76.44 4.5 4.5 0 0 1 1.97 1.97q.39.8.44 1.76l.04.8Q16.29 7 15.4 7h-1.8q-1.44-.01-2.38.05a5 5 0 0 0-1.76.44 4.5 4.5 0 0 0-1.97 1.97 5 5 0 0 0-.44 1.76Q7 12.16 7 13.6v3.11l.01.28-.79-.04a5 5 0 0 1-1.76-.44 4.5 4.5 0 0 1-1.97-1.97 5 5 0 0 1-.44-1.76q-.04-.48-.04-1.07L2 10.4V8.6q-.01-1.44.05-2.38a5 5 0 0 1 .44-1.76 4.5 4.5 0 0 1 1.97-1.97 5 5 0 0 1 1.76-.44Q7.16 2 8.6 2z" opacity={.4} />
    </IconBase>
  ))
);

DuplicatePlusFillDuotone.displayName = 'DuplicatePlusFillDuotone';

// Triple export pattern (lucide-react style)
export { DuplicatePlusFillDuotone, DuplicatePlusFillDuotone as DuplicatePlusFillDuotoneIcon, DuplicatePlusFillDuotone as SiDuplicatePlusFillDuotone };
export type { DuplicatePlusFillDuotoneProps };
