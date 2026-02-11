import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BottleLabelBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BottleLabelBoldDuotone = memo(
  forwardRef<SVGSVGElement, BottleLabelBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="bottle-label-bold-duotone" {...props}>
      <path d="M15 18H9v-2h6zM15 14H9v-2h6zM14.25 2a1 1 0 1 1 0 2h-4.5a1 1 0 0 1 0-2z" />
        <path d="m14.6 4.05.34 3.76q.04.3.22.53l1.18 1.49A3 3 0 0 1 17 11.7V19a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-7.3a3 3 0 0 1 .66-1.87l1.18-1.49a1 1 0 0 0 .22-.53l.34-3.76.01-.1a1 1 0 0 0 .34.05h1.9q-.23.02-.26.23l-.34 3.76a3 3 0 0 1-.64 1.6l-1.2 1.49a1 1 0 0 0-.21.62V19a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-7.3a1 1 0 0 0-.22-.62L13.6 9.59a3 3 0 0 1-.64-1.6l-.34-3.76a.25.25 0 0 0-.25-.23h1.89a1 1 0 0 0 .34-.06z" opacity={.4} />
    </IconBase>
  ))
);

BottleLabelBoldDuotone.displayName = 'BottleLabelBoldDuotone';

// Triple export pattern (lucide-react style)
export { BottleLabelBoldDuotone, BottleLabelBoldDuotone as BottleLabelBoldDuotoneIcon, BottleLabelBoldDuotone as SiBottleLabelBoldDuotone };
export default BottleLabelBoldDuotone;
export type { BottleLabelBoldDuotoneProps };
