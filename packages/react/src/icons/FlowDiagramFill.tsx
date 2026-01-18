import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowDiagramFillProps = Omit<IconBaseProps, 'children'>;

const FlowDiagramFill = memo(
  forwardRef<SVGSVGElement, FlowDiagramFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M9.03 1.01A2.2 2.2 0 0 1 10.99 3H17a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-1.09l-3.2 3.2a1 1 0 0 1-1.42 0L8.1 13H7a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6.01a2.2 2.2 0 0 1 2.19-2h3.6l.23.01A2.2 2.2 0 0 1 21 19.2v1.6a2.2 2.2 0 0 1-2.2 2.2h-3.6a2.2 2.2 0 0 1-2.19-2H7a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h1.09l3.2-3.2a1 1 0 0 1 1.42 0l3.2 3.2H17a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-6.01A2.2 2.2 0 0 1 8.8 7H5.2A2.2 2.2 0 0 1 3 4.8V3.2C3 1.99 3.99 1 5.2 1h3.6zM9.9 12 12 14.09 14.09 12 12 9.91z" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowDiagramFill.displayName = 'FlowDiagramFill';

export { FlowDiagramFill };
export type { FlowDiagramFillProps };
