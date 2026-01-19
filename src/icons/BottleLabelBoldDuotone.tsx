import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BottleLabelBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BottleLabelBoldDuotone = memo(
  forwardRef<SVGSVGElement, BottleLabelBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="bottle-label-bold-duotone" {...props}>
      <path fill="currentColor" d="m14.59 3.08.36 4.73q.03.3.22.55l1.17 1.47A3 3 0 0 1 17 11.7V20a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-8.3a3 3 0 0 1 .66-1.87l1.17-1.47a1 1 0 0 0 .22-.55l.36-4.73.02-.13q.14.05.32.05h1.9c-.12 0-.23.1-.24.23l-.37 4.73a3 3 0 0 1-.64 1.65l-1.18 1.47a1 1 0 0 0-.22.62V20a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-8.3a1 1 0 0 0-.22-.62L13.6 9.6a3 3 0 0 1-.64-1.65l-.37-4.73a.25.25 0 0 0-.25-.23h1.91a1 1 0 0 0 .32-.05z" opacity={.4} />
        <path fill="currentColor" d="M15 19H9v-2h6zM15 14H9v-2h6zM14.25 1a1 1 0 1 1 0 2h-4.5a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

BottleLabelBoldDuotone.displayName = 'BottleLabelBoldDuotone';

// Triple export pattern (lucide-react style)
export { BottleLabelBoldDuotone, BottleLabelBoldDuotone as BottleLabelBoldDuotoneIcon, BottleLabelBoldDuotone as SiBottleLabelBoldDuotone };
export default BottleLabelBoldDuotone;
export type { BottleLabelBoldDuotoneProps };
