import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MedalStarFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MedalStarFillDuotone = memo(
  forwardRef<SVGSVGElement, MedalStarFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="medal-star-fill-duotone" {...props}>
      <path fill="currentColor" d="M16.8 1q.81 0 1.4.03c.39.03.78.1 1.16.3a3 3 0 0 1 1.31 1.3c.2.39.27.78.3 1.17q.04.59.03 1.4v1.82c0 .65.01 1.2-.16 1.72a3 3 0 0 1-.7 1.12c-.38.4-.88.63-1.46.92l-4.8 2.4c-.48.24-.88.45-1.33.53a3 3 0 0 1-1.1 0c-.45-.08-.86-.3-1.33-.53l-4.8-2.4c-.58-.29-1.08-.53-1.46-.92a3 3 0 0 1-.7-1.12C3 8.23 3 7.67 3 7.02V5.2q0-.81.03-1.4c.03-.4.1-.78.3-1.16a3 3 0 0 1 1.3-1.31c.39-.2.78-.27 1.17-.3Q6.4.99 7.2 1z" opacity={.4} />
        <path fill="currentColor" d="M11.06 9.76a1.1 1.1 0 0 1 1.88 0l.08.16 1.43 3.31 3.6.34a1.1 1.1 0 0 1 .64 1.93l-2.72 2.38.8 3.52a1.1 1.1 0 0 1-1.65 1.2L12 20.74 8.88 22.6a1.1 1.1 0 0 1-1.64-1.2l.8-3.51L5.3 15.5a1.1 1.1 0 0 1 .63-1.93l3.61-.34 1.43-3.31z" />
        <path fill="currentColor" d="m8 12.12-2-1V1.02Q6.52.99 7.2 1H8zM16.8 1q.68 0 1.2.02v10.1l-2 1V1z" />
    </IconBase>
  ))
);

MedalStarFillDuotone.displayName = 'MedalStarFillDuotone';

// Triple export pattern (lucide-react style)
export { MedalStarFillDuotone, MedalStarFillDuotone as MedalStarFillDuotoneIcon, MedalStarFillDuotone as SiMedalStarFillDuotone };
export default MedalStarFillDuotone;
export type { MedalStarFillDuotoneProps };
