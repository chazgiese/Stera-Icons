import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PencilFillProps = Omit<IconBaseProps, 'children'>;

const PencilFill = memo(
  forwardRef<SVGSVGElement, PencilFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="m18.32 10.88-9.97 9.97a.5.5 0 0 1-.3.15l-5 .5a.5.5 0 0 1-.55-.55l.5-5 .02-.08a1 1 0 0 1 .13-.22l9.97-9.97zM16.76 2.03c.69-.68 1.8-.68 2.48 0l2.73 2.73c.68.69.68 1.8 0 2.48l-2.59 2.58-5.2-5.2z" />
    </IconBase>
  ))
);

PencilFill.displayName = 'PencilFill';

// Triple export pattern (lucide-react style)
export { PencilFill, PencilFill as PencilFillIcon, PencilFill as SiPencilFill };
export type { PencilFillProps };
