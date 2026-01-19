import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChecklistUncheckedBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChecklistUncheckedBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChecklistUncheckedBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="checklist-unchecked-bold-duotone" {...props}>
      <path d="M22 16a1 1 0 1 1 0 2H12a1 1 0 1 1 0-2zM22 6a1 1 0 1 1 0 2H12a1 1 0 1 1 0-2z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M5 13a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4M5 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clipRule="evenodd" />
    </IconBase>
  ))
);

ChecklistUncheckedBoldDuotone.displayName = 'ChecklistUncheckedBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChecklistUncheckedBoldDuotone, ChecklistUncheckedBoldDuotone as ChecklistUncheckedBoldDuotoneIcon, ChecklistUncheckedBoldDuotone as SiChecklistUncheckedBoldDuotone };
export type { ChecklistUncheckedBoldDuotoneProps };
