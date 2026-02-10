import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChecklistCheckedRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChecklistCheckedRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChecklistCheckedRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="checklist-checked-duotone" {...props}>
      <path d="M20 15.25a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1 0-1.5zM20 7.25a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1 0-1.5z" opacity={0.4} />
        <path fill="currentColor" d="M6 13.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5M6 5.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5" />
    </IconBase>
  ))
);

ChecklistCheckedRegularDuotone.displayName = 'ChecklistCheckedRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChecklistCheckedRegularDuotone, ChecklistCheckedRegularDuotone as ChecklistCheckedRegularDuotoneIcon, ChecklistCheckedRegularDuotone as SiChecklistCheckedRegularDuotone };
export default ChecklistCheckedRegularDuotone;
export type { ChecklistCheckedRegularDuotoneProps };
