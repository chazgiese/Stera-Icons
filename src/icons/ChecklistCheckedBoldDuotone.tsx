import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChecklistCheckedBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChecklistCheckedBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChecklistCheckedBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="checklist-checked-bold-duotone" {...props}>
      <path d="M20 15a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2zM20 7a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2z" opacity={0.4} />
        <path fill="currentColor" d="M6 13a3 3 0 1 1 0 6 3 3 0 0 1 0-6M6 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6" />
    </IconBase>
  ))
);

ChecklistCheckedBoldDuotone.displayName = 'ChecklistCheckedBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChecklistCheckedBoldDuotone, ChecklistCheckedBoldDuotone as ChecklistCheckedBoldDuotoneIcon, ChecklistCheckedBoldDuotone as SiChecklistCheckedBoldDuotone };
export default ChecklistCheckedBoldDuotone;
export type { ChecklistCheckedBoldDuotoneProps };
