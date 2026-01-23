import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DeleteRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const DeleteRegularDuotone = memo(
  forwardRef<SVGSVGElement, DeleteRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="delete-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M18 3.25A4.75 4.75 0 0 1 22.75 8v8A4.75 4.75 0 0 1 18 20.75H9.22a4.8 4.8 0 0 1-4.03-2.23l-3.16-5.06a2.8 2.8 0 0 1 0-2.92l3.16-5.06a4.8 4.8 0 0 1 4.03-2.23zm-8.78 1.5c-1.12 0-2.17.58-2.76 1.53L3.3 11.34c-.25.4-.25.92 0 1.32l3.16 5.06c.6.95 1.64 1.53 2.76 1.53H18c1.8 0 3.25-1.46 3.25-3.25V8c0-1.8-1.45-3.25-3.25-3.25z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15.47 8.47a.75.75 0 1 1 1.06 1.06L14.06 12l2.47 2.47a.75.75 0 1 1-1.06 1.06L13 13.06l-2.47 2.47a.75.75 0 1 1-1.06-1.06L11.94 12 9.47 9.53a.75.75 0 1 1 1.06-1.06L13 10.94z" />
    </IconBase>
  ))
);

DeleteRegularDuotone.displayName = 'DeleteRegularDuotone';

// Triple export pattern (lucide-react style)
export { DeleteRegularDuotone, DeleteRegularDuotone as DeleteRegularDuotoneIcon, DeleteRegularDuotone as SiDeleteRegularDuotone };
export default DeleteRegularDuotone;
export type { DeleteRegularDuotoneProps };
