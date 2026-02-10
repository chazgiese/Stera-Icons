import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type NotebookLogFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const NotebookLogFillDuotone = memo(
  forwardRef<SVGSVGElement, NotebookLogFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="notebook-log-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.2 2q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v8.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H9.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57l-.03-.75H5.5a1 1 0 1 0 0-2H4V13h1.5a1 1 0 1 0 0-2H4V8.5h1.5a1 1 0 1 0 0-2H4.01q0-.4.03-.75a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q8.57 2 9.8 2zM10 12a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2zm0-4a1 1 0 0 0 0 2h5.5a1 1 0 1 0 0-2z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M5.5 15.5a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2zM13 12a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2zM5.5 11a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2zM15.5 8a1 1 0 1 1 0 2H10a1 1 0 0 1 0-2zM5.5 6.5a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

NotebookLogFillDuotone.displayName = 'NotebookLogFillDuotone';

// Triple export pattern (lucide-react style)
export { NotebookLogFillDuotone, NotebookLogFillDuotone as NotebookLogFillDuotoneIcon, NotebookLogFillDuotone as SiNotebookLogFillDuotone };
export default NotebookLogFillDuotone;
export type { NotebookLogFillDuotoneProps };
