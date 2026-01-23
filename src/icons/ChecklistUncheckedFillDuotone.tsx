import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChecklistUncheckedFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChecklistUncheckedFillDuotone = memo(
  forwardRef<SVGSVGElement, ChecklistUncheckedFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="checklist-unchecked-fill-duotone" {...props}>
      <path d="M22 16a1 1 0 1 1 0 2H12a1 1 0 1 1 0-2zM22 6a1 1 0 1 1 0 2H12a1 1 0 1 1 0-2z" opacity={0.4} />
        <path fill="currentColor" d="M5 13a4 4 0 1 1 0 8 4 4 0 0 1 0-8M5 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8" />
    </IconBase>
  ))
);

ChecklistUncheckedFillDuotone.displayName = 'ChecklistUncheckedFillDuotone';

// Triple export pattern (lucide-react style)
export { ChecklistUncheckedFillDuotone, ChecklistUncheckedFillDuotone as ChecklistUncheckedFillDuotoneIcon, ChecklistUncheckedFillDuotone as SiChecklistUncheckedFillDuotone };
export default ChecklistUncheckedFillDuotone;
export type { ChecklistUncheckedFillDuotoneProps };
