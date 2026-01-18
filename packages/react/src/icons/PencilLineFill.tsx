import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PencilLineFillProps = Omit<IconBaseProps, 'children'>;

const PencilLineFill = memo(
  forwardRef<SVGSVGElement, PencilLineFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M18.32 10.88 9.71 19.5H21a1 1 0 0 1 0 2H2.92l-.07-.03h-.02l-.08-.04-.02-.01a.5.5 0 0 1-.23-.37v-.09999999999999999l.5-5 .02-.08a1 1 0 0 1 .13-.22l9.97-9.97zM16.76 2.03c.69-.68 1.8-.68 2.48 0l2.73 2.73c.68.69.68 1.8 0 2.48l-2.59 2.58-5.2-5.2z" />
    </IconBase>
  ))
);

PencilLineFill.displayName = 'PencilLineFill';

export { PencilLineFill };
export type { PencilLineFillProps };
