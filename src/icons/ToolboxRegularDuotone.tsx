import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ToolboxRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ToolboxRegularDuotone = memo(
  forwardRef<SVGSVGElement, ToolboxRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="toolbox-duotone" {...props}>
      <path d="M16.25 12.25v1.5h-8.5v-1.5z" opacity={0.4} />
        <path fillRule="evenodd" d="M18.8 6.25q.82 0 1.37.03.57.03 1.08.27.8.4 1.2 1.2.24.51.27 1.08.04.55.03 1.37v6.6q0 .82-.03 1.37-.03.57-.27 1.08-.4.8-1.2 1.2-.51.24-1.08.27-.55.04-1.37.03H5.2q-.82 0-1.37-.03a3 3 0 0 1-1.08-.27 2.8 2.8 0 0 1-1.2-1.2 3 3 0 0 1-.27-1.08q-.04-.55-.03-1.37v-6.6q0-.82.03-1.37.03-.57.27-1.08.4-.8 1.2-1.2.51-.24 1.08-.27.55-.04 1.37-.03zM5.2 7.75c-.57 0-.96 0-1.25.02s-.43.07-.52.12q-.35.18-.54.54c-.05.1-.1.23-.12.52s-.02.68-.02 1.25v2.05h3.5v1.5h-3.5v3.05q0 .84.02 1.25c.03.29.07.43.12.52q.18.35.54.54c.1.05.23.1.52.12s.68.02 1.25.02h13.6q.84 0 1.25-.02c.29-.03.43-.07.52-.12q.35-.18.54-.54c.05-.1.1-.23.12-.52s.02-.68.02-1.25v-3.05h-3.5v-1.5h3.5V10.2c0-.57 0-.96-.02-1.25a1 1 0 0 0-.12-.52 1.3 1.3 0 0 0-.54-.54c-.1-.05-.23-.1-.52-.12s-.68-.02-1.25-.02z" clipRule="evenodd" opacity={0.4} />
        <path fill="currentColor" d="M7 10.75c.41 0 .75.34.75.75v3a.75.75 0 0 1-1.5 0v-3c0-.41.34-.75.75-.75M17 10.75c.41 0 .75.34.75.75v3a.75.75 0 0 1-1.5 0v-3c0-.41.34-.75.75-.75M14.42 2.75a2 2 0 0 1 1.98 1.72l.25 1.78h-1.51l-.23-1.57a.5.5 0 0 0-.5-.43H9.59a.5.5 0 0 0-.5.43l-.22 1.57H7.35l.25-1.78a2 2 0 0 1 1.98-1.72z" />
    </IconBase>
  ))
);

ToolboxRegularDuotone.displayName = 'ToolboxRegularDuotone';

// Triple export pattern (lucide-react style)
export { ToolboxRegularDuotone, ToolboxRegularDuotone as ToolboxRegularDuotoneIcon, ToolboxRegularDuotone as SiToolboxRegularDuotone };
export default ToolboxRegularDuotone;
export type { ToolboxRegularDuotoneProps };
