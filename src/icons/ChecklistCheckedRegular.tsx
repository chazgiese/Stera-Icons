import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChecklistCheckedRegularProps = Omit<IconBaseProps, 'children'>;

const ChecklistCheckedRegular = memo(
  forwardRef<SVGSVGElement, ChecklistCheckedRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="checklist-checked" {...props}>
      <path d="M6 13.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5M20 15.25a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1 0-1.5zM6 5.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5M20 7.25a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ChecklistCheckedRegular.displayName = 'ChecklistCheckedRegular';

// Triple export pattern (lucide-react style)
export { ChecklistCheckedRegular, ChecklistCheckedRegular as ChecklistCheckedRegularIcon, ChecklistCheckedRegular as SiChecklistCheckedRegular };
export default ChecklistCheckedRegular;
export type { ChecklistCheckedRegularProps };
