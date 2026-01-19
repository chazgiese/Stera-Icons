import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AirplaneBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const AirplaneBoldDuotone = memo(
  forwardRef<SVGSVGElement, AirplaneBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="airplane-bold-duotone" {...props}>
      <path d="M14.2 13.4A1 1 0 0 0 15 15h.51l-4.1 5.74A3 3 0 0 1 8.97 22H7.76a1.5 1.5 0 0 1-1.38-2.1l2.12-4.95 1.47.05a1 1 0 0 0 .96-.63l-.01.02L8.52 20h.45a1 1 0 0 0 .81-.42l4.4-6.16zM10.4 13.08h-.03zM10.4 10.92h-.02zM8.97 2a3 3 0 0 1 2.44 1.26L15.51 9H15a1 1 0 0 0-.8 1.6l-.01-.02-4.4-6.16A1 1 0 0 0 8.96 4h-.45l2.4 5.6v.01a1 1 0 0 0-.95-.6l-1.46.04-2.13-4.96A1.5 1.5 0 0 1 7.76 2z" opacity={0.4} />
        <path fill="currentColor" d="M3.27 6.5c.81 0 1.56.43 1.96 1.14l.84 1.5L9.97 9a1 1 0 0 1 .06 2l-4.5.15a1 1 0 0 1-.9-.5L3.49 8.62a.3.3 0 0 0-.22-.13h-.15l.37 3.39v.07l.01.03v.12l-.38 3.39h.15q.15 0 .22-.13l1.14-2.01a1 1 0 0 1 .9-.5l4.5.14a1 1 0 0 1-.06 2l-3.9-.13-.84 1.49c-.4.7-1.15 1.14-1.96 1.14h-.71a1.5 1.5 0 0 1-1.5-1.66L1.5 12l-.42-3.83A1.5 1.5 0 0 1 2.56 6.5zM18.76 9a4 4 0 0 1 2.83 1.17l1.12 1.13.06.07a1 1 0 0 1-.06 1.34l-1.12 1.12A4 4 0 0 1 18.76 15H15a1 1 0 0 1 0-2h3.76a2 2 0 0 0 1.41-.59l.42-.4-.42-.42a2 2 0 0 0-1.41-.59H15a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

AirplaneBoldDuotone.displayName = 'AirplaneBoldDuotone';

// Triple export pattern (lucide-react style)
export { AirplaneBoldDuotone, AirplaneBoldDuotone as AirplaneBoldDuotoneIcon, AirplaneBoldDuotone as SiAirplaneBoldDuotone };
export type { AirplaneBoldDuotoneProps };
