import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DeleteRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const DeleteRegularDuotone = memo(
  forwardRef<SVGSVGElement, DeleteRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="delete-duotone" {...props}>
      <path fillRule="evenodd" d="M17 4.25A4.75 4.75 0 0 1 21.75 9v6A4.75 4.75 0 0 1 17 19.75H9.06a4.8 4.8 0 0 1-3.87-1.99L2.22 13.6a2.75 2.75 0 0 1 0-3.2l2.97-4.16a4.8 4.8 0 0 1 3.87-1.99zm-7.94 1.5c-1.05 0-2.04.5-2.65 1.36l-2.97 4.16a1.25 1.25 0 0 0 0 1.46l2.97 4.16c.61.85 1.6 1.36 2.65 1.36H17c1.8 0 3.25-1.46 3.25-3.25V9c0-1.8-1.45-3.25-3.25-3.25z" clipRule="evenodd" opacity={.4} />
        <path d="M14.97 8.97a.75.75 0 1 1 1.06 1.06L14.06 12l1.97 1.97a.75.75 0 1 1-1.06 1.06L13 13.06l-1.97 1.97a.75.75 0 1 1-1.06-1.06L11.94 12l-1.97-1.97a.75.75 0 1 1 1.06-1.06L13 10.94z" />
    </IconBase>
  ))
);

DeleteRegularDuotone.displayName = 'DeleteRegularDuotone';

// Triple export pattern (lucide-react style)
export { DeleteRegularDuotone, DeleteRegularDuotone as DeleteRegularDuotoneIcon, DeleteRegularDuotone as SiDeleteRegularDuotone };
export default DeleteRegularDuotone;
export type { DeleteRegularDuotoneProps };
