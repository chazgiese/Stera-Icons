import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlertOctagonBoldProps = Omit<IconBaseProps, 'children'>;

const AlertOctagonBold = memo(
  forwardRef<SVGSVGElement, AlertOctagonBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="alert-octagon-bold" {...props}>
      <path fill="currentColor" d="M12 14.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 6.5a1 1 0 0 1 1 1V12a1 1 0 1 1-2 0V7.5a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M15.21 2c.6 0 1.17.24 1.6.66l4.53 4.54c.42.42.66 1 .66 1.59v6.42c0 .6-.24 1.17-.66 1.6l-4.54 4.53c-.42.42-1 .66-1.59.66H8.79c-.6 0-1.17-.24-1.6-.66L2.67 16.8c-.42-.42-.66-1-.66-1.59V8.79c0-.6.24-1.17.66-1.6L7.2 2.67c.42-.42 1-.66 1.59-.66zM8.79 4a.3.3 0 0 0-.18.07L4.07 8.61A.3.3 0 0 0 4 8.8v6.42q0 .1.07.18l4.54 4.54q.07.06.18.07h6.42q.1 0 .18-.07l4.54-4.54a.3.3 0 0 0 .07-.18V8.79a.3.3 0 0 0-.07-.18l-4.54-4.54A.3.3 0 0 0 15.2 4z" clipRule="evenodd" />
    </IconBase>
  ))
);

AlertOctagonBold.displayName = 'AlertOctagonBold';

// Triple export pattern (lucide-react style)
export { AlertOctagonBold, AlertOctagonBold as AlertOctagonBoldIcon, AlertOctagonBold as SiAlertOctagonBold };
export default AlertOctagonBold;
export type { AlertOctagonBoldProps };
