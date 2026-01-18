import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ToolsRegularProps = Omit<IconBaseProps, 'children'>;

const ToolsRegular = memo(
  forwardRef<SVGSVGElement, ToolsRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M5.9 2.42a4.92 4.92 0 0 1 6.13 5.6l1.45 1.44 4.35-4.35-.31-.31a.75.75 0 0 1 .14-1.18l2.11-1.26.11-.06a.8.8 0 0 1 .8.17l.85.84c.24.25.29.62.11.92l-1.26 2.11a.7.7 0 0 1-.37.3.8.8 0 0 1-.8-.16l-.32-.3-4.35 4.34 1.45 1.45a4.92 4.92 0 0 1 5.6 6.13.75.75 0 0 1-1.26.34L19.1 17.2h-1.9v1.89l1.24 1.23a.75.75 0 0 1-.34 1.25 4.92 4.92 0 0 1-6.2-5.05l-4.3 4.3a3.14 3.14 0 0 1-4.43-4.44l4.3-4.3A4.9 4.9 0 0 1 2.42 5.9l.03-.1a.75.75 0 0 1 1.22-.24L4.9 6.8h1.9V4.9L5.55 3.67a.75.75 0 0 1 .34-1.25M4.23 17.46a1.64 1.64 0 0 0 2.31 2.31l4.61-4.6-2.31-2.32zm3.85-13.4q.21.22.21.53v2.95c0 .42-.33.75-.75.75H4.6a.8.8 0 0 1-.53-.21l-.25-.25a3.4 3.4 0 0 0 4.25 2.66l.1-.02q.36-.05.63.21l4.53 4.53q.29.32.2.73a3.4 3.4 0 0 0 2.65 4.25l-.25-.25a.8.8 0 0 1-.21-.53v-2.95c0-.42.33-.75.75-.75h2.95l.14.01q.23.05.39.2l.25.25a3.4 3.4 0 0 0-4.25-2.66.8.8 0 0 1-.73-.19l-4.53-4.53a.8.8 0 0 1-.2-.73 3.4 3.4 0 0 0-2.65-4.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

ToolsRegular.displayName = 'ToolsRegular';

// Triple export pattern (lucide-react style)
export { ToolsRegular, ToolsRegular as ToolsRegularIcon, ToolsRegular as SiToolsRegular };
export type { ToolsRegularProps };
