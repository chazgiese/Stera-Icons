import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChecklistUncheckedFillProps = Omit<IconBaseProps, 'children'>;

const ChecklistUncheckedFill = memo(
  forwardRef<SVGSVGElement, ChecklistUncheckedFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="checklist-unchecked-fill" {...props}>
      <path fill="currentColor" d="M5 13a4 4 0 1 1 0 8 4 4 0 0 1 0-8M22 16a1 1 0 1 1 0 2H12a1 1 0 1 1 0-2zM5 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8M22 6a1 1 0 1 1 0 2H12a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

ChecklistUncheckedFill.displayName = 'ChecklistUncheckedFill';

// Triple export pattern (lucide-react style)
export { ChecklistUncheckedFill, ChecklistUncheckedFill as ChecklistUncheckedFillIcon, ChecklistUncheckedFill as SiChecklistUncheckedFill };
export type { ChecklistUncheckedFillProps };
