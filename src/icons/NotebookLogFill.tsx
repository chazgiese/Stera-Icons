import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type NotebookLogFillProps = Omit<IconBaseProps, 'children'>;

const NotebookLogFill = memo(
  forwardRef<SVGSVGElement, NotebookLogFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="notebook-log-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.2 2q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v8.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H9.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57l-.03-.75H5a1 1 0 1 0 0-2H4V13h1a1 1 0 1 0 0-2H4V8.5h1a1 1 0 1 0 0-2h-.99q0-.4.03-.75a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q8.57 2 9.8 2zM9.5 12.13a.88.88 0 0 0 0 1.74H12a.87.87 0 1 0 0-1.74zm0-4a.88.88 0 0 0 0 1.74h5a.88.88 0 0 0 0-1.74z" clipRule="evenodd" />
        <path fill="currentColor" d="M4 17.5H3a1 1 0 1 1 0-2h1zM4 13H3a1 1 0 1 1 0-2h1zM4 8.5H3a1 1 0 1 1 0-2h1z" />
    </IconBase>
  ))
);

NotebookLogFill.displayName = 'NotebookLogFill';

// Triple export pattern (lucide-react style)
export { NotebookLogFill, NotebookLogFill as NotebookLogFillIcon, NotebookLogFill as SiNotebookLogFill };
export default NotebookLogFill;
export type { NotebookLogFillProps };
