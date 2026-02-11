import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AtomAiRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AtomAiRegularDuotone = memo(
  forwardRef<SVGSVGElement, AtomAiRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="atom-ai-duotone" {...props}>
      <path d="M9.4 8.47a.75.75 0 0 1 1.04 1.09l-.45.43C8.11 11.87 6.54 14 5.62 15.8c-.46.9-.74 1.7-.84 2.3-.1.63.03.9.13.99.12.12.5.27 1.37.05.83-.2 1.88-.68 3.03-1.4a.75.75 0 0 1 .79 1.29c-1.23.75-2.42 1.3-3.45 1.56-.98.25-2.08.28-2.8-.44-.6-.6-.67-1.48-.55-2.28q.21-1.26.99-2.75A26 26 0 0 1 9.4 8.47M17.35 3.4c.98-.24 2.08-.27 2.8.45.6.6.67 1.48.55 2.28a10 10 0 0 1-.99 2.75 26 26 0 0 1-5.11 6.64.75.75 0 0 1-1.04-1.08L14 14a25 25 0 0 0 4.38-5.8c.46-.9.74-1.7.84-2.3.1-.63-.03-.9-.13-.99-.12-.12-.5-.27-1.38-.05-.82.2-1.87.68-3.02 1.4a.75.75 0 0 1-.79-1.29c1.23-.75 2.42-1.3 3.45-1.56" opacity={0.4} />
        <path d="M8.5 13.54a.75.75 0 0 1 1.06.02L10 14a25 25 0 0 0 5.8 4.38c.9.46 1.7.74 2.3.84.63.1.9-.03.99-.13.12-.12.27-.5.05-1.37-.2-.83-.68-1.88-1.39-3.03a.75.75 0 0 1 1.28-.79c.75 1.23 1.3 2.42 1.56 3.45.25.98.28 2.08-.44 2.8-.6.6-1.48.67-2.28.55a10 10 0 0 1-2.75-.99 26 26 0 0 1-6.64-5.1.75.75 0 0 1 .02-1.07M3.85 3.85c.6-.6 1.48-.67 2.28-.55q1.26.21 2.75.99a26 26 0 0 1 6.65 5.11.75.75 0 0 1-1.09 1.04l-.43-.45A25 25 0 0 0 8.2 5.62a8 8 0 0 0-2.3-.84c-.63-.1-.9.03-.99.13-.12.12-.27.5-.05 1.38.2.82.68 1.87 1.4 3.03a.75.75 0 0 1-1.29.78 13 13 0 0 1-1.56-3.45c-.25-.98-.28-2.08.44-2.8" />
    </IconBase>
  ))
);

AtomAiRegularDuotone.displayName = 'AtomAiRegularDuotone';

// Triple export pattern (lucide-react style)
export { AtomAiRegularDuotone, AtomAiRegularDuotone as AtomAiRegularDuotoneIcon, AtomAiRegularDuotone as SiAtomAiRegularDuotone };
export default AtomAiRegularDuotone;
export type { AtomAiRegularDuotoneProps };
