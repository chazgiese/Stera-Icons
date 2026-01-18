import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PencilBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PencilBoldDuotone = memo(
  forwardRef<SVGSVGElement, PencilBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16.4 1.68c.89-.88 2.31-.88 3.2 0l2.72 2.73c.88.88.88 2.3 0 3.18l-3.82 3.82-5.91-5.91zm1.78 1.41a.25.25 0 0 0-.36 0l-2.4 2.41 3.08 3.09 2.4-2.41c.1-.1.1-.26 0-.36z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="m12.59 5.5 1.4 1.41-9.53 9.54-.34 3.43 3.42-.34L17.08 10l1.42 1.41-9.8 9.8a1 1 0 0 1-.6.28l-5 .5A1 1 0 0 1 2 20.9l.5-5 .04-.16a1 1 0 0 1 .25-.44z" />
    </IconBase>
  ))
);

PencilBoldDuotone.displayName = 'PencilBoldDuotone';

// Triple export pattern (lucide-react style)
export { PencilBoldDuotone, PencilBoldDuotone as PencilBoldDuotoneIcon, PencilBoldDuotone as SiPencilBoldDuotone };
export type { PencilBoldDuotoneProps };
