import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PencilTipBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PencilTipBoldDuotone = memo(
  forwardRef<SVGSVGElement, PencilTipBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m4 12.12 2 1V22a1 1 0 0 1-2 0zM20 22a1 1 0 1 1-2 0v-8.88l2-1zM8.02 5.49l.74.62q.4.33.87.57l-3.2 4.12-.16.22-1.79-.9-.05.1a4 4 0 0 1 .41-.65zM19.16 9.57q.24.31.4.65l-.04-.1-1.8.9-.14-.22-3.2-4.12q.45-.24.86-.57l.74-.62z" opacity={0.4} />
        <path fill="currentColor" d="M19.52 10.13a4 4 0 0 1 .48 1.9v.09l-2 1-.66.33a3 3 0 0 1-2.68 0L13 12.62V22a1 1 0 0 1-2 0v-9.38l-1.66.83a3 3 0 0 1-2.68 0L4 12.12v-.09a4 4 0 0 1 .48-1.9l3.07 1.53a1 1 0 0 0 .9 0l2.2-1.1a3 3 0 0 1 2.7 0l2.2 1.1a1 1 0 0 0 .9 0zM12 1c.3 0 .6.14.79.39l3.19 4.1-.74.62a5.1 5.1 0 0 1-6.48 0l-.74-.62 3.2-4.1.07-.09A1 1 0 0 1 12 1" />
    </IconBase>
  ))
);

PencilTipBoldDuotone.displayName = 'PencilTipBoldDuotone';

// Triple export pattern (lucide-react style)
export { PencilTipBoldDuotone, PencilTipBoldDuotone as PencilTipBoldDuotoneIcon, PencilTipBoldDuotone as SiPencilTipBoldDuotone };
export type { PencilTipBoldDuotoneProps };
