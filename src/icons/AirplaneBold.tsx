import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AirplaneBoldProps = Omit<IconBaseProps, 'children'>;

const AirplaneBold = memo(
  forwardRef<SVGSVGElement, AirplaneBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="airplane-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M8.97 2a3 3 0 0 1 2.44 1.26L15.51 9h3.25a4 4 0 0 1 2.83 1.17l1.12 1.12a1 1 0 0 1 0 1.42l-1.12 1.12A4 4 0 0 1 18.76 15h-3.24l-4.1 5.74A3 3 0 0 1 8.96 22H7.76a1.5 1.5 0 0 1-1.38-2.1l2.13-4.95-2.44-.08-.84 1.49c-.4.7-1.15 1.14-1.96 1.14h-.71a1.5 1.5 0 0 1-1.5-1.66L1.5 12l-.42-3.83A1.5 1.5 0 0 1 2.56 6.5h.7c.82 0 1.57.43 1.97 1.14l.84 1.49 2.44-.08-2.13-4.96A1.5 1.5 0 0 1 7.76 2zm1.95 7.6.04.12a1 1 0 0 1-.93 1.28l-4.5.15a1 1 0 0 1-.9-.5L3.49 8.61a.3.3 0 0 0-.22-.12h-.15l.37 3.39v.07l.01.03v.12l-.38 3.39h.15q.15 0 .22-.13l1.14-2.01a1 1 0 0 1 .9-.5l4.5.14.13.01a1 1 0 0 1 .76 1.38L8.52 20h.45a1 1 0 0 0 .81-.42l4.4-6.16A1 1 0 0 1 15 13h3.76a2 2 0 0 0 1.41-.59l.42-.4-.42-.42a2 2 0 0 0-1.41-.59H15a1 1 0 0 1-.81-.42l-4.4-6.16A1 1 0 0 0 8.96 4h-.45z" clipRule="evenodd" />
    </IconBase>
  ))
);

AirplaneBold.displayName = 'AirplaneBold';

// Triple export pattern (lucide-react style)
export { AirplaneBold, AirplaneBold as AirplaneBoldIcon, AirplaneBold as SiAirplaneBold };
export default AirplaneBold;
export type { AirplaneBoldProps };
