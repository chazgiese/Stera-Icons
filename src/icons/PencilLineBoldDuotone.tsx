import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PencilLineBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PencilLineBoldDuotone = memo(
  forwardRef<SVGSVGElement, PencilLineBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="pencil-line-bold-duotone" {...props}>
      <path d="M2.22 21.62a1 1 0 0 0 .88.37l5-.5a1 1 0 0 0 .6-.28L9.92 20H21a1 1 0 1 1 0 2H3a1 1 0 0 1-.78-.38M2 21.12" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M16.4 1.68c.89-.88 2.31-.88 3.2 0l2.72 2.73c.88.88.88 2.3 0 3.18L8.71 21.21a1 1 0 0 1-.61.28l-5 .5A1 1 0 0 1 2 20.9l.5-5 .04-.17a1 1 0 0 1 .25-.44zM4.47 16.45l-.34 3.43 3.42-.34L17.08 10 14 6.9zM18.18 3.1a.25.25 0 0 0-.36 0l-2.4 2.41 3.08 3.09 2.4-2.41c.1-.1.1-.26 0-.36z" clipRule="evenodd" />
    </IconBase>
  ))
);

PencilLineBoldDuotone.displayName = 'PencilLineBoldDuotone';

// Triple export pattern (lucide-react style)
export { PencilLineBoldDuotone, PencilLineBoldDuotone as PencilLineBoldDuotoneIcon, PencilLineBoldDuotone as SiPencilLineBoldDuotone };
export type { PencilLineBoldDuotoneProps };
