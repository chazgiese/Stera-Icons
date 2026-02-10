import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChecklistCheckedFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChecklistCheckedFillDuotone = memo(
  forwardRef<SVGSVGElement, ChecklistCheckedFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="checklist-checked-fill-duotone" {...props}>
      <path d="M20 15a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2zM20 7a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2z" opacity={0.4} />
        <path fill="currentColor" d="M6 13a3 3 0 1 1 0 6 3 3 0 0 1 0-6M6 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6" />
    </IconBase>
  ))
);

ChecklistCheckedFillDuotone.displayName = 'ChecklistCheckedFillDuotone';

// Triple export pattern (lucide-react style)
export { ChecklistCheckedFillDuotone, ChecklistCheckedFillDuotone as ChecklistCheckedFillDuotoneIcon, ChecklistCheckedFillDuotone as SiChecklistCheckedFillDuotone };
export default ChecklistCheckedFillDuotone;
export type { ChecklistCheckedFillDuotoneProps };
