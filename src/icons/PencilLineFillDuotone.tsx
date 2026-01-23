import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PencilLineFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PencilLineFillDuotone = memo(
  forwardRef<SVGSVGElement, PencilLineFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="pencil-line-fill-duotone" {...props}>
      <path d="M21 19.5a1 1 0 0 1 0 2H2.95h.1l5-.5a.5.5 0 0 0 .3-.15l1.36-1.35zM2.5 21.04v-.08z" opacity={0.4} />
        <path fill="currentColor" d="m18.32 10.88-9.97 9.97a.5.5 0 0 1-.3.15l-5 .5a.5.5 0 0 1-.55-.55l.5-5 .02-.08a1 1 0 0 1 .13-.22l9.96-9.97zM16.76 2.03c.69-.68 1.8-.68 2.48 0l2.73 2.73c.68.69.68 1.8 0 2.48l-2.59 2.58-5.2-5.2z" />
    </IconBase>
  ))
);

PencilLineFillDuotone.displayName = 'PencilLineFillDuotone';

// Triple export pattern (lucide-react style)
export { PencilLineFillDuotone, PencilLineFillDuotone as PencilLineFillDuotoneIcon, PencilLineFillDuotone as SiPencilLineFillDuotone };
export default PencilLineFillDuotone;
export type { PencilLineFillDuotoneProps };
