import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AsteriskAltRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AsteriskAltRegularDuotone = memo(
  forwardRef<SVGSVGElement, AsteriskAltRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="asterisk-alt-duotone" {...props}>
      <path d="m12 12.87.78.48a33 33 0 0 0 .97 6.65c.12.46-.06.9-.4 1.24-.33.33-.83.51-1.35.51s-1.02-.18-1.36-.51a1.3 1.3 0 0 1-.4-1.24q.12-.4.2-.8.66-2.93.78-5.85zM4.68 6.2c.45-.12.92-.05 1.27.28l.6.57a33 33 0 0 0 4.67 3.6l.02.91-.8.44A33 33 0 0 0 4.2 9.52c-.46-.14-.76-.5-.88-.96s-.03-.98.24-1.44c.26-.45.66-.78 1.12-.91M18.05 6.48c.35-.33.82-.4 1.27-.27s.86.46 1.12.91c.27.46.35.98.24 1.44-.12.45-.42.82-.88.96A35 35 0 0 0 13.56 12l-.8-.44q0-.45.02-.91a33 33 0 0 0 5.27-4.17" opacity={0.4} />
        <path d="M12 2.25c.52 0 1.02.18 1.36.51.33.33.5.78.39 1.24l-.2.8q-.75 3.37-.8 6.76a33 33 0 0 0 7.05 2.92c.46.14.76.5.88.96s.03.98-.24 1.44c-.26.45-.67.78-1.12.91s-.92.06-1.27-.27l-.6-.57A33 33 0 0 0 12 12.87a33 33 0 0 0-6.05 4.65c-.35.33-.82.4-1.27.27a2 2 0 0 1-1.12-.91 2 2 0 0 1-.24-1.44c.12-.45.42-.82.88-.96l.78-.23q3.31-1.04 6.26-2.69A33 33 0 0 0 10.25 4c-.12-.46.05-.9.4-1.24.33-.33.83-.51 1.35-.51" />
    </IconBase>
  ))
);

AsteriskAltRegularDuotone.displayName = 'AsteriskAltRegularDuotone';

// Triple export pattern (lucide-react style)
export { AsteriskAltRegularDuotone, AsteriskAltRegularDuotone as AsteriskAltRegularDuotoneIcon, AsteriskAltRegularDuotone as SiAsteriskAltRegularDuotone };
export default AsteriskAltRegularDuotone;
export type { AsteriskAltRegularDuotoneProps };
