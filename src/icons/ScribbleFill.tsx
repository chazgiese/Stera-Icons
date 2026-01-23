import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScribbleFillProps = Omit<IconBaseProps, 'children'>;

const ScribbleFill = memo(
  forwardRef<SVGSVGElement, ScribbleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="scribble-fill" {...props}>
      <path fill="currentColor" d="M9.41 1.54a1.5 1.5 0 0 1 1.66.68 1.6 1.6 0 0 1 .21 1.07c-.04.27-.15.54-.22.7-.17.41-.5 1.07-1.04 2.12l-.98 1.88q1.4-1.17 2.37-1.86.7-.5 1.19-.78.43-.27.84-.44l.14-.04a1.53 1.53 0 0 1 1.88 1.63c-.02.24-.1.46-.12.54q-.13.34-.33.78l-1.1 2.24c-.41.82-.84 2.32-1.32 4.4l4.81-6.01a30 30 0 0 1 1.85-2.15q.3-.3.63-.54c.21-.14.56-.33 1.02-.35h.18a1.5 1.5 0 0 1 1.2.77c.2.35.22.69.22.8 0 .28-.05.57-.1.79-.12.49-.35 1.26-.77 2.48-.81 2.4-2.31 6.47-3.1 8.82q.12.09.21.21a1.5 1.5 0 0 1-.2 2.11q-.41.36-.88.71l-.2.14c-.08.04-.31.19-.64.24A1.57 1.57 0 0 1 15 20.91c-.01-.34.07-.7.14-1a22 22 0 0 1 .41-1.37c.41-1.27 1.14-3.31 1.84-5.27l-3.26 4.04q-1.15 1.42-1.8 2.06-.32.33-.73.6a1.8 1.8 0 0 1-1.57.18c-.72-.27-.97-.9-1.06-1.18a3 3 0 0 1-.1-.88q.02-.8.26-1.86c.44-2.1.87-4.02 1.34-5.52l-.8.71c-.78.69-1.74 1.6-2.43 2.16q-.29.22-.57.4c-.17.11-.45.27-.78.35-.31.08-1.18.17-1.75-.62a2 2 0 0 1-.3-1.39c.08-.49.32-1.1.55-1.64q.39-.92.93-1.99.46-.94.96-1.9A59 59 0 0 0 3.9 8.5 1.5 1.5 0 1 1 2.09 6.1a68 68 0 0 1 5.72-3.83c.5-.29 1.12-.61 1.6-.73" />
    </IconBase>
  ))
);

ScribbleFill.displayName = 'ScribbleFill';

// Triple export pattern (lucide-react style)
export { ScribbleFill, ScribbleFill as ScribbleFillIcon, ScribbleFill as SiScribbleFill };
export default ScribbleFill;
export type { ScribbleFillProps };
