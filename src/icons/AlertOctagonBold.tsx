import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlertOctagonBoldProps = Omit<IconBaseProps, 'children'>;

const AlertOctagonBold = memo(
  forwardRef<SVGSVGElement, AlertOctagonBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="alert-octagon-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.62 1c.6 0 1.17.24 1.6.66l5.12 5.12c.42.43.66 1 .66 1.6v7.24c0 .6-.24 1.17-.66 1.6l-5.12 5.12c-.43.42-1 .66-1.6.66H8.38c-.6 0-1.17-.24-1.6-.66l-5.12-5.12c-.42-.43-.66-1-.66-1.6V8.38c0-.6.24-1.17.66-1.6l5.12-5.12c.43-.42 1-.66 1.6-.66zM8.38 3a.3.3 0 0 0-.18.07L3.07 8.2a.3.3 0 0 0-.07.18v7.24q0 .1.07.18l5.13 5.13q.07.06.18.07h7.24q.1 0 .18-.07l5.13-5.13a.3.3 0 0 0 .07-.18V8.38a.3.3 0 0 0-.07-.18L15.8 3.07a.3.3 0 0 0-.18-.07z" clipRule="evenodd" />
        <path fill="currentColor" d="M12 15a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 6a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

AlertOctagonBold.displayName = 'AlertOctagonBold';

// Triple export pattern (lucide-react style)
export { AlertOctagonBold, AlertOctagonBold as AlertOctagonBoldIcon, AlertOctagonBold as SiAlertOctagonBold };
export default AlertOctagonBold;
export type { AlertOctagonBoldProps };
