import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ContrastRegularProps = Omit<IconBaseProps, 'children'>;

const ContrastRegular = memo(
  forwardRef<SVGSVGElement, ContrastRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75z" clipRule="evenodd" />
    </IconBase>
  ))
);

ContrastRegular.displayName = 'ContrastRegular';

// Triple export pattern
export { ContrastRegular, ContrastRegular as ContrastRegularIcon, ContrastRegular as SiContrastRegular };
export default ContrastRegular;
export type { ContrastRegularProps };
