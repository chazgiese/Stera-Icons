import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChecklistFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChecklistFillDuotone = memo(
  forwardRef<SVGSVGElement, ChecklistFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="checklist-fill-duotone" {...props}>
      <path d="M6 15a1 1 0 1 1 0 2 1 1 0 0 1 0-2M20 15a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2zM20 7a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M6 13a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2" clipRule="evenodd" />
        <path fill="currentColor" d="M6 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6" />
    </IconBase>
  ))
);

ChecklistFillDuotone.displayName = 'ChecklistFillDuotone';

// Triple export pattern (lucide-react style)
export { ChecklistFillDuotone, ChecklistFillDuotone as ChecklistFillDuotoneIcon, ChecklistFillDuotone as SiChecklistFillDuotone };
export default ChecklistFillDuotone;
export type { ChecklistFillDuotoneProps };
