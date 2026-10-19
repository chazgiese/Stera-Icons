import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ContrastRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ContrastRegularDuotone = memo(
  forwardRef<SVGSVGElement, ContrastRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" />
        <path d="M12 3.25c4.83 0 8.75 3.92 8.75 8.75s-3.92 8.75-8.75 8.75z" opacity={.4} />
    </IconBase>
  ))
);

ContrastRegularDuotone.displayName = 'ContrastRegularDuotone';

// Triple export pattern
export { ContrastRegularDuotone, ContrastRegularDuotone as ContrastRegularDuotoneIcon, ContrastRegularDuotone as SiContrastRegularDuotone };
export default ContrastRegularDuotone;
export type { ContrastRegularDuotoneProps };
