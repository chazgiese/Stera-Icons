import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AngleObtuseBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const AngleObtuseBoldDuotone = memo(
  forwardRef<SVGSVGElement, AngleObtuseBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="angle-obtuse-bold-duotone" {...props}>
      <path d="M21.33 13.92a1 1 0 0 1 1.23.7v.02a1 1 0 0 1-1.93.52v-.01a1 1 0 0 1 .7-1.23M19.9 11.13a1 1 0 0 1 1.36.36v.01a1 1 0 0 1-1.73 1 1 1 0 0 1 .36-1.37M17.77 8.8a1 1 0 0 1 1.42 0v.01a1 1 0 0 1-1.4 1.42l-.02-.01a1 1 0 0 1 0-1.42M15.13 7.1a1 1 0 1 1 .37 1.37 1 1 0 0 1-.37-1.37M3.92 6.5a1 1 0 0 1 .94 1.77 1 1 0 1 1-.94-1.76M12.14 6.15a1 1 0 0 1 1.22-.71h.01a1 1 0 0 1-.52 1.93 1 1 0 0 1-.71-1.22M6.87 5.38a1 1 0 1 1 .48 1.94 1 1 0 0 1-.49-1.94zM10 5a1 1 0 0 1 0 2 1 1 0 0 1 0-2" opacity={0.4} />
        <path fill="currentColor" d="M1.34 8.3a1 1 0 0 1 1.4.09l7.7 8.61H22a1 1 0 0 1 0 2H10a1 1 0 0 1-.75-.33l-8-8.95a1 1 0 0 1 .09-1.41" />
    </IconBase>
  ))
);

AngleObtuseBoldDuotone.displayName = 'AngleObtuseBoldDuotone';

// Triple export pattern (lucide-react style)
export { AngleObtuseBoldDuotone, AngleObtuseBoldDuotone as AngleObtuseBoldDuotoneIcon, AngleObtuseBoldDuotone as SiAngleObtuseBoldDuotone };
export default AngleObtuseBoldDuotone;
export type { AngleObtuseBoldDuotoneProps };
