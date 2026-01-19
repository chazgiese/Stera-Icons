import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AlertCircleBoldProps = Omit<IconBaseProps, 'children'>;

const AlertCircleBold = memo(
  forwardRef<SVGSVGElement, AlertCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="alert-circle-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" />
        <path fill="currentColor" d="M12 15a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 6a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

AlertCircleBold.displayName = 'AlertCircleBold';

// Triple export pattern (lucide-react style)
export { AlertCircleBold, AlertCircleBold as AlertCircleBoldIcon, AlertCircleBold as SiAlertCircleBold };
export type { AlertCircleBoldProps };
