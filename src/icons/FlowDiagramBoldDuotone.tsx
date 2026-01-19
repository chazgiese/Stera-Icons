import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowDiagramBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowDiagramBoldDuotone = memo(
  forwardRef<SVGSVGElement, FlowDiagramBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-diagram-bold-duotone" {...props}>
      <path d="M7.8 11.3a1 1 0 0 0 0 1.4l.29.3H7a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6.01l-.01.2v1.6l.01.2H7a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h1.09zM17 3a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-1.09l.3-.3a1 1 0 0 0 0-1.4l-.3-.3H17a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-6.01l.01-.2V3z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M19.03 17.01A2.2 2.2 0 0 1 21 19.2v1.6a2.2 2.2 0 0 1-2.2 2.2h-3.6a2.2 2.2 0 0 1-2.2-2.2v-1.6c0-1.21.99-2.2 2.2-2.2h3.6zM15.2 19a.2.2 0 0 0-.2.2v1.6q.02.18.2.2h3.6a.2.2 0 0 0 .2-.2v-1.6a.2.2 0 0 0-.16-.2H15.2M11.3 7.8a1 1 0 0 1 1.4 0l3.5 3.5a1 1 0 0 1 0 1.4l-3.5 3.5a1 1 0 0 1-1.4 0l-3.5-3.5a1 1 0 0 1 0-1.4zM9.9 12 12 14.09 14.09 12 12 9.91zM9.03 1.01A2.2 2.2 0 0 1 11 3.2v1.6A2.2 2.2 0 0 1 8.8 7H5.2A2.2 2.2 0 0 1 3 4.8V3.2C3 1.99 3.99 1 5.2 1h3.6zM5.2 3a.2.2 0 0 0-.2.2v1.6q.02.18.2.2h3.6a.2.2 0 0 0 .2-.2V3.2a.2.2 0 0 0-.16-.2H5.2" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowDiagramBoldDuotone.displayName = 'FlowDiagramBoldDuotone';

// Triple export pattern (lucide-react style)
export { FlowDiagramBoldDuotone, FlowDiagramBoldDuotone as FlowDiagramBoldDuotoneIcon, FlowDiagramBoldDuotone as SiFlowDiagramBoldDuotone };
export default FlowDiagramBoldDuotone;
export type { FlowDiagramBoldDuotoneProps };
