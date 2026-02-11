import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChecklistFillProps = Omit<IconBaseProps, 'children'>;

const ChecklistFill = memo(
  forwardRef<SVGSVGElement, ChecklistFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="checklist-fill" {...props}>
      <path d="M6 13a3 3 0 1 1 0 6 3 3 0 0 1 0-6M20 15a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2zM6 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6M20 7a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

ChecklistFill.displayName = 'ChecklistFill';

// Triple export pattern (lucide-react style)
export { ChecklistFill, ChecklistFill as ChecklistFillIcon, ChecklistFill as SiChecklistFill };
export default ChecklistFill;
export type { ChecklistFillProps };
