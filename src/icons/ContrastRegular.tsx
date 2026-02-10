import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ContrastRegularProps = Omit<IconBaseProps, 'children'>;

const ContrastRegular = memo(
  forwardRef<SVGSVGElement, ContrastRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="contrast" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ContrastRegular.displayName = 'ContrastRegular';

// Triple export pattern (lucide-react style)
export { ContrastRegular, ContrastRegular as ContrastRegularIcon, ContrastRegular as SiContrastRegular };
export default ContrastRegular;
export type { ContrastRegularProps };
