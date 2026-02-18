import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CheckSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CheckSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, CheckSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="check-square-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12.5 2.63c1.39 0 2.48 0 3.36.07s1.63.22 2.3.57c1.11.56 2.01 1.46 2.57 2.56.35.68.5 1.43.57 2.31.08.88.07 1.97.07 3.36v1c0 1.39 0 2.48-.07 3.36a6 6 0 0 1-.57 2.3c-.56 1.11-1.46 2.01-2.56 2.57-.68.35-1.43.5-2.31.57-.88.08-1.97.07-3.36.07h-1c-1.39 0-2.48 0-3.36-.07a6 6 0 0 1-2.3-.57c-1.11-.56-2.01-1.46-2.57-2.56a6 6 0 0 1-.57-2.31c-.08-.88-.08-1.97-.08-3.36v-1c0-1.39 0-2.48.08-3.36s.22-1.63.57-2.3c.56-1.11 1.46-2.01 2.56-2.57.68-.35 1.43-.5 2.31-.57.88-.08 1.97-.08 3.36-.08zm4.1 5.98a.87.87 0 0 0-1.24.05l-4.83 5.26-1.86-2.23a.88.88 0 0 0-1.34 1.12l1.91 2.3.3.33c.1.1.26.25.49.34q.46.16.92.02c.23-.08.4-.21.5-.31l.31-.32 4.88-5.33c.33-.35.3-.9-.05-1.23" clipRule="evenodd" opacity={.4} />
        <path d="M15.36 8.66a.87.87 0 1 1 1.28 1.18l-4.88 5.33-.3.32a1.38 1.38 0 0 1-1.43.29 1.4 1.4 0 0 1-.5-.34l-.29-.33-1.91-2.3a.88.88 0 0 1 1.34-1.12l1.86 2.23z" />
    </IconBase>
  ))
);

CheckSquareFillDuotone.displayName = 'CheckSquareFillDuotone';

// Triple export pattern (lucide-react style)
export { CheckSquareFillDuotone, CheckSquareFillDuotone as CheckSquareFillDuotoneIcon, CheckSquareFillDuotone as SiCheckSquareFillDuotone };
export default CheckSquareFillDuotone;
export type { CheckSquareFillDuotoneProps };
