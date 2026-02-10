import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DropletBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const DropletBoldDuotone = memo(
  forwardRef<SVGSVGElement, DropletBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="droplet-bold-duotone" {...props}>
      <path d="m12.64 2.23.08.07a22 22 0 0 1 1.06.94c.67.63 1.57 1.53 2.48 2.59s1.83 2.29 2.53 3.6a9 9 0 0 1 1.21 4.2c0 4.58-3.53 8.37-8 8.37v-2c3.27 0 6-2.8 6-6.36 0-1-.36-2.11-.98-3.27a19 19 0 0 0-2.28-3.24A31 31 0 0 0 12 4.33l.35-.32.27-.22.01-.01a1 1 0 0 0 0-1.55M11.61 2.08a1 1 0 0 0-.24.15h-.01a1 1 0 0 1 .25-.15M12.11 2a1 1 0 0 0 0 0" opacity={0.4} />
        <path fill="currentColor" d="M11.37 2.23a1 1 0 0 1 1.26 1.54l-.01.02-.27.22a28 28 0 0 0-3.09 3.12c-.85.99-1.67 2.1-2.28 3.25A7 7 0 0 0 6 13.64C6 17.2 8.73 20 12 20v2c-4.47 0-8-3.8-8-8.36 0-1.46.51-2.9 1.21-4.2.7-1.32 1.63-2.56 2.53-3.61a33 33 0 0 1 3.54-3.53l.08-.07" />
    </IconBase>
  ))
);

DropletBoldDuotone.displayName = 'DropletBoldDuotone';

// Triple export pattern (lucide-react style)
export { DropletBoldDuotone, DropletBoldDuotone as DropletBoldDuotoneIcon, DropletBoldDuotone as SiDropletBoldDuotone };
export default DropletBoldDuotone;
export type { DropletBoldDuotoneProps };
