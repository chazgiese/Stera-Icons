import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type NotebookRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const NotebookRegularDuotone = memo(
  forwardRef<SVGSVGElement, NotebookRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="notebook-duotone" {...props}>
      <path d="M16 2.25q1.03-.01 1.7.04.7.03 1.28.31.92.5 1.42 1.42.28.59.31 1.28.05.67.04 1.7v10q.01 1.03-.04 1.7-.04.7-.31 1.28-.5.92-1.42 1.42-.59.28-1.28.31-.67.05-1.7.04H8.25v-1.5H16c.71 0 1.2 0 1.58-.03.37-.03.57-.09.71-.16q.5-.27.77-.77c.07-.14.13-.34.16-.7.03-.39.03-.88.03-1.59V7c0-.71 0-1.2-.03-1.58a2 2 0 0 0-.16-.71q-.27-.5-.77-.77a2 2 0 0 0-.7-.16c-.39-.03-.88-.03-1.59-.03H8.25v-1.5z" opacity={.4} />
        <path fillRule="evenodd" d="M8.25 21.75H7.5c-.87 0-1.49 0-2-.16a3.3 3.3 0 0 1-2.1-2.09c-.16-.51-.15-1.13-.15-2v-11c0-.87 0-1.49.16-2A3.3 3.3 0 0 1 5.5 2.4c.51-.16 1.13-.15 2-.15h.75zm-1.5-18c-.43.01-.63.03-.8.09-.52.17-.94.59-1.11 1.12-.08.23-.09.55-.09 1.54v11c0 .99.01 1.3.09 1.54.17.53.59.95 1.12 1.12.16.06.36.08.79.08z" clipRule="evenodd" />
        <path d="M14 12.25a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1 0-1.5zM16 8.25a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

NotebookRegularDuotone.displayName = 'NotebookRegularDuotone';

// Triple export pattern (lucide-react style)
export { NotebookRegularDuotone, NotebookRegularDuotone as NotebookRegularDuotoneIcon, NotebookRegularDuotone as SiNotebookRegularDuotone };
export default NotebookRegularDuotone;
export type { NotebookRegularDuotoneProps };
