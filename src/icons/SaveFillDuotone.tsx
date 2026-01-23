import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SaveFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SaveFillDuotone = memo(
  forwardRef<SVGSVGElement, SaveFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="save-fill-duotone" {...props}>
      <path fill="currentColor" d="M14.6 2q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v5.2q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06H9.4q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q1.99 16.25 2 14.6V9.4q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48Q7.75 1.99 9.4 2H11v11.09l-3.3-3.3a1 1 0 0 0-1.4 1.42l5 5a1 1 0 0 0 1.4 0l5-5a1 1 0 0 0-1.4-1.42L13 13.1V2z" opacity={.4} />
        <path fill="currentColor" d="m13 13.09 3.3-3.3a1 1 0 0 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 1 1 1.4-1.42l3.3 3.3V2h2z" />
    </IconBase>
  ))
);

SaveFillDuotone.displayName = 'SaveFillDuotone';

// Triple export pattern (lucide-react style)
export { SaveFillDuotone, SaveFillDuotone as SaveFillDuotoneIcon, SaveFillDuotone as SiSaveFillDuotone };
export default SaveFillDuotone;
export type { SaveFillDuotoneProps };
