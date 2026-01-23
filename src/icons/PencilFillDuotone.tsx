import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PencilFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PencilFillDuotone = memo(
  forwardRef<SVGSVGElement, PencilFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="pencil-fill-duotone" {...props}>
      <path fill="currentColor" d="m18.32 10.88-9.97 9.97a.5.5 0 0 1-.3.15l-5 .5a.5.5 0 0 1-.55-.55l.5-5 .02-.08a1 1 0 0 1 .13-.22l9.96-9.97z" />
        <path fill="currentColor" d="M16.76 2.03c.69-.68 1.8-.68 2.48 0l2.73 2.73c.68.69.68 1.8 0 2.48l-2.59 2.58-5.2-5.2z" opacity={.4} />
    </IconBase>
  ))
);

PencilFillDuotone.displayName = 'PencilFillDuotone';

// Triple export pattern (lucide-react style)
export { PencilFillDuotone, PencilFillDuotone as PencilFillDuotoneIcon, PencilFillDuotone as SiPencilFillDuotone };
export default PencilFillDuotone;
export type { PencilFillDuotoneProps };
