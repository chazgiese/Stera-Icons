import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DeleteFillProps = Omit<IconBaseProps, 'children'>;

const DeleteFill = memo(
  forwardRef<SVGSVGElement, DeleteFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="delete-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17 4a5 5 0 0 1 5 5v6a5 5 0 0 1-5 5H9.06a5 5 0 0 1-4.07-2.1l-2.97-4.16a3 3 0 0 1 0-3.48l2.97-4.17A5 5 0 0 1 9.06 4zm-.8 4.8a1 1 0 0 0-1.4 0L13 10.58l-1.8-1.8a1 1 0 0 0-1.4 1.42L11.58 12l-1.8 1.8a1 1 0 0 0 1.42 1.4L13 13.42l1.8 1.8a1 1 0 0 0 1.4-1.42L14.42 12l1.8-1.8a1 1 0 0 0 0-1.4" clipRule="evenodd" />
    </IconBase>
  ))
);

DeleteFill.displayName = 'DeleteFill';

// Triple export pattern (lucide-react style)
export { DeleteFill, DeleteFill as DeleteFillIcon, DeleteFill as SiDeleteFill };
export default DeleteFill;
export type { DeleteFillProps };
