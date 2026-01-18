import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FastForwardBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FastForwardBoldDuotone = memo(
  forwardRef<SVGSVGElement, FastForwardBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13.98 5.77c.37 0 .7.13.94.25q.45.22 1.02.58l5.29 3.17q.55.32.94.6c.25.18.55.44.72.83a2 2 0 0 1 0 1.6c-.17.4-.47.65-.72.83q-.39.28-.94.6l-5.3 3.17q-.57.36-1 .58a2 2 0 0 1-1.12.25 2 2 0 0 1-1.42-.81 2 2 0 0 1-.36-1.08L12 15.8V8.83q0-.68.03-1.17c.03-.31.1-.72.36-1.08a2 2 0 0 1 1.42-.8zm.04 2.07c-.02.21-.02.5-.02.99v6.94l.02.39v.03l.04-.01c.18-.1.44-.24.85-.5l5.29-3.17c.4-.23.63-.37.79-.49L21 12l-.02-.02c-.16-.12-.4-.26-.8-.5l-5.28-3.17q-.6-.37-.85-.49h-.04z" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="M2.98 5.77c.37 0 .7.13.94.25q.45.22 1.02.58l5.29 3.17q.55.32.94.6c.25.18.55.44.72.83a2 2 0 0 1 0 1.6c-.17.4-.47.65-.72.83q-.39.28-.94.6l-5.3 3.17q-.57.36-1 .58a2 2 0 0 1-1.12.25 2 2 0 0 1-1.42-.81 2 2 0 0 1-.36-1.08q-.04-.49-.03-1.17V8.83q0-.68.03-1.17c.03-.31.1-.72.36-1.08a2 2 0 0 1 1.42-.8zm.04 2.07c-.02.21-.02.5-.02.99v6.34c0 .49 0 .78.02.99v.03l.04-.01c.18-.1.44-.24.85-.5l5.29-3.17c.4-.23.63-.37.79-.49L10 12l-.02-.02q-.22-.16-.8-.5L3.92 8.32q-.6-.37-.85-.49h-.04z" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

FastForwardBoldDuotone.displayName = 'FastForwardBoldDuotone';

// Triple export pattern (lucide-react style)
export { FastForwardBoldDuotone, FastForwardBoldDuotone as FastForwardBoldDuotoneIcon, FastForwardBoldDuotone as SiFastForwardBoldDuotone };
export type { FastForwardBoldDuotoneProps };
