import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AngleAcuteFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AngleAcuteFillDuotone = memo(
  forwardRef<SVGSVGElement, AngleAcuteFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="angle-acute-fill-duotone" {...props}>
      <path d="M19.07 13.33a1.5 1.5 0 0 1 1.84 1.06v.02a1.5 1.5 0 0 1-2.9.77v-.01a1.5 1.5 0 0 1 1.06-1.84M17.1 9.63a1.5 1.5 0 0 1 2.05.54l.01.01a1.5 1.5 0 0 1-2.6 1.5 1.5 1.5 0 0 1 .54-2.05M14.25 6.55a1.5 1.5 0 1 1 0 2.13 1.5 1.5 0 0 1 0-2.13" opacity={0.4} />
        <path d="M10.7 4.32a1.5 1.5 0 0 1 2.6 1.5L6.6 17.43H20a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 0 1-1.3-2.25z" />
    </IconBase>
  ))
);

AngleAcuteFillDuotone.displayName = 'AngleAcuteFillDuotone';

// Triple export pattern (lucide-react style)
export { AngleAcuteFillDuotone, AngleAcuteFillDuotone as AngleAcuteFillDuotoneIcon, AngleAcuteFillDuotone as SiAngleAcuteFillDuotone };
export default AngleAcuteFillDuotone;
export type { AngleAcuteFillDuotoneProps };
