import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ContrastBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ContrastBoldDuotone = memo(
  forwardRef<SVGSVGElement, ContrastBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="contrast-bold-duotone" {...props}>
      <path fill="currentColor" d="M12 3a9 9 0 1 1 0 18z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" />
    </IconBase>
  ))
);

ContrastBoldDuotone.displayName = 'ContrastBoldDuotone';

// Triple export pattern (lucide-react style)
export { ContrastBoldDuotone, ContrastBoldDuotone as ContrastBoldDuotoneIcon, ContrastBoldDuotone as SiContrastBoldDuotone };
export default ContrastBoldDuotone;
export type { ContrastBoldDuotoneProps };
