import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ToolsRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ToolsRegularDuotone = memo(
  forwardRef<SVGSVGElement, ToolsRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="tools-duotone" {...props}>
      <path d="m8.84 12.85-4.61 4.6a1.64 1.64 0 0 0 2.32 2.32l4.6-4.6.82.82q-.04.26-.06.54l-4.3 4.3a3.14 3.14 0 0 1-4.44-4.44l4.3-4.3q.28-.01.54-.06zM19.88 2.3c.28-.1.6-.04.8.17l.85.84c.24.25.29.62.11.92l-1.26 2.11a.75.75 0 0 1-1.18.14l-.31-.31-4.35 4.35-1.06-1.06 4.35-4.35-.31-.31a.75.75 0 0 1 .14-1.18l2.11-1.26z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M5.9 2.42a4.92 4.92 0 0 1 6.13 5.6l3.96 3.95a4.92 4.92 0 0 1 5.6 6.13.75.75 0 0 1-1.26.34L19.1 17.2h-1.9v1.9l1.24 1.23a.75.75 0 0 1-.34 1.25 4.92 4.92 0 0 1-6.13-5.6l-3.96-3.95a4.92 4.92 0 0 1-5.6-6.13l.04-.1a.75.75 0 0 1 1.22-.24L4.9 6.8h1.9V4.9L5.55 3.67a.75.75 0 0 1 .34-1.25m2.18 1.64q.21.22.21.53v2.95c0 .42-.33.75-.75.75H4.6a.8.8 0 0 1-.53-.21l-.25-.25a3.4 3.4 0 0 0 4.25 2.66l.1-.02q.36-.05.63.21l4.53 4.53c.19.2.26.47.2.73a3.4 3.4 0 0 0 2.65 4.25l-.25-.25a.8.8 0 0 1-.21-.53v-2.96c0-.4.33-.74.75-.74h2.95l.14.01q.23.05.39.2l.25.25a3.4 3.4 0 0 0-4.25-2.66.8.8 0 0 1-.73-.19l-4.53-4.53a.8.8 0 0 1-.2-.73 3.4 3.4 0 0 0-2.65-4.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

ToolsRegularDuotone.displayName = 'ToolsRegularDuotone';

// Triple export pattern (lucide-react style)
export { ToolsRegularDuotone, ToolsRegularDuotone as ToolsRegularDuotoneIcon, ToolsRegularDuotone as SiToolsRegularDuotone };
export default ToolsRegularDuotone;
export type { ToolsRegularDuotoneProps };
