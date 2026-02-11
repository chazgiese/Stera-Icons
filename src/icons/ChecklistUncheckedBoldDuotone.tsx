import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChecklistUncheckedBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChecklistUncheckedBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChecklistUncheckedBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="checklist-unchecked-bold-duotone" {...props}>
      <path d="M20 15a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2zM20 7a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2z" opacity={0.4} />
        <path fillRule="evenodd" d="M6 13a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2M6 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2" clipRule="evenodd" />
    </IconBase>
  ))
);

ChecklistUncheckedBoldDuotone.displayName = 'ChecklistUncheckedBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChecklistUncheckedBoldDuotone, ChecklistUncheckedBoldDuotone as ChecklistUncheckedBoldDuotoneIcon, ChecklistUncheckedBoldDuotone as SiChecklistUncheckedBoldDuotone };
export default ChecklistUncheckedBoldDuotone;
export type { ChecklistUncheckedBoldDuotoneProps };
