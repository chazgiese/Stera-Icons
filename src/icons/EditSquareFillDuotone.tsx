import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type EditSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const EditSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, EditSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="edit-square-fill-duotone" {...props}>
      <path fill="currentColor" d="M16 2q.5 0 .98.08L9.4 9.86l-.1.17-.03.07-1.26 5.28a.5.5 0 0 0 .58.61l5.5-1.04a.5.5 0 0 0 .27-.15l7.56-7.76Q22 7.5 22 8v8a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6V8a6 6 0 0 1 6-6z" opacity={.4} />
        <path fill="currentColor" d="M17.53 1.53a3.5 3.5 0 0 1 4.95 4.94l-8.12 8.33a.5.5 0 0 1-.27.15l-5.5 1.04a.5.5 0 0 1-.58-.6l1.26-5.3.02-.06a1 1 0 0 1 .11-.17z" />
    </IconBase>
  ))
);

EditSquareFillDuotone.displayName = 'EditSquareFillDuotone';

// Triple export pattern (lucide-react style)
export { EditSquareFillDuotone, EditSquareFillDuotone as EditSquareFillDuotoneIcon, EditSquareFillDuotone as SiEditSquareFillDuotone };
export default EditSquareFillDuotone;
export type { EditSquareFillDuotoneProps };
