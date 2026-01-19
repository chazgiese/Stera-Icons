import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlameBoldProps = Omit<IconBaseProps, 'children'>;

const FlameBold = memo(
  forwardRef<SVGSVGElement, FlameBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="flame-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="m12 1 .15.01h.03l.12.03.03.02h.01a1 1 0 0 1 .3.16v.01l.02.02.07.06a25 25 0 0 1 1.2 1.06c.77.71 1.8 1.72 2.83 2.91a24 24 0 0 1 2.87 4.05C20.42 10.79 21 12.39 21 14a9 9 0 0 1-18 0c0-1.6.58-3.21 1.37-4.67.8-1.47 1.85-2.86 2.87-4.05a38 38 0 0 1 4.03-3.97l.07-.06.02-.02.15-.1h.01l.14-.07h.02l.12-.04h.05zm0 12.89q-.43.44-.96 1.1c-.84 1.08-1.54 2.36-1.54 3.51 0 .95.37 1.54.82 1.91.49.4 1.13.59 1.68.59s1.2-.19 1.68-.59c.45-.37.82-.96.82-1.91 0-1.15-.7-2.43-1.54-3.51a14 14 0 0 0-.96-1.1m-.57-10.06c-.73.68-1.7 1.64-2.67 2.76a22 22 0 0 0-2.63 3.7A8 8 0 0 0 5 14c0 2.2 1 4.15 2.58 5.43q-.08-.44-.08-.93c0-1.85 1.06-3.57 1.96-4.74a16 16 0 0 1 1.71-1.86l.13-.11.03-.04h.01l.02-.02.02-.01.05-.04.04-.03.18-.09h.02l.06-.02.04-.01.05-.01h.03a1 1 0 0 1 .39 0l.03.02.07.02a1 1 0 0 1 .3.18h.01l.02.01.03.04.13.1a14 14 0 0 1 1.7 1.87c.91 1.17 1.97 2.9 1.97 4.74q0 .5-.08.93A7 7 0 0 0 19 14c0-1.14-.42-2.41-1.13-3.72-.7-1.3-1.65-2.56-2.63-3.69A36 36 0 0 0 12 3.32z" clipRule="evenodd" />
    </IconBase>
  ))
);

FlameBold.displayName = 'FlameBold';

// Triple export pattern (lucide-react style)
export { FlameBold, FlameBold as FlameBoldIcon, FlameBold as SiFlameBold };
export type { FlameBoldProps };
