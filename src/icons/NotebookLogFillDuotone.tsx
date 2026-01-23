import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type NotebookLogFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const NotebookLogFillDuotone = memo(
  forwardRef<SVGSVGElement, NotebookLogFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="notebook-log-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.2 1q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v10.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H8.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57A17 17 0 0 1 3 18h2a1 1 0 1 0 0-2H3v-3h2a1 1 0 1 0 0-2H3V8h2a1 1 0 1 0 0-2H3q0-.72.04-1.25a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q7.57 1 8.8 1zM10 12a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2zm0-4a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M5 16a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM13 12a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2zM5 11a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM16 8a1 1 0 1 1 0 2h-6a1 1 0 0 1 0-2zM5 6a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

NotebookLogFillDuotone.displayName = 'NotebookLogFillDuotone';

// Triple export pattern (lucide-react style)
export { NotebookLogFillDuotone, NotebookLogFillDuotone as NotebookLogFillDuotoneIcon, NotebookLogFillDuotone as SiNotebookLogFillDuotone };
export default NotebookLogFillDuotone;
export type { NotebookLogFillDuotoneProps };
