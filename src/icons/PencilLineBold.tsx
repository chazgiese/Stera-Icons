import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PencilLineBoldProps = Omit<IconBaseProps, 'children'>;

const PencilLineBold = memo(
  forwardRef<SVGSVGElement, PencilLineBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="pencil-line-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16.4 1.68c.89-.88 2.31-.88 3.2 0l2.72 2.73c.88.88.88 2.3 0 3.18L9.92 20H21a1 1 0 1 1 0 2H3a1 1 0 0 1-.43-.1h-.02a1 1 0 0 1-.4-.36v-.02l-.04-.07-.02-.03A1 1 0 0 1 2 20.9l.5-5 .04-.17a1 1 0 0 1 .25-.44zM4.47 16.45l-.34 3.43 3.42-.34L17.1 10l-3.1-3.09zM18.18 3.1a.25.25 0 0 0-.36 0l-2.4 2.41 3.08 3.09 2.4-2.41c.1-.1.1-.26 0-.36z" clipRule="evenodd" />
    </IconBase>
  ))
);

PencilLineBold.displayName = 'PencilLineBold';

// Triple export pattern (lucide-react style)
export { PencilLineBold, PencilLineBold as PencilLineBoldIcon, PencilLineBold as SiPencilLineBold };
export type { PencilLineBoldProps };
