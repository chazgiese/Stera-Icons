import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TogglesBoldProps = Omit<IconBaseProps, 'children'>;

const TogglesBold = memo(
  forwardRef<SVGSVGElement, TogglesBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="toggles-bold" {...props}>
      <path fillRule="evenodd" d="M16 12.75a5 5 0 0 1 0 10H8a5 5 0 0 1 0-10zm0 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clipRule="evenodd" />
        <path d="M8 4.25a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
        <path fillRule="evenodd" d="M16 1.25a5 5 0 0 1 0 10H8a5 5 0 0 1 0-10zm-8 2a3 3 0 0 0 0 6h8a3 3 0 1 0 0-6z" clipRule="evenodd" />
    </IconBase>
  ))
);

TogglesBold.displayName = 'TogglesBold';

// Triple export pattern (lucide-react style)
export { TogglesBold, TogglesBold as TogglesBoldIcon, TogglesBold as SiTogglesBold };
export default TogglesBold;
export type { TogglesBoldProps };
