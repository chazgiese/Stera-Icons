import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AirplaneRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AirplaneRegularDuotone = memo(
  forwardRef<SVGSVGElement, AirplaneRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="airplane-duotone" {...props}>
      <path d="M14.17 13.27a.75.75 0 0 0 .53 1.28h.38l-3.73 5.15a2.6 2.6 0 0 1-2.07 1.05h-1.1l-.15-.01a1.2 1.2 0 0 1-.94-1.67l1.98-4.56 1.1.04a.8.8 0 0 0 .72-.45l-2.24 5.15h.63c.34 0 .65-.16.85-.43l3.96-5.46zM9.28 3.25c.82 0 1.59.4 2.07 1.05l3.73 5.15h-.38a.75.75 0 0 0-.6 1.2l-3.97-5.47c-.2-.27-.51-.43-.85-.43h-.63l2.24 5.15.04.12a.75.75 0 0 0-.76-.57l-1.1.04L7.1 4.93a1.2 1.2 0 0 1 1.1-1.68z" opacity={0.4} />
        <path d="M10.95 13.82a.75.75 0 0 1-.78.73l-3.59-.12-.8 1.42c-.34.59-.96.95-1.64.95H3.5a1.2 1.2 0 0 1-1.19-1.33L2.7 12 2.3 8.53a1.2 1.2 0 0 1 1.2-1.33h.63c.68 0 1.3.36 1.64.95l.8 1.42 3.6-.12a.75.75 0 1 1 .04 1.5l-4.05.13a.8.8 0 0 1-.67-.38L4.47 8.9a.4.4 0 0 0-.33-.2h-.3l.36 3.22v.17l-.36 3.22h.3q.22 0 .33-.2l1.03-1.8c.13-.25.4-.4.67-.38l4.05.13c.42.01.74.36.73.77m7.13-.77c.52 0 1.01-.2 1.38-.57l.48-.48-.48-.48a2 2 0 0 0-1.38-.57H14.7a.75.75 0 0 1 0-1.5h3.38c.92 0 1.8.36 2.44 1.01l1.01 1.01.1.11a.75.75 0 0 1-.1.95l-1.01 1.01c-.65.65-1.52 1-2.44 1l-3.38.01a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

AirplaneRegularDuotone.displayName = 'AirplaneRegularDuotone';

// Triple export pattern (lucide-react style)
export { AirplaneRegularDuotone, AirplaneRegularDuotone as AirplaneRegularDuotoneIcon, AirplaneRegularDuotone as SiAirplaneRegularDuotone };
export default AirplaneRegularDuotone;
export type { AirplaneRegularDuotoneProps };
