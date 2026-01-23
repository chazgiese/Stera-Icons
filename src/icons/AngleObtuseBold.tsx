import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AngleObtuseBoldProps = Omit<IconBaseProps, 'children'>;

const AngleObtuseBold = memo(
  forwardRef<SVGSVGElement, AngleObtuseBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="angle-obtuse-bold" {...props}>
      <path fill="currentColor" d="M21.33 13.92a1 1 0 0 1 1.23.7v.02a1 1 0 0 1-1.93.52v-.01a1 1 0 0 1 .7-1.23M19.9 11.13a1 1 0 0 1 1.36.36v.01a1 1 0 0 1-1.73 1 1 1 0 0 1 .36-1.37M17.77 8.8a1 1 0 0 1 1.42 0v.01a1 1 0 1 1-1.42 1.4 1 1 0 0 1 0-1.4M15.13 7.1a1 1 0 1 1 .37 1.37 1 1 0 0 1-.37-1.37M3.92 6.5a1 1 0 0 1 .94 1.77 1 1 0 1 1-.94-1.76M12.14 6.15a1 1 0 0 1 1.22-.71h.01a1 1 0 0 1-.52 1.93 1 1 0 0 1-.71-1.22M6.87 5.38a1 1 0 1 1 .48 1.94 1 1 0 0 1-.49-1.94zM10 5a1 1 0 0 1 0 2 1 1 0 0 1 0-2M1.34 8.3a1 1 0 0 1 1.4.09l7.7 8.61H22a1 1 0 0 1 0 2H10a1 1 0 0 1-.75-.33l-8-8.95a1 1 0 0 1 .09-1.41" />
    </IconBase>
  ))
);

AngleObtuseBold.displayName = 'AngleObtuseBold';

// Triple export pattern (lucide-react style)
export { AngleObtuseBold, AngleObtuseBold as AngleObtuseBoldIcon, AngleObtuseBold as SiAngleObtuseBold };
export default AngleObtuseBold;
export type { AngleObtuseBoldProps };
