import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MedalFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MedalFillDuotone = memo(
  forwardRef<SVGSVGElement, MedalFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="medal-fill-duotone" {...props}>
      <path d="M16 1v11.12l2-1V1.02l.2.01c.39.03.78.1 1.16.3a3 3 0 0 1 1.31 1.3c.2.39.27.78.3 1.17q.04.59.03 1.4v2.3q.02.67-.16 1.24a3 3 0 0 1-.7 1.12c-.38.4-.88.63-1.46.92l-4 2a5 5 0 0 0-5.36 0l-4-2c-.58-.29-1.08-.53-1.46-.92a3 3 0 0 1-.7-1.12C3 8.23 3 7.67 3 7.02V5.2q0-.81.03-1.4c.03-.39.1-.78.3-1.16a3 3 0 0 1 1.3-1.31c.39-.2.78-.27 1.17-.3l.2-.01v10.1l2 1V1z" opacity={.4} />
        <path d="m8 12.12-2-1V1.02Q6.52.99 7.2 1H8zM16.8 1q.68 0 1.2.02v10.1l-2 1V1zM17 17a5 5 0 1 1-10 0 5 5 0 0 1 10 0" />
    </IconBase>
  ))
);

MedalFillDuotone.displayName = 'MedalFillDuotone';

// Triple export pattern (lucide-react style)
export { MedalFillDuotone, MedalFillDuotone as MedalFillDuotoneIcon, MedalFillDuotone as SiMedalFillDuotone };
export default MedalFillDuotone;
export type { MedalFillDuotoneProps };
