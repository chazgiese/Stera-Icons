import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChecklistUncheckedFillProps = Omit<IconBaseProps, 'children'>;

const ChecklistUncheckedFill = memo(
  forwardRef<SVGSVGElement, ChecklistUncheckedFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="checklist-unchecked-fill" {...props}>
      <path fill="currentColor" d="M6 13a3 3 0 1 1 0 6 3 3 0 0 1 0-6M20 15a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2zM6 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6M20 7a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

ChecklistUncheckedFill.displayName = 'ChecklistUncheckedFill';

// Triple export pattern (lucide-react style)
export { ChecklistUncheckedFill, ChecklistUncheckedFill as ChecklistUncheckedFillIcon, ChecklistUncheckedFill as SiChecklistUncheckedFill };
export default ChecklistUncheckedFill;
export type { ChecklistUncheckedFillProps };
