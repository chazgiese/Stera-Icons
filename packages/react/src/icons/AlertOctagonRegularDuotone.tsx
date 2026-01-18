import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AlertOctagonRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlertOctagonRegularDuotone = memo(
  forwardRef<SVGSVGElement, AlertOctagonRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.62 1.25a2 2 0 0 1 1.42.59l5.12 5.12a2 2 0 0 1 .59 1.42v7.24a2 2 0 0 1-.59 1.42l-5.12 5.12a2 2 0 0 1-1.42.59H8.38a2 2 0 0 1-1.42-.59l-5.12-5.12a2 2 0 0 1-.59-1.42V8.38a2 2 0 0 1 .59-1.42l5.12-5.12a2 2 0 0 1 1.42-.59zm-7.24 1.5a.5.5 0 0 0-.36.15L2.9 8.02a.5.5 0 0 0-.15.36v7.24q0 .21.15.36l5.12 5.12q.15.15.36.15h7.24a.5.5 0 0 0 .36-.15l5.12-5.12a.5.5 0 0 0 .15-.36V8.38a.5.5 0 0 0-.15-.36L15.98 2.9a.5.5 0 0 0-.36-.15z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 15.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 6.25c.41 0 .75.34.75.75v6a.75.75 0 0 1-1.5 0V7c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

AlertOctagonRegularDuotone.displayName = 'AlertOctagonRegularDuotone';

export { AlertOctagonRegularDuotone };
export type { AlertOctagonRegularDuotoneProps };
