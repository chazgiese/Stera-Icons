import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PencilLineRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PencilLineRegularDuotone = memo(
  forwardRef<SVGSVGElement, PencilLineRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="pencil-line-duotone" {...props}>
      <path fill="currentColor" d="M21 20.25a.75.75 0 0 1 0 1.5H3h.07l5-.5q.27-.04.46-.22l.78-.78z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M16.59 1.85a2 2 0 0 1 2.82 0l2.74 2.74a2 2 0 0 1 0 2.82L8.53 21.03a.8.8 0 0 1-.46.22l-5 .5a.75.75 0 0 1-.82-.82l.5-5 .03-.13q.05-.2.19-.33zM4.22 16.34l-.38 3.82 3.82-.38L17.44 10 14 6.56zM18.35 2.91a.5.5 0 0 0-.7 0L15.06 5.5l3.44 3.44 2.59-2.59a.5.5 0 0 0 0-.7z" clipRule="evenodd" />
    </IconBase>
  ))
);

PencilLineRegularDuotone.displayName = 'PencilLineRegularDuotone';

// Triple export pattern (lucide-react style)
export { PencilLineRegularDuotone, PencilLineRegularDuotone as PencilLineRegularDuotoneIcon, PencilLineRegularDuotone as SiPencilLineRegularDuotone };
export default PencilLineRegularDuotone;
export type { PencilLineRegularDuotoneProps };
