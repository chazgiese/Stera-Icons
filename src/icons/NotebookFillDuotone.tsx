import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type NotebookFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const NotebookFillDuotone = memo(
  forwardRef<SVGSVGElement, NotebookFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="notebook-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16 2q1.02-.01 1.72.04c.48.04.94.12 1.37.34.66.34 1.2.87 1.53 1.53.22.43.3.89.34 1.37q.05.7.04 1.72v10q.01 1.02-.04 1.72c-.04.48-.12.94-.34 1.37a3.5 3.5 0 0 1-1.53 1.53c-.43.22-.89.3-1.37.34q-.7.05-1.72.04H7.5V2H16m-4.5 10a1 1 0 1 0 0 2H14a1 1 0 1 0 0-2zm0-4a1 1 0 1 0 0 2H16a1 1 0 1 0 0-2z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M7.5 22h-1A3.5 3.5 0 0 1 3 18.5v-13A3.5 3.5 0 0 1 6.5 2h1zM14 12a1 1 0 1 1 0 2h-2.5a1 1 0 1 1 0-2zM16 8a1 1 0 1 1 0 2h-4.5a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

NotebookFillDuotone.displayName = 'NotebookFillDuotone';

// Triple export pattern (lucide-react style)
export { NotebookFillDuotone, NotebookFillDuotone as NotebookFillDuotoneIcon, NotebookFillDuotone as SiNotebookFillDuotone };
export default NotebookFillDuotone;
export type { NotebookFillDuotoneProps };
