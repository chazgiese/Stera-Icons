import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ToyBrickBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ToyBrickBoldDuotone = memo(
  forwardRef<SVGSVGElement, ToyBrickBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="toy-brick-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M18 8a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3zM6 10a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M6.75 6.5a.25.25 0 0 0-.25.25V8H6q-.83.01-1.5.4V6.75c0-1.24 1-2.25 2.25-2.25h2.5c1.24 0 2.25 1 2.25 2.25V8h-2V6.75a.25.25 0 0 0-.25-.25zM14.75 6.5a.25.25 0 0 0-.25.25V8h-2V6.75c0-1.24 1-2.25 2.25-2.25h2.5c1.24 0 2.25 1 2.25 2.25V8.4q-.67-.39-1.5-.4h-.5V6.75a.25.25 0 0 0-.25-.25z" />
    </IconBase>
  ))
);

ToyBrickBoldDuotone.displayName = 'ToyBrickBoldDuotone';

// Triple export pattern (lucide-react style)
export { ToyBrickBoldDuotone, ToyBrickBoldDuotone as ToyBrickBoldDuotoneIcon, ToyBrickBoldDuotone as SiToyBrickBoldDuotone };
export default ToyBrickBoldDuotone;
export type { ToyBrickBoldDuotoneProps };
