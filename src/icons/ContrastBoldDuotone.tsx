import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ContrastBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ContrastBoldDuotone = memo(
  forwardRef<SVGSVGElement, ContrastBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="contrast-bold-duotone" {...props}>
      <path d="M12 4a8 8 0 1 1 0 16z" opacity={.4} />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

ContrastBoldDuotone.displayName = 'ContrastBoldDuotone';

// Triple export pattern (lucide-react style)
export { ContrastBoldDuotone, ContrastBoldDuotone as ContrastBoldDuotoneIcon, ContrastBoldDuotone as SiContrastBoldDuotone };
export default ContrastBoldDuotone;
export type { ContrastBoldDuotoneProps };
