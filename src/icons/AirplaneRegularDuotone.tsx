import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AirplaneRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AirplaneRegularDuotone = memo(
  forwardRef<SVGSVGElement, AirplaneRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="airplane-duotone" {...props}>
      <path d="M14.38 13.58a.75.75 0 0 0 .62 1.17h.39L11.2 20.6a2.8 2.8 0 0 1-2.24 1.15H7.76c-.9 0-1.5-.92-1.15-1.74l2.27-5.3 1.1.04a.8.8 0 0 0 .71-.45l-2.55 5.95h.83c.4 0 .78-.2 1.02-.52zM8.97 2.25c.89 0 1.72.43 2.24 1.15l4.18 5.85H15a.75.75 0 0 0-.61 1.19l-4.4-6.17a1.3 1.3 0 0 0-1.02-.52h-.83l2.55 5.95.03.11a.75.75 0 0 0-.75-.56l-1.1.04-2.26-5.3a1.25 1.25 0 0 1 1.15-1.74z" opacity={0.4} />
        <path fill="currentColor" d="M3.27 6.75A2 2 0 0 1 5 7.76l.92 1.62 4.04-.13a.75.75 0 0 1 .06 1.5l-4.5.15a.8.8 0 0 1-.68-.38L3.7 8.5a.5.5 0 0 0-.44-.25h-.43l.4 3.67.01.1v.06l-.41 3.67h.43a.5.5 0 0 0 .44-.25l1.14-2.02c.14-.24.4-.39.68-.38l4.5.15a.75.75 0 1 1-.06 1.5l-4.04-.14-.92 1.63a2 2 0 0 1-1.74 1.01h-.71c-.75 0-1.33-.65-1.24-1.39L1.75 12l-.43-3.86c-.09-.74.5-1.39 1.24-1.39zM18.76 9.25c1 0 1.95.4 2.65 1.1l1.12 1.12.1.12a.75.75 0 0 1-.1.94l-1.12 1.12c-.7.7-1.66 1.1-2.65 1.1H15a.75.75 0 0 1 0-1.5h3.76c.6 0 1.17-.24 1.59-.66l.59-.59-.6-.59c-.41-.42-.99-.66-1.58-.66H15a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

AirplaneRegularDuotone.displayName = 'AirplaneRegularDuotone';

// Triple export pattern (lucide-react style)
export { AirplaneRegularDuotone, AirplaneRegularDuotone as AirplaneRegularDuotoneIcon, AirplaneRegularDuotone as SiAirplaneRegularDuotone };
export type { AirplaneRegularDuotoneProps };
