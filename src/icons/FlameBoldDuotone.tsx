import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlameBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlameBoldDuotone = memo(
  forwardRef<SVGSVGElement, FlameBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flame-bold-duotone" {...props}>
      <path fill="currentColor" d="m12.09 11.5.06.01h.03l.06.02h.03l.06.03h.03l.05.03.03.02.05.02.03.01.13.1.02.01.03.04.55.52c.35.35.82.85 1.29 1.45.9 1.17 1.96 2.9 1.96 4.74q0 .5-.08.93A7 7 0 0 1 12 21c.55 0 1.2-.19 1.68-.59.45-.37.82-.96.82-1.91 0-1.15-.7-2.43-1.54-3.51a14 14 0 0 0-.96-1.1q-.43.44-.96 1.1c-.85 1.08-1.54 2.36-1.54 3.51 0 .95.37 1.54.82 1.91.49.4 1.13.59 1.68.59a7 7 0 0 1-4.42-1.57q-.08-.44-.08-.93c0-1.85 1.06-3.57 1.96-4.74a16 16 0 0 1 1.84-1.97l.03-.04h.01l.01-.01.13-.1h.03l.01-.02.06-.03.06-.02.03-.01.06-.02.03-.01.06-.01h.02l.07-.02z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="m12 1 .15.01h.03l.12.03.03.02h.01a1 1 0 0 1 .3.16v.01l.02.02.07.06a25 25 0 0 1 1.2 1.06c.77.71 1.8 1.72 2.83 2.91a24 24 0 0 1 2.87 4.05C20.42 10.79 21 12.39 21 14a9 9 0 1 1-18 0c0-1.6.58-3.21 1.37-4.67.8-1.47 1.85-2.86 2.87-4.05a38 38 0 0 1 4.03-3.97l.07-.06.02-.02.15-.1h.01l.14-.07h.02l.12-.04h.05zm-.57 2.83c-.73.68-1.7 1.64-2.67 2.76a22 22 0 0 0-2.63 3.7A8 8 0 0 0 5 14a7 7 0 1 0 14 0c0-1.14-.42-2.41-1.13-3.72-.7-1.3-1.65-2.56-2.63-3.69A36 36 0 0 0 12 3.32z" clipRule="evenodd" />
    </IconBase>
  ))
);

FlameBoldDuotone.displayName = 'FlameBoldDuotone';

// Triple export pattern (lucide-react style)
export { FlameBoldDuotone, FlameBoldDuotone as FlameBoldDuotoneIcon, FlameBoldDuotone as SiFlameBoldDuotone };
export default FlameBoldDuotone;
export type { FlameBoldDuotoneProps };
