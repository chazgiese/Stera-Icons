import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChecklistCheckedFillProps = Omit<IconBaseProps, 'children'>;

const ChecklistCheckedFill = memo(
  forwardRef<SVGSVGElement, ChecklistCheckedFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="checklist-checked-fill" {...props}>
      <path fill="currentColor" d="M6 13a3 3 0 1 1 0 6 3 3 0 0 1 0-6M20 15a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2zM6 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6M20 7a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

ChecklistCheckedFill.displayName = 'ChecklistCheckedFill';

// Triple export pattern (lucide-react style)
export { ChecklistCheckedFill, ChecklistCheckedFill as ChecklistCheckedFillIcon, ChecklistCheckedFill as SiChecklistCheckedFill };
export default ChecklistCheckedFill;
export type { ChecklistCheckedFillProps };
