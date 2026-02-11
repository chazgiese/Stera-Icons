import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChecklistUncheckedRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChecklistUncheckedRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChecklistUncheckedRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="checklist-unchecked-duotone" {...props}>
      <path d="M20 15.25a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1 0-1.5zM20 7.25a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1 0-1.5z" opacity={0.4} />
        <path fillRule="evenodd" d="M6 13.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5m0 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M6 5.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5m0 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5" clipRule="evenodd" />
    </IconBase>
  ))
);

ChecklistUncheckedRegularDuotone.displayName = 'ChecklistUncheckedRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChecklistUncheckedRegularDuotone, ChecklistUncheckedRegularDuotone as ChecklistUncheckedRegularDuotoneIcon, ChecklistUncheckedRegularDuotone as SiChecklistUncheckedRegularDuotone };
export default ChecklistUncheckedRegularDuotone;
export type { ChecklistUncheckedRegularDuotoneProps };
