import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlertOctagonRegularProps = Omit<IconBaseProps, 'children'>;

const AlertOctagonRegular = memo(
  forwardRef<SVGSVGElement, AlertOctagonRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="alert-octagon" {...props}>
      <path d="M12 14.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 6.75c.41 0 .75.34.75.75v5a.75.75 0 0 1-1.5 0v-5c0-.41.34-.75.75-.75" />
        <path fillRule="evenodd" d="M15.21 2.25a2 2 0 0 1 1.41.59l4.54 4.54a2 2 0 0 1 .59 1.41v6.42a2 2 0 0 1-.59 1.41l-4.54 4.54a2 2 0 0 1-1.41.59H8.79a2 2 0 0 1-1.41-.59l-4.54-4.54a2 2 0 0 1-.59-1.41V8.79a2 2 0 0 1 .59-1.41l4.54-4.54a2 2 0 0 1 1.41-.59zm-6.42 1.5a.5.5 0 0 0-.35.15L3.9 8.44a.5.5 0 0 0-.15.35v6.42q0 .2.15.35l4.54 4.54q.15.15.35.15h6.42a.5.5 0 0 0 .35-.15l4.54-4.54a.5.5 0 0 0 .15-.35V8.79a.5.5 0 0 0-.15-.35L15.56 3.9a.5.5 0 0 0-.35-.15z" clipRule="evenodd" />
    </IconBase>
  ))
);

AlertOctagonRegular.displayName = 'AlertOctagonRegular';

// Triple export pattern (lucide-react style)
export { AlertOctagonRegular, AlertOctagonRegular as AlertOctagonRegularIcon, AlertOctagonRegular as SiAlertOctagonRegular };
export default AlertOctagonRegular;
export type { AlertOctagonRegularProps };
