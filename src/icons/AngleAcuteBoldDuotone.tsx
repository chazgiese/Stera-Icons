import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AngleAcuteBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const AngleAcuteBoldDuotone = memo(
  forwardRef<SVGSVGElement, AngleAcuteBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="angle-acute-bold-duotone" {...props}>
      <path d="M19.59 15.16a1 1 0 0 1 1.15.81v.01a1 1 0 0 1-1.96.35v-.01a1 1 0 0 1 .8-1.16M18.7 12.51a1 1 0 1 1-.6 1.29 1 1 0 0 1 .6-1.29M17.36 10.06a1 1 0 0 1 1.36.36v.01a1 1 0 0 1-1.72 1 1 1 0 0 1 .36-1.37M15.61 7.88a1 1 0 0 1 1.41.12l.07.09a1 1 0 0 1-1.6 1.2 1 1 0 0 1 .12-1.41M13.51 6.03a1 1 0 0 1 1.33-.19l.1.07a1 1 0 0 1-1.3 1.53 1 1 0 0 1-.13-1.41" opacity={0.4} />
        <path d="M11.13 4.57a1 1 0 0 1 1.74 1L5.73 17.93H20a1 1 0 1 1 0 2H4a1 1 0 0 1-.87-1.5z" />
    </IconBase>
  ))
);

AngleAcuteBoldDuotone.displayName = 'AngleAcuteBoldDuotone';

// Triple export pattern (lucide-react style)
export { AngleAcuteBoldDuotone, AngleAcuteBoldDuotone as AngleAcuteBoldDuotoneIcon, AngleAcuteBoldDuotone as SiAngleAcuteBoldDuotone };
export default AngleAcuteBoldDuotone;
export type { AngleAcuteBoldDuotoneProps };
