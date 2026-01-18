import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AtomAiRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AtomAiRegularDuotone = memo(
  forwardRef<SVGSVGElement, AtomAiRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.15 8.1a.75.75 0 0 1 1.04 1.08l-.51.5a28 28 0 0 0-4.94 6.55 9 9 0 0 0-.95 2.61c-.11.72.03 1.06.17 1.2.17.17.64.33 1.63.08.94-.23 2.13-.77 3.44-1.57a.75.75 0 0 1 .78 1.28c-1.37.84-2.7 1.46-3.86 1.75-1.09.27-2.28.3-3.05-.48-.65-.65-.73-1.6-.6-2.48q.24-1.4 1.1-3.07A29 29 0 0 1 9.16 8.1M18.05 2.42c1.09-.27 2.28-.3 3.05.48.65.65.73 1.59.6 2.48q-.24 1.4-1.1 3.07a29 29 0 0 1-5.74 7.45.75.75 0 0 1-1.04-1.09l.5-.49a28 28 0 0 0 4.94-6.56 9 9 0 0 0 .95-2.6c.11-.73-.03-1.06-.17-1.2-.17-.18-.64-.33-1.63-.08-.94.23-2.13.77-3.44 1.57a.75.75 0 0 1-.78-1.28c1.37-.84 2.7-1.46 3.86-1.75" opacity={0.4} />
        <path fill="currentColor" d="M8.13 13.8a.75.75 0 0 1 1.06.03l.49.5a28 28 0 0 0 6.56 4.93 9 9 0 0 0 2.6.95c.73.11 1.06-.03 1.2-.17.17-.17.33-.64.08-1.63-.23-.94-.77-2.13-1.57-3.44a.75.75 0 1 1 1.28-.78c.84 1.37 1.46 2.7 1.75 3.86.27 1.09.3 2.28-.48 3.05-.65.65-1.59.73-2.48.6q-1.4-.24-3.07-1.1a29 29 0 0 1-7.44-5.74.75.75 0 0 1 .02-1.06M2.9 2.9c.65-.65 1.6-.73 2.48-.6.92.15 1.97.54 3.07 1.1a29 29 0 0 1 7.45 5.75.75.75 0 0 1-1.09 1.03l-.49-.5a28 28 0 0 0-6.56-4.94 9 9 0 0 0-2.6-.95c-.72-.11-1.06.03-1.2.17-.17.17-.33.64-.08 1.63.23.95.77 2.14 1.57 3.44a.75.75 0 0 1-1.27.78 15 15 0 0 1-1.76-3.85c-.27-1.1-.3-2.29.48-3.06" />
    </IconBase>
  ))
);

AtomAiRegularDuotone.displayName = 'AtomAiRegularDuotone';

// Triple export pattern (lucide-react style)
export { AtomAiRegularDuotone, AtomAiRegularDuotone as AtomAiRegularDuotoneIcon, AtomAiRegularDuotone as SiAtomAiRegularDuotone };
export type { AtomAiRegularDuotoneProps };
