import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlameBoldProps = Omit<IconBaseProps, 'children'>;

const FlameBold = memo(
  forwardRef<SVGSVGElement, FlameBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="flame-bold" {...props}>
      <path fillRule="evenodd" d="M12 2a1 1 0 0 1 .33.06l.15.06.05.03.06.04.04.04h.01l.08.07a22 22 0 0 1 1.06.94c.67.63 1.57 1.53 2.48 2.59s1.83 2.29 2.53 3.6a9 9 0 0 1 1.21 4.2c0 4.58-3.53 8.37-8 8.37s-8-3.8-8-8.36c0-1.46.51-2.9 1.21-4.2.7-1.32 1.63-2.56 2.53-3.61a33 33 0 0 1 3.54-3.53l.08-.07.1-.08.06-.03.14-.06h.01A1 1 0 0 1 12 2m0 10.89q-.43.44-.96 1.1c-.85 1.08-1.54 2.36-1.54 3.51 0 .95.37 1.54.82 1.91.49.4 1.13.59 1.68.59s1.2-.19 1.68-.59c.45-.37.82-.96.82-1.91 0-1.15-.7-2.43-1.54-3.51q-.53-.66-.96-1.1m-.41-8.19c-.64.6-1.49 1.44-2.33 2.43s-1.67 2.1-2.28 3.25A7 7 0 0 0 6 13.64c0 1.63.58 3.1 1.51 4.22l-.01-.36c0-1.85 1.06-3.57 1.96-4.74a16 16 0 0 1 1.71-1.86l.13-.11.03-.04h.01l.01-.01.13-.1h.03l.01-.02.06-.03.07-.03h.01l.07-.02.03-.01.06-.01h.02l.25-.02.06.01h.03l.06.02h.03l.07.03.08.03.01.01.06.03.03.01.13.1.02.01.03.04.13.1a14 14 0 0 1 1.7 1.87c.91 1.17 1.97 2.9 1.97 4.74l-.01.36A6.5 6.5 0 0 0 18 13.64c0-1-.36-2.11-.98-3.27a19 19 0 0 0-2.28-3.24A31 31 0 0 0 12 4.33z" clipRule="evenodd" />
    </IconBase>
  ))
);

FlameBold.displayName = 'FlameBold';

// Triple export pattern (lucide-react style)
export { FlameBold, FlameBold as FlameBoldIcon, FlameBold as SiFlameBold };
export default FlameBold;
export type { FlameBoldProps };
