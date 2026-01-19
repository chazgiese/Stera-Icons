import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChecklistRegularProps = Omit<IconBaseProps, 'children'>;

const ChecklistRegular = memo(
  forwardRef<SVGSVGElement, ChecklistRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="checklist" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M5 3.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m1.78 2.08a.5.5 0 0 0-.7.14L4.51 7.84H4.5l-.58-.87a.5.5 0 1 0-.84.56l.58.86q.1.16.2.28c.06.08.17.2.33.26q.31.13.62 0a1 1 0 0 0 .33-.26q.1-.12.2-.28l1.58-2.36a.5.5 0 0 0-.14-.7M5 13.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" clipRule="evenodd" />
        <path fill="currentColor" d="M22 16.25a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1 0-1.5zM22 6.25a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ChecklistRegular.displayName = 'ChecklistRegular';

// Triple export pattern (lucide-react style)
export { ChecklistRegular, ChecklistRegular as ChecklistRegularIcon, ChecklistRegular as SiChecklistRegular };
export type { ChecklistRegularProps };
