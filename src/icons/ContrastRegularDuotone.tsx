import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ContrastRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ContrastRegularDuotone = memo(
  forwardRef<SVGSVGElement, ContrastRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="contrast-duotone" {...props}>
      <path fill="currentColor" d="M12 3.75a8.25 8.25 0 0 1 0 16.5z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" />
    </IconBase>
  ))
);

ContrastRegularDuotone.displayName = 'ContrastRegularDuotone';

// Triple export pattern (lucide-react style)
export { ContrastRegularDuotone, ContrastRegularDuotone as ContrastRegularDuotoneIcon, ContrastRegularDuotone as SiContrastRegularDuotone };
export default ContrastRegularDuotone;
export type { ContrastRegularDuotoneProps };
