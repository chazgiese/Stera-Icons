import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type NotebookRegularProps = Omit<IconBaseProps, 'children'>;

const NotebookRegular = memo(
  forwardRef<SVGSVGElement, NotebookRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="notebook" {...props}>
      <path fill="currentColor" d="M14 12.25a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1 0-1.5zM16 8.25a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5z" />
        <path fill="currentColor" fillRule="evenodd" d="M16 2.25q1.03-.01 1.7.04.7.03 1.28.31.92.5 1.42 1.42.28.59.31 1.28.05.67.04 1.7v10q.01 1.03-.04 1.7-.04.7-.31 1.28-.5.92-1.42 1.42-.59.28-1.28.31-.67.05-1.7.04H8q-1.03.01-1.7-.04a3 3 0 0 1-1.28-.31c-.6-.32-1.1-.81-1.42-1.42q-.28-.59-.31-1.28-.05-.67-.04-1.7V7q-.01-1.03.04-1.7.03-.7.31-1.28c.32-.6.81-1.1 1.42-1.42q.59-.28 1.28-.31.67-.05 1.7-.04zm-7.75 18H16c.71 0 1.2 0 1.58-.03.37-.03.57-.09.71-.16q.5-.27.77-.77c.07-.14.13-.34.16-.7.03-.39.03-.88.03-1.59V7c0-.71 0-1.2-.03-1.58a2 2 0 0 0-.16-.71q-.27-.5-.77-.77a2 2 0 0 0-.7-.16c-.39-.03-.88-.03-1.59-.03H8.25zM6.75 3.76l-.33.02c-.37.03-.57.09-.71.16q-.5.26-.77.77c-.07.14-.13.34-.16.7-.03.39-.03.88-.03 1.59v10c0 .71 0 1.2.03 1.58.03.37.09.57.16.71q.26.5.77.77c.14.07.34.13.7.16l.34.02z" clipRule="evenodd" />
    </IconBase>
  ))
);

NotebookRegular.displayName = 'NotebookRegular';

// Triple export pattern (lucide-react style)
export { NotebookRegular, NotebookRegular as NotebookRegularIcon, NotebookRegular as SiNotebookRegular };
export type { NotebookRegularProps };
