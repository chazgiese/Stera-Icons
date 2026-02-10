import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DropletBoldProps = Omit<IconBaseProps, 'children'>;

const DropletBold = memo(
  forwardRef<SVGSVGElement, DropletBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="droplet-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a1 1 0 0 1 .33.06l.15.06.05.03.06.04.04.04h.01l.08.07a22 22 0 0 1 1.06.94c.67.63 1.57 1.53 2.48 2.59s1.83 2.29 2.53 3.6a9 9 0 0 1 1.21 4.2c0 4.58-3.53 8.37-8 8.37s-8-3.8-8-8.36c0-1.46.51-2.9 1.21-4.2.7-1.32 1.63-2.56 2.53-3.61a33 33 0 0 1 3.54-3.53l.08-.07.1-.08.06-.03.14-.06h.01A1 1 0 0 1 12 2m-.41 2.7c-.64.6-1.49 1.44-2.33 2.43s-1.67 2.1-2.28 3.25A7 7 0 0 0 6 13.64C6 17.2 8.73 20 12 20s6-2.8 6-6.36c0-1-.36-2.11-.98-3.27a19 19 0 0 0-2.28-3.24A31 31 0 0 0 12 4.33z" clipRule="evenodd" />
    </IconBase>
  ))
);

DropletBold.displayName = 'DropletBold';

// Triple export pattern (lucide-react style)
export { DropletBold, DropletBold as DropletBoldIcon, DropletBold as SiDropletBold };
export default DropletBold;
export type { DropletBoldProps };
