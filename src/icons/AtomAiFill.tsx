import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AtomAiFillProps = Omit<IconBaseProps, 'children'>;

const AtomAiFill = memo(
  forwardRef<SVGSVGElement, AtomAiFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="atom-ai-fill" {...props}>
      <path fill="currentColor" d="M7.87 8.31a1.5 1.5 0 0 1 2.14 2.1 27 27 0 0 0-4.65 6.26A8 8 0 0 0 4.53 19a2 2 0 0 0-.02.5c.1.01.28.03.63-.04a10 10 0 0 0 2.62-1.03 1.5 1.5 0 0 1 1.43 2.63 12 12 0 0 1-3.51 1.35c-1.03.2-2.36.18-3.31-.77-.89-.88-.95-2.11-.81-3.08.14-1 .56-2.12 1.12-3.23 1.13-2.23 3-4.77 5.19-7.01" />
        <path fill="currentColor" d="M8.3 14.02A1.5 1.5 0 0 1 10.4 14a27 27 0 0 0 6.26 4.64 8 8 0 0 0 2.32.83q.39.05.5.02c.01-.1.02-.28-.04-.63a10 10 0 0 0-1.03-2.62 1.5 1.5 0 0 1 2.63-1.43 12 12 0 0 1 1.35 3.51c.19 1.03.18 2.36-.77 3.31-.88.89-2.11.95-3.07.81a11 11 0 0 1-3.24-1.12 30 30 0 0 1-7-5.18 1.5 1.5 0 0 1-.03-2.12" />
        <path fill="currentColor" d="M18.3 1.6c1.03-.2 2.38-.19 3.33.77.89.89.95 2.11.81 3.08a11 11 0 0 1-1.13 3.24c-1.12 2.23-3 4.78-5.2 7.02a1.5 1.5 0 0 1-2.13-2.1 27 27 0 0 0 4.66-6.27q.71-1.47.83-2.32.05-.4.02-.5c-.1-.02-.29-.04-.64.03q-1 .17-2.63 1.05a1.5 1.5 0 0 1-1.44-2.64 12 12 0 0 1 3.53-1.36" />
        <path fill="currentColor" d="M2.37 2.37c.88-.89 2.11-.95 3.08-.81 1 .15 2.12.56 3.23 1.12 2.24 1.13 4.78 3 7.01 5.2A1.5 1.5 0 0 1 13.6 10a27 27 0 0 0-6.26-4.65 8 8 0 0 0-2.32-.83 2 2 0 0 0-.5-.02q-.05.13.04.64.17 1 1.05 2.63a1.5 1.5 0 0 1-2.64 1.43A12 12 0 0 1 1.6 5.7c-.2-1.03-.19-2.37.77-3.32" />
    </IconBase>
  ))
);

AtomAiFill.displayName = 'AtomAiFill';

// Triple export pattern (lucide-react style)
export { AtomAiFill, AtomAiFill as AtomAiFillIcon, AtomAiFill as SiAtomAiFill };
export default AtomAiFill;
export type { AtomAiFillProps };
