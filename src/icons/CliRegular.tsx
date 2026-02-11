import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CliRegularProps = Omit<IconBaseProps, 'children'>;

const CliRegular = memo(
  forwardRef<SVGSVGElement, CliRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="cli" {...props}>
      <path d="M20 17.75a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1 0-1.5zM3.47 4.97c.3-.3.77-.3 1.06 0l6 6c.3.3.3.77 0 1.06l-6 6a.75.75 0 0 1-1.06-1.06l5.47-5.47-5.47-5.47a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

CliRegular.displayName = 'CliRegular';

// Triple export pattern (lucide-react style)
export { CliRegular, CliRegular as CliRegularIcon, CliRegular as SiCliRegular };
export default CliRegular;
export type { CliRegularProps };
